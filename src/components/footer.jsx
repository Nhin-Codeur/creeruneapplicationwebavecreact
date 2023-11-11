import logo from '../assets/footer-logo.png'

const Footer = () => {
    return <>
        <div className='footer'>
            <img src={logo} className="App-logo" alt="footer-logo" />
            <span> © 2020 Kasa. All rights reserved </span>
        </div>
    </>
        
}

export default Footer