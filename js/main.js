function main(){
    exit();
    skip();
    banner();
    login();
    popup();
    sitemap();
    subPosition();
    $(window).resize(function(){
        subPosition();
    })

    // ===========================
    // swiper
    var swiper = new Swiper('.swiper-container',{
        slidesPerView: 3.7,
        spaceBetween: 40,
        loop:true,
    });

    // =================================================================
    //github
    $('.git_hub').click(function(){
        location.href='https://github.com/sdh0718/megabox';
    });

    // ==================================================================
    //userSlider
    var cnt=0;
    $('#prev').click(function(){
        if(cnt>0){
            cnt--; 
        }else{
            cnt=3;
        }
        userSlide(cnt);
    });
    $('#next').click(function(){
        if(cnt<3){
        cnt++; 
        }
        else{
            cnt=0;
        }
        userSlide(cnt);
    });
};