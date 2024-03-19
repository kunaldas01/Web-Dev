// import animals, { useAnimals } from "./data";

// //Destructuring Arrays
// // console.log(animals);
// const [cat, dog] = animals;
// // console.log(cat);

// const [animal, makeSound] = useAnimals(cat);
// console.log(animal);
// makeSound();

// //Destructuring Objects
// // const { name, sound} = cat;
// // const { name: catName, sound: catSound } = cat;
// // const { name = "Fluffy", sound = "Purr" } = cat;
// // const {feedingRequirements: {food, water} } = cat;
// // console.log(food);

import React from "react";
import ReactDOM from "react-dom";
import cars from "./cars";

const [honda, tesla] = cars;

const { coloursByPopularity: [hondaTopColour], speedStats: { topSpeed: hondaTopSpeed } } = honda;
const { coloursByPopularity: [teslaTopColour], speedStats: { topSpeed: teslaTopSpeed } } = tesla;

// const { coloursByPopularity: [hondaTopColour] } = honda;
// const { speedStats: { topSpeed: hondaTopSpeed } } = honda;

// const { coloursByPopularity: [teslaTopColour] } = tesla;
// const { speedStats: { topSpeed: teslaTopSpeed } } = tesla;

ReactDOM.render(
    <table>
        <tr>
            <th>Brand</th>
            <th>Top Speed</th>
        </tr>
        <tr>
            <td>{tesla.model}</td>
            <td>{teslaTopSpeed}</td>
            <td>{teslaTopColour}</td>
        </tr>
        <tr>
            <td>{honda.model}</td>
            <td>{hondaTopSpeed}</td>
            <td>{hondaTopColour}</td>
        </tr>
    </table>,
    document.getElementById("root")
);