
var swiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        
    },
    slidesPerView: 1, 

    touchEventsTarget: 'container',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints:{
        768:{
            slidesPerView:2
        },
        
    }
    
});
