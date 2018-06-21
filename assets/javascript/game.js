$(document).ready(function() {
  var answer = 'great';
  var remaining = 12;

  $('#random-button').on('click', function() {
    // Create a string which will hold the lottery number
    var lottoNumber = '';

    // Then initiate a loop to generate 9 separate numbers
    for (var i = 0; i < answer.length; i++) {
      // For each iteration, generate a new random number between 1 and 9.
      // var random = Math.floor(Math.random() * 9) + 1;
      var random = '_ ';

      // Take this number and then add it to the rest of the string.
      // In essence, we are iteratively building a string of numbers. (e.g. First: 1, Second: 13, Third: 135, etc.)
      lottoNumber = random + lottoNumber;
    }

    // ... and then dump the random number into our random-number div.
    // $('#random-number').prepend('<br><hr>' + lottoNumber);
    $('#random-number').html(lottoNumber);
  });

  $(document).keypress(function(event) {
    var guess = '';
    var guesswrong = 0;

    var current = $('#random-number')
      .text()
      .replace(/\s/g, '');

    for (var i = 0; i < answer.length; i++) {
      var letter;

      if (event.key === answer[i]) {
        letter = answer[i] + ' ';
      } else if (current[i] !== '_') {
        letter = current[i] + ' ';
        guesswrong++;
      } else {
        letter = '_ ';
        guesswrong++;
      }

      guess = guess + letter;
    }

    if (guesswrong === answer.length) {
      remaining--;
    }

    $('#random-number').html(guess);
    $('#remaining').html(remaining);
  });
});
