// $(document).ready(function () {});----Проверка готовности документа



//selector
// $('h1').addClass('selector');
// Седекtоры по тегу
// $('p').addClass('selector');
// $("div").addClas('selector');
//Селекторы по #idea
// $('#top-menu').addClass('selector');
//Селекторы по классу
// $('.header').addClass('selector');
//Комбинированіе селекторы
// $("ul .header").addClass('selector');


//  Простые фильтры (" :first , :last , :even , :odd , :qe ")
// $("p:first").addClass('selector');----Первый
// $("p:last").addClass('selector')----;Последний
// $("p:odd").addClass('selector');-----четный
// $("p:even").addClass('selector');-----нечетный
// $("p:qe(0)").addClass('selector');-----Конекретный (0) он же первый
// $("p:qe(3)").addClass('selector');======Конекретный(3) он же четвертый


////Фильтрый по содержимому (:has , :parent , :empty)
// $('h1:has(span)').addClass('selector');-===Выбираем тот внутрик которога есть спан
// $('h1:parent').addClass('selector');-----которые являются родителями
// $('h1:empty').addClass('selector');-----которые являются пустыми


/////Фильтры по атребутам([name~=value])
// $('a').addClass('selector');type,radio....---Выбираем все ссылки
// $('a[href="http://gogle.com"]').addClass('selector');type,radio....---Выбираем точь в точь
// $('a[href!="http://gogle.com"]').addClass('selector'); ..--- Выбираем не равно (не есть укзазаной ссылкой)(!)
// $('a[href^="http"]').addClass('selector');....---В которыйх есть такой атрибут(^)
// $('a[href$=".ru"]').addClass('selector');....---В которыйх есть такое окончание($)
