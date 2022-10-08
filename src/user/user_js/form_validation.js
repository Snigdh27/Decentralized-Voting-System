var username=document.forms['form']['username'];
var password=document.forms['form']['password'];

username.addEventListener('textInput',username_verify);
password.addEventListener('textInput',password_verify);

function validated(){
    if(username.value.length<9){
        username.focus();
        return false;
    }
    if(password.value.length<6){
        password.focus();
        return false;
    }
}

function username_verify(){
    if(username.value.length>=8){
        return true;
    }
}

function password_verify(){
    if(password.value.length>=8){
        return true;
    }
}