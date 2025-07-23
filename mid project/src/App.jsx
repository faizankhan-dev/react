import { useState } from 'react'
import Page1 from './component/Page1'

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Dashboard from './component/Dashboard.jsx'
import Nav from './component/Nav'
import SuperDashboard from './component/SuperDashboard.jsx'

function App() {
  // const[intital, updateinitial]=useState(0);
  return (
    <>
    
     <Router>
      <Nav/>
      <Routes>
        <Route path="/page1" element={<Page1/>} />
       <Route path='/dashboard' element={<Dashboard/>}/>
       <Route path='/super' element={<SuperDashboard/>}/>
     

      </Routes>



     </Router>
     

    </>
  )
}

export default App