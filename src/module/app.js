import Container from '../utils/Container';
const names = ['Marcos', 'Marina', 'João'];

Container.append(' - Foreach: ', 'broker');
names.forEach((name, index) => Container.append(` ${index !== 0 ? ' - ' : ''} ${name}`));

Container.divider();
Container.append(' - Map: ', 'broker');

const numbers = [1, 2, 3, 4, 5];
const doubleOfNumbers = numbers.map(number => number * 2);
const students = [
    {
        name: 'Marcos',
        age: 16
    },
    {
        name: 'João',
        age: 18
    },
    {
        name: 'Maria',
        age: 22
    }
];

Container.append(`Map result: ${doubleOfNumbers}`);
Container.divider();

Container.append(' - Find: ', 'broker');
let student = students.find(aluno => aluno.name === 'Marcos');
Container.append(`Find result ${JSON.stringify(student)}`);
Container.divider();

Container.append(' - Every function', 'broker');
let ageCondition = students.every(student => student => 18);
Container.append(`Every result:${ageCondition}`);
Container.divider();

Container.append(' - Some', 'broker');

let ageConditionSome = students.some(student => student.age < 18);
Container.append(`Some result:${ageConditionSome}`);
Container.divider();

Container.append(' - Reduce', 'broker');
let reduced = 0;
reduced = numbers.reduce((sum, number) => sum + number, reduced);
Container.append(`Reduce result: ${reduced}`);
Container.divider();

Container.append(' - Reduce 2 - (Concat all names in only one array)', 'broker');
let allNames = students.reduce((names,student) => {
    names.push(student.name);
    return names;
},[]);
Container.append(`Reduce result: ${allNames}`);