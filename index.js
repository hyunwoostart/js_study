// // 매개변수와 인수 사용하기
function a(parameter) {
    console.log(parameter);
}
a('argument');

function a(w, x, y, z) {
    console.log(w, x, y, z);
    console.log(arguments);
}
a('Hello', 'Parameter', 'Argument');

function a(w, x) {
    console.log(w, x);
}
a('Hello', 'Parameter', 'Argument');

function add(x, y) {
    return x + y;
}
console.log(add(3, 5));
console.log(add(8, 7));

// 퀴즈 - 매개변수로 x, y, z을 받아 곱한 값을 반환하는 multiply 함수를 만들어보세요. 단, 화살표 함수로 만드세요.
const multiply = (x, y, z) => {
    return x * y * z;
}
console.log(multiply(3,5,5));

