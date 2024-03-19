// Task 36
console.log('\n> Task 36');
function make_shirt(size:string, message:string){
    console.log(`Make a ${size} shirt, and print "${message}" on it`);    
}
make_shirt('small', 'I am a Software Engineer');

// Task 37
console.log('\n> Task 37');
function make_another_shirt(size:string = 'large', message:string = 'I love TypeScript.'){
    console.log(`Make a ${size} shirt, and print "${message}" on it`);    
}
make_another_shirt();
make_another_shirt('medium');
make_another_shirt('small', 'Programing is my Profession');