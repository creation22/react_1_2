import { useState } from "react"


function App() {
  const [color , setcolor] = useState("olive")

  return (
    <>
    <div className="w-full h-screen duration-200" style={{backgroundColor :color}}>

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2"> 
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl  ">
          <button onClick={() => setcolor("red")}   className ="outline-none px-4  py-1 rounded-full text-white shadow-2xl " style ={{backgroundColor : "red"}}>
              RED
          </button>
          <button onClick={() => setcolor("green")}  className ="outline-none px-4  py-1 rounded-full text-white shadow-2xl " style ={{backgroundColor : "green"}}>
              GREEN
          </button>
          <button onClick={() => setcolor("blue")}  className ="outline-none px-4  py-1 rounded-full text-white shadow-2xl " style ={{backgroundColor : "blue"}}>
              BLUE
          </button>
          <button onClick={() => setcolor("aqua")}  className ="outline-none px-4  py-1 rounded-full text-white shadow-2xl " style ={{backgroundColor : "aqua"}}>
              AQUA
          </button>
          <button  onClick={() => setcolor("brown")}  className ="outline-none px-4  py-1 rounded-full text-white shadow-2xl " style ={{backgroundColor : "brown"}}>
              BROWN
          </button>
          <button onClick={() => setcolor("violet")}  className ="outline-none px-4  py-1 rounded-full text-white shadow-2xl " style ={{backgroundColor : "violet"}}>
              VIOLET
          </button>
          <button onClick={() => setcolor("orange")}  className ="outline-none px-4  py-1 rounded-full text-white shadow-2xl " style ={{backgroundColor : "orange"}}>
              ORANGE
          </button>
          <button onClick={() => setcolor("purple")}  className ="outline-none px-4  py-1 rounded-full text-white shadow-2xl " style ={{backgroundColor : "purple"}}>
              PURPLE
          </button>
          <button onClick={() => setcolor("indigo")}  className ="outline-none px-4  py-1 rounded-full text-white shadow-2xl " style ={{backgroundColor : "indigo"}}>
              INDIGO
          </button>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default App
