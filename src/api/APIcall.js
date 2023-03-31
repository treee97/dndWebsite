
const URL = 'https://www.dnd5eapi.co/api';
// holds the base URL for the D&D API.

export const getMonsters = async () =>{
  // This exports a function named getClasses that is marked as async, which means it returns a PROMISE.
  try {
    const response = await fetch(`${URL}/monsters`);
    // sends an HTTP GET request to the api endpoint /classes
    // await waits for the response to be received before continuing
    const data = await response.json();
    // this parses the response object to convert the json into an JS object. Await waits for this to be completed.
    return data.results;
    // this returns the resultsof the response data.

  } catch (error) {
    console.log(error);
  }
}

// export const getClasses = async () => {
//   try {
//     const response = await fetch(`${API_BASE_URL}/classes`);
//     const data = await response.json();
//     const classes = data.results;
//     const randomClasses = [];

//     while (randomClasses.length < 3) {
//       const index = Math.floor(Math.random() * classes.length);
//       if (!randomClasses.includes(classes[index])) {
//         randomClasses.push(classes[index]);
//       }
//     }

//     return randomClasses;
//   } catch (error) {
//     console.error(error);
//   }
// };