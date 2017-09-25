$(document).ready(function() {
    $(window).scroll(function() {
      if($(this).scrollTop() > $(window).height()) {
          $('nav').addClass('bg-white');
          $('.nav-link').removeClass('white-nav');
      } else {
          $('nav').removeClass('bg-white');
          $('.nav-link').addClass('white-nav');

      }
    });
});

var swiper = new Swiper('.swiper-about', {
    paginationClickable: true,
    centeredSlides: true,
    autoplay: 1500,
    loop: true,
    autoplayDisableOnInteraction: false
});

var swiper = new Swiper('.swiper-careers', {
    paginationClickable: true,
    centeredSlides: true,
    autoplay: 1500,
    loop: true,
    autoplayDisableOnInteraction: false
});

var swiper = new Swiper('.swiper-news', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    parallax: true,
    speed: 600,
    loop: true
});
