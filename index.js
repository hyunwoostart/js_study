// 1. 로그인
function login(username, callback) {
    setTimeout(() => {
        callback(username);
    }, 1000);
}


// 2. 장바구니에 넣기
function addTocart(product, callback) {
    setTimeout(() => {
        callback(product);
    }, 1000);
}


// 3. 결제하기

function makePayment(cardNumber, product, callback) {
    setTimeout(() => {
        callback(cardNumber, product);
    }, 1000);
}

login('지현우', (username) => {
    console.log(`${username}님 안녕하세요`);
    addTocart("감자", (product) => {
        console.log(`${product}를 장바구니에 넣었습니다`);
        makePayment("0000000000000000", product, (cardNumber, item) => {
            console.log(`${cardNumber.slice(0, 6)}로 ${product}를 구매했습니다.`)
        });
    });
});
