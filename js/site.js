$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
      loop: true,
      nav: true,
      dots: false,
      responsive: { //Адаптивность. Кол-во выводимых элементов при определенной ширине.
        0: {
          items: 1
        },
        576: {
          items: 2
        },
        992: {
          items: 4
        },
        1200: {
          items: 5
        }

      }
    });

    $('a[href^="#"], *[data-href^="#"]').on('click', function(e){
        e.preventDefault();
        var t = 1000;
        var d = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');
        $('html,body').stop().animate({ scrollTop: $(d).offset().top }, t);
    });
    
    $(window).scroll(function() {
        if ($(this).scrollTop() > 120) {
            if ($('.scroll-up').is(':hidden')) {
                $('.scroll-up').css({opacity : 0.4}).fadeIn('slow');
            }
        } else { $('.scroll-up').stop(true, false).fadeOut('fast'); }
    });

  });