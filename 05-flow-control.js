//  연습문제 1.
//  2단부터 ~ 9단까지 구구단표 출력

//  - for문 버전
for (let s = 2; s < 10; s++) {
    for (let i = 1; i < 10; i++)  {
        console.log(i * s);
    }
}

//  - while문 버전
let j = 2;
while (j < 10){
let i = 1;
while (i < 10) {
    console.log(j * i);
i = i + 1;
}
j = j + 1;
}

// 연습문제2.
/*


*****
****
***
**
*

*/

//  - for문 버전
for (i = 5; i > 0; i--) {
    let repeatedString = "*".repeat(i);
    console.log(repeatedString);  
}
for (i = 5; i > 0; i--) {
    console.log("*".repeat(i));  
}

for (let i = 5; i > 0; i--) {
    let line = "";
    for (let j = 0; j < i; j++) {
        line += "*";
    }
    console.log(line);
}

//  - while문 버전
let y = 5;
while (y > 0) {
    let line = "";
    let x = 0;
while (x < y) {
    line += "*";
    x = x + 1;
}
console.log(line);
y = y - 1;
}

// for ... in : 객체의 속성 키를 반복
const obj = {
    name: "홍길동",
    age: 28,
    job: "도적"
}

for (let key in obj) {
    console.log(`${key} -> ${obj[key]}`);
}

//  for ... of : 배열을 순회
const arr = [1, 2, 3, 4, 5];
for(let item of arr) {
    console.log(item);
}