// zerocho 객체
const zerocho = {
    name: '조현영',
    year: 1994,
    month: 8,
    date: 12,
    gender: 'M'
};

// 객체 속성 수정하기
zerocho.gender = 'F';
console.log(zerocho.gender);

// 객체 속성 제거하기
delete zerocho.gender;
console.log(zerocho.gender);

// 배열과 함수가 객체인 이유
/* 
    배열과 함수가 객체인 이유는 객체의 성질을 모두 다 사용할 수 있기 때문입니다. 배열과 함수에도 속성들을
    추가하거나 수정 및 저게할 수도 있습니다. 객체는 함수와 배열을 포함하는 개념이라서 {}를 사용해 만든 객체를 객체 리터럴이라고
    따로 부르는 것입니다.
*/
function hello() {
    hello.a = 'really?';
    const array = [];
    array.b = 'wow';
    console.log(hello.a);
    console.log(hello.b);
}
/* 
    다만, 함수와 배열은 주로 객체 리터럴과는 다른 목적으로 사용하기에 함수와 배열에 임의 속성을 넣는 경우는 드뭅니다. 임의 속성을 놓고자 한다면 처음부터
    객체 리터럴을 사용하지 함수와 배열을 사용할 이유가 없습니다.
*/

