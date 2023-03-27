import {GiInvertedDice1, GiInvertedDice2, GiInvertedDice3, GiInvertedDice4, GiInvertedDice5, GiInvertedDice6 } from 'react-icons/gi';


const dndbase = [
    {
        number: 12,
        name: "Classes",
        dice: <GiInvertedDice1/>,
        text: "Available to choose"
    },
    {
        number: 12,
        name: "Races",
        dice: <GiInvertedDice2/>,
        text: "And more than .. in all the addons"

    },
    {
        number: 60,
        name: "Backgrounds",
        dice: <GiInvertedDice3/>,
        text: "To add depth to your character"

    },
    {
        number: 16,
        name: "Languages",
        dice: <GiInvertedDice4/>,
        text: "Many fictional languages to pick"

    },
    {
        number: 18,
        name: "Skills",
        dice: <GiInvertedDice5/>,
        text: "To be proficient with"

    },
    {
        number: 120,
        name: "Spells",
        dice: <GiInvertedDice6/>,
        text: "Hundreds of spells to customize your hero"

    },
];

export default { dndbase };