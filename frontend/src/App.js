import { BrowserRouter, Routes, Route } from "react-router-dom";
import Apppointment from "./components/Appointment";

function App() {
  return (
    <div className="App">
   
   <BrowserRouter>
   <Routes>

   <Route path='/' element={<Apppointment/>}/>


   </Routes>


   </BrowserRouter>

    </div>
  );
}

export default App;
