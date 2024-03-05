let personName:string = 'arsAlaN MUghAl';

// original
console.log(`original: ${personName}`);

// lowercase
console.log(`lowercase: ${personName.toLowerCase()}`);

// UPPERCASE
console.log(`UPPERCASE: ${personName.toUpperCase()}`);

// Title case
console.log(`Title case: ${personName.charAt(0).toUpperCase() + personName.slice(1).toLowerCase()}`);

// Each Word with Titlecase
let personNameWithTitleCase:string = personName.split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
console.log(`each-word-with Title Case: ${personNameWithTitleCase}`);

// camelCase
let personNameInCamelCase:string = personName.split(' ').map((word, index) => {
    return (index > 0) 
        ? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        : word.toLowerCase();
}).join('');

console.log(`camelCase: ${personNameInCamelCase}`);