const upperCase = require('upper-case').upperCase;

function greet(name) {
  return upperCase(`Hello ${name}, welcome to Barishal!`);
}

module.exports = greet;
