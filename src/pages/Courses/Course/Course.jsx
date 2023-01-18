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
    console.log("Context mano: ",context);
    
    useEffect(() => {
        const currentCourse = context.courses.find(course => course.id === +courseId )
        setCourse(currentCourse);
        
    }, [courseId, context.courses])

    return ( 
        <>
            <div className="teacherCard">
                <img src={courseBookLogo} alt="courseBookLogo" className="userLogo" />
                    <div> Course id: {courseId}</div>
                        {course && 
                            <div>
                                <h3>{course.courseName}</h3>
                                <p>{course.length}</p>
                                <p>{course.startDate}</p>
                                <p><b>About course</b></p>
                                <p>{course.description}</p>
                            </div>
                        }
            </div>
        </> 
    );
}
 
export default Course;