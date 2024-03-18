"use strict";
let book = {
    title: 'Typescript Mastery',
    author: 'Sir Ameen Alam',
    published_at: new Date('2024-02-25')
};
console.log(`Book ${book.title} is written by ${book.author}, published on ${book.published_at.toDateString()}`);
