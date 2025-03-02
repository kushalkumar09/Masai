import { Member } from "./Member.js";

export function PremiumMember(name) {
    Member.call(this, name); // Inherit properties from Member
    this.specialCollectionAccess = true;
  }
  
  PremiumMember.prototype = Object.create(Member.prototype);
  PremiumMember.prototype.constructor = PremiumMember;
  
  // Override the borrowBook method
  PremiumMember.prototype.borrowBook = function(book) {
    if (this.borrowedBooks.length >= 5) {
      console.log(`${this.name} cannot borrow more than 5 books.`);
      return;
    }
  
    if (book.isAvailable) {
      book.isAvailable = false;
      this.borrowedBooks.push(book.title);
      console.log(`${this.name} borrowed ${book.title}`);
    } else {
      console.log(`${book.title} is already borrowed.`);
    }
  };
  