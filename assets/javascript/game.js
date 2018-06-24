$(document).ready(function() {
  var answer = 'GREAT';
  var remaining = 8;
  var lettersguessed = [];
  var gameswon = 0;
  var gameslost = 0;

  function restart() {
    var setup = '';

    for (var i = 0; i < answer.length; i++) {
      var oneletter = '_ ';
      setup = oneletter + setup;
    }

    $('#random-number').html(setup);
  }

  restart();

  $(document).keypress(function(event) {
    var guess = '';
    var guesswrong = 0;
    var guessright = 0;

    // get current word
    var current = $('#random-number')
      .text()
      .replace(/\s/g, '');

    for (var i = 0; i < answer.length; i++) {
      var letter;

      if (event.key.toUpperCase() === answer[i]) {
        letter = answer[i] + ' ';
        guessright++;
      } else if (current[i] !== '_') {
        letter = current[i] + ' ';
        guessright++;
        guesswrong++;
      } else {
        letter = '_ ';
        guesswrong++;
      }

      guess = guess + letter;
    }
    $('#random-number').html(guess);

    if (
      guesswrong === answer.length &&
      $.inArray(event.key.toUpperCase(), lettersguessed) === -1
    ) {
      remaining--;

      $('#remaining').html(remaining);

      lettersguessed.push(event.key.toUpperCase());
    }

    $('#lettersguessed').html(lettersguessed.join(' '));

    if (guessright === answer.length) {
      gameswon++;
      $('#gameswon').html(gameswon);
      restart();
      remaining = 8;
      $('#remaining').html(remaining);

      lettersguessed = [];
      $('#lettersguessed').html(lettersguessed.join(' '));
    }

    if (remaining === 0) {
      gameslost++;
      $('#gameslost').html(gameslost);
      restart();
      remaining = 8;
      $('#remaining').html(remaining);

      lettersguessed = [];
      $('#lettersguessed').html(lettersguessed.join(' '));
    }
  });
});
