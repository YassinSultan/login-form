// slider
let slider = document.getElementById('slide-img');
let counter = 0;
function slideImages(){
    let backgound = ['url(images/pic02.jpg)','url(images/pic03.jpg)','url(images/pic01.jpg)' ]
    slider.style.backgroundImage = backgound[counter];
    counter++;
    counter=counter % backgound.length;
}
setInterval(slideImages , 3000)
// ------------------------------------------------------------------
// hidden password
const passInput=document.getElementById('password');
const showBtn = document.getElementById('showPass-btn');
const hideBtn = document.getElementById('hidePass-btn')
function showPassword(){
    if(passInput.type =='password'){
        passInput.type='text';
        hideBtn.style.visibility='visible';
        showBtn.style.visibility='hidden';
    }
}
function hidePassword(){
    if(passInput.type =='text'){
        passInput.type='password';
        showBtn.style.visibility='visible';
        hideBtn.style.visibility='hidden';
    }
}
showBtn.onclick=showPassword;
hideBtn.onclick=hidePassword;

