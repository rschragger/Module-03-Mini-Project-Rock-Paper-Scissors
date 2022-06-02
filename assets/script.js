
var rpsArray =["R","P","S"];

function computerChoice() {

const result = rpsArray[ Math.floor( 3 * Math.random() ) ];
return result
}

   console.log(computerChoice() )