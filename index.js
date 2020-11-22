const prompt = require('prompt-sync')({sigint: true});
var async = require('async');
var pg = require('pg');
const { v1: uuidv1 } = require('uuid');

var config = {
    user: 'maxroach',
    host: '104.196.201.188',
    database: 'turkey',
    port: 26257
};

var pool = new pg.Pool(config);

console.log("Enter 1 to add new food.");
console.log("Enter 2 to view all food.");

let choice = prompt('Enter choice: ');

if(choice == 1){
  let address = prompt("Enter address: ");
  let food = prompt("Enter type of food: ");
  let quant = prompt("Enter approx. number of servings: ");
}
else{
  //display all data
}

console.log(guess);
