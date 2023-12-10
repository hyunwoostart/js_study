function greetToUser(greet) {
    const name = "별코딩";
    // .... 데이터 로딩
    greet(name);
}

function greetInKorean(name) {
    console.log(name + '님, 안녕하세요');
}

function greetInEnglish(name) {
    console.log("Hi, " + name);
}

greetToUser(greetInEnglish);