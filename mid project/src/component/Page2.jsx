import React from 'react'
import { useState } from 'react'

export const Page2 = () => {
    const[formdata,updateformdata]=useState({
        name:"",
        email:"@gmail.com"
    })
   const handlechange=(e)=>{
  const {name,value}=e.target;
     updateformdata((prev)=>({
        ...prev,
        [name]:value
     }))
   }
  return (
    
<>
<h1>This is usestate and jason server class</h1>
<form action="">

    <input type="text" name='name' value={formdata.name} onChange={handlechange}/> <br />
    <input type="text" name='email' value={formdata.email} onChange={handlechange}/>
</form>
<h1>your name:{formdata.name}</h1>
<h1>your email:{formdata.email}</h1>
</>
  )
}

export default Page2

