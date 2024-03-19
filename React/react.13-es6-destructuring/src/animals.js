const animals = [
  {
    name: "cat",
    sound: "meow",
    feedingRequirements: {
      food: 2,
      water: 3
    }
  },
  { name: "dog", sound: "woof" }
];

function useAnimals() {
  return [
    animals.name,
    function () {
      console.log(animals.sound);
    }
  ];
}

export default animals;
export { useAnimals };

