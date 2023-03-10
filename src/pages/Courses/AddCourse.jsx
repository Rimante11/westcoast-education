import { useState, useRef } from 'react';
console.log(useState)

const AddCourse = () => {
   
  const courseNameInputRef = useRef();
  const courseNumberInputRef = useRef();
  const courseLengthInputRef = useRef();
  const courseStartDateInputRef = useRef();
  const courseDescriptionInputRef = useRef();


  const onSave = (e) => {
    e.preventDefault();

    const courseName = courseNameInputRef.current.value;
    const courseNumber = courseNumberInputRef.current.value;
    const length = courseLengthInputRef.current.value;
    const startDate = courseStartDateInputRef.current.value;
    const description = courseDescriptionInputRef.current.value;

    const body = { courseNumber, courseName, length, description, startDate };

    e.target.reset(); //clear inputs efter submit

    fetch('http://localhost:3010/courses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

  }

  function refreshPage(){
      window.location.reload(false);
  }

    return (
      <>
        <div className='modalTitle'>Add Course</div>
          <form onSubmit={onSave} className="addTeacherForm">

              <div className='formDiv'>
                <label htmlFor="courseName">Course name </label><br />
                  <input 
                    className='formInputs'
                    id='courseName'
                    placeholder='Course name'
                    ref={courseNameInputRef}
                  />
              </div>

              <div className='formDiv'>
                <label htmlFor="courseNumber">Course id </label><br />
                  <input 
                    className='formInputs'
                    id='courseNumber'
                    placeholder='1234'
                    ref={courseNumberInputRef}
                  />
              </div>

              <div className='formDiv'>
                <label htmlFor="courseNumber">Duration </label><br />
                  <input 
                    className='formInputs'
                    id='length'
                    placeholder='4 weeks'
                    ref={courseLengthInputRef}
                  />
              </div>

              <div className='formDiv'>
                <label htmlFor="startDate">Start date </label><br />
                  <input 
                    className='formInputs'
                    type='date'
                    id='startDate'
                    placeholder='4 weeks'
                    ref={courseStartDateInputRef}
                  />
              </div>

              <div className='formDiv'>
                <label htmlFor="description">Description </label><br />
                  <textarea 
                    className='formInputs'
                    rows='4'
                    cols='20'
                    id='description'
                    placeholder='Description...'
                    ref={courseDescriptionInputRef}
                  />
              </div>

            <div>
              <br /><br />
                <button 
                  className='formAddBtn'
                  onClick={refreshPage}
                >
                  Add Course
                </button>
            </div>

          </form>
      </>
    );
}
 
export default AddCourse;