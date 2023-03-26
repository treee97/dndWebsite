import React from 'react';
import images from '../../constants/images';
import {GiInvertedDice1, GiInvertedDice2, GiInvertedDice3, GiInvertedDice4, GiInvertedDice5 } from 'react-icons/gi';
import './Character.css';

const Character = () => (
    <div className="app__character section__padding black__bg">
      <div className="app__character-img">
        <img src={images.puma} alt="character" />
      </div>
      <div className="app__character-header">
        <h2 className="app__character-header-title header__cormorant gradient__text">Create Your Character</h2>
        <p className="p__raleway gradient__text">With hundreds of builds you can get your unique personalized hero. The official game already includes these</p>
        <ul className='p__raleway '>
          <li><GiInvertedDice1 />12 Classes to choose from</li>
          <li><GiInvertedDice2 />9 races available</li>
          <li><GiInvertedDice3 />60 backgrounds to add depth</li>
          <li><GiInvertedDice4 />16 fictional languages</li>
          <li><GiInvertedDice5 />18 skills to be proficient with!</li>
        </ul>
      </div>
    </div>
  )
  // in what file would you do an API call in a react folder structure? right now i have a folder named api and inside there's a .jsx file called apiCall. Is that good practice?

export default Character