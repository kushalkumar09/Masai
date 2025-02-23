let sec = 0;
let loading = setInterval(() => {
    
    console.log("loading...");
    sec++;
    if(sec==5){
        console.log("Loaded successfully!");
        clearInterval(loading);
    }
},1000);