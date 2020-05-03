const fs = require('fs');

fs.writeFileSync('text.txt', 'first node app ...');

// challenge - answer
fs.appendFileSync('text.txt', ' adding new information in the file using appenf .');
// with new file .
fs.appendFileSync('notes.txt', 'adding new info to new file ...')