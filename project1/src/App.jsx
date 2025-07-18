

function App() {
  const myfunc=(e)=>{
    alert(e.type)
  }


  return (
    <>
   <h1  onClick ={myfunc } style={{color:"red", backgroundColor:"cyan", cursor:"pointer"}}>hello</h1>
    </>
  )
}

export default App
