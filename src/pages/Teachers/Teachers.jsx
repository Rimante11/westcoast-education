import {useContext} from 'react';

import ListContext from '../../store/list-context';

import useProjectData from '../../Hooks/use-project-data';

import TeachersList from '../../components/TeachersList/TeachersList';

const Teachers = () => {
    
    const context = useContext(ListContext);
    useProjectData({url:'http://localhost:3010/teachers', type:'teachers'})

    return ( 
        <>
        <h1>Teachers</h1>
        {context.teachers && <TeachersList teachers={context.teachers}/>}
        </>
     );
}
 
export default Teachers;