var player1 = prompt("Enter player 1 name")
var player2 = prompt("Enter player 2 name")
var number = Math.random()
var headTail =Math.round(number * 1)
if ( headTail === 1) {
    alert(player1 + " won")
}
else {
    alert(player2+" won")
}