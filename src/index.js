const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  let words = expr.split('**********');
  let output = '';
  
  words.forEach(function(elem, i, array){
    for (let i = 0; i < elem.length; i += 10) {
      let letterMorse = elem.slice(i, i + 10);
      let letter = '';
      for (let j = 0; j < letterMorse.length; j += 2) {
        switch (letterMorse.slice(j, j + 2)) {
          case '00': 
            letter += '';
            break;
          case '10': 
            letter += '.';
            break;
          case '11': 
            letter += '-';
            break;
        }
      }
      output += MORSE_TABLE[letter];
    }
    output += ' ';
  })
  
  return output.slice(0, -1);
}

module.exports = {
    decode
}