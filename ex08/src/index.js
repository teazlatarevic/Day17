// Lodash
const _ = require("lodash");
// only change code below this line
//users nested array with four objects start here
const users = [
  { firstName: "John", lastName: "Doe", age: 24, gender: "male" },
  { firstName: "Jane", lastName: "Doe", age: 5, gender: "female" },
  { firstName: "Jim", lastName: "Carrey", age: 54, gender: "male" },
  { firstName: "Kate", lastName: "Winslet", age: 40, gender: "female" },
];

// users nested array with four objects end here

// getUsers function - list of users starts here
function getUsers() {
  var output = "";
  for (var i = 0; i < users.length; i++) {
    output = `${users[i].firstName} ${users[i].lastName} is ${users[i].age}, ${users[i].gender}`;
    console.log(output);
  }
  return output;
}

// getUsers function - list of users starts here

// findUser(lastName, gender) function starts here
function findUser(lastName, gender) {
  try {
    // ad appropriate code here
    var user = _.find(users, { lastName: lastName, gender: gender });
    var iFindUser = `${user.firstName} ${user.lastName} is ${user.age}, ${user.gender}`;
    return iFindUser;
  } catch (error) {
    return "Cannot read property 'firstName' of undefind"; // Change this line
  }
}
// findUser(lastName, gender) function ends here
// Only change code above this line
getUsers();
console.log(findUser("Winslet", "female")); // Change this line

module.exports = findUser;
