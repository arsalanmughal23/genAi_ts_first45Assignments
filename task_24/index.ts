let friend:string = 'Ahmed';

console.log('> Tests for equality and inequality with strings');
    console.log(friend == friend);
    console.log(friend != friend);


console.log('\n> Tests using the lower case function');
    console.log(friend == friend.toLowerCase());
    console.log(friend.toLowerCase() != friend);


let num1 = 10;
let num2 = 12;
console.log('\n> Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to');
    console.log(`${num1} == ${num1}: `, (num1 == num1));
    console.log(`${num1} == ${num2}: `, (num1 == num2));

    console.log(`${num1} > ${num2}: `, (num1 > num2));
    console.log(`${num1} < ${num2}: `, (num1 < num2));

    console.log(`${num1} >= ${num2}: `, (num1 >= num2));
    console.log(`${num1} <= ${num2}: `, (num1 <= num2));


console.log('\n> Tests using "and" and "or" operators');

    console.log(`\n num1: ${num1}, num2: ${num2}`);
    console.log(`(num1 < num2) && (num1++ < num1): `, ((num1 < num2) && (num1++ < num1)));
    console.log(`\n num1: ${num1}, num2: ${num2}`);
    console.log(`(num1 < num2) || (num1 < --num1): `, ((num1 < num2) || (num1 < --num1)));
    console.log(`\n num1: ${num1}, num2: ${num2}`);
    console.log(`(num1 < num2) && (num1 != ++num1): `, ((num1 < num2) && (num1 != ++num1)));


    console.log(`\n num1: ${num1}, num2: ${num2}`);
    console.log(`(num1 != num2) || (num1 != num1--): `, ((num1 != num2) || (num1 != num1--)));
    console.log(`\n num1: ${num1}, num2: ${num2}`);
    console.log(`(num1 > num2) || (num1 != num1++): `, ((num1 > num2) || (num1 != num1++)));


let myFriendList:string[] = ['Ali', 'Mohsin', 'Bilal'];
console.log('\n> Test whether an item is in a array');
let bestFriend:string = 'Ali';
let annonymous:string = 'Akhtar';
console.log(`${bestFriend} is ${!myFriendList.includes(bestFriend) ? 'not ' : '' }listed in my friend list`);

console.log('\n> Test whether an item is not in a array');
console.log(`${annonymous} is ${!myFriendList.includes(annonymous) ? 'not ' : '' }listed in my friend list`);
