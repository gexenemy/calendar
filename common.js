$(function() {
  $(window).scroll();

  var swiper = new Swiper(".swiper-container", {
    direction: "horizontal",
    slidesPerView: 1,
    spaceBetween: 0,
    mousewheel: true,
    simulateTouch: false,
    effect: "fade",
    loop: true,
    speed: 1500,
    pagination: {
      el: ".month-slider__track",
      bulletClass: "month-slider__track-month",
      bulletActiveClass: "month-slider__track-month_active",
      dynamicBullets: true,
      renderBullet: function(index, className) {
        const months = [
          "Январь",
          "Февраль",
          "Март",
          "Апрель",
          "Май",
          "Июнь",
          "Июль",
          "Август",
          "Сентябрь",
          "Октябрь",
          "Ноябрь",
          "Декабрь"
        ];
        return (
          "<div data-month=" +
          months[index] +
          " class=" +
          className +
          ">" +
          months[index] +
          "</div>"
        );
      }
    },
    navigation: {
      prevEl: ".month-slider__button_direction_up",
      nextEl: ".month-slider__button_direction_down"
    }
  });

  // function getPercentProg() {
  //   var $video = $('.swiper-slide__video').get(0),
  //       endBuf = $video.buffered.end(0),
  //       soFar = parseInt(((endBuf / $video.duration) * 100));

  //   document.getElementById("loadStatus").innerHTML = soFar + '%';
  // }

  var isAddedVideo = false;

  $(".main-content__play").click(function() {
    var activeSlide = $(".swiper-slide-active"),
      activeSlideIndex = activeSlide.data("swiper-slide-index");

    var videoMonths = [
      "video/january.mp4",
      "video/february.mp4",
      "video/march.mp4",
      "video/april.mp4",
      "video/may.mp4",
      "video/june.mp4",
      "video/july.mp4",
      "video/august.mp4",
      "video/september.mp4",
      "video/october.mp4",
      "video/november.mp4",
      "video/december.mp4"
    ];

    if (!isAddedVideo) {
      activeSlide.append(
        '<video class="swiper-slide__video"><source src="' +
          videoMonths[activeSlideIndex] +
          '" type="video/mp4"></video>'
      );

      $(".swiper-slide-active .swiper-slide__video").get(
        0
      ).oncanplaythrough = function() {
        console.log("1");
      };

      isAddedVideo = true;
    }
  });

  swiper.on("slideChangeTransitionStart", function() {
    mainAnimation();
    isAddedVideo = false;
  });

  var figure = $(".all-months__item-block").hover(hoverVideo, hideVideo);

  function hoverVideo(e) {
    var $video = $("video", this);
    $video.get(0).play();
  }

  function hideVideo(e) {
    var $video = $("video", this);
    $video.get(0).pause();
  }

  // паралакс


  function mainAnimation() {
    var slide = $(".swiper-slide-active .swiper-slide__img"),
      cursor = $(".cursor"),
      $container = $(window),
      container_w = $container.width(),
      container_h = $container.height();

    $(window).on("mousemove", function(event) {
      var pos_x = event.pageX,
        pos_y = event.pageY,
        left = 0,
        top = 0;

      left = (container_w / 2 - pos_x).toFixed(2);
      top = (container_h / 2 + window.pageYOffset - pos_y).toFixed(2);

      function animate() {
        TweenMax.to(cursor, .5, {
          y: top * -1,
          x: left * -1,
          ease: Expo.easeOut
          // onComplete: function() {
          //   console.log(this);
          // },
          // ease: Expo.easeOut
        });
      }

      requestAnimationFrame(animate);
      
      // TweenMax.to(slide, 5, {
      //   css: {
      //     transform: "translate(" + left / 20 + "px, " + top / 10 + "px)"
      //   },
      //   ease: Expo.easeOut,
      //   overwrite: "all"
      // });
    });
  }

  (function() {
    var requestAnimationFrame =
      window.requestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;
  })();

  function Visible() {
    var target = document.getElementById("photographer");
    var block = document.getElementById("photographer-parallax");

    var targetPosition = {
        top: window.pageYOffset + target.getBoundingClientRect().top,
        bottom: window.pageYOffset + target.getBoundingClientRect().bottom
      },
      windowPosition = {
        top: window.pageYOffset,
        bottom: window.pageYOffset + document.documentElement.clientHeight
      };

    var progress =
      (windowPosition.bottom - targetPosition.top) /
      (targetPosition.bottom - targetPosition.top);

    if (
      targetPosition.bottom > windowPosition.bottom &&
      targetPosition.top < windowPosition.bottom
    ) {
    } else if (
      targetPosition.top <= windowPosition.top &&
      targetPosition.bottom >= windowPosition.top
    ) {
      var progress2 =
        ((windowPosition.top - targetPosition.bottom) /
        (targetPosition.top - targetPosition.bottom));
      var progress3 = (progress2).toFixed(2);

      function move() {
        TweenMax.to(block, 0.5, {
          autoAlpha: progress3,
          yPercent: progress3 * 100,
          ease: Expo.easeOut
        });
      }

      requestAnimationFrame(move);

      function opacity() {
        TweenMax.to(target, 0.5, {
          autoAlpha: progress3
        });
      }

      requestAnimationFrame(opacity);
    } else {
    }
  }

  //2

  var element1 = document.getElementById("about-header");
  var block1 = document.getElementById("about-header-parallax");

  var Visible1 = function(target, block) {
    var targetPosition = {
        top: window.pageYOffset + target.getBoundingClientRect().top,
        bottom: window.pageYOffset + target.getBoundingClientRect().bottom
      },
      windowPosition = {
        top: window.pageYOffset,
        bottom: window.pageYOffset + document.documentElement.clientHeight
      };

    if (
      targetPosition.bottom > windowPosition.bottom &&
      targetPosition.top < windowPosition.bottom
    ) {
      var progress =
        ((windowPosition.bottom - targetPosition.top) /
        (targetPosition.bottom - targetPosition.top)).toFixed(2);
      var progress1 = (progress / 2).toFixed(2);

      function move() {
        TweenMax.to(block, 1, {
          autoAlpha: progress,
          yPercent: progress1 * -50,
          ease: Expo.easeOut
        });
      }

      requestAnimationFrame(move);
    } else if (
      targetPosition.top <= windowPosition.top &&
      targetPosition.bottom >= windowPosition.top
    ) {
      var progress2 =
        ((windowPosition.top - targetPosition.bottom) /
        (targetPosition.top - targetPosition.bottom)).toFixed(2);
      var progress3 = (progress2 / 2).toFixed(2);

      function remove() {
        TweenMax.to(block, 1, {
          yPercent: (1 - progress3) * -50,
          ease: Expo.easeOut
        });
      }

      requestAnimationFrame(remove);
    } else {
    }
  };

  // 3

  var element3 = document.getElementById('about-photographer');
  var block3_1 = document.getElementById('about-photographer-left');
  var block3_2 = document.getElementById('about-photographer-calendar');
  var block3_3 = document.getElementById('about-photographer-name');
  var block3_4 = document.getElementById('about-photographer-about');
  var block3_5 = document.getElementById('about-photographer-right');

  // const offsetHeight = element.offsetHeight;

  var Visible3 = function (target) {

  // Все позиции элемента
  var targetPosition = {
  	top: window.pageYOffset + target.getBoundingClientRect().top,
  	bottom: window.pageYOffset + target.getBoundingClientRect().bottom
  	},
  	// Получаем позиции окна
  	windowPosition = {
  	top: window.pageYOffset,
  	bottom: window.pageYOffset + document.documentElement.clientHeight
  	};

  if (targetPosition.bottom > windowPosition.bottom &&
  	targetPosition.top < windowPosition.bottom) {

      var progress = ((windowPosition.bottom - targetPosition.top) / (targetPosition.bottom - targetPosition.top)).toFixed(2);
      var progress1 = (progress / 2).toFixed(2);

      function opacity_1() {
        TweenMax.to([block3_1, block3_5], 1, {
          autoAlpha: progress
        })
      }

      requestAnimationFrame(opacity_1);

      function move_2() {
        TweenMax.to([block3_2, block3_3, block3_4], 1, {
          yPercent: ((progress1) * -50),
          ease: Expo.easeOut
        })
      }

      requestAnimationFrame(move_2);
    

  } else if (targetPosition.top <= windowPosition.top &&
  	targetPosition.bottom >= windowPosition.top) {

    var progress2 = ((windowPosition.top - targetPosition.bottom) / (targetPosition.top - targetPosition.bottom)).toFixed(2);
    var progress3 = (progress2 / 2).toFixed(2);


    function notOpacity_1() {
      TweenMax.to([block3_1, block3_5], 1, {
        autoAlpha: progress2
      })
    }

    requestAnimationFrame(notOpacity_1);

    function remove_2() {
      TweenMax.to(block3_2, 1, {
        yPercent: ((1 - progress3) * -50),
        ease: Expo.easeOut
      })
    }

    requestAnimationFrame(remove_2);

  } else {
  };
  };

  //4

  var element4 = document.getElementById("about-middle");
  var block4_1 = document.getElementById("about-middle-img");
  var block4_2 = document.getElementById("about-middle-text");

  var Visible4 = function(target) {
    var targetPosition = {
        top: window.pageYOffset + target.getBoundingClientRect().top,
        bottom: window.pageYOffset + target.getBoundingClientRect().bottom
      },
      windowPosition = {
        top: window.pageYOffset,
        bottom: window.pageYOffset + document.documentElement.clientHeight
      };

    if (
      targetPosition.bottom > windowPosition.bottom &&
      targetPosition.top < windowPosition.bottom
    ) {
      var progress =
        ((windowPosition.bottom - targetPosition.top) /
        (targetPosition.bottom - targetPosition.top)).toFixed(2);
      var progress1 = (progress / 2).toFixed(2);

      function move() {
        TweenMax.to(block4_2, 1, {
          yPercent: progress1 * -50,
          ease: Expo.easeOut
        });
      }

      requestAnimationFrame(move);

      function opacity() {
        TweenMax.to(block4_1, 1, {
          autoAlpha: progress
        })
      }

      requestAnimationFrame(opacity);


    } else if (
      targetPosition.top <= windowPosition.top &&
      targetPosition.bottom >= windowPosition.top
    ) {
      var progress2 =
        ((windowPosition.top - targetPosition.bottom) /
        (targetPosition.top - targetPosition.bottom)).toFixed(2);
      var progress3 = (progress2 / 2).toFixed(2);

      function remove() {
        TweenMax.to(block4_2, 1, {
          yPercent: (1 - progress3) * -50,
          ease: Expo.easeOut
        });
      }

      requestAnimationFrame(remove);

      function opacity() {
        TweenMax.to(block4_1, 1, {
          autoAlpha: progress2
        })
      }

      requestAnimationFrame(opacity);
    } else {
    }
  };


  var element5 = document.getElementById("cft-show");
  var block5_1 = document.getElementById("cft-show__description");
  var block5_2 = document.getElementById("cft-show__img");

  var Visible5 = function(target) {
    var targetPosition = {
        top: window.pageYOffset + target.getBoundingClientRect().top,
        bottom: window.pageYOffset + target.getBoundingClientRect().bottom
      },
      windowPosition = {
        top: window.pageYOffset,
        bottom: window.pageYOffset + document.documentElement.clientHeight
      };

    if (
      targetPosition.bottom > windowPosition.bottom &&
      targetPosition.top < windowPosition.bottom
    ) {
      var progress =
        ((windowPosition.bottom - targetPosition.top) /
        (targetPosition.bottom - targetPosition.top)).toFixed(2);
      var progress1 = (progress / 2).toFixed(2);

      function move() {
        TweenMax.to(block5_1, 1, {
          yPercent: progress1 * -50,
          ease: Expo.easeOut
        });
      }

      requestAnimationFrame(move);

      function opacity() {
        TweenMax.to(block5_2, 1, {
          autoAlpha: progress
        })
      }

      requestAnimationFrame(opacity);


    } else if (
      targetPosition.top <= windowPosition.top &&
      targetPosition.bottom >= windowPosition.top
    ) {
      var progress2 =
        ((windowPosition.top - targetPosition.bottom) /
        (targetPosition.top - targetPosition.bottom)).toFixed(2);
      var progress3 = (progress2 / 2).toFixed(2);

      function remove() {
        TweenMax.to(block5_1, 1, {
          yPercent: (1 - progress3) * -50,
          ease: Expo.easeOut
        });
      }

      requestAnimationFrame(remove);

      function opacity() {
        TweenMax.to(block5_2, 1, {
          autoAlpha: progress2
        })
      }

      requestAnimationFrame(opacity);
    } else {
    }
  };



  var element6 = document.getElementById("end");
  var block6_1 = document.getElementById("end__img");
  var block6_2 = document.getElementById("end__title");

  var Visible6 = function(target) {
    var targetPosition = {
        top: window.pageYOffset + target.getBoundingClientRect().top,
        bottom: window.pageYOffset + target.getBoundingClientRect().bottom
      },
      windowPosition = {
        top: window.pageYOffset,
        bottom: window.pageYOffset + document.documentElement.clientHeight
      };

    if (
      targetPosition.bottom > windowPosition.bottom &&
      targetPosition.top < windowPosition.bottom
    ) {
      var progress =
        ((windowPosition.bottom - targetPosition.top) /
        (targetPosition.bottom - targetPosition.top)).toFixed(2);

      var progress1 = (progress / 2).toFixed(2);

      function move() {
        TweenMax.to(block6_2, 1, {
          yPercent: progress1 * -50,
          ease: Expo.easeOut
        });
      }

      requestAnimationFrame(move);


    } else if (
      targetPosition.top <= windowPosition.top &&
      targetPosition.bottom >= windowPosition.top
    ) {
      var progress2 =
        ((windowPosition.top - targetPosition.bottom) /
        (targetPosition.top - targetPosition.bottom)).toFixed(2);
      var progress3 = (progress2 / 2).toFixed(2);

      function remove() {
        TweenMax.to(block6_2, 1, {
          yPercent: (1 - progress3) * -50,
          ease: Expo.easeOut
        });
      }

      requestAnimationFrame(remove);

    } else {
    }
  };



  mainAnimation();
  Visible();
  Visible1(element1, block1);
  Visible3(element3);
  Visible4(element4);
  Visible5(element5);
  Visible6(element6);

  window.addEventListener("scroll", function() {
    mainAnimation();
    Visible();
    Visible1(element1, block1);
    Visible3(element3);
    Visible4(element4);
    Visible5(element5);
    Visible6(element6);

  });

  //   class Visiblee {

  //     constructor(block, targetTop, targetBottom, windowTop, windowBottom) {}

  //     isTop() {
  //       this.targetTop = window.pageYOffset + block.getBoundingClientRect().top,
  //       this.targetBottom = window.pageYOffset + block.getBoundingClientRect().bottom,
  //       this.windowTop = window.pageYOffset,
  //       this.windowBottom = window.pageYOffset + document.documentElement.clientHeight;

  //         if(this.targetBottom > this.windowBottom &&
  //           this.targetTop < this.windowTop) {
  //               console.log('isTop');
  //             return true;
  //         }
  //     }

  //     isBottom() {
  //         if(this.targetTop <= this.windowTop &&
  //           this.targetBottom >= this.windowTop) {
  //               console.log('isTop');
  //             return true;
  //         }
  //     }
  // }

  // паралакс конец

  // var vk = $(".footer__share-link-vk").hover(hoverVk, unhoverVk);

  // function hoverVk() {
  //   const path = $(this).find('path');
  //   const attr = {
  //     fill: "#A58953",
  //     d: "M30.177 35.384s.433-.047.655-.281c.203-.215.196-.62.196-.62s-.027-1.888.866-2.166c.88-.275 2.011 1.826 3.21 2.634.907.61 1.595.477 1.595.477l3.206-.044s1.676-.102.881-1.396c-.066-.106-.463-.957-2.383-2.706-2.01-1.831-1.74-1.535.68-4.702 1.474-1.93 2.064-3.107 1.88-3.61-.176-.482-1.26-.354-1.26-.354l-3.609.022s-.267-.036-.466.08c-.193.114-.319.38-.319.38s-.57 1.493-1.332 2.763c-1.607 2.677-2.25 2.82-2.512 2.653-.612-.388-.46-1.558-.46-2.388 0-2.596.402-3.678-.78-3.958-.392-.094-.68-.155-1.684-.165-1.288-.013-2.377.004-2.995.3-.41.198-.728.638-.534.663.238.031.778.143 1.065.526.37.494.357 1.602.357 1.602s.212 3.056-.497 3.435c-.486.26-1.153-.27-2.586-2.7a22.409 22.409 0 0 1-1.288-2.62s-.106-.258-.298-.396c-.231-.167-.554-.219-.554-.219l-3.429.022s-.515.014-.704.234c-.168.195-.013.599-.013.599s2.685 6.166 5.725 9.273c2.788 2.848 5.953 2.662 5.953 2.662h1.434z"
  //   }
  //   console.log(path);
  //   TweenLite.to(path, 1, {attr: attr, ease:Linear.easeNone});

  // }

  // function unhoverVk() {

  // }

  $(".footer__all-months").click(function() {
    $("html").addClass("modal_open");
    $(".all-months").addClass("all-months_open");
    $(".overlay").fadeIn(600, function() {
      $(".all-months__section")
        .show()
        .animate({ opacity: 1 }, 600);
    });
  });

  $(".all-months__close, .overlay, .all-months_open").on("click", function() {
    $(".all-months__section").animate({ opacity: 0 }, 1000, function() {
      $(".overlay").fadeOut(1000);
      $(".all-months").removeClass("all-months_open");
      $("html").removeClass("modal_open");
      // $(this).css('display', 'none');
    });
  });

  $(".age-modal__input")
    .focus(function() {
      $(this)
        .parent()
        .addClass("age-modal__label_focus");
    })
    .blur(function() {
      $(this)
        .parent()
        .removeClass("age-modal__label_focus");
    });

  $(".age-modal__input").on("input", function() {
    $(".age-modal__submit").prop("disabled", "true");
    checkAge();
  });

  function checkAge() {
    var day = parseInt($(".age-modal__input-day").val(), 10),
      month = parseInt($(".age-modal__input-month").val(), 10),
      year = parseInt($(".age-modal__input-year").val(), 10),
      age = 18,
      birthdayDate = new Date(year + age, month - 1, day);

    if (!(day && month && year)) {
      return;
    } else if (!/^([1-9]|0[1-9]|[12][0-9]|3[01])$/.test(day)) {
      return;
    } else if (!/^(0[1-9]|[1-9]|1[012])$/.test(month)) {
      return;
    } else if (!/^(19|20)[0-9]{2}$/.test(year)) {
      return;
    }

    $(".age-modal__submit").prop("disabled", false);
    $(".age-modal__form").addClass("age-modal__form_valid");

    if (birthdayDate > Date.now()) {
      return false;
    } else {
      return true;
    }
  }

  $(".age-modal__form_valid").submit(function() {
    if (checkAge()) {
      console.log("go");
    } else {
      $(".age-modal__submit").addClass("age-modal__submit_error");
      $(".age-modal__submit-button").text("Ввести дату еще раз");
      $(".age-modal").addClass("age-modal_error");
      $(".age-modal-attention__attention")
        .addClass("age-modal-attention__attention_error")
        .html(
          "Вы не можите просматривать содержимое этого сайта, так как <br/>Вам ещё не исполнилось 18 лет!"
        );
      $(this)
        .removeClass("age-modal__form_valid")
        .addClass("age-modal__form_error");
    }
    return false;
  });

  $(".age-modal__form_error").submit(function() {
    $(this)[0].reset();
    $(".age-modal__submit").removeClass("age-modal__submit_error");
    $(".age-modal__submit-button").text("Войти на сайт");
    $(".age-modal").removeClass("age-modal_error");
    $(".age-modal-attention__attention")
      .addClass("age-modal-attention__attention_error")
      .html("Для входа на сайт вы должны быть совершеннолетним");
    $(this)
      .removeClass("age-modal__form_error")
      .addClass("age-modal__form_valid");
    return false;
  });
});
