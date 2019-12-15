// На HTML-сторінці є 6 чекбоксів. Напишіть скріпт, який після того, як користувач позначив будь-які 3 чекбокси, всі решта чекбоксів робить неактивними.

$('input[type="checkbox"]').on('click', function(){
	if ($('input[type="checkbox"]').not(':checked').length == 3){
		$('input[type="checkbox"]').not(':checked').attr('disabled', true)
	} else {
		$('input[type="checkbox"]').removeAttr('disabled')
	}
});

// $('input').on('click', function(){
// 	if ($('input').not(':checked').length == 3){
// 		$('input').not(':checked').attr('disabled', true)
// 	} else {
// 		$('input').removeAttr('disabled')
// 	}
// });