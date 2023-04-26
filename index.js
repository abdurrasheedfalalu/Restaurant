window.addEventListener('scroll', ()=>{
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
    document.querySelector('.cart  span').classList.toggle('window-scroll-cart', window.scrollY > 0)

})