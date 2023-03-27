import React from 'react';
import images from '../../constants/images';

import { Features } from '../../components';
import './Character.css';
import { data } from '../../constants';

const Character = () => (
    <div className="app__character section__padding black__bg">

      <div className="app__character-img">
        <img src={images.puma} alt="character" />
      </div>

      <div className="app__character_content">

        <div className="app__character_content-header">
          <h2 className="header__cormorant gradient__text">Create Your Character</h2>
          <p className="p__raleway">With hundreds of builds and customization you can get your unique hero. The official game already includes these</p>
        </div>

        <div className="app__character_content-info">
          <ul className='p__raleway'>
          {data.dndbase.map( (card, index) => (
              <Features key={card.title + index} number={card.number} title={card.name} dice={card.dice} />
          )         
          )}
          </ul>
        </div>
      </div>
      
    </div>
  )
  // in what file would you do an API call in a react folder structure? right now i have a folder named api and inside there's a .jsx file called apiCall. Is that good practice?

export default Character