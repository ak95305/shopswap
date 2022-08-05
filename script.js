$(document).ready(function(){
    $('.slider').slick({
        draggable: true,
        arrows: false,
        dots: true,
        fade: true,
        speed: 900,
        infinite: true,
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
        touchThreshold: 100,
        autoplay: true,
      })
  });



  let subMenu = document.querySelector('.submenu');
  subMenu.addEventListener('click', ()=>{
    subMenu.classList.toggle('active');
  });