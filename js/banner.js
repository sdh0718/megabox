function banner(){

        //random banner
        $('.banner>div').removeClass('active');
        var ranNum=Math.random();
        if(ranNum>=0.5){
            $('.banner02').addClass('active');
        }else{
            $('.banner01').addClass('active');
        }
}