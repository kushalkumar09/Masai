import { Book } from "./Book.js";
import { Member } from "./Member.js";
import { PremiumMember } from "./Premium.js";
let book1 = new Book("JavaScript: The Good Parts", "Douglas Crockford");
let book2 = new Book("Eloquent JavaScript", "Marijn Haverbeke");
let book3 = new Book("You Don't Know JS", "Kyle Simpson");
let book4 = new Book("Learning JavaScript Design Patterns", "Addy Osmani");
let book5 = new Book("JavaScript: The Definitive Guide", "David Flanagan");


let regularMember = new Member("Alice");
let premiumMember = new PremiumMember("Bob");

// Regular member borrows books
regularMember.borrowBook(book1);
regularMember.borrowBook(book2);
regularMember.borrowBook(book3);
regularMember.borrowBook(book4); 

// Premium member borrows books
premiumMember.borrowBook(book4);
premiumMember.borrowBook(book5);
premiumMember.borrowBook(book1);  


// Test the borrowing of special collection books for premium members
premiumMember.borrowBook(book3);  
