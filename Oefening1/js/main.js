
"use strict";
const message ="Hello World"; // Constante die niet meer van waarde mag wijzingen. Kan niet meer her-declareert worden
let hi = "Hello World"; // let -> kan geherdefinieerd worden. 
hi = "TEstje"
console.log(message);
console.log(hi);

hi =25
console.log(typeof(hi));

// Data types are flexible
const firstname ="Joske"
let age= 43
console.log(firstname + " is " + age + " years old"); //concatena string+number-> becomes string
console.log(`${firstname} is ${age} years old`); // use backtick and ${}to have inline variables