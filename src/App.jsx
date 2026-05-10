import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from "./components/Header"
import Home from './pages/Home'
import ProductPage from './pages/ProductPage'

function App() {
 
  // return(
  //   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

  //     <div className="h-40 w-full bg-sky-400 rounded-2xl"></div>
  //     <div className="h-40 w-full bg-sky-400 rounded-2xl"></div>
  //     <div className="h-40 w-full bg-sky-400 rounded-2xl"></div>
  //     <div className="h-40 w-full bg-sky-400 rounded-2xl"></div>
  //     <div className="h-40 w-full bg-sky-400 rounded-2xl"></div>
  //     <div className="h-40 w-full bg-sky-400 rounded-2xl"></div>
  //     <div className="h-40 w-full bg-sky-400 rounded-2xl"></div>
  //     {/* <h1 class="grid-cols-1 grid text-red-600 text-3xl font-bold underline text-center">
  //       Hellooooo World!!!
  //     </h1>

  //     <div className="flex justify-center items-center h-screen">
  //       <div className="h-40 w-40 rounded-2xl bg-sky-800 hover:bg-amber-300 transition duration-500 hover:rotate-45 hover:rounded-full"></div>
  //       <h1 className="text-[#ed574a]">Hiii There</h1>
  //     </div> */}
  //   </div>
  // )


//<> </> - React Frangment  


  return(
    <>
     <div>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element= {<ProductPage />} />
        </Routes>
      </BrowserRouter>
     </div>
    </>
  )
  
}

export default App
