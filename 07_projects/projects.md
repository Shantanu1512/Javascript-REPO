# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

CODE SOLUTIONS

##Project 1 
: COLOR CHANGING CODE

```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    console.log(event.target.id);
    switch (event.target.id) {
      case 'grey':
        body.style.backgroundColor = event.target.id;
        break;
      case 'white':
        body.style.backgroundColor = event.target.id;
        break;
      case 'blue':
        body.style.backgroundColor = event.target.id;
        break;
      case 'yellow':
        body.style.backgroundColor = event.target.id;
        break;
      case 'pink':
        body.style.backgroundColor = event.target.id;
        break;
      case 'default':
        break;
    }
  });
});

```

##Project 2 : BMI calculator

```javascript
const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);

  const weight = parseInt(document.querySelector('#weight').value);

  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }
})
```

##Project 3 : Digital Clock

```javascript
const clock = document.getElementById('clock')

setInterval(() => {
  let date = new Date()
  clock.innerHTML = date.toLocaleTimeString();
}, 1000)
```

##Project 4 : Number guessing
```javascript

let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${10 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}


```

##Project 5 : Keyboard press

```Javascript
const insert = document.querySelector('#insert')

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
  <div class='color'> 
  <table>
  <tr>
    <th>Key</th>
    <th>Keycode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
</div>
  `
})
```

##Project 6 : Random color changing

```javascript
//Generate random color logic
const generateRandomColor = function(){
  const hex = '0123456789ABCDEF';
let color = '#';

for (let i = 0; i < 6; i++) {
  color += hex[Math.floor(Math.random() * 16)]
}
return color
}
let interval
function startColor(){
  interval = setInterval(function(){
    document.body.style.backgroundColor = generateRandomColor()
  },1000)
  
}

function stopColor(){
  clearInterval(interval)
}
document.querySelector('#start').addEventListener('click', startColor)

document.querySelector('#stop').addEventListener('click', stopColor)

```