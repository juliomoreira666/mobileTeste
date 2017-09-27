$(document).ready(function () {

    $(".lancamentos-mobile ul").addClass("lancamentos");
    $(".destaques-mobile ul").addClass("destques");

    var trigger = $('.hamburger'),
        overlay = $('.overlay'),
       isClosed = false;

    function buttonSwitch() {

        if (isClosed === true) {
            overlay.hide();
            trigger.removeClass('is-open');
            trigger.addClass('is-closed');
            isClosed = false;
        } else {
            overlay.show();
            trigger.removeClass('is-closed');
            trigger.addClass('is-open');
            isClosed = true;
        }
    }
    trigger.click(function () {
        buttonSwitch();
    });

    $('[data-toggle="offcanvas"]').click(function () {
        $('.menuPrincipal').toggleClass('toggled');
    });
    
    $('.subcat').hide();

    $('.catMenu').click(function(event) {
        event.stopPropagation();
        $(this).next('ul').slideToggle('slow');

    });
    $('.banner-mobile').slick({
      dots: true,
      autoplay: true,
      autoplaySpeed: 8000,
      mobileFirst: true,
    });

  $('.lancamentos').slick({
      slidesToShow: 2,
      slidesToScroll: 2,
      autoplay: true,
      autoplaySpeed: 8000,
      mobileFirst: true,
    });
});

