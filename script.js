// Swiper Slider
var swiper = new Swiper(".image-slider", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2,
        slideShadows: true,
    },
    loop:true,
    autoplay: {
          delay: 1200,
          disableOnInteraction: false,
    },
}); 

// Sweeper Slider > review
var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop: true,
    autoplay:{
        delay:2500,
        disableOnInteraction:false,
    },
    breakpoints:{
        640:{
            slidesPerView:1,
        },
        768:{
            slidesPerView:2,
        },
        1024:{
            slidesPerView:3,
        },
    },
});
// toggle navbar
var menu = document.querySelector('#menu-bar');
var navbar = document.querySelector('.navbar');

menu.addEventListener('click', () => { 
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("nav-toggle");
});
window.onscroll = () =>{
    menu.classList.remove("fa-times");
    navbar.classList.remove("nav-toggle");
};

