# this는 함수를 호출한 객체이다

# this

- 일반함수의 this는 함수의 선언 위치에 상관 없이, 함수를 호출하는 방법에 따라 달라진다. 
일반 함수의 this는 함수를 호출한 객체를 가리킨다.

- 화살표 함수의 this는 함수의 호출 방법에 상관 없이, 함수를 선언한 위치에 의해 결정된다.
화살표 함수의 this는 함수를 감싸는 상위 스코프의 this를 그대로 가져와서 사용한다.

# 콜백함수

- 다른 함수의 인자로 전달되는 함수

function main(callback) {
    callback();
}

main(() => {  });

# setInterval
setTimeout과 비슷한 효과를 냅니다 다만, 한 번만 실행되는 setTimeout과는 달리 지정한 시간 마다
주기적으로 지정한 함수를 실행합니다.

setInterval(() => {
    // 내용
}, 밀리초)

# clearInterval, clearTimeout
setInterval과 setTimeout 함수는 각각 clearInterval과 clearTimeout 함수로 취소할 수 있습니다.
다만, clearTimeout은 setTimeout에 지정한 함수가 아직 실행되지 않았을 때만 취소 할 수 있습니다.

let 아이디 = setInterval(함수, 밀리초);
clearInterval(아이디);
let 아이디 = setTimeout(ㅎ마수, 밀리초);
clearTimeout(아이디)

# 배열.includes
||을 사용한 코드는 배열의 includes 메서드로 반복을 줄일 수 있습니다. 다음 두 코드는 같은
작업을 수행합니다.

diff === '바나나' || diff === '사과' || diff === '오렌지'
// 또는
['바나나', '사과', '오렌지'].incldues(diff)

# removeEventListener
addEventListener로 연결한 함수를 removeEventListener로 제거할 수 있습니다. 단, 열결할 때의 함수와 제거할 때의 함수가 같아야 합니다.
funciton 함수() {}
태그.addEventListener('이벤트', 함수);
태그.removeEventListener('이벤트', 함수);