const btn = document.querySelector('.hero-btn');
const hero = document.querySelector('section');

btn.addEventListener('click',function(){
    console.log("hello")
    if(hero.classList.contains('hero'))
    {
        hero.classList.add('plant');
        hero.classList.remove('hero');
    }
    else
    {
        hero.classList.remove('plant');
        hero.classList.add('hero');
    }
})