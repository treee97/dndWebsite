import React from 'react';
import images from '../../constants/images';
import { Cta } from '../../components';
import './Header.css';

const Header = () => (
    <div className='app__header section__padding'>
      {/* <img src={images.topRightBg} alt="" /> */}
      <div className="app__header-heading">
        <h1 className="header__cormorant">The Adventure You Have Been Looking For</h1>
        <p className="p__raleway">Experience unique settings made by players like you. An empire of evil demons, elfs fighting in a deadly forest, stealing the most protected bank in the kingdom. Everything can be possible.</p>
        <div className="app__header-heading_button">
          <Cta />
        </div>
      </div>
    </div>
)
export default Header;