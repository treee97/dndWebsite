import './App.css';
import { Header, Character, Monsters, Spells } from './containers';
import { Navbar } from './components';
const App = () => (
    <div className="App">

{/* API el focus de la pagina? toda la info sale de la API? Barbarian class.. Trinketss */}
{/* 1- Estilos generales en index.
        - root colors - section paddings - flex center class?
        - a properties - li properties?

    2- Estilos app.css bg_color custom_button-one custom_button-2.. 
    3- Fuente para titulos propia y otra fuente para la pagina
    4- Buscar un icono en react-icons que nos sirva de prop? un dado o un dragon o un hechizo REUTILIZABLE 
    5- API CALL 
    6- Crear SpellCards que nos ayudaran a ver como son los hechizos
    */}

      <Header/>
      <Navbar/>
      <Character/>
      <Monsters/>
      <Spells/>
    </div>
);

export default App;
