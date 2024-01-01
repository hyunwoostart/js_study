// 배열에서 요소 제거하기
const target = ['가', '나', '다', '라', '마'];
target.pop();
console.log(target);

const target = ['가', '나', '다', '라', '마'];
target.shift();
console.log(target);

const target = ['가', '나', '다', '라', '마'];
target.splice(2, 2);
console.log(target);

const target = ['가', '나', '다', '라', '마'];
target.splice(1);
console.log(target);

const target = ['가', '나', '다', '라', '마'];
target.splice(1, 3, '타', '파');
console.log(target);