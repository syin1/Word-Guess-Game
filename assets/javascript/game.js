$(document).ready(function() {
  var easyFirstNames = [
    'LEBRON',
    'KEVIN',
    'STEPHEN',
    'KAWHI',
    'JAMES',
    'RUSSELL',
    'CHRIS',
    'ANTHONY',
    'KYRIE',
    'DRAYMOND'
  ];
  var easyLastNames = [
    'JAMES',
    'DURANT',
    'CURRY',
    'LEONARD',
    'HARDEN',
    'WESTBROOK',
    'PAUL',
    'DAVIS',
    'IRVING',
    'GREEN'
  ];
  var easyHints = [
    'Cleveland Cavaliers',
    'Golden State Warriors',
    'Golden State Warriors',
    'San Antonio Spurs',
    'Houston Rockets',
    'Oklahoma City Thunder',
    'Houston Rockets',
    'New Orleans Pelicans',
    'Boston Celtics',
    'Golden State Warriors'
  ];

  var hardFirstNames = [
    'RYAN',
    'GEORGIOS',
    'SKAL',
    'BOBAN',
    'LANGSTON',
    'MILOS',
    'JONAS',
    'ISAIAH',
    'TOMAS',
    'NIKOLA'
  ];
  var hardLastNames = [
    'ARCIDIACONO',
    'PAPAGIANNIS',
    'LABISSIERE',
    'MARJANOVIC',
    'GALLOWAY',
    'TEODOSIC',
    'VALANCIUNAS',
    'WHITEHEAD',
    'SATORANSKY',
    'VUCEVIC'
  ];

  var easy = 1;
  var randomindex;
  var answer;
  var remaining = 8;
  var lettersguessed = [];
  var gameswon = 0;
  var gameslost = 0;

  function restart() {
    randomindex = Math.floor(Math.random() * 10);
    var setup = '';
    var oneletter = '_ ';

    if (easy === 1) {
      answer = easyFirstNames[randomindex] + '/' + easyLastNames[randomindex];

      for (var i = 0; i < easyFirstNames[randomindex].length; i++) {
        setup = setup + oneletter;
      }

      setup = setup + '/';

      for (var i = 0; i < easyLastNames[randomindex].length; i++) {
        setup = setup + oneletter;
      }
    } else if (easy === 0) {
      answer = hardFirstNames[randomindex] + '/' + hardLastNames[randomindex];

      for (var i = 0; i < hardFirstNames[randomindex].length; i++) {
        setup = setup + oneletter;
      }

      setup = setup + '/';

      for (var i = 0; i < hardLastNames[randomindex].length; i++) {
        setup = setup + oneletter;
      }
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

      // var audio = new Audio('../audio/boo.mp3');
      // audio.play();

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

  $('button.btn.btn-primary').on('click', function() {
    if (easy === 1) {
      $('#thehint').html('He plays for the ' + easyHints[randomindex] + '!');
    } else if (easy === 0) {
      $('#thehint').html('Sorry, no hints for the hard version!');
    }
  });

  $('.easymode').on('click', function() {
    easy = 1;
    remaining = 8;
    restart();
    $('#remaining').html(remaining);

    lettersguessed = [];
    $('#lettersguessed').html(lettersguessed.join(' '));
  });

  $('.hardmode').on('click', function() {
    easy = 0;
    remaining = 6;
    restart();
    $('#remaining').html(remaining);

    lettersguessed = [];
    $('#lettersguessed').html(lettersguessed.join(' '));
  });
});
