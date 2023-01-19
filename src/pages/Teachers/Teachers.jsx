import {useContext, useState} from 'react';
import ListContext from '../../store/list-context';
import useProjectData from '../../Hooks/use-project-data';
import TeachersList from '../../components/TeachersList/TeachersList';

//importerar Modal
import ModalTeacher from '../../ModalTeacher';

const Teachers = () => {

    //for modal
    const [isOpen, setIsOpen] = useState(false);
    
    const context = useContext(ListContext);
    useProjectData({url:'http://localhost:3010/teachers', type:'teachers'})

    return ( 
        <>
        <h1 className='coursesTeacherH1'>Teachers</h1>

        <button onClick={() => setIsOpen(true)}>Add teacher</button>

        {/*Creating Modal for add teacher */}
        <ModalTeacher open={isOpen} onClose={() => setIsOpen(false)}>
            Fancy Modal
        </ModalTeacher>

        {context.teachers && <TeachersList teachers={context.teachers}/>}
        </>
     );
}
 
export default Teachers;