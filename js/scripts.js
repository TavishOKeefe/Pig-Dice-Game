
function Players (user) {
  this.user = user,
  this.total = 0,
  this.turn = 0
}

Players.prototype.rollDi = function() {
  var roll = Math.floor(Math.random()*(6) + 1);
  if (roll !== 1){
  this.turn += roll;
  console.log(roll)
} else if (roll === 1){
  alert("Oh no! You rolled a 1")
  this.turn = 0;
  console.log(this.turn);
}
  return this.turn;
}

Players.prototype.hold = function() {
  this.total += this.turn;
  console.log(this.total);
  this.turn = 0;
  return this.total;
}

//User interface Logic:

$(document).ready(function() {
  // Player One
  var turnRoll = $("#roll");
  var holdTurn = $("#hold");
   // Roll Dice
  turnRoll.click(function() {
    var result = playerOne.rollDi();
    if (result === 0){
      $(".player-one").hide();
      $(".player-two").show();
    }
    $("#player-one-name").text(playerOne.user);
    $("#turnRoll").text(result);
    console.log(result);
    console.log(playerOne);
  });
  // Hold Turn
  holdTurn.click(function() {
    var total = playerOne.hold();
    if (total >= 20){
      $(".pig").show();
      $("#dice").hide();
      alert("You Win!");
    }
    else {
      $(".hold-turn").text(total);
      $(".player-one").hide();
      $(".player-two").show();
      console.log(total);
      console.log(playerOne);
    }
  });

// Player Two
var turnRoll2 = $("#roll2");
var holdTurn2 = $("#hold2");
// Roll Dice
turnRoll2.click(function() {
  var result2 = playerTwo.rollDi();
  if (result2 === 0){
    $(".player-two").hide();
    $(".player-one").show();
  }
  $("#turnRoll2").text(result2);
  console.log(result2);
  console.log(playerTwo);
});
// Hold Turn
holdTurn2.click(function() {
  var total2 = playerTwo.hold();
  if (total2 >= 20){
    $(".pig").show();
    $("#dice").hide();
    alert("You Win!");
  }
  $(".hold-turn2").text(total2);
  $(".player-two").hide();
  $(".player-one").show();
  console.log(total2)
  console.log(playerTwo);
});

// Start Screen
var playerOne = null;
var playerTwo = null;
  $("form#userNames").submit(function(event){
    event.preventDefault();
    var inputtedPlayerOne = $("input#player-one").val();
    var inputtedPlayerTwo = $("input#player-two").val();
    playerOne = new Players(inputtedPlayerOne);
    playerTwo = new Players(inputtedPlayerTwo);
    // debugger
    $(".player-one-name").text(playerOne.user)
    $(".player-two-name").text(playerTwo.user)
    $("#dice").show();
    $("form#userNames").hide();
  });

  $("#replay").click(function(event){
    $("#dice").hide();
    $("form#userNames").show();
    $(".pig").hide();
    $("#player-one-name").text("");
    $(".hold-turn").text("");
    $("#turnRoll2").text("");
    $(".hold-turn2").text("");
    $("#player-one-name").text("");
    $("#turnRoll").text("");

  });
});
