// 배열에서 반복하기
// const target = ['가', '나', '다', '라', '마'];
// let i = 0;
// while (i < target.length) {
//     console.log(target[i]);
//     i++;
// }

// const target2 = ['가', '나', '다', '라', '마'];
//     for (let i = 0; i < target2.length; i ++) {
//         console.log(target[i]);
//     }

// 퀴즈 - 다음 배열에서 '라'를 모두 제거하세요. indexOf와 splice를 사용하세요. const arr = ['가', '라', '다', '라', '마', '라'];
const arr = ['가', '라', '다', '라', '마', '라'];
let index = arr.indexOf('라');
while (index > -1) {
    arr.splice(index, 1);
    index = arr.indexOf('라');
}

console.log(arr);
