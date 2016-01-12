$(document).ready(init);

function init() {
  $('#start').on('click', startGame);
  // $('#nameButton').on('click', submitName);
  // $('#reset').on('click', resetGame);  //
}

var tallyX = [];
var tallyO = [];
var whoseTurn = true;
var x = "Exes";
var o = "Ohs";

function startGame() {
  $('.square').on('click', squareClicked);
  var $message1 = "Player One's Turn";
  $('h1').append($message1).addClass('header');
}

function squareClicked() {
  var $this = $(this);
  if (whoseTurn === true) {
// place marker
    var $exText = $('p:nth-of-type(1)').text();
    $this.append( $('<p>').text(x) );
// grab data to compare to winner
    var dataX = $this.attr('data');
    // console.log(dataX);
    tallyX.push(dataX);
    $('.header').empty();
    whoseTurn = false;
    var $message2 = "Player Two's Turn";
    $('h1').append($message2).addClass('header');
//check for winner
    // findWinner();

  } else {
    var $ohText = $('p:nth-of-type(3)').text();
    $this.append( $('<p>').text(o) );

    var dataO = $this.attr('data');
    // console.log(dataO);
    tallyO.push(dataO);
    $('.header').empty();
    whoseTurn = true;

    var $message1 = "Player One's Turn";
    $('h1').append($message1).addClass('header');
    // findWinner();
    }
  }

// function findWinner() {
// var possibleWins = [[1,2,3],[3,6,9],[7,8,9],[1,4,7],[1,5,9],[2,5,8],[3,5,7],[4,5,6]]; {
//
//   } var $messageWin = "You Win";
//   $('h1').append($messageWin).addClass('header');
// }
// function resetGame() {
//
// }
