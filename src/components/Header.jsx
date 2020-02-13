import React from 'react';
import Logo from './logo.jpg';
import Explore from './Explore';
import './Header.css';
import {Link} from 'react-router-dom';

function Header(){
  return(
    <div className='headerBody'>
    <div className='headerTitle'>
    <img className='logo' src={Logo}></img>
    <h3>Team<span>a</span>Saur</h3>
    </div>
    <div className='headerMiddle'>
    <div className='exploreDrop'>
    <button className='dropdown'>Explore</button>
    <div className='dropdown-content'>
    <Explore/>
    </div>
    </div>
    <Link to='/template'>TempPlate</Link>
    <div className='supportDrop'>
    <button className='dropdownSupport'>Explore</button>
    <div className='dropdown-support-content'>
    <Explore/>
    </div>
    </div>
    </div>
    <div className='headerRight'>
    <Link to ='/login'>LOG IN</Link>
    <button>Get Started</button>
    </div>
    </div>
  );
}

export default Header;
