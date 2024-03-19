"use strict";
let usernames = ['admin', 'arsalan', 'junaid', 'azher'];
// Task 30
console.log('> Task 30');
usernames.forEach(user => {
    if (user == 'admin') {
        console.log(`Hello ${user}, would you like to see a status report?`);
    }
    else {
        console.log(`Hello ${user}, thank you for logging in again`);
    }
});
// Task 31
console.log('\n> Task 31');
usernames.splice(0, usernames.length);
if (usernames.length > 0) {
    usernames.forEach(user => {
        if (user == 'admin') {
            console.log(`Hello ${user}, would you like to see a status report?`);
        }
        else {
            console.log(`Hello ${user}, thank you for logging in again`);
        }
    });
}
else {
    console.log('user list is empty');
}
