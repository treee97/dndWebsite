
const URL = 'https://www.dnd5eapi.co/api';
// holds the base URL for the D&D API.

export const getMonsters = async () =>{
  // This exports a function named getClasses that is marked as async, which means it returns a PROMISE.
  try {
    const response = await fetch(`${URL}/monsters`);
    // sends an HTTP GET request to the api endpoint /monster
    // await waits for the response to be received before continuing
    const data = await response.json();
    // this parses the response object to convert the json into an JS object. Await waits for this to be completed.
    const randomMonsters = [];

    while (randomMonsters.length < 4) {
      const index = Math.floor(Math.random() * data.results.length);
      const monsterUrl = data.results[index].url;
      const monsterResponse = await fetch(`https://www.dnd5eapi.co${monsterUrl}`);
      const monsterData = await monsterResponse.json();

      if (!randomMonsters.some((monster) => monster.index === monsterData.index)) {
        randomMonsters.push(monsterData);
      // console.log(`this is randomMonsters ${randomMonsters}`);

      }
    }
    
    return randomMonsters;

  } catch (error) {
    console.log(error);
  }
}
// ⁡⁢⁣⁢DATA⁡ is the entire response object returned by the API, which includes metadata in addition to the actual data
//  ⁡⁣⁣⁢RESULTS⁡ is a ⁡⁢⁣⁢​‌‍‌‍‍𝗽𝗿𝗼𝗽𝗲𝗿𝘁𝘆​⁡ of the data object that contains the actual data that you're interested in.





// const MonsterList = () => {
//   const [monsters, setMonsters] = useState([]);

//   useEffect(() => {
//     const fetchMonsters = async () => {
//       const response = await fetch('https://www.dnd5eapi.co/api/monsters');
//       const data = await response.json();
//       setMonsters(data.results);
//     };
//     fetchMonsters();
//   }, []);

//   const getRandomMonsters = (monsterList) => {
//     const selectedMonsters = [];
//     while (selectedMonsters.length < 4) {
//       const randomIndex = Math.floor(Math.random() * monsterList.length);
//       const randomMonster = monsterList[randomIndex];
//       if (!selectedMonsters.includes(randomMonster)) {
//         selectedMonsters.push(randomMonster);
//       }
//     }
//     return selectedMonsters;
//   };

//   const [selectedMonsters, setSelectedMonsters] = useState([]);

//   useEffect(() => {
//     if (monsters.length > 0) {
//       const randomMonsters = getRandomMonsters(monsters);
//       setSelectedMonsters(randomMonsters);
//     }
//   }, [monsters]);

//   const [selectedMonsterData, setSelectedMonsterData] = useState([]);

//   useEffect(() => {
//     const fetchSelectedMonsters = async () => {
//       const selectedMonsterData = [];
//       for (let monster of selectedMonsters) {
//         const response = await fetch(`https://www.dnd5eapi.co${monster.url}`);
//         const data = await response.json();
//         selectedMonsterData.push(data);
//       }
//       setSelectedMonsterData(selectedMonsterData);
//     };
//     if (selectedMonsters.length > 0) {
//       fetchSelectedMonsters();
//     }
//   }, [selectedMonsters]);

//   return (
//     <div>
//       <h2>Randomly Selected Monsters:</h2>
//       <ul>
//         {selectedMonsterData.map((monster) => (
//           <li key={monster.index}>
//             <h3>{monster.name}</h3>
//             <p>Size: {monster.size}</p>
//             <p>Type: {monster.type}</p>
//             <p>Alignment: {monster.alignment}</p>
//             <p>
//               Armor Class:{" "}
//               {monster.armor_class.map((ac) => `${ac.type} ${ac.value}`).join(", ")}
//             </p>
//             <p>Hit Points: {monster.hit_points}</p>
//             {/* add more properties as needed */}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };