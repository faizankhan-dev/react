
import React from 'react'
import  { useState } from 'react'
import "../mycss/style.css"
const Page1 =()=>{
  const[name,uname]=useState(null);
  const[email,uemail]=useState(null);
  const[mobile,umobile]=useState(null);
  const[password,upassword]=useState(null);




  return (
 <>
 <form action="">
      <fieldset>
        <legend>Myform</legend>
        <input type="text" placeholder='Name' onChange={(e)=>uname(e.target.value)} /> <br />
        <input type="text" placeholder='Email' onChange={(e)=>uemail(e.target.value)}/> <br />
        <input type="text" placeholder='Mobile' onChange={(e)=>umobile(e.target.value)}/> <br />
        <input type="text" placeholder='Password' onChange={(e)=>upassword(e.target.value)}/> <br />
        <button>submit</button>
        <h1>Your name:{name}</h1>
        <h1>Your email:{email}</h1>
        <h1>Your mobile:{mobile}</h1>
        <h1>Your password:{password}</h1>
      </fieldset>
    </form>
 
 </>
  )
}

export default Page1