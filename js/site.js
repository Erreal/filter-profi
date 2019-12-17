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
  });