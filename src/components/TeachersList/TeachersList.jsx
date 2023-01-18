const TeachersList = ({teachers}) => {

    return (
            <ul className='list'>
            {teachers.map((teacher) => (
                <li className='list__list-item' key={teacher.id}>
                    <div>
                        Name: {teacher.firstName} {teacher.lastName}
                    </div>
                    <div>
                        Personal id: {teacher.personalIdNumber}
                    </div>
                    <div>
                        Email: {teacher.email}
                    </div>
                    <div>
                        Phone number: {teacher.phoneNumber}
                    </div>
                    <br />
                </li>
            ))}
            </ul>  
    )
    
}
 
export default TeachersList;