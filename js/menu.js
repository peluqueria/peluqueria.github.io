const bxmenu = document.querySelector('.bxmenu');
const navegador = document.querySelector('.menu-navegador');

console.log(navegador)
console.log(bxmenu)

bxmenu.addEventListener('click',() =>{
    navegador.classList.toggle("spread")
})

