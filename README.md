# this는 함수를 호출한 객체이다

# this

- 일반함수의 this는 함수의 선언 위치에 상관 없이, 함수를 호출하는 방법에 따라 달라진다. 
일반 함수의 this는 함수를 호출한 객체를 가리킨다.

- 화살표 함수의 this는 함수의 호출 방법에 상관 없이, 함수를 선언한 위치에 의해 결정된다.
화살표 함수의 this는 함수를 감싸는 상위 스코프의 this를 그대로 가져와서 사용한다.