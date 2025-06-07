import { BrowserRouter, Routes, Route  } from "react-router";
import Halamanlogin from "../components/halaman-login";
import Halamanregister from "../components/halaman-register";
import Halamanhompage from "../components/halaman-hompage";


const RouterComponent = () => {
    return ( 
    <BrowserRouter>
                   <Routes>
                           <Route path='/halamanlogin' element={<Halamanlogin/>}/>
                           <Route path='/halamanrgr' element={<Halamanregister/>}/>
                           <Route path='/halamanhm' element={<Halamanhompage/>}/>
                   </Routes>
    </BrowserRouter>

    )
}

export default RouterComponent;