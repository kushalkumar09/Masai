let studentScore = [93, 30, 66, 63, 50, 40, 30, 26, 70];
let passedStudent = 0;
for(let i in studentScore){
    if(studentScore[i]<40){
        studentScore[i]=studentScore[i]+20;;
    }
    if(studentScore[i]>90){
        studentScore[i]=90;
    }
    if(studentScore[i]>=50){
        passedStudent++;
    }
}
console.log("Number of students passed: ", passedStudent);
console.log(studentScore.join(' '));
