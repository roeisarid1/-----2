//task 1
let person = { name: "roei", age: 26, IsStudent: true };
console.log(person);

//task 2
console.log(`persons name : ${person.name}`);
console.log(`Is the person a student? : ${person["IsStudent"]}`);

//task 3
let new_person_value = 27;
person.age = new_person_value;
person.hobby = "surfing";
console.log(person);

//task 4
let movie = {
  title: "The Shawshank Redemption",
  genre: "Drama",
};
movie.releaseYear = 1994;
movie.isPopular = true;
movie.genre = "Drama, Crime";
console.log(movie);

//task 5
let car = { make: "BMW", model: "Z4", year: 2010, color: "white" };

for (let key in car) {
  console.log(`${key} : ${car[key]}`);
}

//task 6
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

function CountNumOfPropertysInObject(obj) {
  let counter = null;
  for (let key in obj) {
    counter++;
  }
  return counter;
}
console.log(CountNumOfPropertysInObject(movie));
