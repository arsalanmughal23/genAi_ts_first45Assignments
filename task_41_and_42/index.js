"use strict";
let magician_names = ['Magician Asad', 'Magician Umair', 'Magician Zubair'];
// Task 41
console.log('> Task 41');
function show_magicians(magician_names) {
    magician_names.forEach(magician => {
        console.log(magician);
    });
}
show_magicians(magician_names);
// Task 42
console.log('\n> Task 42');
function make_great() {
    magician_names.forEach((magician, index) => {
        magician_names[index] = `The Great ${magician}`;
    });
}
make_great();
show_magicians(magician_names);
