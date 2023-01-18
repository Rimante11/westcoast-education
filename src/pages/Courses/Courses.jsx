//import './courses.scss';
//import './Courses.scss';

import {useContext} from 'react';
import ListContext from '../../store/list-context';

//import useFetchData from '../../hooks/use-fetch-data'
import useProjectData from '../../Hooks/use-project-data';

import CoursesList from '../../components/CoursesList/CoursesList';

const Courses = () => {

    const context = useContext(ListContext);
    
    useProjectData({url:'http://localhost:3010/courses', type:'courses'})

    return ( 
        <>
        <h1>Courses</h1>
        <button>Add course</button>
        {context.courses && <CoursesList courses={context.courses}/>}
        </>
     );
}
 
export default Courses;