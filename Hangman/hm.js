const words = [
    { word: 'copenahagen', clue: 'Capital city.' },
    { word: 'football', clue: 'Sport.' },
    { word: 'programming', clue: 'Writing code.' },
    { word: 'watermelon', clue: 'Fruit.' },
    { word: 'tennis', clue: 'Sport.' },
    { word: 'ronaldo', clue: 'GOAT.' },
    { word: 'alligator', clue: 'Animal.' },
    { word: 'nairobi', clue: 'Capital city.' },
    { word: 'september', clue: 'time period.' },
    { word: 'autumn', clue: 'season.' },
    { word: 'fulham', clue: 'team/town.' },
    { word: 'grapes', clue: 'Fruit.' },
    { word: 'dessert', clue: 'Not lunch.' },
    { word: 'wednesday', clue: 'day.' }
  ];
    let selectedWord = words[Math.floor(Math.random() * words.length)].word;
    
    function resetGame() {
      selectedWord = words[Math.floor(Math.random() * words.length)].word;
      guessedLetters = [];
      guessesLeft = 6;
      wrongGuesses = 0;
      displayWord = '';
      for (let i = 0; i < selectedWord.length; i++) {
        displayWord += '_ ';
      }
      wordDisplay.textContent = displayWord;
      guessesLeftDisplay.textContent = `Guesses left: ${guessesLeft}`;
      clueDisplay.textContent = '';
    }
    //   console.log('reset game');

    let guessedLetters = [];
    let guessesLeft = 6;
    let wrongGuesses = 0;

    const wordDisplay = document.getElementById('wordDisplay');
    const guessesLeftDisplay = document.getElementById('guessesLeft');
    const clueDisplay = document.getElementById('clue');
    const guessInput = document.getElementById('guessInput');
    const guessButton = document.getElementById('guessButton');
    const resetButton = document.getElementById('reset'); 


    // Initialize the word display with underscores
    let displayWord = '';
    for (let i = 0; i < selectedWord.length; i++) {
      displayWord += '_';
    }
     wordDisplay.textContent = displayWord;

     guessButton.addEventListener('click', () => {
      const guess = guessInput.value.toLowerCase();
      guessInput.value = '';

      if (guess.length !== 1 || !/[a-z]/.test(guess)) {
        alert('Please enter a valid single letter.');
        return;
      }

      if (guessedLetters.includes(guess)) {
        alert('You already guessed that letter.');
        return;
      }

      guessedLetters.push(guess);
      

      if (selectedWord.includes(guess)) {
        // Update the display word with correctly guessed letters
        let newDisplayWord = '';
        for (let i = 0; i < selectedWord.length; i++) {
          if (guessedLetters.includes(selectedWord[i])) {
            newDisplayWord += selectedWord[i];
          } else {
            newDisplayWord += '_';
          }
        }
        displayWord = newDisplayWord;
        wordDisplay.textContent = displayWord;

        if (displayWord === selectedWord) {
          alert('Congratulations! You guessed the word.');
        }
      } else {
        alert('Oops! Guess again');
        guessesLeft--;
        guessesLeftDisplay.textContent = `Guesses left: ${guessesLeft}`;
        wrongGuesses++;

        if (wrongGuesses === 3) {
            
          const selectedWordObj = words.find(wordObj => wordObj.word === selectedWord);
          if (selectedWordObj) {
              clueDisplay.textContent = `Clue: ${selectedWordObj.clue}`;
          }
      }

        if (guessesLeft === 0) {
          alert(`Game over! The word was "${selectedWord}".`);
        }
      }

  
  });
    
  resetButton.addEventListener('click', function () {
    resetGame();
  });
  
  // Initialize the game
  resetGame();
    
