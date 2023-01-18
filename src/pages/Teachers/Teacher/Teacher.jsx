import { useParams } from "react-router-dom";
import {useContext, useEffect, useState} from 'react';
import userLogo from '../Teacher/userLogo.png';

import useProjectData from '../../../Hooks/use-project-data';
import ListContext from '../../../store/list-context';

const Teacher = () => {
    const { teacherId } = useParams()
    console.log({teacherId}); //rätt

    useProjectData({url:'http://localhost:3010/teachers', type:'teachers'})
    const context = useContext(ListContext);
    const [teacher, setTeacher] = useState(null);

    console.log("Project Data: ",useProjectData); //rätt
    
    useEffect(() => {
        const currentTeacher = context.teachers.find(teacher => teacher.id === +teacherId )
        setTeacher(currentTeacher);
        console.log("Teachers data: ",currentTeacher);
    }, [teacherId, context.teachers])

    return ( 
        <>
            <div> Teacher id: {teacherId}</div>
                <div className="teacherCard">
                    <img src={userLogo} alt="userLogo" className="userLogo" />
                        {teacher && 
                            <div>
                                <h3>{teacher.firstName} {teacher.lastName}</h3>
                                <p>Personal id: {teacher.personalIdNumber}</p>
                                <p>Email: {teacher.email}</p>
                                <p>Phone: {teacher.phoneNumber}</p>
                                <b>Competencies</b>
                                <p>{teacher.competencies}</p>
                
                            </div>
                   
                        }
                </div>    
        </> 
    );
}
 
export default Teacher;