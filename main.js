let listOfNames = [prompt("Enter names:")];

let arrNames = listOfNames.toString().split(', ');

let index = 0;

for(let names of arrNames){
    console.log(`"<li>${++index} ${names}</li>"`);
}