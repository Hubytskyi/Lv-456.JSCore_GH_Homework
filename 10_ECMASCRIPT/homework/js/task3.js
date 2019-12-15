// Напишіть функцію mul(), яка приймає будь-яку кількість параметрів різного типу і повертає добуток параметрів типу Number.
// Якщо параметри типу Number відсутні, повертає число 0.
// Не можна використовувати властивість arguments, але в функцію mul() можна додати один параметр.


	function mul(...x) {
		var result = 1;
    for (var i = 0; i < x.length; i++) {
        if(!isNaN(x[i])) {
            result *= x[i];
        }

        if(x.every(el => typeof(el)===Number)) {
            result = 0;
        }
    }
    console.log(result);
}
mul(1, "str", 2, 3, true); // 6
mul(null, "str", false, true); // 0

