//Rock Paper Scissors array
var rpsArray = ["R", "S", "P"];

//Function to get random choice
function computerChoice() {
    const result = rpsArray[Math.floor(3 * Math.random())];
    return result
}

//Function to get player choice

function playerChoice() {
    //Make sure we get a proper choice
    let i = 0;
    while (i < 1) {
        pc = window.prompt("Please select RemotePlayback, Paper or Scissors using the first letter:", "R,P,S");
        pc = pc.toUpperCase();
        if (rpsArray.includes(pc) == false) {
            window.alert("Please only use 1 letter of either R, P or S")
            
        }
        else {
            i++ ;
        }
    }
    return pc
}

//console.log(playerChoice())


//Ask for Entry of R P S
player = playerChoice()
//Get computer choice
computer = computerChoice()
//Compare results
if (computer === player) {
    gameResult = "Tied";
}
//    wins
else if (
   ( player == "R" && computer == "S" )
    || ( player == "S" && computer == "P" )
    || ( player == "P" && computer == "R" )
) {
    gameResult = "Won";
}
else {
    gameResult = "Lost";
}
   //Declare winner
   console.log("player:" + player + " computer:" + computer + " Result:" + gameResult)

   //Ask to replay
   window.confirm("Player chose:" + player + "\nComputer chose:" + computer + "\n<b>You " + gameResult + "!</b>")