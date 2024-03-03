"use strict";
let personName = 'arsAlaN MUghAl';
// original
console.log(`original: ${personName}`);
// lowercase
console.log(`lowercase: ${personName.toLowerCase()}`);
// uppercase
console.log(`uppercase: ${personName.toUpperCase()}`);
// titlecase
console.log(`titlecase: ${personName.charAt(0).toUpperCase() + personName.slice(1).toLowerCase()}`);
// camelcase
let personNameInCamelCase = personName.split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
console.log(`camelcase: ${personNameInCamelCase}`);
