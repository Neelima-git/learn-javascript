/* 
Template Literals(Template Strings) 
Template literals are enclose by the backticks(``)

They are used to :
1. Embed variables or expressions in the strings
2. Write multiline strings

These variables or expressions are included using the dollar sign with curly braces ${}
E.g, `some text ${expression}`
*/

//Embedding variables
let firstName = "Neelima";
console.log(`Halo ${firstName}!`);

//Embedding expressions
let res = `The sum of 4 and 5 is ${4 + 5}`;
console.log(res);

//Embedding - Object property
let person = { name: "Neelima" };
console.log(`My name is ${person.name}`);

//Multiline String
console.log(`Hello ${firstName}, 
Good Morning,
Have a great day!`);
