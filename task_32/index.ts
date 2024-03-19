let current_users:string[] = ['admin', 'arsalan', 'junaid', 'azher', 'haris'];
let new_users:string[] = ['ahmed', 'muzammil', 'arsalan', 'uzair', 'haris'];

new_users.forEach(username => {
    current_users.some(currentUser => currentUser.toLowerCase() == username.toLowerCase()) 
        ? console.log(`The username: "${username}" is already in used.`)
        : console.log(`The username: "${username}" is available.`)
});
