const form = document.querySelector('#login-form');

// let accessToken = null;

const handleSubmitForm = async e => {
    e.preventDefault();
    const formData = new FormData(form);

    console.log(sha256(formData.get('password')))
    formData.set('password',sha256(formData.get('password')));

    const res = await fetch('/login',{
        method: 'POST',
        body: formData
    });
    const data = await res.json();
    const accessToken = data.access_token;
    window.localStorage.setItem('token',accessToken);
    alert('로그인 되었습니다');

    if(res.status !== 200) return;
    window.location.pathname = '/';
    // const btn = document.createElement('button');
    // btn.innerText = '상품 가져오기';
    // btn.addEventListener('click', async e=>{
    //     console.log(accessToken)
    //     const res = await fetch('/items',{
    //         headers:{
    //             Authorization: `Bearer ${accessToken}`,
    //         },
    //     });
    //     const data = await res.json();
    //     console.log(res, data)
    // });

    // info.appendChild(btn)


    // if(res.status === 200){
    //     alert('로그인 성공')
    //     console.log(data)
    // }else if(res.status === 401){
    //     alert('id, 혹은 password가 틀렸습니다.')
    // }

    // if(data === '200'){
    //     div.innerText = '로그인이 완료되었습니다.';
    //     div.style.color = 'blue';
    //     window.alert('로그인이 완료되었습니다.')
    //     // window.location.pathname = '/login.html'
    // }
}

form.addEventListener('submit',handleSubmitForm);