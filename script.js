const toggleBtn = document.querySelector('.toggleBtn')
const menu = document.querySelector('.navbar_menu')
const icons =document.querySelector('.navbar_icons')

toggleBtn.addEventListener('click', (event)=>{
    event.stopPropagation();
    menu.classList.toggle('active');
    icons.classList.toggle('active');
})