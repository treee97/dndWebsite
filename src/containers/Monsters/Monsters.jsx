import React from 'react';
import { MonstersCall } from '../../components';
import './Monsters.css';

const Monsters = () => (
  
  <div className='app__monster section__padding gradient__bg'>
    <div className="app__monster-header">
      <h2 className='header__cormorant gradient__text'>Fight Ferocious Monsters</h2>
      <p className='p__raleway gradient__text'>The base game already includes a total amount of 334 monsters! However the Monster Manual includes a guide that lets you create your own monsters.</p>
    </div>
    <div className="app_monster-container">
      {/* I've used wrong the BEM convention. Not changing it because it would cause death and chaos. fr fr.*/}
      <MonstersCall />
    </div>
    {/*  DEJARLO TAL CUAL. LUEGO EN SPELLS SOLO LLAMAMOS A UNO Y DIVIDIMOS POR CONTAINER pero lo malo es que puede que se repita?  preguntar despues de haber hecho el codigo!! al final de todo */}
  </div>

)

export default Monsters