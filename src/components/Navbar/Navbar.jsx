import React, {useState} from 'react';

import { CgMenuGridO, CgClose } from 'react-icons/cg';
// import {FaDiceD20} from 'react-icons/fa';
import images from '../../constants/images';

import './Navbar.css';


const Navbar = () => {
  
  const [toggleMenu, setToggleMenu] = useState(false);

return(
  <nav className='app__navbar'>

    <div className="app__navbar-logo">
      <img src={images.logo} alt="dungeons & dragons logo" id='#home' />
    </div>
    
    <ul className="app__navbar-links">
        <li className='p__raleway'><a href="#adventure">Adventure</a></li>
        <li className='p__raleway'><a href="#characters">Characters</a></li>
        <li className='p__raleway'><a href="#monsters">Monsters</a></li>
        <li className='p__raleway'><a href="#spells">Spells</a></li>
        <li className='p__raleway'><a href="#trinkets">Trinkets</a></li>
       
    </ul>

    <div className="app__navbar-tree">
      <img src={images.treeWhiteLogo} alt="tree logo" />
    </div>
    <div className="app__navbar-small">
      <CgMenuGridO color='white' fontSize={27} onClick={() => setToggleMenu(true)}/>

      { toggleMenu && ( 
          <div className="app__navbar-small_overlay ">
            <CgClose className='overlay__close' onClick={() => setToggleMenu(false)}/>

            <ul className="app__navbar-small_overlay-links slide-in-top">
                <li className='p__raleway'><a href="#adventure">Adventure</a></li>
                <li className='p__raleway'><a href="#characters">Characters</a></li>
                <li className='p__raleway'><a href="#monsters">Monsters</a></li>
                <li className='p__raleway'><a href="#spells">Spells</a></li>
                <li className='p__raleway'><a href="#trinkets">Trinkets</a></li>

                {/* <div className="app__navbar-small_overlay-links_tree">
                  <img src={images.treeWhiteLogo} alt="tree logo" />
                </div> */}
            </ul>

            

          </div>
        )
      }

    </div>

  </nav>
  );
}

export default Navbar;