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
  // if already selected, do nothing

  console.log('1');
  if (whoseTurn === true) {
    console.log('2');
    console.log($this);
// place marker
    var $exText = $('p:nth-of-type(1)').text();
    $this.append( $('<p>').text(x) );
// grab data to compare to winner
    var $dataX = $('.col-md-4[data-type]').data('type');
    tallyX.push($dataX);
    $('.header').empty();
    whoseTurn = false;
    var $message2 = "Player Two's Turn";
    $('h1').append($message2).addClass('header');

//check for winner
    // findWinner();

  } else {


    var $ohText = $('p:nth-of-type(2)').text();
    $this.append( $('<p>').text(o) );

    console.log($this);
    console.log('4');
    var $dataO = $('col-md-4[data-type]').data();
    tallyO.push($dataO);
    whoseTurn = true;
    console.log('test');
    $('.header').empty();
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
// var $message1 = "Player One's Turn";
// $('h1').append($message1).addClass('header');
//
// var $ohText = $('p:nth-of-type(2)').text();
// $this.append( $('<p>').text(o) );
