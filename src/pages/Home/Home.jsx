import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ListContext from '../../store/list-context';

import useProjectData from '../../../src/Hooks/use-project-data';
//import useFetchData from '../../hooks/use-fetch-data'


const Home = () => {
    const navigate = useNavigate();
    const context = useContext(ListContext);

    console.log("navigate:",navigate); //consolar f(to, options){...if}
    
    useProjectData({url:'http://localhost:3010/courses', type:'courses'})

    //////////////
    useProjectData({url:'http://localhost:3010/teachers', type: 'teachers'})
    /////////////////


    console.log("fetchData consolar:",useProjectData); //consolar config=>{_s();...}
    console.log("Context" , context); //consolar {teacher: Array(0), courses: Array(10)...}

    return ( 
        <>
            <div className='home'>
                <h1 className='homeRubriker home__heading'>Welcome to Westcoast Education</h1>
                <p className='aboutHome'>Every Bobcat knows this simple truth: the experiences you have at Westcoast Education will stay with you for life. This community will champion your ambition, equipping you for your career and beyond, actively supporting you every step of the way, forever.</p>

                <div className="coursesHome">
                    <h2 className='homeRubriker'>Our courses that are available at the moment</h2>
                        {context.courses && (
                            <ul className='home__list'>
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
                    <div>
                        <h2 className='homeRubriker'>Teachers that are passionate about their subjects</h2>
                        {context.teachers && (
                            <ul >
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