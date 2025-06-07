import logo from '../../assets/image/logo.png'
import avatar from '../../assets/image/avatar.png'



function Navbar() {


    return (
        <>
       <header >
        <nav className="star-navbar">
            <a href="">
                <img src={logo} alt="logo" className="logo"/>
            </a>
            <ul>
            <li className="kategori">
                <a href="link" className="Ktg" >Kategori</a>
                <img src={avatar} alt="avatar"/>
            </li>
           </ul>
           
        </nav>
     </header>
        </>
    )
}

export default Navbar;