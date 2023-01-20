import {useContext} from 'react';
import ListContext from '../../store/list-context';

//import useFetchData from '../../hooks/use-fetch-data'
import useProjectData from '../../Hooks/use-project-data';

import CoursesList from '../../components/CoursesList/CoursesList';

//importerar Modal
import Modal from '../../Modal';
import { useState } from 'react';
import AddCourse from './AddCourse';

const Courses = () => {

    const context = useContext(ListContext);
    const [ isOpen, setIsOpen ] = useState(false);
    
    useProjectData({url:'http://localhost:3010/courses', type:'courses'})

    return ( 
        <>
        <h1 className='coursesTeacherH1'>Courses</h1>
        <button onClick={() => setIsOpen(true)} className='addCourseTeacherModalBtn'>Add course</button>

        {/*creating modal for addCourse */}
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
            
            <AddCourse/>
        </Modal>

        {context.courses && <CoursesList courses={context.courses}/>}
        </>
     );
}
 
export default Courses;