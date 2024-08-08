const menu = document.querySelector('.menu-mobile')
const burguer = document.querySelector('#burguer');
const iclose = document.querySelector('#icon-close');
console.log(burguer)

burguer.addEventListener('click', () =>{
    menu.classList.add('active')
})

iclose.addEventListener('click', () =>{
    menu.classList.remove('active')
})