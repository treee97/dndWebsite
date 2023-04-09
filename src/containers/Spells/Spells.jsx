import React from 'react';
import {SpellCard} from '../../components';
import './Spells.css';
import { images } from '../../constants';

const Spells = () => (
  <div className='app__spell section__padding black__bg'>
    <div className="app__spell_header">
      <h2 className="header__cormorant gradient__text">Hundreds of Spells</h2>
      <p className='p__raleway'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea earum labore quo blanditiis, modi ab vitae exercitationem culpa consequuntur harum natus reiciendis at. Cupiditate, illo. Hic architecto magni exercitationem sed.</p>
      <div className="app__spell_header-image">
        <img src={images.wizard} alt="fire wizard" />
      </div>
    </div>
    <div className="app__spell_cards">
      <div className="app__spell__cards-container one">
        <SpellCard />
      </div>
      <div className="app__spell__cards-container two">
        <SpellCard />
      </div>
      <div className="app__spell__cards-container three">
        <SpellCard />
      </div>
    </div>
  </div>
)

export default Spells