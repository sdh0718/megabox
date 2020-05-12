$(function(){
    //서브맴버 토글
    $('.member_sub').hide();
    $('#member_btn').click(function(){
        $('.member_sub').slideToggle(100);
        $('.member_sub').css('border-bottom','1px solid rgba(0,0,0,0.1)');
    });
});