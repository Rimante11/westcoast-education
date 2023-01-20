const CoursesList = ({courses}) => {

    return (
            <ul className='list'>
            {courses.map((course) => (
                <li className='list__list-item listItem' key={course.id}>
                    <div>
                      Course name: <b>{course.courseName}</b>
                    </div>
                    <div>
                        Course id: {course.courseNumber}
                    </div>
                    <div>
                        Length: {course.length} 
                    </div>
                    <div>
                        Start date: {course.startDate}
                    </div>
                    
                    <br />
                </li>
            ))}
            </ul>  
    )
    
}
 
export default CoursesList;