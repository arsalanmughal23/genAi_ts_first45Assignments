let names:string[] = ['Arsalan', 'Fatima', 'Hamza'];

// Task 11
console.log('> Task 11');
for(let i = 0; i < names.length; i++){
    console.log(names[i]);
}

console.log('\n');

// Task 12
console.log('> Task 12');
for(let name of names){
    console.log(`Salam ${name}!, i have message a for you.`);
}