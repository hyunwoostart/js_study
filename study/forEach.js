//forEach() 

/*
//forEach() 메서드는 배열에 활용이 가능한 메서드로, 파라미터로 주어진 함수를 배열 요소 각각에 대해 실행하는 메서드이다.
map() 메서드와 거의 비슷하지만 차이점은 따로 return 하는 값이 없다는 점이다.
*/

const array = [1, 2, 3, 4, 5];

const newArray = array.forEach((currentEl, index, arr) => {
    console.log(`요소: ${currentEl}`);
    console.log(`index: ${index}`);
    console.log(arr);
});

console.log(newArray);

/*
forEach() 메서드도 map() 메서드와 동일하게 파라미터로 콜백 함수를 받는데, 그 콜백 함수의 파라미터는 요소, index 그리고 현재 map() 메서드를 호출한 배열이다.
forEach() 메서드도 세번째 배열은 잘 사용되지 않고 일반적으로 첫 번째 요소와, 두 번째 index가 많이 사용된다.

앞에서도 언급했지만, map() 메서드와 차이점은 콜백 함수가 return 하는 값을 따로 모아서 어떤 처리를 하는 과정이 없기 때문에, 메서드를
호출한 코드를 함수에 할당하면 undefined가 할당된다.

그래서 forEach() 메서드는 변수에 할당하기 보다는 반복문이나 조건문과 같이 그냥 바로 호출되는 것이 
일반적이다.

*/
array.forEach((currentEl, index, arr) => {
    console.log(`요소: ${currentEl}`);
    console.log(`index: ${index}`);
    console.log(arr);
})

const animals = ['강아지', '고양이', '햄스터', '거북이', '이구아나'];
animals.forEach((aniEl, index) => {
    // console.log(`요소 : ${aniEl}`);
    // console.log(`index : ${index}`);
    console.log(index);
    console.log(aniEl);
    if(aniEl === '고양이') {
        animals.shift();
    }
})
console.log(animals);

/* 
그리고 forEach() 메서드의 콜백함수 내에서 메서드를 호출한 배열을 변경하는 것이 가능한데,
위 코드처럼 특정상황에서 요소 하나를 삭제해버리게 되면 그 다음 요소를 찾을 때, 변경된 배열에서 해당하는
index를 찾기 때문에, 이 코드의 실행 결과를 보면 고양이 다음에 햄스터가 출력되는데,
메서드가 실행된 이후의 animals를 살펴보면, 강아지가 배열에서 삭제된 걸 확인할 수 있다.

//참고
forEach() 메서드의 상위호환이라고 해서 배열의 요소들을 순회할 때 그냥 무조건 map() 메서드를
활용하는 경우를 본 적이 있었는데, 개인적으로는 return 값으로 새로운 배열이 필요하지 않는 경우라면
forEach() 메서드를 활용하는 것도 좋은 방법이라고 생각한다.
*/

// forEach 메서드를 사용한 코드를 for문으로 바꿔보세요.
/* 
    const arrays = [1, 3, 5, 7];
    arrays.forEach((number, index) => {
        console.log(number, index);
    })
*/

const arrays2 = [1, 3, 5, 7];
    for(let i = 0; i < arrays2.length; i++) {
        console.log(arrays2[i], i);
    }

/*  예제1
for()문 과 forEach()문 
const numbers = [];
for (let n = 1; n <= 9; n += 1) {
    numbers.push(n);
}

const numbers = Array(9).fill().map((v, i) =>  i + 1);
*/

/* 예제2
    const array = [1, 3, 5, 7];
    const newArray = array.map((number, index) => {
        console.log(number, index);
        return number + 1;
    });
    console.log(array);
    console.log(newArray);
*/

// 내용 정리
/* 
    1. 무작위로 숫자 뽑기
    무작위로 숫자를 뽑을 때는 Math.random 메서드를 사용합니다. 단 뽑은 값은 정수가 아니므로
    Math.floor나 Math.ceil 같은 메서드를 사용해 정수로 바꿔야 합니다.
    Math.floor 내림
    Math.ceil 올림
    Math.round 반올림

    2. 1부터 원하는 숫자까지 들어 있는 배열 만들기
    반복문을 사용해 배열에 숫자를 push 하면 됩니다.

    const numbers = [];
    for (let n = 1; n <= 숫자; n += 1) {
        numbers.push(n);
    }

    3. indexOf와 includes
    indexOf와 includes는 배열이나 문자열에 원하는 값이 들어 있는지 찾는 메서드입니다.
    원하는 값이 들어 있다면 해당 인덱스를 알려주고, 들어 있지 않다면 -1을 반환합니다. includes는 
    조금 더 직관적으로 true/false를 반환합니다.

    '2345'.indexOf(3) === 1;
    '2345'.indexOf(6) === -1;
    ['2', '3', '4', '5'].indexOf('5') === 3;
    ['2', '3', '4', '5'].indexOf(5) === -1; // 요소의 자료형까지 같아야 함
    '2345'.includes(3) === true;
    ['2', '3', '4', '5'].incldues('5') === false;

    4. forEach와 map
    forEach는 반복문 효과를 내는 배열의 메서드입니다. 인수로 함수를 넣고, 이 함수가 각각의 배열
    요소들에 순서대로 적용되는 구조입니다.
    const array = [1, 3, 5, 7];
    array.forEach((number, index) => {
        console.log(number, index);
    });

    map도 반복문 역할을 하지만, 반환값이 있다는 점에서 forEach와 다릅니다. map은 기존 배열의 요소를 
    일대일로 다른 값으로 바꿉니다. 단 기존 배열의 값이 바뀌는 것이 아니라 새로운 배열을 만듭니다.

    const array = [1, 3, 5, 7];
    const newArray = array.map((number, index) => {
        console.log(number, index);
        return number + 1;
    });
    console.log(array); // [1, 3, 5, 7]
    console.log(newArray); // [2, 4, 6, 8]

    5. document,createElement, document.createTextNode
    각각 태그와 텍스트를 만드는 메서드입니다. 단, 다른 태그에 append나 appendChild 하기 전까지는 
    화면에 보이지 않습니다.

    6. appendChild와 append
    document.createElement, document.createTextNode로 만든 태그나 텍스트를 선택한 태그
    의 자식 태그로 넣습니다. apeendChild로는 하나만 넣을 수 있고, append를 사용하면 여러 개를
    동시에 넣을 수 있습니다. 또한 append로 텍스트를 추가할 때는 document.createTextNode 대신
    문자열을 바로 넣어도 됩니다.
*/


