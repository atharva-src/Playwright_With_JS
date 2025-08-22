// Object: A container in JavaScript used to store values in key-value pairs.
// Objects are non-primitive data types that allow us to group related data and functionality together.

let tataCurv = {
  modelName: "Adventure",
  exShowroomPrice: 1600000,
  color: "white",
  bootSpace: 530,
  makeYear: 2021,
  details: function () {
      return `${this.modelName} - the ex-showroom price is ${this.exShowroomPrice}`;
  }
  // Objects have a hidden property called "prototype" that allows inheritance in JavaScript.
};

// Accessing Object Properties:
// Properties are key-value pairs defined in an object, and methods are functions defined in an object.

// Retrieve values from an object using dot notation
console.log(tataCurv.exShowroomPrice); // Output: 1600000

// Retrieve values using bracket notation
console.log(tataCurv["modelName"]); // Output: "Adventure"

// Accessing a method within an object
console.log(tataCurv.details()); // Output: "Adventure - the ex-showroom price is 1600000"

// Adding new properties to an object:
tataCurv.engineWarranty = "1 year full replacement";
console.log(tataCurv); // New property 'engineWarranty' added with value "1 year full replacement"

// Adding properties using bracket notation
tataCurv["batteryWarranty"] = "2 years";
console.log(tataCurv); // Adds 'batteryWarranty' with value "2 years"

// Updating existing values:
tataCurv.engineWarranty = "1 year full replacement and 1 year maintenance";
console.log(tataCurv);

// Updating using bracket notation
tataCurv["batteryWarranty"] = "2 years replacement warranty";
console.log(tataCurv);

// Deleting properties:
delete tataCurv.batteryWarranty;
console.log(tataCurv); // 'batteryWarranty' removed

delete tataCurv['engineWarranty'];
console.log(tataCurv); // 'engineWarranty' removed

// Object with an array property and retrieving specific elements from it
let person = {
  name: "Siddhant",
  age: 25,
  skills: ["JavaScript", "Cypress", "Playwright", "PSM", "React/Angular", "Git/GitHub", "Azure", "AWS"]
};

console.log(person.skills[1]); // Output: "Cypress"

// Example of another object with various properties
let data = {
  firstName: "Vihaan",
  lastName: "Mehta",
  age: 28,
  experience: 6,
  skills: ["TypeScript", "CI/CD"],
  position: "Automation Tester"
};

// Retrieving properties
console.log(data.firstName); // Output: "Vihaan"
console.log(data["lastName"]); // Output: "Mehta"

// Adding new properties
data.package = "12 LPA";
console.log(data);

// Adding using bracket notation
data["inHandSalary"] = "10 LPA";
console.log(data);

// Deleting properties
delete data["inHandSalary"];
console.log(data);

// Updating properties
data.package = "15 LPA";
console.log(data);

data["package"] = "18 LPA";
console.log(data);

// Looping through an object's properties using for...in loop
for (let key in data) {
  console.log(`${key}: ${data[key]}`);
}

// Array of Objects example with a filter operation and sorting

const profiles = [
  { firstName: "Vihaan", lastName: "Mehta", age: 28, experience: 6, skills: ["TypeScript", "CI/CD"], position: "Automation Tester" },
  { firstName: "Rohan", lastName: "Joshi", age: 29, experience: 11, skills: ["TypeScript", "JavaScript", "Cypress", "Docker"], position: "Technical Lead" },
  { firstName: "Vihaan", lastName: "Deshmukh", age: 32, experience: 1, skills: ["Python", "TypeScript"], position: "Software Engineer" },
  { firstName: "Ishaan", lastName: "Pandey", age: 31, experience: 14, skills: ["Python", "Cypress"], position: "Systems Engineer" },
  { firstName: "Ishaan", lastName: "Deshmukh", age: 25, experience: 1, skills: ["Java", "Playwright", "JavaScript", "SQL"], position: "Systems Engineer" },
  { firstName: "Rohan", lastName: "Joshi", age: 33, experience: 3, skills: ["JavaScript", "Java", "Docker", "TypeScript"], position: "Full-Stack Developer" },
  { firstName: "Pranav", lastName: "Joshi", age: 24, experience: 2, skills: ["JavaScript", "GitHub Actions", "Playwright", "TypeScript"], position: "Data Analyst" },
  { firstName: "Rohan", lastName: "Nayak", age: 24, experience: 10, skills: ["JavaScript", "GitHub Actions", "Playwright"], position: "Backend Developer" },
  { firstName: "Arjun", lastName: "Nayak", age: 36, experience: 4, skills: ["Java", "Playwright", "Docker"], position: "Systems Engineer" },
  { firstName: "Vikram", lastName: "Joshi", age: 34, experience: 1, skills: ["Python", "GitHub Actions"], position: "Full-Stack Developer" }
];

console.log(profiles);

// Retrieve names of persons with "Cypress" as a skill
profiles.forEach(profile => {
  if (profile.skills.includes("Cypress")) {
      console.log(`${profile.firstName} ${profile.lastName}`);
  }
});

// Filter profiles for persons with more than 3 years of experience
let experiencedProfiles = profiles.filter((profile) => 
  {profile.experience > 3})
console.log(experiencedProfiles);

// Explanation:
// - The 'forEach' method iterates over each profile and checks if "Cypress" exists in 'skills' array.
// - The 'filter' method creates a new array containing only profiles with experience greater than 3 years.
