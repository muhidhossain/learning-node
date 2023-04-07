const fs = require('node:fs/promises');

console.log('First');

async function readFile() {
  try {
    const data = await fs.readFile('file.txt', 'utf-8');
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

readFile();

// const fs = require('node:fs');

// console.log('First');
// const fileContents = fs.readFileSync('./file.txt', 'utf-8');
// console.log(fileContents);

// console.log('Second');

// fs.readFile('./file.txt', 'utf-8', (error, data) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(data);
//   }
// });

// console.log('Third');

// fs.writeFileSync('./greet.txt', 'Hello world!');

// fs.writeFile('./greet.txt', ' Hello Muhid!', { flag: 'a' }, (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('File written');
//   }
// });
