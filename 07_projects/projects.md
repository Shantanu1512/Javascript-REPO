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