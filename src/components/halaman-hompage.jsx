

import Card from "./organisem/card";
import Footer from "./organisem/footer";
import Hero1 from "./organisem/hero1";
import Navbar from "./organisem/navbar";



function Halamanhompage() {


  return (
    <>
    <Navbar/>
    <div className="ool">
        <Hero1/>
        <Card/>
     </div>
     <Footer/>
    </>
  )
}

export default Halamanhompage;
