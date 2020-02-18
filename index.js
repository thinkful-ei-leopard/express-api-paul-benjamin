const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));

// app.get('/sum', (req, res) => {
//   const a = parseInt(req.query.a);
//   const b = parseInt(req.query.b);
//   const c = a + b;

//   res.send(`The sum of ${a} and ${b} is ${c}`);
// });

// app.get('/cipher', (req, res) => {
//   const text = req.query.text;
//   const shift = req.query.shift;

//   let charCodes = [];

//   for (let i = 0; i < text.length; i++) {
//     charCodes.push(text.charCodeAt(i));
//   }

//   const shifted = charCodes.map(code => code + shift);

//   let encrypted = shifted.map(code => String.fromCharCode(code));
//   encrypted = encrypted.join('');
//   res.send(shifted);
// });

app.get('/lotto', (req, res) => {
  const numbers = req.query.num;
  const randomNumbers = [];

  for (let i = 0; i < 6; i++) {
    randomNumbers.push(Math.floor(Math.random() * 20));
  }

  // numbers.forEach((num1) => randomNumbers.forEach((num2) => {
  //   if (num1 === num2) {
  //    matchingNums.push('test')
  //   }
  // }))

  console.log(numbers, randomNumbers);
  let matchingNums = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < randomNumbers.length; j++) {
      if (parseInt(numbers[i]) === randomNumbers[j]) {
        matchingNums.push(numbers[i]);
        console.log(matchingNums);
      }
    }
  }

  console.log(matchingNums);

  res.send(`${numbers} --- ${randomNumbers} --- ${matchingNums}`);
});

app.listen(8000, () => {
  console.log('Express server is listening on port 8000!');
});
