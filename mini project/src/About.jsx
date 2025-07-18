import React from 'react'
import { data } from 'react-router-dom'
import Mycomp from './Mycomp'


const About =(props)=> {
  let data1=props.data

  return (
  <div>
    <h1>Yaha about section </h1>
    <h1>{data1}</h1>
    <img src={data1[0]} alt="" />
  </div>
  )
}

export default About
