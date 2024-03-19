"use strict";
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let ordinalNumber = [];
numbers.forEach(num => {
    let postFix = 'th';
    if (num == 1) {
        postFix = 'st';
    }
    else if (num == 2) {
        postFix = 'nd';
    }
    else if (num == 3) {
        postFix = 'rd';
    }
    console.log(`${num}${postFix}`);
});
