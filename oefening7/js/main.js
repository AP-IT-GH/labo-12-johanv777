"use strict";

const startSaldo = 1000;
const interest = 3.5;
let numberOfYears = 6;
let endSaldo = startSaldo * ((1+(interest/100)) ** numberOfYears);
console.log(`Over een periode van ${numberOfYears} jaar stijgt je oorspronkelijke inleg van ${startSaldo}Eur naar ${endSaldo}Eur, aan een rentevoet van ${interest}%`);
