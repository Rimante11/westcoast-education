import { useState, useRef } from 'react';
console.log(useState)

const AddCourse = () => {
  
  const courseNameInputRef = useRef();
  const courseIdInputRef = useRef();
  const courseNumberInputRef = useRef();
  const courseLengthInputRef = useRef();
  const courseStartDateInputRef = useRef();
  const courseDescriptionInputRef = useRef();


  const onSave = (e) => {
    e.preventDefault();

    const courseName = courseNameInputRef.current.value;
    const id = courseIdInputRef.current.value;
    const courseNumber = courseNumberInputRef.current.value;
    const length = courseLengthInputRef.current.value;
    const startDate = courseStartDateInputRef.current.value;
    const description = courseDescriptionInputRef.current.value;

    console.log("Course inputs check: ", courseName, id, courseNumber, length, startDate, description);


    const body = { id, courseNumber, courseName, length, description, startDate };

    /*
    lösning kanske kika, pga jag fetchar till courses, men inget uppdates cours id kanske prova
    https://stackoverflow.com/questions/74815103/react-ui-dom-is-not-updating-after-data-insertion-in-json-server
    */

    fetch('http://localhost:3010/courses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

  }

    return (
      <>
        <div> <h2>Add Course</h2> </div>
          <form onSubmit={onSave}>

              <div>
                <label htmlFor="courseName">Course name: </label>
                  <input 
                    id='courseName'
                    placeholder='Course name'
                    ref={courseNameInputRef}
                  />
              </div>

              <div>
                <label htmlFor="id">Id: </label>
                  <input 
                    id='id'
                    placeholder='id'
                    ref={courseIdInputRef}
                  />
              </div>

              <div>
                <label htmlFor="courseNumber">Course id: </label>
                  <input 
                    id='courseNumber'
                    placeholder='1234'
                    ref={courseNumberInputRef}
                  />
              </div>

              <div>
                <label htmlFor="courseNumber">Duration: </label>
                  <input 
                    id='length'
                    placeholder='4 weeks'
                    ref={courseLengthInputRef}
                  />
              </div>

              <div>
                <label htmlFor="startDate">Start date: </label>
                  <input 
                    type='date'
                    id='startDate'
                    placeholder='4 weeks'
                    ref={courseStartDateInputRef}
                  />
              </div>

              <div>
                <label htmlFor="description">Description: </label>
                  <textarea 
                    rows='4'
                    cols='50'
                    id='description'
                    placeholder='Description...'
                    ref={courseDescriptionInputRef}
                  />
              </div>

              

            <div>
                <button
                  /*disabled={buttonDisable}*/
                >
                    Add Course
                </button>
            </div>

          </form>
      </>
    );
}
 
export default AddCourse;