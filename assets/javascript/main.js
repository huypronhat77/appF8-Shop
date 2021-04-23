const loginBtn = document.querySelector('.login-btn');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.modal__overlay');

window.onclick = function(e){
    if(e.target === overlay){
        modal.style.display = 'none';
    }
}

loginBtn.onclick = function(){
    modal.style.display = 'flex';
}