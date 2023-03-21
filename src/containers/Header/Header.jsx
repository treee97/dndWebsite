import React from 'react';
import images from '../../constants/images';
import { Cta } from '../../components';
import './Header.css';

const Header = () => (
    <div className='app__header section__padding'>
      {/* <img src={images.topRightBg} alt="" /> */}
      <div className="app__header-heading">
        <h1 className="header__cormorant gradient__text">Lorem ipsum dolor sit, amet consect</h1>
        {/* The Epic Adventure You've Been Looking For */}
        <p className="p__raleway">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos officia repellat illo? Laudantium nesciunt earum obcaecati officiis culpa sunt quos minus, necessitatibus ullam iusto error doloribus, iure quia tempora accusantium.</p>
        {/* Experience unique settings made by players like you. An empire of evil demons, elfs fighting in a deadly forest, stealing the most protected bank in the kingdom. Everything can be possible. */}
        <div className="app__header-heading_button">
          <Cta />
        </div>
      </div>
    </div>
)
export default Header;