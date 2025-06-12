 // These are short notes on arrays
// You can mix items in an array and always remember when counting in arrays always start with 0
let birds = ['tooty', 1, 13.2]
// In our example the number ofarrays are 2 and not 3 (0 1 2)
// To find the last array which is a float you do;
birds[0];

console.log(birds[0]);
console.log(birds[1]);
// To add something at the end of the array you include the function 'push()' like so;
birds.push('tweety');
console.log(birds);
// To remove an item at the end of an array we use the 'pop()' function like so;
birds.pop('tweety');
// To add an item at the beginnig, thats at index 0 we use the function 'unshift()' like so;
birds.unshift('parrot');
// To remove an item at the beginnig, thats at index 0 we use the function 'shift()' like so;
birds.shift('parrot');
// To find and return the index of an item in an array we use the function of 'indexOf()' and if the item isn't found in the array it will return '-1'. Here is an example:
let fish = ['tuna', 'nemo', 'goldie']
let position = fish.indexOf('tuna');
console.log(position);
// To get the legnth of the array, we use 'length' like so;
console.log(fish.length);
// Please note how differently length is used. This is because unlike the others, length is a property of the array and not a function so we do not use parenthesis. PS: We only use parenthesis for functions and not properties.
// Lets do an exercise;
let colours = ['red', 'green', 'blue']
// Add 'black' to the last part of the index
colours.push('black');
console.log(colours);
// Remove 'red'
colours.shift('red');
console.log(colours);
// Swap 'green' and 'blue'
[colours[1], colours[2]] = [colours[2], colours[1]];
console.log(colours);
// Add 'yellow' at the beginning
colours.unshift('yellow');
console.log(colours);
