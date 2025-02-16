var age = 25;
function displayAge(){
    console.log(age);
    function changeAge(){
        age = 30;
        console.log(age);
    }
    changeAge();
}

displayAge();
