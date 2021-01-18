//create an array
let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

//Remove last string of array
secretMessage.pop()

//log length of new array
console.log(secretMessage.length)

//add new words to secretMessage array
secretMessage.push('to', 'program');

//change 'easily' to right
secretMessage[7] = 'right';

//Remove first item of array
secretMessage.shift();

//add item to beginning of the array
secretMessage.unshift('Programming');

//remove 'get right the first time' and replace with 'know'
secretMessage.splice(6, 5, 'know')

//log secret message - remove commas
console.log(secretMessage.join(' '));