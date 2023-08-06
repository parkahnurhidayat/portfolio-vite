import { useEffect } from "react";

import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Master from "./pages/Master";


function App() {
 
  useEffect(()=>{
    AOS.init({
      duration:2000,
    })
  })

  return (
    <>
    <Master/>
  
    </>
  )
}

export default App
