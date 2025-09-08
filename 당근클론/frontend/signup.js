const form = document.querySelector('#signup-form');

const checkPass = ()=>{
    const formData = new FormData(form);
    const pass1 = formData.get('password');
    const pass2 = formData.get('password2');

    if(pass1 === pass2) return true;
    else return false;
};

const handleSubmitForm = async e => {
    e.preventDefault();
    const formData = new FormData(form);

    formData.set('password',sha256(formData.get('password')));

    const div = document.querySelector('#info');

    if(checkPass()){
        const res = await fetch('/signup',{
            method: 'POST',
            body: formData
        });
        const data = await res.json();

        if(data === '200'){
            div.innerText = '회원가입이 완료되었습니다.';
            div.style.color = 'blue';
        }
    }else{
        div.innerText = '패스워드가 같지 않습니다.';
        div.style.color = 'red';
    }
}

form.addEventListener('submit',handleSubmitForm);