const fs = require('fs');

const book = {
    title : 'ego is my Enamy',
    auther : 'walim Hoiaday'
}

 const jsonData = JSON.stringify(book);
// console.log(jsonData);

// const data = JSON.parse(jsonData);
// data.title = 'new title .....'
// console.log(data.title);

// fs.writeFileSync('1-json.json', jsonData );

const dataBuffer = fs.readFileSync('1-json.json');
// console.log(dataBuffer.toString());

const data = JSON.parse(dataBuffer.toString());
console.log(data.title)