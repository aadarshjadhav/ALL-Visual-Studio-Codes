/*
7.Write a TypeScript program that creates type aliases for complex
data types such as objects or custom types.
Use them to define variables and explain how they improve code readability.

*/
var favouritepet = 'cat';
// Define variables using the type aliases
var user1 = { id: 1, name: "John Doe", email: "johndoe@example.com" };
var address1 = { street: "123 Main St", city: "Anytown", state: "CA", zip: "12345" };
var contactInfo1 = { phoneNumber: "555-1234", emailAddress: "janesmith@example.com" };
// Function using type aliases for clarity
function sendWelcomeEmail(user) {
    console.log("Welcome to our site, ".concat(user.name, "!"));
}
sendWelcomeEmail(user1); // Correct usage
