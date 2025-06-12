//A primary school is giving different rewards based on the student's grade:

  //  Students that got an A will get a Chocolate
    //Students that got a B will get a Cookie
    //Students that got a C will get a Candy
    //For any other value, print "No reward to give."

//Create a variable named grade that will store the student's grade
let grades = ["A", "B", "C", "D"]; // List of different grades

for (let grade of grades) {
  switch (grade) {
    case "A":
      console.log("You got an A, so here's a Chocolate for you!");
      break;
    case "B":
      console.log("You got a B, here's a Cookie for you!");
      break;
    case "C":
      console.log("You got a C, there's room for improvement and here's your Candy!");
      break;
    default:
      console.log("No reward to give.");
  }
}
