$(document).ready(function () {
  const generateRandomNumber = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  let winningNumber = generateRandomNumber(1, 100);
  let totalScore = 0;
  let wins = 0;
  let losses = 0;

  $('#winning-number').text(generateRandomNumber(1, 100));
  $('#numberWins').text(wins);
  $('#numberLosses').text(losses);
  $('#totalScore').text(totalScore);

  const winner = () => {
    ++wins;
    alert('You win!');
    $('#numberWins').text(wins);
    reset();
  };

  const loser = () => {
    ++losses;
    alert('You lose!');
    $('#numberLosses').text(losses);
    reset();
  };

  const reset = () => {
    totalScore = 0;
    $('#totalScore').text(totalScore);
    winningNumber = generateRandomNumber(1, 100);
    $('#winning-number').text(winningNumber);
  };

  const getGameStatus = () => {
    totalScore += generateRandomNumber(1, 10);
    $('#totalScore').text(totalScore);
    if (totalScore === winningNumber) winner();
    if (totalScore > winningNumber) loser();
  };

  $('.jewel-1').on('click', function () {
    getGameStatus();
  });

  $('.jewel-2').on('click', function () {
    getGameStatus();
  });

  $('.jewel-3').on('click', function () {
    getGameStatus();
  });

  $('.jewel-4').on('click', function () {
    getGameStatus();
  });
});
