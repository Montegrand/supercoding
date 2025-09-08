
function SayHello(){
    const time = new Date();
    const 시 = ('0'+time.getHours()).slice(-2);
    const 분 = ('0'+time.getMinutes()).slice(-2);
    const 초 = time.getSeconds().toString().padStart(2, '0');

    const timeH1 = document.querySelector('.time');

    timeH1.innerHTML = `${시}:${분}:${초}`;
}

// 1회성
// setTimeout(SayHello,1000)

// 주기성
// setInterval(SayHello,1000)

const 시작_시간 = new Date();

function SetTime(){
    const 현재_시간 = new Date();
    const 흐른_시간 = new Date(현재_시간 - 시작_시간);
    const 분 = ('0'+흐른_시간.getMinutes()).slice(-2);
    const 초 = ('0'+흐른_시간.getSeconds()).slice(-2);

    return `${분}:${초}`;
};

function setTimeTest(){
    const 현재_시간 = new Date();
    const 년 = 현재_시간.getFullYear();
    const 월 = ('0'+현재_시간.getMonth()).slice(-2);
    const 일 = ('0'+현재_시간.getDate()).slice(-2);
    const 시 = ('0'+현재_시간.getHours()).slice(-2);
    const 분 = ('0'+현재_시간.getMinutes()).slice(-2);
    const 초 = ('0'+현재_시간.getSeconds()).slice(-2);

    return `${년}년 ${월}월 ${일}일 ${시}:${분}:${초}`;
};

setInterval(()=>{
    document.querySelector('.time').textContent = setTimeTest();
},1000)

function test(){
    console.log('test');
    setTimeout(test, 1000);
}

test();