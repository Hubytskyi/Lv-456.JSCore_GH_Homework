// На HTML-сторінці є посилання <a>. У випадку коли, href починається на https://, потрібно додати посиланню атрибут target="_blank".

let $target = $('a.href__https').attr('href');

function checkHttps(result){
	let regExp = /^https/;
	if(regExp.test(result) === true){
		$('a.href__https').attr('target','_blank');
	};
};
checkHttps($target);

