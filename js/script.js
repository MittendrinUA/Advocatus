$(document).ready(function() {
    $('.header-burger').click(function(event) {
        $('.header, .header-burger,.header-nav, .header-logo').toggleClass('active');
        $('body').toggleClass('lock');
    });
});