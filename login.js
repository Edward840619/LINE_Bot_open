function show_hide() {
    var login = document.getElementById("container1");
    var signup = document.getElementById("container2");
    var copyright = document.getElementById("copyright");
  
    if (login.style.display === "none") {
        login.style.display = "block";  //lonin出現
        document.getElementById("username").value="";
        document.getElementById("password").value="";
        signup.style.display = "none";  //signup消失
        copyright.style.margin = "110px 0px 0px 0px";
    } else {
        login.style.display = "none";   //login消失
        signup.style.display = "block"; //signup出現
        signup.style.visibility="visible";
        copyright.style.margin = "110px 0px 0px 0px";
     
        document.getElementById("username2").value="";
        document.getElementById("password2").value="";
        document.getElementById("comfirm_password").value="";
    }
}

function check(){
    var p1 = document.getElementById("password2").value;
    var p2 = document.getElementById("comfirm_password").value;
    if ( p1 == p2 ) {
        document.getElementById("tishi").innerHTML="<font class='check' color='green'>確認密碼相同</font>";
        document.getElementById("submit").disabled = false;
    }
    else {
        document.getElementById("tishi").innerHTML="<font class='check' color='red'>確認密碼不相同</font>";
        document.getElementById("submit").disabled = true;
    }
}

function password_hide(){
    var password = document.getElementById('password');
    var anniu = document.getElementById('password_conceal');
    if(password.type==='password')
    {
        password.setAttribute('type','text');
        anniu.classList.add('yincang');
    }else{
    password.setAttribute('type','password');
        anniu.classList.remove('yincang');
    }
}


function password2_hide(){
    var password = document.getElementById('password2');
    var anniu = document.getElementById('conceal');
    if(password.type==='password')
    {
        password.setAttribute('type','text');
        anniu.classList.add('yincang');
    }else{
    password.setAttribute('type','password');
        anniu.classList.remove('yincang');
    }
}

function comfirm_password_hide(){
    var password = document.getElementById('comfirm_password');
    var anniu = document.getElementById('comfirm_conceal');
    if(password.type==='password')
    {
        password.setAttribute('type','text');
        anniu.classList.add('yincang');
    }else{
    password.setAttribute('type','password');
        anniu.classList.remove('yincang');
    }
}

