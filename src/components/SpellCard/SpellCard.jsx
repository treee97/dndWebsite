import React, { useEffect, useState } from 'react';
import './SpellCard.css';
import { getSpells } from '../../api/SpellCall';

const SpellCard = () => {
  const [spell, setSpell] = useState([]);

  useEffect(()=> {
    const getRandomSpell = async () => {
      const randomSpell = await getSpells();
      setSpell(randomSpell)
    }

    getRandomSpell();
  }, []);

  return(
    <div className="app__spell">

    </div>
  )







}

export default SpellCard