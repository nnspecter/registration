var coincidence = document.getElementById('coincidence')

document.getElementById('username').addEventListener('keydown', function(e) {
    if (e.key === ' ') e.preventDefault();
});

document.getElementById('password').addEventListener('keydown', function(e) {
    if (e.key === ' ') e.preventDefault();
});

document.getElementById('repassword').addEventListener('keydown', function(e) {
    if (e.key === ' ') e.preventDefault();
});

function checkForm(el){
    var name = el.username.value;
    var pass = el.password.value;
    var repass = el.repassword.value;
    var fail=0;
    var fail2=0 //для проверки

    if(name == "" || pass == "" || repass == ""){
        noname.innerHTML ="Заполните все поля";
        fail=1;
    }
    else if(name.length < 4 || name.length > 8){
        noname.innerHTML ="Не правильная длина логина";
        fail=1;
    }
    else{
        noname.innerHTML="";
        fail=0
    }
//-------------------------------------------------
    if( pass.length < 6 && pass !== ""){
        coincidence.innerHTML ="Пароль слишком короткий";
        fail2=1;
    }
    else if (pass.split(".").length>1){
        coincidence.innerHTML ="Пароль содержит '.' ";
        fail2=1;
    }
    else if (pass!==repass){
        coincidence.innerHTML ="Пароли не совпадают";
        fail2=1;
    }
    else{
        coincidence.innerHTML="";
        fail2=0;
    }

    if(fail==0){
        alert("Все данные корректно заполнены");
        window.location = 'https://google.com' 
        return false;
    }
    else{
        return false; 
    }
}