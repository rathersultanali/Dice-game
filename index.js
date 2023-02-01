var dicePlayer1 = Math.floor (Math.random () * 6) + 1;
var dicePlayer2 = Math.floor (Math.random () * 6) + 1;
dicePlayer1 = "images/dice" + dicePlayer1 + ".png";
dicePlayer2 = "images/dice" + dicePlayer2 + ".png";
document.querySelector ("#dice-image-p1").setAttribute ("src", dicePlayer1);
document.querySelector ("#dice-image-p2").setAttribute ("src", dicePlayer2);
if (dicePlayer1 === dicePlayer2)
{
    document.querySelector("h1").textContent="Draw!";
}
else if (dicePlayer1 > dicePlayer2)
{
    document.querySelector("h1").textContent="🚩 Player 1 Wins!";
    document.querySelector("h1").classList.add("winner-heading");
    document.querySelector("h1").classList.remove("game-heading");
    // document.querySelector("h1").classList.toggle("game-heading"); This code is used to toggle the class
}
else
{
    document.querySelector("h1").textContent="Player 2 Wins! 🚩";
    document.querySelector("h1").classList.add("winner-heading");
    document.querySelector("h1").classList.remove("game-heading");
}