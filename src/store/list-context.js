import React, { useState, useEffect } from 'react';

console.log(useEffect);
const ListContext = React.createContext({ 
  updateList: () => {},
  handleError: () => {},
  teachers: [],
  courses: [],
  error: null
});

export const ListContextProvider = (props) => {

  const [teachers, setTeachers] = useState([]);
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState(null);

  const updateList = ({data, type}) => {
      
      if(type === 'teachers'){
        setTeachers(data)
      }
      if(type === 'courses') {
        setCourses(data)
      }
    }
    
  const handleError = (error => setError(error))
  
  //in .Provider vi har 'value' prop där vi kan pasiera vad vi vill ex: 'hello' 
  return (
    <ListContext.Provider
      value={{
        updateList,
        teachers,
        courses,
        handleError,
        error
      }}
    >
      {props.children}
    </ListContext.Provider>
  )
};

export default ListContext;