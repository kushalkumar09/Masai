let obj1 = {
    name: "Alice",
    age: 22
}

let obj2 = {
    name: "Bob",
    age: 23
}

function personInfo(){
    console.log(this.name + " is " + this.age + " years old");
}

personInfo.call(obj1);
personInfo.call(obj2);