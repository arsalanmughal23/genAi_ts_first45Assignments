"use strict";
// Task 14
console.log('> Task 14');
let guests = ['Arsalan', 'Daniyal', 'Khizer'];
guests.unshift('Ahad');
printInvitations(guests);
// Task 15
console.log('\n> Task 15');
guests = ['Arsalan', 'Daniyal', 'Khizer'];
let unableToAttend = 'Daniyal';
console.log(`${unableToAttend} can't make it to dinner.`);
let newGuest = 'Jameel';
// guests[guests.indexOf(unableToAttend)] = newGuest;
// printInvitations(guests);
guests.splice(guests.indexOf(unableToAttend), 1, newGuest);
printInvitations(guests);
// Function for print invitations
function printInvitations(guests) {
    guests.forEach(guest => console.log(`Dear ${guest}, would you like to join me for dinner`));
}
