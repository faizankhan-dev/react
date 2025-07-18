import { useState } from 'react'
import Page1 from './component/Page1.jsx';
import { Page2 } from './component/Page2.jsx';


function App () {

  const[initial,updateinitial]=useState(0);

  



  return (
    <>
    <Page2/>
   <Page1/>
    </>
  )
}

export default App
