/* За допомогою методів об’єкта window створити:
	1) нове вікно розміром 300х300 пікселів.
	2) із затримкою 2 сек змініть розміри вікна на 500х500 пікселів
	3) із затримкою 2 сек перемістіть вікно в точку з координатами (200, 200)
	4) із затримкою 2 сек закрийте вікно. */

function myFunction() {
	let a = window.open('', '', "width=300, height=300");
	setTimeout(function(){
		 a.resizeTo(500, 500);
	}, 2000);
	setTimeout(function(){
		a.moveTo(200,200);
	}, 4000);
	setTimeout(function(){
		a.close();
	}, 6000);
};

myFunction();