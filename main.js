$(document).ready(init);

function init() {
  // var $click = $(.click);
  $('#start').on('click', startGame);
  $('#nameButton').on('click', submitName);
  $('#reset').on('click', resetGame);
}

var $squareSelected;
var $clicked;
var tallyX = [];
var tallyO = [];

function startGame() {
  if ( $('.square').on('click', squareClicked) ) {

    var $message1 = "Player One's Turn";
    $('h1').append($message1).addClass('header');

    var $exText = $('p:nth-of-type(1)').text();
    $(this).append( $('<p>').text($exText) );

    var $dataX = $('.data-type').data();
    tallyX.push($dataX);

    var $message2 = "Player Two's Turn";
    $('h1').append($message2).addClass('header');
    console.log(test);
    findWinner();

  } else {

    var $ohText = $('p:nth-of-type(2)').text();
    $(this).append( $('<p>').text($ohText) );

    var $dataO = $('.data-type').data();
    tallyO.push($dataO);
    console.log(test);
    findWinner();

  } else {
    console.log(test);
    var $message1 = "Player One's Turn";
    $('h1').append($message1).addClass('header');
  }

}

// function findWinner() {
// var possibleWins = [[1,2,3],[3,6,9],[7,8,9],[1,4,7],[1,5,9],[2,5,8],[3,5,7]]; {
//
//   } var $messageWin = "You Win";
//   $('h1').append($messageWin).addClass('header');
// }
// function resetGame() {
//
// }
