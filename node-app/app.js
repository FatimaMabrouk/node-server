const fs = require('fs');

fs.writeFileSync('text.txt', 'first node app ...');

// challenge - answer
fs.appendFileSync('text.txt', ' adding new information in the file using appenf .');
