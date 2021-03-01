"use strict";

$(function () {
  /* Slider slick  #servicesSlider
     =============================*/
  $('#servicesSlider').slick({
    // infinite: true,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    adaptiveHeight: true,
    responsive: [{
      breakpoint: 991,
      settings: {
        autoplay: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        adaptiveHeight: true
      }
    }, {
      breakpoint: 767,
      settings: {
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        adaptiveHeight: true // centerMode: true,
        // variableWidth: true,

      }
    }]
  });
  $(".slickPrev").on("click", function (event) {
    event.preventDefault();
    $('#servicesSlider').slick("slickPrev");
  });
  $(".slickNext").on("click", function (event) {
    event.preventDefault();
    $('#servicesSlider').slick("slickNext");
  });
  /* Slider slick  #testimonialsSlider
     =============================*/

  $('#testimonialsSlider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    adaptiveHeight: true,
    // autoplay: true,
    responsive: [{
      breakpoint: 991,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        adaptiveHeight: true
      }
    }]
  });
  /* Modal
  =============================*/

  var modalCall = $("[data-modal");
  var modalClose = $("[data-close");
  modalCall.on("click", function (event) {
    event.preventDefault();
    var $this = $(this);
    var modalId = $this.data('modal');
    $(modalId).addClass('show');
    $('body').addClass('no-scroll');
    setTimeout(function () {
      $(modalId).find(".modal__dialog").css({
        transform: "translateY(0)"
      });
    }, 200);
  });
  modalClose.on("click", function (event) {
    event.preventDefault();
    var $this = $(this);
    var modalParent = $this.parents('.modal');
    modalParent.find(".modal__dialog").css({
      transform: "translateY(-120%)"
    });
    setTimeout(function () {
      modalParent.removeClass('show');
      $('body').removeClass('no-scroll');
    }, 200);
  });
  $('.modal').on("click", function (event) {
    $(this).removeClass('show');
    $('body').removeClass('no-scroll');
  });
  $('.modal__dialog').on("click", function (event) {
    event.stopPropagation();
  });
  /*File upload
  =============================*/

  $(document).ready(function () {
    $('input[type="file"]').change(function () {
      var value = $("input[type='file']").val();
      $('.js-value').text(value);
    });
  });
  /*scrollUp BUTTON
  =============================*/
  // При нажатии кнопки идти вверх;

  document.getElementById('buttonUp').onclick = function scrollUpFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }; // Кнопка появляется, когда проскролили 500px


  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
      document.getElementById('buttonUp').style.display = "block";
    } else {
      document.getElementById('buttonUp').style.display = "none";
    }
  }
  /* Animation 
    =============================*/


  var animItems = document.querySelectorAll('.anim-items');

  if (animItems.length > 0) {
    var animOnScroll = function animOnScroll() {
      for (var i = 0; i < animItems.length; i++) {
        var animItem = animItems[i];
        var animItemHeight = animItem.offsetHeight;
        var animItemOffset = offset(animItem).top;
        var animStart = 4;
        var animItemPoint = window.innerHeight - animItemHeight / animStart;

        if (animItemHeight > window.innerHeight) {
          animItemPoint = window.innerHeight - window.innerHeight / animStart;
        }

        if (pageYOffset > animItemOffset - animItemPoint && pageYOffset < animItemOffset + animItemHeight) {
          animItem.classList.add('anim-active');
        } else {
          animItem.classList.remove('anim-active');
        }
      }
    };

    var offset = function offset(el) {
      var rect = el.getBoundingClientRect(),
          scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
          scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return {
        top: rect.top + scrollTop,
        left: rect.left + scrollLeft
      };
    };

    window.addEventListener('scroll', animOnScroll);
    setTimeout(function () {
      animOnScroll();
    }, 300);
    animOnScroll();
  }
  /* Mobile nav
   =============================*/


  $('.header__burger').click(function (event) {
    $('.header__burger, .header__nav').toggleClass('burger-active');
    $('body').toggleClass('no-scroll');
  });
});