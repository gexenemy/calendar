'use strict'

$(document).ready(function () {

	setInterval(border, 2000)

	function border() {
		$('.border').css('animation', 'none');
		setTimeout(function() {
			$('.border').css('animation', '');
		}, 10)
	}

	TweenMax.set('.hexa-progress,.hexa-progress-bg', {
		xPercent: "-50%",
		yPercent: "-50%",
		left: "50%",
		top: "50%",
		opacity: 1
	});

	TweenMax.set('.percent', {
		xPercent: "-50%",
		yPercent: "-50%",
		left: "50%",
		top: "50%",
		marginTop: 5,
		opacity: 1
	});

	function drawProgress() {
		$.each($('.pctbox'), function (index, value) {
			var endPercent = $(this).data("percent");
			var hex = $(this).find('.hexa-progress path');
			var chiffre = $(this).find('.pctamount');
			var percent = {
				curvalue: 0
			};

			TweenMax.fromTo(percent, 2.5, {
				opacity: 0
			}, {
				opacity: 1,
				delay: 0.5,
				curvalue: endPercent,
				roundProps: "curvalue",
				ease: Power4.easeOut,
				onUpdate: function () {
					chiffre.text(percent.curvalue);
				}
			});
			TweenMax.fromTo(hex, 2.5, {
				drawSVG: false
			}, {
				delay: 0.5,
				ease: Power4.easeOut,
				drawSVG: "0% " + endPercent + "%"
			});
		});
	}
	drawProgress();

	$('#randomize').mouseup(function () {
		TweenMax.to('.hexa-progress path', 0.4, {
			drawSVG: false,
			onComplete: function () {
				$.each($('.pctbox'), function () {
					$(this).data('percent', Math.random() * 100);
				});
				drawProgress();
			}
		});
		TweenMax.to('#randomize', 0.4, {
			scale: 1,
			transformOrigin: "50% 50%"
		});
	}).mousedown(function () {
		TweenMax.to('#randomize', 0.4, {
			scale: 0.95,
			transformOrigin: "50% 50%"
		});
	});

	TweenMax.to('#twitterlink,#randomize', 1, {
		scale: 1.2,
		repeat: -1,
		transformOrigin: "50% 50%",
		yoyo: true
	});

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