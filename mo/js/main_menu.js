$(function(){
    // 메인메뉴 클릭이벤트
    $('.main_menu .swiper-slide a').click(function(){
        $('.main_menu .swiper-slide a').removeClass('active');
        $(this).addClass('active');
    });
});
