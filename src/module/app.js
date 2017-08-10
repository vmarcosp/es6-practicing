const students = ['Marcos', 'Marina', 'João'].reduce((allStudents, name) => {
    allStudents.push({ name, id: allStudents.length });
    return allStudents;
}, []);

let iterator = students[Symbol.iterator]();
console.log(`First value`, iterator.next());

let iteratorSelector = students[Symbol.iterator]();
let done = false;
let next = iterator.next();
do {
    let student = next.value;
    console.log('Select current', student);
    next = iterator.next();
} while (!next.done);