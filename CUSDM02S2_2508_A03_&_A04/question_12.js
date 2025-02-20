let orignal = { name: "Alice", hobbies: ["reading", "traveling"] };
function deepclone(obj){
    return JSON.parse(JSON.stringify(obj));
}
let clone = deepclone(orignal);
clone.hobbies.push("coding");
console.log(orignal)
console.log(clone);