import React from 'react';
import { Cta } from '../../components';
import './Header.css';

const Header = () => (
    <div className='app__header section__padding'>
      {/* <img src={images.topRightBg} alt="" /> */}
      <div className="app__header-heading">
        <h1 className="header__cormorant gradient__text">The Adventure Begins Now</h1>
        {/* The Epic Adventure You've Been Looking For */}
        <p className="p__raleway gradient__text">Experience unique settings made by players like you where the only limit is your imagination</p>
        {/* Experience unique settings made by players like you. An empire of evil demons, elfs fighting in a deadly forest, stealing the most protected bank in the kingdom. Everything can be possible. */}
      </div>
      <div className="app__header-heading_button">
          <Cta />
      </div>
    </div>
)
export default Header;