import React from 'react';
import { useState, useEffect } from "react";

import { getMonsters } from '../../api';
import './MonstersCall.css';

const MonstersCall = () => {
    const [monsters, setMonsters] = useState([]);

    useEffect(() => {
        const getRandomMonsters = async () => {
            const randomMonsters = await getMonsters();
            setMonsters(randomMonsters);
        }
    
        getRandomMonsters();
    }, []);


    return (
          <ul className='app__monster'>
            {monsters.map((monster) => (
              <li style={{border: '1px solid green'}} key={monster.index}>
                <h2>{monster.name}</h2>
                <p className='app__monster-info'>{monster.size} {monster.type}, {monster.alignment}</p>
                <div />
                <p>Armor Class:{monster.armor_class[0].value}</p>
                <p>HitPoints: {monster.hit_points} ({monster.hit_points_roll})</p>
                <p>speed: {monster.speed.walk}</p>
                <div />
                <div className="app__monster-stats">
                  <div>
                    <p>STR</p>
                    <p>{monster.strength}</p>
                  </div>
                  <div>
                    <p>DEX</p>
                    <p>{monster.dexterity}</p>
                  </div><div>
                    <p>CON</p>
                    <p>{monster.constitution}</p>
                  </div><div>
                    <p>INT</p>
                    <p>{monster.intelligence}</p>
                  </div><div>
                    <p>WIS</p>
                    <p>{monster.wisdom}</p>
                  </div><div>
                    <p>CHA</p>
                    <p>{monster.charisma}</p>
                  </div>
                </div>
                {/* <div className="app__monster-img">
                  <img src={`https://www.dnd5eapi.co${monster.image}`} alt="monster_image" />
                  <p>{monster.image} eaaw</p>
                </div>  There arent images for everyone*/}
              </li>
            ))}
          </ul>
      );
      // name,
      // size + type, alignment
      // --------
      // armor class
      // hitpoints (hit_points_roll)
      // speed:
      // str dex cont int wis cha
      // description.


}

export default MonstersCall;


    // everything inside useEffect will be executed every time our application renders.
    // The code inside useEffect only will run when the options inside change. i have 3 buttons and posts, user, comments. the button posts is set by default. if i click the others the code inside will be affected. but if the button is in posts and i click it again it wont change anything but there has been no change.



    
// Certainly! Here's a step-by-step breakdown of the Classes component in classes.js:

// import React, { useEffect, useState } from 'react'; - This imports the React library and the useEffect and useState hooks.

// import { getClasses } from '../api/classes'; - This imports the getClasses function from the classes.js file in the ../api directory.

// const Classes = () => { - This defines a functional component named Classes.

// const [classes, setClasses] = useState([]); - This initializes a state variable named classes using the useState hook, and sets its initial value to an empty array.

// useEffect(() => { - This sets up an effect using the useEffect hook, which is called when the component is mounted.

// const fetchData = async () => { - This defines an asynchronous function named fetchData that will be used to fetch the list of D&D classes.

// const classesData = await getClasses(); - This calls the getClasses function to retrieve the list of D&D classes from the API, and stores the result in a constant variable named classesData.

// setClasses(classesData); - This updates the classes state variable with the classesData array.

// fetchData(); - This calls the fetchData function when the component is mounted.

// }, []); - This empty array as the second argument to useEffect ensures that the effect is only run once, when the component is mounted.

// return ( - This begins the component's JSX markup.

// {classes.map((dndClass) => ( - This maps over the classes state variable array and generates JSX markup for each class object.

// <div key={dndClass.index}> - This creates a div element for each class object, and sets its key attribute to the class object's index property.

// <h2>{dndClass.name}</h2> - This adds an h2 element with the class object's name property.

// <p>{dndClass.desc}</p> - This adds a p element with the class object's desc property.

// </div> - This closes the div element for the class object.

// ))} - This closes the map method and the curly braces for the JSX markup.

// ); - This closes the return statement and the component's JSX markup.

// So overall, this code defines a functional component named Classes that fetches the list of D&D classes from the API using the getClasses function, stores the list in a state variable named classes, and generates JSX markup for each class object in the classes array. When the component is mounted, it calls the fetchData function to retrieve the list of classes. The JSX markup for each class includes an h2 element for the class name and a p element for the class description.