
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

setInterval(()=>{
    document.querySelector('.time').textContent = SetTime();
})