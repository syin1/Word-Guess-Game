$(document).ready(function() {
  $('#random-button').on('click', function() {
    // Create a string which will hold the lottery number
    var lottoNumber = '';

    // Then initiate a loop to generate 9 separate numbers
    for (var i = 0; i < 7; i++) {
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

  var answer = 'madonna';

  $(document).keypress(function(event) {
    var guess = '';

    for (var i = 0; i < answer.length; i++) {
      var letter;

      if (event.key === answer[i]) {
        letter = answer[i] + ' ';
      } else {
        letter = '_ ';
      }

      guess = guess + letter;
    }

    $('#random-number').html(guess);
  });
});
