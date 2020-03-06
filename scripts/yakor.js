/* Скрипт для плавного перехода якорей */

$(function(){
  $('.menu-ul').on('click', function(event) {

    // отменяем стандартное действие
    event.preventDefault();
    
    var sc = $(this).attr(href=""),
        dn = $(sc).offset().top;
    /*
    * sc - в переменную заносим информацию о том, к какому блоку надо перейти
    * dn - определяем положение блока на странице
    */
    
    $('html, body').animate({scrollTop: dn}, 10000);
    
    /*1000 - скорость перехода в мс */
  });
});