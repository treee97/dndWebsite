import Character from './Character/Character';
import Header from  './Header/Header';
import Monsters from './Monsters/Monsters';
import Spells from './Spells/Spells';
import Trinkets from './Trinkets/Trinkets';
import Adventure from './Adventure/Adventure';


export{
    Header,
    Adventure,
    Character,
    Monsters,
    Spells,
    Trinkets
}

// more based way to do it => 
// export {default as Character} from './Character/Character';
// export {default as Header} from './Header/Header';
// export {default as Monsters} from './Monsters/Monsters';
// export {default as Spells} from './Spells/Spells';
