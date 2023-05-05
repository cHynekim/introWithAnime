$(document).ready(function(){
    $('.menu>ul>li').mouseover(function(){
        $(this).children('.submenu').stop().slideDown(400);
    });
    $('.menu>ul>li').mouseout(function(){
        $(this).children('.submenu').stop().slideUp(400);
    });
})

let observer = new IntersectionObserver((e)=>{
    e.forEach((box)=>{
        box.target.style.opacity = '1';
    })
    e[0].target.style.left = '7%';
    e[1].target.style.right = '7%';
});
let txt = document.querySelectorAll('.mainText');
observer.observe(txt[0]);
observer.observe(txt[1]);