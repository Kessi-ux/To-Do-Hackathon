import { useState, useEffect } from "react"
import axios from 'axios'

export const Api = () => {

    const apiUrl = ("https://script.google.com/macros/s/AKfycbxH7_mJOYrn5IpyATacibMcOo9o859Pp5gIQbVZxJzw8NaE91F70BG6SXL_8h-Fd0iD/exec?sheetId=1FAqu0I05f3A9DTB2yhbxcXwHf4nlvUNdQTnNUKsq2ks&sheetName=Sheet1")
    
    const [getSheet, setSheet] = useState([])
    
    useEffect(() => {
        axios.get(apiUrl).then((resp)=>{
            console.log(resp.data);
            setSheet(resp.data.data);
        }).catch((err) => {
            console.log(err.message);
        })
    }, {apiUrl})

  return (
     <div>
        Fetching data from Api
        {getSheet.map((person, id) => 
         <div key={id}>
            <p>Name: {person.Name}</p>
        </div>
        )}
    </div>
  )
}