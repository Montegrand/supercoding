console.log('test test')

const 상수 = 'const 는 상수로 함수내 재사용만 가능하며 수정 불가능 함';

let 강화변수 = 'let 은 var 의 약점을 극복하기 위해 만들어진 변수 선언이다. 함수 내 동일한 변수명을 재선언시 에러로 알려준다';

var 변수 = '';

var 변수 = '이런식으로 사용해도 error 로 알려주지 않아서 변수 관리에 있어 휴먼 에러가 생길 수 있음';

const 배열 = ['배열은', '여러', '값을', '담아둘', '수', '있다', ['중첩이', '가능하다']];
배열.push('상수 자체를 수정하지 않으므로 OK');

const 객체 = {
    title : '객체의 이름',
    context : '해당 객체의 내용',
    children: {
        하위정보: '물론 객체 또한 중첩 가능하다',
    },
    배열: ['배열도', '담을 수 있음'],
    함수1: ()=>{
            console.log('함수도 담을 수 있음');
        }
}

console.log(객체.title, '이런식으로 가져올 수 있음');

객체.추가정보 = '이렇게 정보를 추가 할 수 있음';


function 함수(파라미터){
    console.log(파라미터);
};

함수('함수에 파라미터를 넣고 실행, 공학의 방정식을 생각해보면 이해가 쉽다.');
함수('식에 변수와 상수가 존재하며 변수에 따라 값이 달라진다.');

const 화살표함수 = ()=>{
    console.log('es6 문법으로 function 의 준말이다. 즉시실행함수로 사용시 (()=>{})() 와 같이 사용');
};

const 더하기 = (a, b)=>{
    const 합 = a + b;
    console.log('연산도 가능')
    return 합;
};

console.log(더하기(12, 34));

let 조건1 = true;
let 조건2 = false;
if(조건1) console.log('조건문 사용법');
if(!조건2) console.log('앞에 ! 를 붙여 boolean 을 역으로 사용할 수 있음');

for (let i=0;i<5;i++){
    console.log(i, 'for 문 기본형임, for ...of, ...in 도 있음')
}

// const timeElement = document.getElementById('time');
// const timeElement = document.querySelector('h1#time');
const timeElement = document.querySelector('.time2');

timeElement.style.color = 'white';
timeElement.style.backgroundColor = 'tomato';
timeElement.innerText = 'context'

document.title = 'metadata 수정 가능'

const 시간클릭 = ()=>{
    timeElement.style.color = 'orange';
    timeElement.style.backgroundColor = 'transparent';
    timeElement.innerText = '12:00';
}

timeElement.addEventListener('click',시간클릭);
