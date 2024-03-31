$(function(){
    $('.service-row').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        pauseOnHover: false,
        autoplaySpeed: 2000,
        arrows: true,
        prevArrow: '.one',
        nextArrow: '.two',
      });

    $('.blog-row').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        pauseOnHover: false,
        autoplaySpeed: 2000,
        arrows: true,
        centerMode: true,
        centerPadding: '0px',
        dots: true,
        prevArrow: '.three',
        nextArrow: '.four',
     
      });
                  
})