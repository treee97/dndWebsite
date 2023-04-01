
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
      const monster = data.results[index];
      if (!randomMonsters.includes(monster)) {
        randomMonsters.push(monster);
      }
    }
    
    return randomMonsters;

  } catch (error) {
    console.log(error);
  }
}
// So in summary, ⁡⁢⁣⁢DATA⁡ is the entire response object returned by the API, which includes metadata in addition to the actual data, while ⁡⁣⁣⁢RESULTS⁡ is a property of the data object that contains the actual data that you're interested in.

// export const getmonster = async () => {
//   try {
//     const response = await fetch(`${API_BASE_URL}/monsters`);
//     const data = await response.json();
//     const monsters = data.results;
//     const randomMonsters = [];

//     while (randomMonsters.length < 3) {
//       const index = Math.floor(Math.random() * monsters.length);
//       if (!randomMonsters.includes(monsters[index])) {
//         randomMonsters.push(monsters[index]);
//       }
//     }

//     return randomClasses;
//   } catch (error) {
//     console.error(error);
//   }
// };