import './App.css'
import Header from './Components/Navbar'
import Hero from './Components/HERO/Hero';
import { useState } from 'react';
import DiscoverSection from './Components/Animation/DiscoverUI';
import Footer from './Components/Footer/Footer';
function App() {
  const [show,setShow] = useState(false);
  return (
    <>
      <div className={`h-[100%] w-[1px] bg-[#ffffff1a] absolute left-[24px] top-[56px] z-50`}></div>
      <div className={`h-[100%] w-[1px] bg-[#ffffff1a] absolute right-[24px] top-[56px] z-50`}></div>
    <div>
      <Header show={show} setShow={setShow}/>
      <Hero setShow={setShow}/>
      <DiscoverSection/>
      <Footer/>
    </div>
    </>
  )
}

export default App
