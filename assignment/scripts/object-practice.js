console.log('***** Object Practice *****')

// Add the required code to complete the tasks below

/* 1. Create an object literal to represent you!
  - Give the object a 'firstName & (separate) 'lastName' property
  - Give it a boolean 'hasSiblings' property
  - Give it  a numeric 'shoeCount' property
  - Also give it an array 'favThreeFoods'
*/
const me = {
  // TODO - add properties here
  firstName: 'Koffi', // how do I comment that this is my first name?
  lastName: 'Kittleson', // last name...
  hasSiblings: 5, // 4 brothers and 1 sister
  shoeCount: `${3} pairs`, // I just dont throw out my old ones when I get new ones
  favThreeFoods: ['Ramen', 'Pizza', 'Burritos'] // Burritos is last, but no where near least
};
console.log('A little about me:', me);

/* 2. Accessing object properties.
  - Create a variable called fullName
  - Use the firstName & lastName properties of the object you
    created above to set its value.
  - Console.log fullName
*/

// object notation requres quotations.. interesting!
let fullName = me['firstName'] + ' ' + me['lastName'];
console.log(fullName); // logs ma name

/* 3. Nested arrays
  - Console.log your first favorite food
  - Console.log your last favorite food
*/
//two logs with one console!
console.log(me['favThreeFoods[0]'], me['favThreeFoods[2]']);


/* 4. Change a property of an existing object.
  - Console.log your current shoe count.
  - Guess what?! You just got a new pair of shoes!!!
  - Set your object's shoeCount to be what it was plus 1
  - Console.log your updated shoe count.
*/


/* 5. Add a new property to an existing object.
  - Add a 'favoriteColor' to your existing object
  - Do this the same way you updated the variable above
  - Cool huh? It works, even though it wasn't there before
  - Console.log your object
*/
