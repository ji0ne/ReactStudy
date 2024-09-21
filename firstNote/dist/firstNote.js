"use strict";
//타입스크립트 콜백 : 1-10 중 짝수만 더해서 출력하기
var answer = 0;
function selectEven(callback) {
    for (var i = 1; i < 10; i++) {
        if (i % 2 == 0)
            callback(i);
    }
}
function addNumbers(i) {
    answer += i;
}
function result() {
    selectEven(addNumbers);
    console.log(answer);
}
