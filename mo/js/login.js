$(function(){
    $('#ticket_btn,#alarm_btn,#login_txt').click(function(){
        var conF=confirm('로그인 후 이용 가능합니다.\n로그인 하시겠습니까?');
        console.log(conF);
        if(conF){
            $('.static_menu,.wrap,.burger_menu').hide();
            $('.login_form').show();
        }
    });
    $('#close_btn').click(function(){
        $('.login_form').hide();
        $('.static_menu,.wrap').show();
    });

    $('#toggle_btn').click(function(){
        $('.burger_menu').css('display','flex');
    });

    $('#burger_close_btn').click(function(){
        $('.burger_menu').hide();
    });
});