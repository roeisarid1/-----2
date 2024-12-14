//task 1:

let person = { name: "roei", age: 26, IsStudent: true };
console.log(person);

//task 2:

console.log(`persons name : ${person.name}`);
console.log(`Is the person a student? : ${person["IsStudent"]}`);

//task 3:

let new_person_value = 27;
person.age = new_person_value;
person.hobby = "surfing";
console.log(person);

//task 4:

let movie = {
  title: "The Shawshank Redemption",
  genre: "Drama",
};
movie.releaseYear = 1994;
movie.isPopular = true;
movie.genre = "Drama, Crime";
console.log(movie);

//task 5:

let car = { make: "BMW", model: "Z4", year: 2010, color: "white" };

for (let key in car) {
  console.log(`${key} : ${car[key]}`);
}

//task 6:

let firstPerson = { name: "udi markel", age: 28 };
let secondPerson = { name: "guy kirshen", age: 30 };

function combinePeople(obj1, obj2) {
  let combinedpersons = {
    "first person name": obj1.name,
    "first person age": obj1.age,
    "second person name": obj2.name,
    "second person age": obj2.age,
  };
  return combinedpersons;
}
let combineperson = combinePeople(firstPerson, secondPerson);
console.log(combineperson);

//task 7:

function CountNumOfPropertysInObject(obj) {
  let counter = null;
  for (let key in obj) {
    counter++;
  }
  return counter;
}
console.log(CountNumOfPropertysInObject(movie));

//another option :

function CountNumOfPropertysInObject2(obj) {
  let KeysArray = Object.keys(obj); //creates an array of keys
  let counter = KeysArray.length;
  return counter;
}
console.log(CountNumOfPropertysInObject2(movie));

//task 8:
delete person.IsStudent;
console.log(person);

//task 9:
function hasProperty(obj, prop) {
  let exsits = false;
  for (let key in obj) {
    if (key === prop) {
      exsits = true;
      break;
    }
  }
  return exsits;
}

let answer = hasProperty(car, "make");
console.log(answer);

//task 10:

function updatePerson(person, key, value) {
  let KeyInArray = false;
  let ArrayOfKeys = Object.keys(person);
  for (let keyofarray of ArrayOfKeys) {
    if (keyofarray === key) {
      KeyInArray = true;
      break;
    }
  }
  if (KeyInArray) {
    person[key] = value;
  } else {
    let newproperty = key;
    person[newproperty] = value;
  }
}

updatePerson(person, "age", 36);
console.log(person);
updatePerson(person, "city", "TLV");
console.log(person);

//PART 2
//task 1

let fruits = ["banana", "apple", "orange", "kiwi", "watermellon"];
console.log(fruits);

//task 2
console.log(`first element of the array : ${fruits[0]}`);
console.log(`last element of the array : ${fruits.at(-1)}`);
console.log(`last element of the array : ${fruits[2]}`);

//task 3

fruits.push("bluberry");
fruits.unshift("pear");
fruits.pop();
console.log(fruits);

//task 4
for (let index in fruits) {
  console.log(fruits[index]);
}

for (let fruit of fruits) {
  console.log(fruit);
}

//task 5
let arraysize = fruits.length;
console.log(arraysize);

//task 6
function isInArray(array, element) {
  let inarray = false;
  for (let index in array) {
    if (array[index] === element) inarray = true;
  }
  return inarray;
}

//task 7
console.log(fruits.sort());

//task 8
console.log(fruits.reverse());

//task 9
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(numbers);

function filterEvenNumbers(array) {
  let EvenArray = [];
  for (let number in array) {
    if (number % 2 === 0) {
      EvenArray.push(number);
    }
  }
  return EvenArray;
}
console.log(filterEvenNumbers(numbers));

//task 10
let vegetables = ["tomato", "onion", "garlic"];
let combinearray = [...vegetables, ...fruits];
console.log(combinearray);
