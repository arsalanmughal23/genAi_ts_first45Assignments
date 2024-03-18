// Task 14
console.log('> Task 14');
let guests: string[] = ['Arsalan', 'Asad', 'Ahmed'];
guests.unshift('Ahad');
printInvitations(guests);

function printInvitations(guests:string[]){
    guests.forEach(guest => console.log(`Dear ${guest}, would you like to join me for dinner`));
}


// Task 15
console.log('\n> Task 15');
let unableToAttend = 'Asad';
console.log(`${unableToAttend} can't make it to dinner.`)

let newGuest = 'Jameel';
// guests[guests.indexOf(unableToAttend)] = newGuest;
// printInvitations(guests);

guests.splice(guests.indexOf(unableToAttend), 1, newGuest);
printInvitations(guests);
