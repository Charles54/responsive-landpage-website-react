import React, {useState} from 'react'
import logo from '../../img/logo.png'
const Navbar = () => {
    const[nav,setnav] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 50){
            setnav(true);
        }
        else{
            setnav(false);
        }
    }
    window.addEventListener('scroll', changeBackground);


  return (
    <>
    <nav className={nav ? 'nav active' : 'nav'}>
    <a href="#" className='logo'>
    <img src={logo} alt="" />
    </a>
    <input type="checkbox"  className='menu-btn' id='menu-btn'/>
    <label className='menu-icon' for='menu-btn'>
        <span className='nav-icon'></span>
    </label>
    <ul className='menu'>
            <li><a href="#" className='active'>Home</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">UI SS</a></li>
            <li><a href="#">Download</a></li>



    </ul>
    
    
    
    </nav>

    <div id="main"></div>
    <div className="name">
        <h1><span>Launch Your App</span>With Confidence And Creativity</h1>
        <p className="details">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, atque?</p>
        <a href="#" className="cv-btn">Download</a>
    </div>
    </>
  )
}

export default Navbar