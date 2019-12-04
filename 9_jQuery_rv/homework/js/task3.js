// найдіть теги <div>, які стоять безпосередньо після <h3> і перемістіть кожен <div>-еелмент так, щоб він став безпосередньо над <h3>.

let $divFirst = $('div:first')
let $divLast = $('div:last')
let $hFirst = $('h3:first');
let $hLast = $('h3:last');

$hFirst.before($divFirst);
$hLast.before($divLast);