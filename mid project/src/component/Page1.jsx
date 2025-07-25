import React from 'react'
import { useState } from 'react'
import '../mycss/style.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'



const Page1 = () => {
  let navigate=useNavigate();
  const API_URL='http://localhost:3001/user'

  const[formdata,setformdata]=useState({
    name:"",
    email:"",
    mobile:"",
    password:""
  });

  const handlechange=(e)=>{
    const{name,value}=e.target;
    setformdata((prev)=>(
      {...prev,
        [name]:value
      }
    ))

  }
  const handlesignup=async(e)=>{
    e.preventDefault();

    try {
      await axios.post(API_URL,formdata);
      navigate("/dashboard",{state:formdata})
      
    } 
    catch (error) {
      alert("url band hai",error)
    }

  }
   

  return (
    <>
    <form action="" onSubmit={handlesignup}>
      <fieldset>
        <legend>Myform</legend>
        <input type="text" name='name' value={formdata.name} placeholder='Name' onChange={handlechange}/> <br />
        <input type="text" placeholder='Email' name='email' value={formdata.email} onChange={handlechange}/> <br />
        <input type="text" placeholder='Mobile'name='mobile' value={formdata.mobile} onChange={handlechange}/> <br />
        <input type="text" placeholder='Password' name='password' value={formdata.password} onChange={handlechange}/>  <br />
        <button>Signup</button>
         <h1>Your name:{formdata.name}</h1>
        <h1>Your email:{formdata.email}</h1>
         <h1>Your mobile:{formdata.mobile}</h1>
          <h1>Your password:{formdata.password}</h1>
      </fieldset>
    </form>
    </>
  )
}

export default Page1