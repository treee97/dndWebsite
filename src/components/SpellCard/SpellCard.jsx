import React, { useEffect, useState } from 'react';
import './SpellCard.css';
import { getSpells } from '../../api/SpellCall';

const SpellCard = () => {
  const [spell, setSpell] = useState([]);

  useEffect(()=> {
    const getRandomSpell = async () => {
      const randomSpell = await getSpells();
      setSpell([randomSpell])
      // data must be received as in an array
    }

    getRandomSpell();
  }, []);

  return(
    <div className="app__spellcard">
        {spell.map((spell) => (

          <div className="app__spellcard_item" key={spell.index}>

            <h3>{spell.name}</h3>

            <div className="app__spellcard_item-data">

              <div className="app__spellcard_item-data_stats">
                <p>{spell.school.name}</p>
                <p>{spell.casting_time}</p>
              </div>

              <div className="app__spellcard_item-data_type">
                {spell.ritual === true ? <p>Ritual</p> : <></>}
                {spell.level === 0 ? <p>Cantrip</p> : <p>Levels {spell.level}</p>}
                {spell.range === "Self" ?
                  spell.area_of_effect ?
                  <p>{spell.range} ({spell.area_of_effect.size} foot {spell.area_of_effect.type})</p>
                  : <p>{spell.range}</p> 
                  : <p>{spell.range}</p>
                }
              </div>

              <div className="app__spellcard_item_duration">
                {
                  spell.concentration ? <p>Duration: Concentration - {spell.duration}</p> : <p>Duration: {spell.duration}</p>
                }
                <p>Components: {spell.components.join(" ")}</p>
              </div>

              <div className="app__spellcard_item_desc">
                <p>{spell.desc}</p>
              </div>

              <div className="app__spellcard_item_classes">
                  {spell.classes.map( (classItem) => (
                    <p>{classItem.name}</p>
                  ))}
              </div>

            </div>
          </div>
        ))
        }
    </div>
  )

}

export default SpellCard

// spell.range tiene el value de Self?, si no lo tiene que envie el rango del hechizo. 30ft 10ft etc.. Si lo tiene entonces preguntamos. Este hechizo tiene una area de efecto alrededor de nosotros? si no, solo enviamos el self. Si lo tiene entonces enviamos el tamaño del area afectada y el tipo del area: circular, conica. etc