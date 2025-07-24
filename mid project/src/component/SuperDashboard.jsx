import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import '../mycss/style.css'

const SuperDashboard = () => {

    let API_URL='http://localhost:3001/user'
    let [initialdata,updatedata]=useState([]);
    useEffect(()=>{
        const fetchdata=async()=>{

            try {
                let response=await axios.get(API_URL);
                updatedata(response.data)
                
            } catch (error) {
                console.log("data not found");
                
                
            }
        }
        fetchdata()
    },[])
    console.log(initialdata);
    


  return (
    <>
    <h1>Admin Dashboard</h1>  <br />
    <table className='vtable'>
 
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Password</th>
            <th>action</th>
        </tr>

        {
         initialdata.map((e)=>(
            <tr key={i}>
                <td>{e.name}</td>
                <td>{e.email}</td>
                <td>{e.mobile}</td>
                <td>{e.password}</td>
                
                <td><button className='button'>update</button></td>
                <td><button className='button1'>delete</button></td>
            </tr>

         ))
        }
        

    </table>
  
    </>
   
  )
}

export default SuperDashboard;