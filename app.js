'use strict'

$(document).ready(function () {



	// window.addEventListener('scroll', () => {
	// 	const b = document.getElementById('block');
	// 	const p = document.getElementById('page');
	// 	const w = window;
	// 	const d = document.body;
	// 	const h = document.documentElement;
	// 	const scrollHeight = Math.max(
	// 		d.scrollHeight, h.scrollHeight,
	// 		d.offsetHeight, h.offsetHeight,
	// 		d.clientHeight, h.clientHeight
	// 	); //Полная высота страницы с учётом прокрутки

	// 	// console.log('scrollHeight: ' + scrollHeight);

	// 	const offsetHeight = b.offsetHeight;
	// 	// Полная высота элемента
	// 	// console.log('offsetHeight: ' + offsetHeight);

	// 	const scrollTop = d.scrollTop;
	// 	// Высота невидимой, прокрученной в данный момент, части элемента сверху
	// 	// console.log('scrollTop: ' + scrollTop);

	// 	const clientHeight = d.clientHeight;
	// 	// Высота видимой области окна
	// 	console.log('clientHeight: ' + clientHeight);

	// 	const pageYOffset = w.pageYOffset || h.scrollTop;
	// 	// Возвращает число пикселей, на которое документ пролистали в данный момент по вертикали	
	// 	console.log('pageYOffset: ' + pageYOffset);

	// 	const bTop = b.getBoundingClientRect().top;
	// 	// Расстояние от верха документа до верхней и нижней границы элемента/расстояние до элемента
	// 	const bBottom = b.getBoundingClientRect().bottom;
		
	// 	// console.log('bTop: ' + bTop);
	// 	// console.log('bBottom: ' + bBottom);

	// 	console.log('bTop: ' + bTop);
	// 	console.log('ноль координат: ' + (bTop + (offsetHeight / 2) - (clientHeight / 2)));
	// 	console.log('pageYOffset + clientHeight: ' + (pageYOffset + clientHeight));
		
	// 	const body_height = $document.height();
	// 	const viewport_height = $window.height();


	// 	console.log('----------------');
	// });


	var element = document.querySelector('#block');
	var block1 = document.querySelector('#block-left');
	const offsetHeight = element.offsetHeight;

	var Visible = function (target) {
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
		var clientHeight = document.documentElement.clientHeight

		// console.log(windowPosition.bottom - targetPosition.top)
		// console.log(targetPosition.bottom - targetPosition.top)
		// console.log(windowPosition.top)

		var progress = (windowPosition.bottom - targetPosition.top) / (targetPosition.bottom - targetPosition.top);

	if (targetPosition.bottom > windowPosition.bottom &&
		targetPosition.top < windowPosition.bottom) {

		console.log('Вы видите элемент :)');

		

		console.log(progress)


		TweenMax.to(block1, 2, {
			css: { 
				transform: 'translateY(' + Math.ceil(progress * -100) + '%)',
				opacity: progress
			  },
			ease: Expo.easeOut
		})


	} else if (targetPosition.top < windowPosition.top &&
		targetPosition.bottom > windowPosition.top) {

		var progress2 = (windowPosition.top - targetPosition.bottom) / (targetPosition.top - targetPosition.bottom);

		console.log((1 - progress2))
		console.log(offsetHeight)

		// ( (2 * -offsetHeight))

		TweenMax.to(block1, 2, {
			css: { 
				top: '' + ((progress2) * 100) + '%',
				opacity: progress2
				},
			ease: Expo.easeOut
		})

	} else {
		// Если элемент не видно, то запускаем этот код
		console.log('Элемент не видно');
		// console.clear();
	};
	};

	window.addEventListener('scroll', function() {
		Visible (element);
	});
	
	// А также запустим функцию сразу. А то вдруг, элемент изначально видно
	Visible (element);

	





	// window.addEventListener('scroll', () => {
	// 	const y = window.scrollY
	// 	const height = document.body.scrollHeight - window.innerHeight
	// 	const progress = y / height

		const block = document.getElementById('block');
		








	// })

	// setInterval(border, 2000)

	// function border() {
	// 	$('.border').css('animation', 'none');
	// 	setTimeout(function() {
	// 		$('.border').css('animation', '');
	// 	}, 10)
	// }

	// TweenMax.set('.hexa-progress,.hexa-progress-bg', {
	// 	xPercent: "-50%",
	// 	yPercent: "-50%",
	// 	left: "50%",
	// 	top: "50%",
	// 	opacity: 1
	// });

	// TweenMax.set('.percent', {
	// 	xPercent: "-50%",
	// 	yPercent: "-50%",
	// 	left: "50%",
	// 	top: "50%",
	// 	marginTop: 5,
	// 	opacity: 1
	// });

	// function drawProgress() {
	// 	$.each($('.pctbox'), function (index, value) {
	// 		var endPercent = $(this).data("percent");
	// 		var hex = $(this).find('.hexa-progress path');
	// 		var chiffre = $(this).find('.pctamount');
	// 		var percent = {
	// 			curvalue: 0
	// 		};

	// 		TweenMax.fromTo(percent, 2.5, {
	// 			opacity: 0
	// 		}, {
	// 			opacity: 1,
	// 			delay: 0.5,
	// 			curvalue: endPercent,
	// 			roundProps: "curvalue",
	// 			ease: Power4.easeOut,
	// 			onUpdate: function () {
	// 				chiffre.text(percent.curvalue);
	// 			}
	// 		});
	// 		TweenMax.fromTo(hex, 2.5, {
	// 			drawSVG: false
	// 		}, {
	// 			delay: 0.5,
	// 			ease: Power4.easeOut,
	// 			drawSVG: "0% " + endPercent + "%"
	// 		});
	// 	});
	// }
	// drawProgress();

	// $('#randomize').mouseup(function () {
	// 	TweenMax.to('.hexa-progress path', 0.4, {
	// 		drawSVG: false,
	// 		onComplete: function () {
	// 			$.each($('.pctbox'), function () {
	// 				$(this).data('percent', Math.random() * 100);
	// 			});
	// 			drawProgress();
	// 		}
	// 	});
	// 	TweenMax.to('#randomize', 0.4, {
	// 		scale: 1,
	// 		transformOrigin: "50% 50%"
	// 	});
	// }).mousedown(function () {
	// 	TweenMax.to('#randomize', 0.4, {
	// 		scale: 0.95,
	// 		transformOrigin: "50% 50%"
	// 	});
	// });

	// TweenMax.to('#twitterlink,#randomize', 1, {
	// 	scale: 1.2,
	// 	repeat: -1,
	// 	transformOrigin: "50% 50%",
	// 	yoyo: true
	// });




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