const students = ['Marcos', 'Marina', 'João'].reduce((allStudents, name) => {
    allStudents.push({ name, id: allStudents.length });
    return allStudents;
}, []);

let iterator = students[Symbol.iterator]();
console.log(`First value`,iterator.next());
