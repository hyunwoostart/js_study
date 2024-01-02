// 메서드 이해하기
/*
    속성 값으로 자바스크립트의 모든 값을 넣을 수 있습니다. 문자열도 되고, 숫자, 불 값, null, undefined도 됩니다.
    그리고 함수, 배열, 다른 객체까지도 넣을 수 있습니다.
    객체의 속성 값으로 함수가 들어가면 이 속성을 특별히 메서드(method)라고 합니다.
*/
const debug = {
    log: function(value) {
        console.log(value);
    },
};
debug.log('Hello, Method');

// 객체 간 비교하기
// {} === {}  // false

// 객체가 아닌 숫자, 문자열, 불 값, null, undefined는 모두 true를 반환합니다.

'str' === 'str';
123 === 123;
false === false;
null === null;
undefined === undefined;

// 갹체는 모양이 같아도 생성할 때마다 새로운 객체가 생성됩니다. 따라서 같은 객체인지 비교하려면 기존 객체를 변수에 저장해 두어야 합니다.

// const a = { name: 'zerocho' };
// const array = [1, 2, a];
// console.log(a === array[2]);

// 참조와 복사
/* 객체를 사용할 때 반드시  알아야 하는 개념이 있는데, 바로 참조(reference)입니다. */
const a = { name: 'zerocho' };
const b = a;
a.name = 'hero';
console.log(b.name);
/* 
    변수 b에 a를 대입한 상황입니다. a 변수의 name 속성 값을 변경했는데, b 변수도 같이 변경했습니다.
    객체를 저장한 변수를 다른 변수에 대입하면 두 변수 모두 같은 객체를 저장하는 셈이됩니다. a와 b변수 모두 같은 객체를 저장하고 있는 것이므로 객체의 속성 값을 바꾸면 
    변수 a 와 b 모두 바뀌는 것처럼 보입니다. 이러한 상황일 때 변수 a와 b가 같은 객체를 참조하고 있다고 표현합니다.
    또는 a와 b 그리고 객체 간에 참조 관계가 있다고 표현합니다.
*/

// 다만, 객체가 아닌 값(문자열, 숫자, 불 값, null, undefined)의 경우는 조금 다릅니다.
// let a = 'zerocho';
// let b = a;
// a = 'hero';
// console.log(b);
// 이전 예제와 같이 변수 b에 a를 대입했습니다. 하지만 a를 바꿨는데도 b는 영향을 받지 않습니다. 객체가 아닌 값을 변수에 저장한 경우에는 참조 관걔가 생기지 않기 때문입니다.
// 이렇게 참조가 생기지 않는 상황을 복사(copy)라고 합니다. 객체를 변수에 담으면 참조 관계가 생김을 기억!

const zerocho = {
    name: {
        first: '현영',
        last: '조',
    },
    gender: 'm',
};


console.log(zerocho['name'].last);

