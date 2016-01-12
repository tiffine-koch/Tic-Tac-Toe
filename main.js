$(document).ready(init);

function init() {
  // var $click = $(.click);
  // $('#start').on('click', gameControl);
  // $('#nameButton').on('click', submitName);
  // $('#reset').on('click', resetGame);
  $('.square').on('click', squareClicked);
}

// var $ohText
// var squareSelected;
// var $clicked;
//
// function gameControl() {
//     event.preventDefault();
//     if(!squareSelected) {
//       playerOneTurn(event)
//     } else if (squareSelected) {
//       playerTwoTurn(event)
//     }
// }

function squareClicked() {
  var $message1 = "Player One's Turn";
  $('h1').append($message1).addClass('header');

//
// function playerOneTurn() {
  var $exText = $('p:nth-of-type(1)').text();
  $(this).append( $('<p>').text($exText) );
  // var $message2 = "Player Two's Turn";
  // $('h1').append( $('<p>'.text($message2) );
//   squareSelected = false;
}
//
// function playerTwoTurn() {
//   var $ohText = $('p:nth-of-type(2)').text();
//   $(this).append( $('<p>').text($ohText) );
//   var $message1 = "Player One's Turn",
//   $('h1').append( $('<p>').text($message1) );
//   squareSelected = true;
// }

// function resetGame() {
//
// }
// function findWinner() {
//   if ($('.t3').find('disc').length === 3) {
//   alert('You win! Play again?');
//   }
// }
