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
    

    if(name == "" || pass == "" || repass == ""){
        noname.innerHTML ="Заполните все поля";
    }
    else if(name.length < 4 || name.length > 8){
        noname.innerHTML ="Не правильная длина логина";
    }
    else{
        noname.innerHTML="";
    }

    if( pass.length < 6 && pass !== ""){
        coincidence.innerHTML ="Пароль слишком короткий";
    }
    else if (pass!==repass){
        coincidence.innerHTML ="Пароли не совпадают";
    }
    else{
        coincidence.innerHTML="";
    }

    console.log(name);
    return false;
}