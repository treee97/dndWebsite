const URL = "https://www.dnd5eapi.co/api";

export const getSpells = async () => {

    try{
    const response = await fetch(`${URL}/spells`);
    const data = await response.json();

    const index = Math.floor(Math.random() * data.results.length);
    
    const spellURL = data.results[index].url;
    const spellResponse = await fetch(`https://www.dnd5eapi.co${spellURL}`);
    const spellData = await spellResponse.json();

        console.log(spellData)

    return spellData;

    
    } catch (error) {
        console.log(error);
      }


}