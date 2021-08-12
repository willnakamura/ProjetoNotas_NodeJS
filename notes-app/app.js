const getNotes = require('./utils.js');
const fs = require('fs');

fs.writeFileSync('note.txt', getNotes());
console.log(getNotes());