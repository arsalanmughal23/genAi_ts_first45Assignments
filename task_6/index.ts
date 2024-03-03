console.log('> Actual Question & I solved it by my own self.');
let personName = '        Ars\tal\nan        ';
console.log(personName.replace('\t', '').replace('\n', '').trim());

console.log('> Complex Case & solved it by get help from GPT.');
personName = '        A  r      s\tal\nan        ';
// remove white spaces by using regex
console.log(personName.replace(/\s/g, ''));
