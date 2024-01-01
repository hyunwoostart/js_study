// 이차원 배열 - 배열 내부의 값을 요소
// const everything = ['사과', 1, undefined, true, '배열', null];
const duplicate = ['가', '가', '가', '가', '가'];
const empty = [];

// 배열의 요소 개수 구하기
const everything = ['사과', 1, undefined, true, '배열', null];
console.log(everything.length);

const emptyValue = [null, undefined, false, '', NaN];
console.log(emptyValue.length);

const findLastElement = ['a', 'b', 'c', 'd', 'e'];
console.log(findLastElement[findLastElement.length - 1]);

// 배열의 요소 추가하기
// const target = ['a', 'b', 'c', 'd', 'e'];
// target[5] = 'f';
// console.log(target);

// const target = ['가', '나', '다', '라', '마'];
// target[target.length] = '바';
// console.log(target);

// const target = ['나', '다', '라', '마', '바'];
// target.unshift('가');
// console.log(target);

const target = ['가', '나', '다', '라', '마'];
target.push('바');
console.log(target);

// const인데 수정 가능한 이유는 뭔가요?
/* const에는 새로운 값을 대입(=)하지 못한다고 기억하면 됩니다. const에 객체(배열, 함수, 객체 리터럴)가 대입되면 객체 내부의 속성이나
배열의 요소는 수정할 수 있습니다. */
const target2 = ['a', 'b', 'c', 'd', 'e'];
target2 = ['f', 'g']; // 불가능
target2[0] = 'h';