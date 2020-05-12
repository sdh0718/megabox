$(function(){ 
    //핫클립 메인 무비 플레이 스톱
    var video01=document.querySelector('video');
    $('.movie_clip>.play_btn').click(function(){
        video01.play();
        $(this).toggleClass('active')
        $('.movie_clip>.stop_btn').toggleClass('active');
    });
    $('.movie_clip>.stop_btn').click(function(){
        video01.pause();
        $(this).toggleClass('active')
        $('.movie_clip>.play_btn').toggleClass('active');
    });

    //핫클립 메인 랜덤 무비
    $('.movie_clip').removeClass('active');
    var ranNum=Math.random()
    if(ranNum<=0.2){
      $('.movie_clip').eq(0).addClass('active');
    }else if(ranNum<=0.4){
      $('.movie_clip').eq(1).addClass('active');
    }else if(ranNum<=0.6){
      $('.movie_clip').eq(2).addClass('active');
    }else if(ranNum<=0.8){
      $('.movie_clip').eq(3).addClass('active');
    }else{
      $('.movie_clip').eq(4).addClass('active');
    }


    //스몰 무비 재생
    $('#play01').click(function(){
        location.href="media/movie01.mp4";
    });
    $('#play02').click(function(){
        location.href="media/movie02.mp4";
    });
    $('#play03').click(function(){
        location.href="media/movie03.mp4";
    });
    $('#play04').click(function(){
        location.href="media/movie04.mp4";
    });
    $('#play05').click(function(){
        location.href="media/movie05.mp4";
    });
});