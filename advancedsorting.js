//can sort simple values in an array (sort)
//can explain why you cannot use JS sort on its own to sort an array of numbers
//can sort values in an array using a custom comparator (sort)

var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];
// the ids of sorted array should be ordered [3, 4, 1, 2]


students.sort(function (first, second){
  if (first.name > second.name){
    console.log(students)
    return 1;
  }
  if (first.age < second.age){
    console.log(students)
    return 1;
  }
});

console.log(students);