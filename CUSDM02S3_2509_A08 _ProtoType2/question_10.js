// You are developing a system to manage an online education platform, where each user can be either a Student or an Instructor. Implement the system using JavaScript classes and ES6 syntax. The base class User should have properties name and email, and a method getDetails that logs "Name: [name], Email: [email]". The Student class should inherit from User and add a property studentId and a method enroll that logs "Student [name] has enrolled.". The Instructor class should inherit from User and add a property instructorId and a method assignGrade that logs "Instructor [name] assigned a grade." Demonstrate the system by creating instances of Student and Instructor, and calling their methods.

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    getDetails() {
        console.log(`Name: ${this.name}, Email: ${this.email}`);
    }
}

class Student extends User {
    constructor(name, email, studentId) {
        super(name, email);
        this.studentId = studentId;
    }

    enroll() {
        console.log(`Student ${this.name} has enrolled.`);
    }
}

class Instructor extends User {
    constructor(name, email, instructorId) {
        super(name, email);
        this.instructorId = instructorId;
    }

    assignGrade() {
        console.log(`Instructor ${this.name} assigned a grade.`);
    }
}

const student1 = new Student('Alice', 'email123@gmail.com', '1234');
const instructor1 = new Instructor('Bob', 'email2@gmail.com', '5678');

student1.getDetails();
student1.enroll();

instructor1.getDetails();
instructor1.assignGrade();



