import Container from '../utils/Container';
const names = ['Marcos','Marina','João'];

Container.append('Foreach: ','broker');
names.forEach(function(name){
    Container.append(name,'broker');
});
Container.divider();
Container.append('Map: ','broker');

const numbers = [1,2,3,4,5];
const doubleOfNumbers = numbers.map(number => number * 2);
Container.append(`Map result: ${doubleOfNumbers}`);

Container.divider();