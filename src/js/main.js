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
      $('.arrow-up').addClass('arrow-up_visible');
    } else {
      $('.arrow-up').removeClass('arrow-up_visible');
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

  // Валидация формы (jquery Validation Plugin)
  $('#brief-form').validate({
    rules: {
      username: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      phone: {
        required: true
      },
      email: {
        required: true,
        email: true
      }
    },
    messages: {
      username: {
        required: "Заполните это поле",
        minlength: jQuery.validator.format("Как минимум {0} символов(-а) требуется!"),
        maxlength: jQuery.validator.format("Как максимум {0} символов(-а) требуется!")
      },
      phone: {
        required: "Заполните это поле",
      }
      // Нужно изменять background-size!!! при добавлении полей
      // email: {
      //   required: "Заполните это поле",
      //   email: "Введите корректный email"
      // }
    },
    errorClass: "invalid",
    errorElement: "div"
    // Последний элемент будет с обводкой, нужен доп. клик
    // highlight: function () {
    //   console.log('ok');
    //   $('#brief-form').find('div').last().css('border', 'none');
    // }
  });
  // Первая форма в блоке offer
  $('#offer-form').validate({
    rules: {
      "username-offer": {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      "phone-offer": {
        required: true
      }
    },
    messages: {
      "username-offer": {
        required: "Заполните поле с именем",
        minlength: jQuery.validator.format("Как минимум {0} символов(-а) требуется!"),
        maxlength: jQuery.validator.format("Как максимум {0} символов(-а) требуется!")
      },
      "phone-offer": {
        required: "Заполните поле с телефоном"
      }
    },
    errorClass: "invalid",
    errorElement: "div",
    errorLabelContainer: ".message",
    // wrapper: 'div',
    // Чтобы не убиралось первое сообщение, и была равномерная ширина, см. interface.sass для описания
    // success: function(div) {
    //   var divUser = $('.message').children().eq(0);
    //   var divPhone = $('.message').children().eq(1);
    //   console.log(divUser.html());
    //   console.log(divPhone);
    //   var temp;
    //   console.log(divUser.children().attr('id'));
    //   if (divUser.children().attr('id') == "phone-offer-error") {
    //     temp = divUser.html();
    //     divUser.html(divPhone.html());
    //     divPhone.html(temp);
    //   }
    // Эту строчку не нужно раскомментировать, если исп. флекс и замену сообщений
      // div.addClass("valid").text("Заполнено!");
    // },
    // Добавление отступа для блока с сообщениями об ошибке
    highlight: function (elem, errorClass, validClass) {
      $(elem).addClass(errorClass).removeClass(validClass);
      $('.message').css('margin-bottom', '28px');
    }
  });

  // Маска для телефона
  $('.input-phone').mask('+7 (999) 999-99-99');

  // Анимация wow.js; animate.css v4
  wow = new WOW(
    {
      boxClass: 'wow',      // default
      animateClass: 'animate__animated', // default
      offset: 0,          // default
      mobile: true,       // default
      live: true        // default
    }
  );
  wow.init();
});