type TYPE_BOOK = {
    title: string,
    author: string,
    published_at: Date
}
let book:TYPE_BOOK = {
    title: 'Typescript Mastery',
    author: 'Sir Ameen Alam',
    published_at: new Date('2024-02-25')
}
console.log(`Book ${book.title} is written by ${book.author}, published on ${book.published_at.toDateString()}`);