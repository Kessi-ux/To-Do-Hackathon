import React, { useState } from 'react';
import axios from 'axios';

export const WorkingWithApi = () =>
 {
    const [todo, setTodo] = useState([]);
    const [error, setError] = useState([]);

    useEffect(() =>{
        getTodo()
      },[])

      const getTodo = () => {
        axios
        .get("http://49.13.2.10:4000/todos")
        .then((response) => {
          console.log(response);
          console.log(response.data);
          setTodo(response.data);
        })
        .catch(function (error) {
          // handle error
          console.log({error});
          console.log(error.response.status);
          console.log(error.response.data);
          setError(error.response.data.message);
        })
      }

  return (
    <div>
        
    </div>
  )
}

