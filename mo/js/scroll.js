$(function(){
    $(window).scroll(function(){
        var scrTop=$(this).scrollTop();
        console.log(scrTop);
        if(scrTop>30){
            $('.static_top').css('backgroundColor','rgba(0,0,0,0.7)');
        }else{
            $('.static_top').css('backgroundColor','transparent');
        }
    });
});