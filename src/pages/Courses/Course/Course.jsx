import { useParams } from "react-router-dom";
import {useContext, useEffect, useState} from 'react';
import courseBookLogo from '../Course/courseBookLogo.png';

import useProjectData from '../../../Hooks/use-project-data';
import ListContext from '../../../store/list-context';

const Course = () => {
    const { courseId } = useParams()
    
    useProjectData({url:'http://localhost:3010/courses', type:'courses'})
    const context = useContext(ListContext);
    const [course, setCourse] = useState(null);
    
    useEffect(() => {
        const currentCourse = context.courses.find(course => course.id === +courseId )
        setCourse(currentCourse);
        
    }, [courseId, context.courses])

    return ( 
        <>
            <div className="detaljSida">
                <div className="teacherCard">
                    <img src={courseBookLogo} alt="courseBookLogo" className="userLogo" /><br /><br />
                        <div className="aboutCardInfo">
                            {course && 
                                <div>
                                    <h3>{course.courseName}</h3>
                                    <p> Course id: {courseId}</p>
                                    <p>Duaration: {course.length}</p>
                                    <p>Start date: {course.startDate}</p>
                                    <br />
                                    <p><b>About course</b></p>
                                    <p>{course.description}</p>
                                </div>
                            }
                        </div>
                </div>
            </div>
        </> 
    );
}
 
export default Course;