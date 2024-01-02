// 객체 리터럴
const zerocho = {
    name: '조현영',
    year: 1994,
    month: 8,
    date: 12,
    gender: 'M',
};

// const 객체 = {
//     속성이름: 속성값,
// }

console.log(zerocho.name);
console.log(zerocho['name']);
console.log(zerocho.date);
console.log(zerocho['date']);

const name = 'date';
console.log(zerocho['name']);
console.log(zerocho[name]);
console.log(zerocho.hello);
