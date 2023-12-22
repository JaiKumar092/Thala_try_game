'use strict';

function out(a){
    document.querySelector('.message').textContent=`${a}=(7) Thala for a Reason!`;
    document.querySelector('main').style.backgroundColor= "#FFFF00";
}

function simple(){
    document.querySelector('.message').textContent="try again!";
    document.querySelector('main').style.backgroundColor= "#FFE382";
}

document.querySelector('.check_button').addEventListener('click',function () {
    // console.log(document.querySelector('#guess').value);
    const a =document.querySelector('#guess').value;
    if(!a){
        simple();
    }
    if(!isNaN(a)){
        var b=parseInt(a,10);
        var ans=0;
        while(b!=0){
            ans=ans+(b%10);
            b=Math.floor(b/10);
        }
        if(ans===0) {simple();}
        else if(ans%7===0){out(a);}
        else{
            simple();
        }
    }
    else{
        var b=a.replace(/\s/g,'');
        var ans=b.length;
        if(ans===0) {simple();}
        else if(ans%7===0) out(a);
        else{
            simple();
        }
    }
});

document.querySelector('body').addEventListener('keypress',function (event) {
    // console.log(document.querySelector('#guess').value);
    if(event.key==='Enter'){
    const a =document.querySelector('#guess').value;
    if(!a){
        simple();
    }
    if(!isNaN(a)){
        var b=parseInt(a,10);
        var ans=0;
        while(b!=0){
            ans=ans+(b%10);
            b=Math.floor(b/10);
        }
        if(ans===0) {simple();}
        else if(ans%7===0){out(a);}
        else{
            simple();
        }
    }
    else{
        var b=a.replace(/\s/g,'');
        var ans=b.length;
        if(ans===0) {simple();}
        else if(ans%7===0) out(a);
        else{
            simple();
        }
    }
}
});