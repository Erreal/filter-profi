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

    $('.button').click(function(){
      $('.contact-modal').show();
      $('.name-input').focus();
    });

    $('.modal-close').click(function(){
      $('.contact-modal').hide();
    });

    $('.contact-form').submit(function(e){
      var userName = $('.name-input');
      var userPhone = $('.phone-input');
      if(!userName.val() || !userPhone.val()) {
        alert('Все поля обязательны для заполнения');
        console.log(userName.val());
        console.log(userPhone.val());
        return false;
      }
      e.preventDefault();
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
  
  $(document).keyup(function(e){
    if ($('.contact-modal').is(':visible') && e.key == 'Escape') {
      $('.contact-modal').hide();
    } 
  });
  
  $(document).click(function (e) {
    if ($(e.target).is('.contact-modal')) {
      $('.contact-modal').hide();
    }
});