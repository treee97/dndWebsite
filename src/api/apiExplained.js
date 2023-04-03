const URL = 'https://www.dnd5eapi.co/api';
//  cogemos la URL de la API;

export const getMonsters = async () =>{

// exportamos la funcion getMonsters marcada con async, quiere decir que nos devuelve una promesa
try {
    const response = await fetch(`${URL}/monsters`);
// ⁡⁢⁣⁢𝗳𝗲𝘁𝗰𝗵 𝗵𝗮𝗰𝗲 𝘂𝗻𝗮 𝗽𝗲𝘁𝗶𝗰𝗶𝗼𝗻 𝗛𝗧𝗧𝗣 𝗚𝗘𝗧⁡ del punto /monsters. ⁡⁣⁣⁢𝗲𝗹 𝗮𝘄𝗮𝗶𝘁 ⁡significa que antes de continuar con el codigo se ⁡⁣⁢⁣𝗲𝘀𝗽𝗲𝗿𝗮 𝗮 𝗿𝗲𝗰𝗶𝗯𝗶𝗿⁡ toda la info del punto
const data = await response.json();
// Luego pasamos la informacion recibida en formato json a objeto de JS y el codigo no continua hasta que la info es "parseada"

const randomMonsters = [];
// Creamos un array vacío el cual nos servira luego para "pushear" los items buscados
while (randomMonsters.length < 4) {
// mientras que el tamaño del array sea menor que 4, que haga lo siguiente
const index = Math.floor(Math.random() * data.results.length);
// variable 𝗶𝗻𝗱𝗲𝘅 que escogera un numero ( o item ) random entre el 0 y la cantidad de los items dentro de ⁡⁣⁢⁣𝘂𝗿𝗹/𝗺𝗼𝗻𝘀𝘁𝗲𝗿𝘀 (𝗱𝗮𝘁𝗮.𝗿𝗲𝘀𝘂𝗹𝘁𝘀⁡) 4 veces hasta que el parametro del while se cumpla; (0 y 334 monstruos registrados.)
const monsterUrl = data.results[index].url;
// variable monsterUrl que utiliza la variable index y guarda la propiedad "url" de cada uno de los monstruos cogidos
const monsterResponse = await fetch(`https://www.dnd5eapi.co${monsterUrl}`);
// variable monsterResponse que hace una peticion HTTP GET de la api mas la url del monstruo que se ve asi en la API => "url": "/api/monsters/aboleth" para asi formar la url completa: 𝗵𝘁𝘁𝗽𝘀://𝘄𝘄𝘄.𝗱𝗻𝗱𝟱𝗲𝗮𝗽𝗶.𝗰𝗼/𝗮𝗽𝗶/𝗺𝗼𝗻𝘀𝘁𝗲𝗿𝘀/𝗮𝗯𝗼𝗹𝗲𝘁𝗵 y espera a que la informacion sea recibida antes de continuar
const monsterData = await monsterResponse.json();
// Se vuelve a parsear la data recibida a objeto JS y se espera a que esto ocurra antes de continuar.
if (!randomMonsters.some((monster) => monster.index === monsterData.index)) {
// logica al reves: Si NO Hay monstruos(monster) dentro del array randomMonsters que coincidan
randomMonsters.push(monsterData);
// Si no coinciden con los datos que ya hay en el array, entonces agregamos con push el nuevo item al final del array. push().
    }

} //aqui acaba el while 

return randomMonsters;
// Devolvemos el array ya con 4 monstruos randomizados;

} catch (error) {
    console.log(error);
    // Si ocurre un error durante la ejecucion del codigo anterior aqui saldrá.
  }
}


// ==================== COMPONENTE ===============================//
import { useState, useEffect } from "react";
import { getMonsters } from '../../api';
// importamos la data necesaria si estamos utilizando un componente. Si lo queremos en un mismo archivo, ir a los comentarios de getMonsters en api/MonsterCall

const MonstersCall = () => {
// creamos una funcion
const [monsters, setMonsters] = useState([]);
// destructuramos y utilizamos useState hook. Esto ⁡⁢⁣⁣inicializa "monsters" con un array vacio⁡. setMonsters sera utilizado para actualizar el valor del state.
    useEffect(() => {
// utilizamos el useEffect Hook
    const getRandomMonsters = async () => {
// creamos una funcion async que nos devuelve una promesa
        const randomMonsters = await getMonsters();
// creamos una variable que LLAMA a la funcion getMonsters. Que hace la API call. Y se espera que el codigo ocurra devolviendonos una promesa
        setMonsters(randomMonsters);
//  los resultados que se obtienen de getMonsters se utilizan para el state de "monsters", que este a su vez era un array
        } 

    getRandomMonsters();

}, []); //useEffect acaba aqui

// This part of the code is an ⁡⁣⁣⁢effect hook, which runs after the initial rendering of the component⁡. It defines a function getRandomMonsters that retrieves a list of monsters from an API and updates the state of the component with the new data.

// The useEffect hook takes two arguments: a function and a dependency array. The dependency array is optional, but when included, it tells React when to re-run the effect. An empty dependency array [] means that the effect should only run once, after the initial rendering of the component. So in this case, the effect is only run once, and it calls the getRandomMonsters function to retrieve and update the list of monsters.


return(
    <div>
        <h1>Random Monsters</h1>
          <ul>
            {monsters.map((monster) => (
              <li key={monster.index}>
                {/* ahora utilizamos monsters de useState y lo recorremos. creamos un elemento que hara que cada item sea unico con .index y luego utilizamos la api para llamar a las propiedades que nos convenga */}
                <h2>{monster.name}</h2>
                <p>Size: {monster.size}</p>
                <p>Type: {monster.type}</p>
                <p>Alignment: {monster.alignment}</p>
                <p>AC:{monster.armor_class[0].type}</p>
                <p>AC:{monster.armor_class[0].value}</p>
                <p>HP: {monster.hit_points}</p>
              </li>
            ))}
          </ul>
    </div>
)

}

