import { useState, useRef } from 'react';
console.log(useState);




const AddTeacher = () => {

  const teacherFirstNameInputRef = useRef();
  const teacherLastNameInputRef = useRef();
  const teacherPersonalIdNumberInputRef = useRef();
  const teacherEmailInputRef = useRef();
  const teacherPhoneNumberInputRef = useRef();
  const teacherCompetenciesInputRef = useRef();

  const onSave = (e) => {
    e.preventDefault();
    
    const firstName = teacherFirstNameInputRef.current.value;
    const lastName = teacherLastNameInputRef.current.value;
    const personalIdNumber = teacherPersonalIdNumberInputRef.current.value;
    const email = teacherEmailInputRef.current.value;
    const phoneNumber = teacherPhoneNumberInputRef.current.value;
    const competencies = teacherCompetenciesInputRef.current.value;

    console.log("Teacher inputs check: ", firstName, lastName, personalIdNumber, email, phoneNumber, competencies);

    const body = { firstName, lastName, personalIdNumber, email, phoneNumber, competencies };

    e.target.reset(); //clear inputs efter submit

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
    <div className='modalTitle'>Add teacher</div>
      <form onSubmit={onSave} className="addTeacherForm">

        <div className='formDiv'>
          <label htmlFor="firstName">First name </label><br />
            <input 
              className='formInputs'
              id='firstName'
              placeholder='First name'
              ref={teacherFirstNameInputRef}
            />
        </div>

        <div className='formDiv'>
          <label htmlFor="lastName">Last name </label><br />
            <input 
              className='formInputs'
              id='lastName'
              placeholder='Last name'
              ref={teacherLastNameInputRef}
            />
        </div>

        <div className='formDiv'>
          <label htmlFor="personalIdNumber">Personal ID number </label><br />
            <input 
              className='formInputs'
              id='personalIdNumber'
              placeholder='ex: 12345678-1234'
              ref={teacherPersonalIdNumberInputRef}
            />
        </div>

        <div className='formDiv'>
          <label htmlFor="email">Email</label><br />
            <input 
              className='formInputs'
              id='email'
              placeholder='email@gmail.com'
              ref={teacherEmailInputRef}
            />
        </div>

        <div className='formDiv'>
          <label htmlFor="phoneNumber">Phone </label><br />
            <input 
              className='formInputs'
              id='phoneNumber'
              placeholder='0729434754'
              ref={teacherPhoneNumberInputRef}
            />
        </div>

        <div className='formDiv'>
          <label htmlFor="competencies">Competencies </label><br />
            <input 
              className='formInputs'
              id='competencies'
              placeholder='competencies...'
              ref={teacherCompetenciesInputRef}
            />
        </div>

        <div>
          <br /><br />
          <button className='formAddBtn'
            onClick={()=>alert("Teacher added!")}
          >
                    Add Course
          </button>
        </div>

      </form>
    </>
  )
}

export default AddTeacher;