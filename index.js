// 함수 return 이해하기
function a () {}

a();

function a() {
    return 10;
}

a();

function a() {}
// 두 코드는 동일함
function a() {
    return undefined;
}

function a() {
    console.log('a');
}
// 두 코드는 동일함
function a() {
    console.log('a');
    return undefined;
}

function a() {
    return 10;
}
console.log(a());

function a() {
    return 10;
}

const b = a();
console.log(b);

function a() {
    console.log('Hello');
    return;
}
a();

function a() {
    console.log('실행됩니다.');
}
a();