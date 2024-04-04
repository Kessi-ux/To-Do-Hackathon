import { useEffect, useState } from "react";
import axios from "axios";

export const AxiosPageApi = () => {
  const [appScriptUsers, setAppScriptUsers] = useState([]);

  useEffect(() =>{
    getAppScriptUsers()
  },[])



  const getAppScriptUsers = () => {
   
    axios
      .get("https://script.google.com/macros/s/AKfycbxH7_mJOYrn5IpyATacibMcOo9o859Pp5gIQbVZxJzw8NaE91F70BG6SXL_8h-Fd0iD/exec?sheetId=1FAqu0I05f3A9DTB2yhbxcXwHf4nlvUNdQTnNUKsq2ks&sheetName=Sheet1")
      .then((response) => {
        console.log(response.status);
        console.log(response.data);
        setAppScriptUsers(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log({error});
        console.log(error.response.status);
        console.log(error.response.data);
        setGitError(error.response.data.message);
      })
  };


  return (
    <>
      <div>Axios Page: Working with apis (GET Request)</div>
      <button onClick={getAppScriptUsers} className="btn bg-red-800">
        Get Users 
      </button>

      <div>
         <div>
         {appScriptUsers?.data?.map((user, id) => (
            <div
              className="flex items-center  space-x-4 bg-orange-600 m-4 p-2 text-white capitalize font-bold"
              key={id}
            >
              <div>{user.Name}</div>
              <div>{user["Phone Number"]}</div>
              <div>{user.Email}</div>
            </div> ))}  
         </div>
             
      </div>
    </>
  );
};