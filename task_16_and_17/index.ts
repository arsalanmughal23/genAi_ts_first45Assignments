

// Task 16
console.log('\n> Task 16');
let guests: string[] = ['Arsalan', 'Daniyal', 'Khizer'];
console.log('I inform you that, I found a bigger dinner table');

guests.unshift('Ahad');
guests.splice(guests.length / 2, 0, 'Bilal');
guests.push('Jamsheed');

guests.forEach(guest => console.log(`Dear ${guest}, would you like to join me for dinner`))


// Task 17
console.log('\n> Task 17');
guests = ['Arsalan', 'Daniyal', 'Khizer'];

// My Work
console.log('I just found out just my new table is not free, so i decided to remove some guest from list');

let removeable:string[] = ['Daniyal'];
let newGuestList:string[] = guests.reduce((acc:string[], value:string, index:number)=>{
    removeable.includes(value)
        ? console.log(`Sorry ${value}, I can't invite you for dinner`) 
        : console.log(`Dear ${value}, you're still invited to dinner`);
    
    acc.splice(index, 1);
    return acc;
}, []);
console.log(newGuestList);

// 100 Days Coding Challenge
// console.log("Unfortunately, I can only invite two peoples for dinner.");
// while (guests.length > 2){
//     let removedGuest = guests.pop();
//     console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
// }

// guests.forEach(guest => {
//     console.log(`Dear ${guest}, you're still invited to dinner.`);
// })

// guests.splice(0, guests.length);
// console.log(guests);