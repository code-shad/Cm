
function changePlayerNames() {
    var playerOne = prompt("Enter player one's name: ");
    var playerTwo = prompt("Enter player two's name: ");
    document.querySelector(".player1").innerHTML = playerOne;
    document.querySelector(".player2").innerHTML = playerTwo;
}

function rollDice() {
    var p1DiceNumber = Math.floor(Math.random() * 6) + 1;
    var p2DiceNumber = Math.floor(Math.random() * 6) + 1;

    // var player1 = document.getElementById("p1Face1");
    document.querySelector("#p1Face" + p1DiceNumber).style.visibility = "visible";

    // var player2 = document.getElementById("p2Face1");
    document.querySelector("#p2Face" + p2DiceNumber).style.visibility = "visible";



    if (p1DiceNumber > p2DiceNumber) {
        document.querySelector("h5").setAttribute("visibility", "visible");
        document.querySelector("h5").innerHTML = playerOne + " Won! 🥇🏆";
    } else if (p1DiceNumber < p2DiceNumber) {
        document.querySelector("h5").setAttribute("visibility", "visible");
        document.querySelector("h5").innerHTML = playerTwo + " Won! 🥇🏆";
    } else {
        document.querySelector("h5").innerHTML = "Tie 🙈"
         document.querySelector("h5").setAttribute("visibility", "visible");
    }
}
