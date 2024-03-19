// Task 43
console.log('\n> Task 43');
let magician_names:string[] = ['Magician Asad', 'Magician Umair', 'Magician Zubair'];

function make_great(magician_names:string[]):string[]{
    return magician_names.map((magician, index) => {
        return `The Great ${magician}`;
    });
}

function show_magicians(magician_names:string[]):void{
    magician_names.forEach(magician => {
        console.log(magician);
    });
}

console.log('\n> Original Magician Array');
make_great(magician_names);
show_magicians(magician_names);

console.log('\n> Modified Magician Array');
magician_names = make_great(magician_names);
show_magicians(magician_names);