import React from 'react'


const Home=(props)=>{
    return(
        <>
        <h1>This is Home</h1>
        <img src="public/myimages/img1.jpeg" alt="" height={"200px"} />
        <h1>{props.name}</h1>
        </>
    )
}
export default Home