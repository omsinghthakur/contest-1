let arr = [
    { id: 1, name: "john", age: "18", marks: 80 },
    { id: 2, name: "jack", age: "20", marks: 85 },
    { id: 3, name: "karen", age: "19", marks: 35 },
  ];
  
  function PrintStudentswithMap() {
    const studentsWithMarksOver50 = arr.filter((student) => student.marks > 50);
    const studentNames = studentsWithMarksOver50.map((student) => student.name);
    console.log(studentNames);
  }
  
  function PrintStudentsbyForEach() {
    const studentsWithMarksOver50 = [];
    arr.forEach((student) => {
      if (student.marks > 50) {
        studentsWithMarksOver50.push(student);
      }
    });
    console.log(studentsWithMarksOver50);
  }
  
  function addData() {
    const newStudent = { id: 4, name: "susan", age: "20", marks: 45 };
    arr.push(newStudent);
    console.log(arr);
  }
  
  function removeFailedStudent() {
    arr = arr.filter((student) => student.marks >= 50);
    console.log(arr);
  }
  
  function concatenateArray() {
    const newArray = [
      { id: 4, name: "peter", age: "19", marks: 90 },
      { id: 5, name: "emily", age: "21", marks: 65 },
      { id: 6, name: "luke", age: "18", marks: 55 },
    ];
    arr = arr.concat(newArray);
    console.log(arr);
  }