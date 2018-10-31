
//business logic
var playerOne = new Players(0, 0);

function Players (user, total, turn) {
  this.user = user,
  this.total = 0,
  this.turn = 0
}

Players.prototype.rollDi = function() {
  var roll = Math.floor(Math.random()*(7-1) + 1);
  if (roll !== 1){
  this.turn = roll + this.turn;
  console.log(this.turn);
} else if (roll === 1){
  this.total = this.turn - this.turn;
  console.log(this.total)
}
}

Players.prototype.addScore = function() {
  this.total = this.turn + this.total;
  console.log(this.total);
}

// Players.prototype.endTurn = function() {
//   if (this.turn - (this.turn + roll) === 1) {


playerOne.rollDi();
playerOne.addScore();













//user interface logic

$(document).ready(function() {

});
