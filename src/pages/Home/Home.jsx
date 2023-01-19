import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ListContext from '../../store/list-context';

import useProjectData from '../../../src/Hooks/use-project-data';


const Home = () => {
    const navigate = useNavigate();
    const context = useContext(ListContext);
    
    useProjectData({url:'http://localhost:3010/courses', type:'courses'})
    useProjectData({url:'http://localhost:3010/teachers', type: 'teachers'})

    return ( 
        <>
            <div className='home'>
                <div className='aboutWrapper'>
                    <h1 className='homeRubriker home__heading'>Welcome to Westcoast Education</h1>
                    <p className='aboutHome'>Every Bobcat knows this simple truth: the experiences you have at Westcoast Education will stay with you for life. This community will champion your ambition, equipping you for your career and beyond, actively supporting you every step of the way, forever.</p>
                </div>

                <div className="coursesHome">
                    <h2 className='homeRubriker homeTitle coursesTitle'>Our courses that are available at the moment</h2>
                        {context.courses && (
                            <ul className='home__list courseListHome'>
                                {context.courses.map((course) => {
                                    return (
                                    <li key={course.id} onClick={() => navigate(`/courses/${course.id}`)} className='courseListHomePage'>
                                        {course.courseName}
                                    </li>
                                    )
                                })}
                            </ul>
                        )}
                </div>
                    <div className='teachersListHomePage'>
                        <h2 className='homeRubriker homeTitle teacherListTitle'>Teachers that are passionate about their subjects</h2>
                        {context.teachers && (
                            <ul className='homeListTeachers'>
                                {context.teachers.map((teacher) => {
                                    return (
                                    <li key={teacher.id} onClick={() => navigate(`/teachers/${teacher.id}`)} className='teacherListHomePage'>
                                        {teacher.firstName} {teacher.lastName}
                                    </li>
                                    )
                                })}
                            </ul>
                        )}
                    </div>
            </div>
        </>
     );
}
 
export default Home;