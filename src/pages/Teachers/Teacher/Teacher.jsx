import { useParams } from "react-router-dom";
import {useContext, useEffect, useState} from 'react';
import userLogo from '../Teacher/userLogo.png';

import useProjectData from '../../../Hooks/use-project-data';
import ListContext from '../../../store/list-context';

const Teacher = () => {
    const { teacherId } = useParams()
 
    useProjectData({url:'http://localhost:3010/teachers', type:'teachers'})
    const context = useContext(ListContext);
    const [teacher, setTeacher] = useState(null);
    console.log("teacher context: ", context);
    
    useEffect(() => {
        const currentTeacher = context.teachers.find(teacher => teacher.id === +teacherId )
        setTeacher(currentTeacher);

        console.log("Current teacher CHECK: ", currentTeacher);

    }, [teacherId, context.teachers])

    

    return ( 
        <>
            <div className="detaljSida"> 
                <div className="teacherCard">
                    <img src={userLogo} alt="userLogo" className="userLogo" /><br /><br />
                        <div className="aboutCardInfo">
                            {teacher && 
                                <div>
                                    <h3>{teacher.firstName} {teacher.lastName}</h3>
                                    <p>id: {teacherId}</p>
                                    <p>Personal id: {teacher.personalIdNumber}</p>
                                    <p>Email: {teacher.email}</p>
                                    <p>Phone: {teacher.phoneNumber}</p>
                                    <b>Competencies</b>
                                    <p>{teacher.competencies } </p>
                    
                                </div>
                    
                            }
                        </div>
                </div> 
            </div>   
        </> 
    );
}
 
export default Teacher;