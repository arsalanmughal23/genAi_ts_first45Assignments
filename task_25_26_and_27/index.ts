let alien_color:string = 'green';

// Task 25
console.log('> Task 25');
console.log(`alien color is: ${alien_color}`);
if(alien_color == 'green'){
    console.log('You have earned 5 points');
}

// Task 26
console.log('\n> Task 26');
console.log(`alien color is: ${alien_color}`);
if(alien_color == 'green'){
    console.log('You have earned 5 points for shooting the alien');
} else {
    console.log('You have earned 10 points');
}

alien_color = 'yellow';
console.log(`alien color is: ${alien_color}`);
if(alien_color == 'green'){
    console.log('You have earned 5 points for shooting the alien');
} else {
    console.log('You have earned 10 points');
}


// Task 27
console.log('\n> Task 27');
alien_color = 'green';
printResult(alien_color);
printResult('yellow');
printResult('red');

function printResult(alien_color:string){
    if(alien_color == 'green'){
        console.log(`You have earned 5 points & alien color is: ${alien_color}`);
    } else if(alien_color == 'yellow') {
        console.log(`You have earned 10 points & alien color is: ${alien_color}`);
    } else if(alien_color == 'red') {
        console.log(`You have earned 15 points & alien color is: ${alien_color}`);
    }
}