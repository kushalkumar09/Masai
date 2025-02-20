function setTimeoutGreeting(name) {
    let x = this.name;
    setTimeout(function() {
        console.log(`Hello ${x}`);
    }, 1000);
    
}

// setTimeoutGreeting.call({name: "Alice"});
let greet = setTimeoutGreeting.bind({name: "Bob"});
greet();



