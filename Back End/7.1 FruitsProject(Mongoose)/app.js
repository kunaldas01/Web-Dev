import mongoose from "mongoose";

// Connect to mongodb server
mongoose.connect("mongodb://localhost:27017/fruitsDB");

// Creating a Schema
const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Need a name"]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

// Creating a model
const Fruit = mongoose.model("Fruit", fruitSchema);

// Insert document into collection fruits
const apple = new Fruit({
    name: "Apple",
    rating: 7,
    review: "Pretty solid as a fruit"
});

const orange = new Fruit({
    name: "Orange",
    rating: 8,
    review: "Pretty Juicy"
});

const kiwi = new Fruit({
    name: "Kiwi",
    rating: 10,
    review: "Love them"
});

const banana = new Fruit({
    name: "Banana",
    rating: 5,
    review: "Weird Texture"
});

// Insert one document
// fruit.save();


// Insert Many
// Fruit.insertMany([apple, orange, kiwi, banana])
//     .then(function () {
//         console.log("Successfully added fruits into the fruitsDB");
//     })
//     .catch(function (err) {
//         console.log(err);
//     });




// ***********************************************************************************
// Create a collection of persons

const personSchema = new mongoose.Schema({
    name: String,
    age: Number,

    // Establishing relations
    favouriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
    name: "John",
    age: 32
});

// person.save();



// Read from DB
// Fruit.find()
//     .then(function (fruits) {
//         mongoose.connection.close();
//         fruits.forEach(function (fruit) {
//             console.log(fruit.name);
//         })
//     })
//     .catch(function (err) {
//         console.log(err);
//     });



// Validators
const peach = new Fruit({
    rating: 5,
    review: "Weird Texture"
});

// peach.save();

// ***************************************************************************************
// Update

// Fruit.updateOne({ _id: "652961960a3f7113e47e2cb1" }, { name: "Peach", review: "Peaches are good" })
//     .then(() => {
//         console.log("Updated Successfully");
//     })
//     .catch((err) => {
//         console.log(err);
//     });


// *******************************************************************************************
// Delete

// Fruit.deleteOne({ _id: "652961960a3f7113e47e2cb1" })
//     .then(() => {
//         console.log("Deleted Successfully");
//     })
//     .catch((err) => {
//         console.log(err);
//     });


// Delete Many
// Person.deleteMany({ name: "John" })
//     .then(() => {
//         console.log("Successfully deleted all documents");
//     })
//     .catch((err) => {
//         console.log(err);
//     });


// *******************************************************************************************
// Establishing Relationships

const pineapple = new Fruit({
    name: "Pineapple",
    rating: 9,
    review: "Great fruit"
});

// pineapple.save();

const person2 = new Person({
    name: "Garry",
    age: 22,
    favouriteFruit: pineapple
});

// person2.save();


// SECOND 

const strawberry = new Fruit({
    name: "Strawberry",
    rating: 10,
    review: "Super tasty"
});

// strawberry.save();

// Person.updateOne({ _id: "652965f93578a3aef8fd9b01" }, { favouriteFruit: strawberry })
//     .then(() => {
//         console.log("Updated Successfully");
//     })
//     .catch((err) => {
//         console.log(err);
//     });
