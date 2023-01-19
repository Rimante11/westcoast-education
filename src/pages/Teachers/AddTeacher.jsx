import { useState, useRef } from 'react';
console.log(useState);


const AddTeacher = () => {

  const teacherFirstNameInputRef = useRef();
  const teacherLastNameInputRef = useRef();
  const teacherPersonalIdNumberInputRef = useRef();
  const teacherEmailInputRef = useRef();
  const teacherPhoneNumberInputRef = useRef();
  //const teacherCompetenciesInputRef = useRef();

  const onSave = (e) => {
    e.preventDefault();
    
    const firstName = teacherFirstNameInputRef.current.value;
    const lastName = teacherLastNameInputRef.current.value;
    const personalIdNumber = teacherPersonalIdNumberInputRef.current.value;
    const email = teacherEmailInputRef.current.value;
    const phoneNumber = teacherPhoneNumberInputRef.current.value;
    //const competencies = teacherCompetenciesInputRef.current.value;

    console.log("Teacher inputs check: ", firstName, lastName, personalIdNumber, email, phoneNumber);

    const body = { firstName, lastName, personalIdNumber, email, phoneNumber };

    fetch('http://localhost:3010/teachers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

  }

  return(
    <>
    <div>Add teacher</div>
      <form onSubmit={onSave}>

        <div>
          <label htmlFor="firstName">First name: </label>
            <input 
              id='firstName'
              placeholder='First name'
              ref={teacherFirstNameInputRef}
            />
        </div>

        <div>
          <label htmlFor="lastName">Last name: </label>
            <input 
              id='lastName'
              placeholder='Last name'
              ref={teacherLastNameInputRef}
            />
        </div>

        <div>
          <label htmlFor="personalIdNumber">Personal ID number: </label>
            <input 
              id='personalIdNumber'
              placeholder='ex: 12345678-1234'
              ref={teacherPersonalIdNumberInputRef}
            />
        </div>

        <div>
          <label htmlFor="email">Email: </label>
            <input 
              id='email'
              placeholder='email@gmail.com'
              ref={teacherEmailInputRef}
            />
        </div>

        <div>
          <label htmlFor="phoneNumber">Phone: </label>
            <input 
              id='phoneNumber'
              placeholder='0729434754'
              ref={teacherPhoneNumberInputRef}
            />
        </div>

        <div>
          <button /*disabled={buttonDisable}*/>
                    Add Course
          </button>
        </div>

      </form>
    </>
  )
}

export default AddTeacher;