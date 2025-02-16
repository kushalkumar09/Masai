let input = [
  { name: "Alice", marks: 58 },

  { name: "Bob", marks: 85 },

  { name: "Charlie", marks: 92 },

  { name: "David", marks: 45 },
];

const processStudents = input.filter((students)=>(students.marks>60)).sort((a,b)=>b.marks-a.marks).map((students)=>students.name);

console.log(processStudents);
