//  Create a multiline string using template literals  
const message = `
Hello Khanya,

Welcome to JavaScript.
This string spans multiple lines.

Good luck with your coding journey!
`;

console.log(message);

// Create a function that uses template literals for HTML generation
function createProfile(name, role, location) {
  return `
    <div class="profile">
      <h1>${name}</h1>
      <p>Role: ${role}</p>
      <p>Location: ${location}</p>
    </div>
  `;
}

const profile = createProfile("Khanya", "Developer", "South Africa");
console.log(profile);

//  Convert regular functions to arrow functions 
// Regular function
function square(a, b) {
  return a * b;
}
console.log(square(5, 3)); // Output: 15

// Arrow function
const squareArrow = (a, b) => a * b;

console.log(squareArrow(5, 3)); // Output: 15

// Use arrow functions with array methods 
const fruits = ["orange", "pear", "cherry"];

fruits.forEach(fruit => {
  console.log(fruit.toUpperCase());
});