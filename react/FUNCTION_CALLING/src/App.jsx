

function App() {

  
  const clicked = ()=>{
    console.log("clicked")
  }


  return (
    <>
      <div onClick={clicked} className="active:scale-94  btn p-4 w-fit text-2xl rounded-full text-white bg-emerald-600">
         Click to Download
      </div>
    </>
  )
}

export default App


//onClick={clicked} <-- agar func ke baad bracs dega toh immediately call hoga agar bracs dena hi hai toh yeh kar,

// onClick = {()=>{ clicked()}}