
// Burger-menu

$(document).ready(function() {
    $('.header-burger').click(function(event) {
        $('.header, .header-burger,.header-nav, .header-logo').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

// fback slider

$(document).ready(function(){
    $('.slider').slick({
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 8000,
        dots: true,
        arrows: false,

    });
  });

 
// Slow scroll nav-menu

$(document).ready(function(){
    $(".header-nav").on("click","a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();
    
    //забираем идентификатор бока с атрибута href
    var id = $(this).attr('href'),
    
    //узнаем высоту от начала страницы до блока на который ссылается якорь
    top = $(id).offset().top + 1; // Льоша не працює без одиниці при висоті блоків авто (до 1500рх)
    
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: top}, 1000);
    });
});

// Active nav on scroll

jQuery(window).scroll(function () {
    var position = jQuery(this).scrollTop();

    jQuery('.section').each(function() {
        var target = jQuery(this).offset().top;  

        var id = jQuery(this).attr('id');

        if (position >= target) {
            jQuery('#header-nav>ul>li>a').removeClass('active');
            jQuery('#header-nav ul li a[data-id=' + id + ']').addClass('active');
            
        }
        
    });
});

// FAQ (ЛЬоша глянь як це написати за 1 раз, а не 6 як в нас :)

$(document).ready(function() {
    $('.ask-ques_a1').click(function(event) {
        event.preventDefault();
        $('.ask-text p').removeClass('active');
        $('#ask-text_1').addClass('active');
        
    });
});

$(document).ready(function() {
    $('.ask-ques_a2').click(function(event) {
        event.preventDefault();
        $('.ask-text p').removeClass('active');
        $('#ask-text_2').addClass('active');
    });

});

$(document).ready(function() {
    $('.ask-ques_a3').click(function(event) {
        event.preventDefault();
        $('.ask-text p').removeClass('active');
        $('#ask-text_3').addClass('active');
        
    });

});

$(document).ready(function() {
    $('.ask-ques_a4').click(function(event) {
        event.preventDefault();
        $('.ask-text p').removeClass('active');
        $('#ask-text_4').addClass('active');
        
    });
    
});

$(document).ready(function() {
    $('.ask-ques_a5').click(function(event) {
        event.preventDefault();
        $('.ask-text p').removeClass('active');
        $('#ask-text_5').addClass('active');
        
    });
});

$(document).ready(function() {
    $('.ask-ques_a6').click(function(event) {
        event.preventDefault();
        $('.ask-text p').removeClass('active');
        $('#ask-text_6').addClass('active');
        
    });
});

//-------------ASK Ques-------------


$(document).ready(function() {
    $('.ask-ques a').click(function(event) {
        event.preventDefault();
        $('.ask-ques a').removeClass('active');
        $(this).addClass('active');
        
    });
});