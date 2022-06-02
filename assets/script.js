//Rock Paper Scissors array
var rpsArray = ["R", "S", "P"];
var rpsIcons = ["R 🗿", "S ✂️", "P 📜"];
 gameResults = {
    Won: 0,
    Lost: 0,
    Tied: 0
};


//Choose an icon
function iconChoice(Test) {
    indNo = rpsArray.lastIndexOf(Test);
    return rpsIcons[indNo]
}

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
        pc = window.prompt("Please select RemotePlayback, Paper or Scissors using the first letter:");
        pc = pc.toUpperCase();
        if (rpsArray.includes(pc) == false) {
            window.alert("Please only use 1 letter of either R, P or S")

        }
        else {
            i++;
        }
    }
    return pc
}

//Begin while loop
var contin = 0;
while (contin < 1) {

    //Ask for Entry of R P S
    player = playerChoice();
    //Get computer choice
    computer = computerChoice();
    //Compare results
    if (computer === player) {
        gameResult = "Tied";
    }
    //    wins
    else if (
        (player == "R" && computer == "S")
        || (player == "S" && computer == "P")
        || (player == "P" && computer == "R")
    ) {
        gameResult = "Won";
    }
    else {
        gameResult = "Lost";
    }
    //Declare winner
    console.log("player:" + player + " computer:" + computer + " Result:" + gameResult)

    //log Score
    window.confirm("Player chose: " + iconChoice(player) + "\nComputer chose: " + iconChoice(computer) + "\nYou " + gameResult + "!" );


   gameResults[gameResult] = gameResults[gameResult] + 1 ; 

    console.log( gameResults.Won + gameResults.Lost + gameResults.Tied)
    //Ask to replay
    continueChoice = window.confirm("Would you like to try again?\nWins: " + gameResults.Won + "\nLosses: " + gameResults.Lost + "\nTied: " + gameResults.Tied );
    if (continueChoice) {
        contin = 0;
    } else {
        //end game
        contin = 1
    }
}
window.alert("Final results\nWins: " + gameResults.Won + "\nLosses: " + gameResults.Lost + "\nTied: " + gameResults.Tied)