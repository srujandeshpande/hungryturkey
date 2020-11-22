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


(async () => {
  const client = await pool.connect();
  var lol = await client.query('CREATE TABLE IF NOT EXISTS food_tb (id UUID PRIMARY KEY, address STRING, food STRING, quant STRING);');
  client.release()
})();

console.log("Welcome to Hungry Turkey!");
console.log("Enter 1 to add new food.");
console.log("Enter 2 to view all food.");

let choice = prompt('Enter choice: ');

if(choice == 1){
  let address = prompt("Enter address: ");
  let food = prompt("Enter type of food: ");
  let quant = prompt("Enter approx. number of servings: ");
  var id = uuidv1();

  (async () => {
    const client = await pool.connect();
    var lol = await client.query(`INSERT INTO food_tb (id, address, food, quant) VALUES ('${id}', '${address}', '${food}', '${quant}');`);
    console.log("Successfully added! Thanks for your contribution :)")
    client.release()
  })();
}
else{
  (async () => {
    const client = await pool.connect();
    var res = await client.query(`SELECT address,food,quant FROM food_tb;`);
    console.log(res.rows);
    client.release()
  })();
  console.log("Happy Holidays!");
}
