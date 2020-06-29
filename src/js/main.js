// // Кнопка в шапке
// var btn = document.querySelector("#btn");
// // Крестик
// var close = document.querySelector("#close");
// // Модально окно .modal
// var modal = document.querySelector("#modal");
// // Показ мод. окна
// btn.addEventListener("click", function() {
//   modal.classList.add("modal_visible");
//   // console.log(modal.classList);
//   // console.log("click");
// });
// // Скрытие мод. окна
// close.addEventListener("click", function() {
//   modal.classList.remove("modal_visible");
// });
// // console.log(btn);

// Используем jQuery
$(document).ready(function() {
  $('#btn').click(function() {
    $('#modal').addClass('modal_visible');
  });
  $('#close').click(function() {
    $('#modal').removeClass('modal_visible');
  });
  // console.log($('#btn'));

  // Плавная прокрутка вверх
  // Координата верхней части секции offer
  var offsetTopOffer = $('.offer').offset().top;
  // Координата верхняя при прокрутке
  // window and document в данном случае работают одинаково
  var top = $(window).scrollTop();
  // var top = $(document).scrollTop();
  // console.log(top + ' ' + offsetTopOffer + ' ' + typeof offsetTopOffer);
  // Если браузер Сафари
  var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  // Отлавливание события скролла окна документа
  $(window).scroll(function() {
    // top = $(document).scrollTop();
    top = $(window).scrollTop();
    // console.log(top);
    if (top >= (offsetTopOffer - 400)) {
      $('.arrow-up').addClass('arrow-up_visible')
    } else {
      $('.arrow-up').removeClass('arrow-up_visible')
    }
  });
  // Клик на кнопку "вверх", переносимся в начало страницы
  $('.arrow-up').click(function() {
    if (isSafari) {
      $('body').animate({ scrollTop: 0 }, 1000);
    } else {
      $('html').animate({ scrollTop: 0 }, 1000);
    }
  });

  // Слайдер Slick
  $('.slider').slick({
    slidesToShow: 3,
    prevArrow: $('.arrows__left'),
    nextArrow: $('.arrows__right'),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
});