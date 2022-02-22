// index           [0]          [1]          [2]        [3]          [4]
var pizzas = ["calabresa", "mussarela","marguerita","portuguesa","bacon"];

console.log(pizzas);
console.log(pizzas[2]);

pizzas.push("carne seca");
pizzas.push("banana com canela");

console.log(pizzas);

pizzas.pop();

console.log(pizzas);

delete pizzas[3];
pizzas.splice(4,1);
console.log(pizzas);

pizzas[3]="portuguesa";
console.log(pizzas);

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);



drawSprites();




}