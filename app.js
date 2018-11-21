'use strict'

$(document).ready(function () {

	var $layer_0 = $('.layer-0'),
		$layer_1 = $('.layer-1'),
		$layer_2 = $('.layer-2'),
		$x_axis = $('#x-axis'),
		$y_axis = $('#y-axis'),
		$container = $('body'),
		container_w = $container.width(),
		container_h = $container.height();

	$(window).on('mousemove.parallax', function (event) {
		var pos_x = event.pageX,
			pos_y = event.pageY,
			left = 0,
			top = 0;

		left = container_w / 2 - pos_x;
		top = container_h / 2 - pos_y;

		// $(window).resize(function() {
		// 	left = container_w / 2 - pos_x;
		// 	top = container_h / 2 - pos_y;
		// });

		TweenMax.to(
			$x_axis,
			1, {
				css: {
					transform: 'translateX(' + (left * -1) + 'px)'
				},
				ease: Expo.easeOut,
				overwrite: 'all'
			});

		TweenMax.to(
			$y_axis,
			1, {
				css: {
					transform: 'translateY(' + (top * -1) + 'px)'
				},
				ease: Expo.easeOut,
				overwrite: 'all'
			});

		TweenMax.to(
			$layer_2,
			1, {
				css: {
					transform: 'translateX(' + left / 12 + 'px) translateY(' + top / 6 + 'px)'
				},
				ease: Expo.easeOut,
				overwrite: 'all'
			});

		TweenMax.to(
			$layer_1,
			1, {
				css: {
					transform: 'translateX(' + left / 4 + 'px) translateY(' + top / 2 + 'px)'
				},
				ease: Expo.easeOut,
				overwrite: 'all'
			});

		TweenMax.to(
			$layer_0,
			10, {
				css: {
					transform: 'rotate(' + left / 200 + 'deg)'
				},
				ease: Expo.easeOut,
				overwrite: 'none'
			}
		)
	});

	$(window).resize(function() {
		var container_w = $container.width(),
		container_h = $container.height();

		$(window).on('mousemove.parallax', function (event) {
			var pos_x = event.pageX,
				pos_y = event.pageY,
				left = 0,
				top = 0;
	
			left = container_w / 2 - pos_x;
			top = container_h / 2 - pos_y;
	
			// $(window).resize(function() {
			// 	left = container_w / 2 - pos_x;
			// 	top = container_h / 2 - pos_y;
			// });
	
			TweenMax.to(
				$x_axis,
				1, {
					css: {
						transform: 'translateX(' + (left * -1) + 'px)'
					},
					ease: Expo.easeOut,
					overwrite: 'all'
				});
	
			TweenMax.to(
				$y_axis,
				1, {
					css: {
						transform: 'translateY(' + (top * -1) + 'px)'
					},
					ease: Expo.easeOut,
					overwrite: 'all'
				});
	
			TweenMax.to(
				$layer_2,
				1, {
					css: {
						transform: 'translateX(' + left / 12 + 'px) translateY(' + top / 6 + 'px)'
					},
					ease: Expo.easeOut,
					overwrite: 'all'
				});
	
			TweenMax.to(
				$layer_1,
				1, {
					css: {
						transform: 'translateX(' + left / 4 + 'px) translateY(' + top / 2 + 'px)'
					},
					ease: Expo.easeOut,
					overwrite: 'all'
				});
	
			TweenMax.to(
				$layer_0,
				10, {
					css: {
						transform: 'rotate(' + left / 200 + 'deg)'
					},
					ease: Expo.easeOut,
					overwrite: 'none'
				}
			)
		});
	});

	// var swiper = new Swiper('.swiper-container', {
	// 	direction: 'vertical',
	// 	slidesPerView: 1,
	// 	spaceBetween: 0,
	// 	mousewheel: true,
	// 	effect: 'fade',
	// 	speed: 1000,
	// 	pagination: {
	// 		el: '.swiper-pagination',
	// 		clickable: true,
	// 		renderBullet: function (index, className) {
	// 			return '<span class="owl">' + (index + 1) + '</span>';
	// 		},
	// 	},
	// 	navigation: {
	// 		nextEl: '.button-next',
	// 		prevEl: '.button-prev',
	// 	},
	// });


	// // $("body").mousemove(function(e) {
	// // 	let moveX = e.pageX * -1 / 25 + 'px';
	// // 	let moveY = e.pageY * -1 / 25 + 'px';
	// // 	$('.swiper-slide-active').css('background-position', 'calc(50% + '+ moveX + ') calc(50% + ' + moveY + ')');
	// // });
	// var startX = -100,
	// 	startY = -100,
	// 	w = document.documentElement.offsetWidth,
	// 	h = document.documentElement.offsetHeight;

	// $('.swiper-slide-active').on('mousemove', function (evt) {
	// 	var posX = Math.round(evt.clientX / w * startX)
	// 	var posY = Math.round(evt.clientY / h * startY)
	// 	$(this).css('background-position', posX + 'px ' + posY + 'px');
	// })

});





// function sequence(start, step) {
// 	let n = 0;
// 	return function() {
// 		return (start || 0) + (step || 1) * n++;
// 	}
// }

// let generator = sequence(0, 2);

// function take(fn, count) {
// 	let result = [];
// 	for (let i = 0; i < count; i++) {
// 		result.push(fn());
// 	}
// 	return result;
// }

// function map(fn, array) {
// 	let result = [];
// 	for (let i = 0; i < array.length; i++) {
// 		result.push(fn(array[i]));
// 	}
// 	return result;
// }

// function fmap(a, gen) {
// 	for (let i = 1; i < arguments.length; i++) {
//       console.log(arguments[i]);
//    }
// 	console.log(gen(arguments))
// 	let result;

// 	return function() {
// 		return a(gen());
// 		// return gen();
// 	}
// }

// // var gen1 = sequence(1, 1);
// function square(x) { return x * x; }
// // var squareGen = fmap(square, gen1);

// function add(a, b) {
//   return a + b;
// }

// // Мы получаем новую функцию, которая вызвает add, и результат пропускает через функцию square
// var squareAdd = fmap(square, add);
// console.log(squareAdd(2, 3)); // 25 = (2 + 3) ^ 2
// console.log(squareAdd(5, 7)); // 144 = (5 + 7) ^ 2

// // console.log(squareGen());

// console.log(squareGen()); // 1
// console.log(squareGen()); // 4
// console.log(squareGen()); // 9
// console.log(squareGen()); // 16