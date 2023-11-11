import logo from '../assets/logo.png'
import { Link } from "react-router-dom";


const Nav = () => {
    return <>
        <div className='nav'>           
            <img src={logo} className="App-logo" alt="logo" />
            <div className='links-in-nav'>
                <Link to="" className='accueuil'> Accueil </Link>
                <Link to="apropos"> A propos </Link>
               
            </div>
        </div>
    </>
}

export default Nav