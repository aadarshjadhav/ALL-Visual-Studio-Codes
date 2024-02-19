/*
7.Write a TypeScript program that creates type aliases for complex 
data types such as objects or custom types. 
Use them to define variables and explain how they improve code readability.  

*/

/*
To implement the type alias, use the type keyword to create a new type. 
Use type to declare pet as a type:\
*/

// Custom types, varialbe pet has 2 types, cat and dog
type pet = 'cat' | 'dog';
let favouritepet:pet='cat'

// Type aliases for complex objects
type User = {
    id: number;
    name: string;
    email: string;
  };
  
  type Address = {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  
  // Type alias for a custom contact information type
  type ContactInfo = {
    phoneNumber: string;
    emailAddress: string;
  };

  //Here is the type alias
  type PhoneInfo= ContactInfo
  
  // Define variables using the type aliases
  const user1: User = { id: 1, name: "John Doe", email: "johndoe@example.com" };
  const address1: Address = { street: "123 Main St", city: "Anytown", state: "CA", zip: "12345" };
  const contactInfo1: ContactInfo = { phoneNumber: "555-1234", emailAddress: "janesmith@example.com" };
  
  // Function using type aliases for clarity
  function sendWelcomeEmail(user: User) {
    console.log(`Welcome to our site, ${user.name}!`);
  }
  
  sendWelcomeEmail(user1); // Correct usage
  // sendWelcomeEmail(address1); // Type error, address1 is not a User

//But a type can used with any type.
type num = 1 | 2; // number
type bool = true | false; // boolean
type obj = {a: 1} | {b: 2}; // object
type func = (() => string) | (() => void); // function


//Another example of type Aliases
type CarYear = number
type CarType = string
type CarModel = string

type Car2 = {
  year: CarYear,
  type: CarType,
  model: CarModel
}

const carYear: CarYear = 2001
const carType: CarType = "Toyota"
const carModel: CarModel = "Corolla"

const car: Car2 = {
  year: carYear,
  type: carType,
  model: carModel
};



