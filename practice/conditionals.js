// Conditionals in javascript are meant to be used to run certain commands on specific conditions. There are few conditionals but we will talk about 'if...else' and 'switch....case'
// We will start with the 'if....else', this is used to run functions IF a certain condition is met and if else then you can choose what happens. Here is how the syntax looks like;
//if (condition) {
//here you put the code to execute IF the condition is met or if its true
//}
// Let's say you want to go to a party that requires 200 dollars this is how you use the if statement;
let cash = 200;
if (cash > 100) {
console.log('go to the party')};
//now lets introduce the ELSE statement. Lets imagine the person who wants to go to the party needs 300 but you have less.
let money = 300;
if (money < 300) {
console.log('no party')
}else{
console.log('yes party')};
// We are going to use a more complex example:
// Lets imagine there is a trip to Nairobi for 3 days with sightseeing  which requires 5000. Lets create!
let trip = 7000;
if (trip > 5000) {
console.log('Ready for trip')
}else if (trip > 3000) {
	console.log('Ready for trip but only staycation')
}else {
console.log('No trip')
};
//Here, the first 'if' the balance is more than 5000 then the person is elligible for the trip and sight seeing, then we get to the 'else....if' part, if the money is more than 3000 then you can afford just a staycation and the last 'else' is if you do not have money for the trip then it means you dont go for a trip.
console.log("The end!");
