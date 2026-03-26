import { useEffect } from "react";
import Exp from "./components/Exp";
import Home from "./components/Home";
import Nav from "./components/Nav";
import ProjectGallery from "./components/ProjectGallary";
import Aos from "aos";
import GetInTouch from "./components/GetInTouch";

export default function App() {
  useEffect(()=>{
    Aos.init()
  })
  return (
    <div className="scroll-smooth"> 
      <Nav />
      <div><Home /></div>
      <div id="experience"><Exp /></div>
      <div id="projects"><ProjectGallery /></div>
      <div id="contact"><GetInTouch /></div>
    </div>
  )
}
