import Nav from "./Nav"
import About from "./About"
import Home from "./Home"

import { BrowserRouter as Router,Routes,Route} from "react-router-dom"


function App() {
  let arr=["public/myimages/img1.jpeg","public/myimages/img1.jpeg"];
  

  return (
    <>
   <Router>
  <Nav/>
  <Routes>
   <Route path="/" element={<Home data={arr}/>}></Route>
   <Route path="/about" element={<About data ={arr}/>}></Route>
  </Routes>
  </Router>
    </>
  )
}

export default App
