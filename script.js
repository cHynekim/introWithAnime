$(document).ready(function(){
    $('.menu>ul>li').mouseover(function(){
        $(this).children('.submenu').stop().slideDown(400);
    });
    $('.menu>ul>li').mouseout(function(){
        $(this).children('.submenu').stop().slideUp(400);
    });
}) /*main, submenu slide animation*/

let observer = new IntersectionObserver((e)=>{
    e.forEach((box)=>{
        box.target.style.opacity = '1';
    })
    e[0].target.style.left = '7%';
    e[1].target.style.right = '7%';
}); /*if the element which param is pointing is on screen, change the style(css)*/
let txt = document.querySelectorAll('.mainText');
let subject = document.querySelector('#subPage');
observer.observe(txt[0]);
observer.observe(txt[1]);

let observer2 = new IntersectionObserver((e)=>{
    e.forEach((area)=>{
        area.target.style.backgroundColor = 'white';
    })
})
let cont = document.getElementById('subPage');
observer2.observe(cont);
