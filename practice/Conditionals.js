// The second conditional statement we will learn about is the 'switch...case' statement. This is often used as an alternative to the 'if...else' statements especially if we have multipleconditions to deal with. There are three things to consider here; 
// 1. Case - starts a case block
// 2. Break - stops a 'switch' statement from running the next case.This means it will execute each code individually as long as there is a break command in between cases.
// 3. Default -this is to run the code if there is no matching case is found (more like returning null)
let age = 15;
switch (age) {
  case 10:
    console.log("Age is 10");
    break;
  case 20:
    console.log("Age is 20");
    break;
  default:
    console.log("Age is neither 10 or 20");
};
//Keep in mind that its important that the data types in the variables and cases match because the 'switch...case' statement does NOT accept type cercion (This is where in Javascript, when you run a code with different data types, it will have an output but in this case nothing will be logged into the console.)
//It is often used in bulk cases look at this example;
//Instead of;
let weekdayNumber = 1;

if (weekdayNumber === 0) {
  console.log("Sunday");
} else if (weekdayNumber === 1) {
  console.log("Monday");
} else if (weekdayNumber === 2) {
  console.log("Tuesday");
} else if (weekdayNumber === 3) {
  console.log("Wednesday");
} else if (weekdayNumber === 4) {
  console.log("Thursday");
} else if (weekdayNumber === 5) {
  console.log("Friday");
} else if (weekdayNumber === 6) {
  console.log("Saturday");
} else {
  console.log("The weekday number is invalid");
}
//We use switch because its less tiresome to write like so;
let dayNumber = 1;

switch (dayNumber) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  default:
    console.log("The weekday number is invalid");
}

