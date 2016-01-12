$(document).ready(init);

function init() {
  var $click = $(.click);
  $('#start').on('click', gameControl);
  $('#nameButton').on('click', submitName);
  $('#reset').on('click', resetGame);
  $('.square').on('click', squareClicked);
}

var $ohText
var squareSelected;
var $clicked;

function gameControl() {
    event.preventDefault();
    if(!squareSelected) {
      playerOneTurn(event)
    } else if (squareSelected) {
      playerTwoTurn(event)
    }
}

function playerOneTurn() {

  var $exText = $('p:nth-of-type(1)').text();
  $(this).append( $('<p>').text($exText) );
  $(#message).text("Player Two's Turn");
  squareSelected = false;
}

function playerTwoTurn {
  var $ohText = $('p:nth-of-type(2)').text();
  $(this).append( $('<p>').text($ohText) );
  $(#message).text("Player One's Turn");
  squareSelected = true;
}

// function resetGame() {
//
// }
function findWinner() {
  if ($('.t3').find('disc').length === 3) {
  alert('You win! Play again?');
  }
}
