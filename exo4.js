const fs = require('fs');
if (process.argv.length < 4) {
  console.error('Usage: node exo4.js <filename> <text>');
  process.exit(1);
}

const filename = process.argv[2];
const textToSave = process.argv.slice(3).join(' ');

fs.writeFile(filename, textToSave, 'utf8', (err) => {
  if (err) {
    console.error(`Error writing to file ${filename}: ${err.message}`);
    process.exit(1);
  }

  console.log('The file has been saved!');
  fs.readFile(filename, 'utf8', (readErr, data) => {
    if (readErr) {
      console.error(`Error reading file ${filename}: ${readErr.message}`);
      process.exit(1);
    }

    console.log(`Contents of ${filename}:`);
    console.log(data);
  });
});
