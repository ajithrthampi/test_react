import { Route, Routes } from "react-router-dom"
import New_Arrival from "./pages/New_Arrival"
import Exclusive_Benifits from "./pages/Exclusive_Benifits"


function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<New_Arrival />} />
        <Route path='/exclusive-benifits' element={<Exclusive_Benifits />} />

      </Routes>
    </>
  )
}

export default App
