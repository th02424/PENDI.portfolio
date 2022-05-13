$(function(){
    var wd = $(window).width();
    var bnr01Group = $('.bnr01 .imgGroup');
    var bnr01Btn = $('.bnr01 .btns i');
    var bnr01Img = $('.bnr01 .image');
    var ml = 0;
    var bnr02Btn = $('.bnr02 .btn')
    var btnLeft = 0;
    var btnWid = 0;
    var barWid = 0;
    var per = 0;
    function infiSlide(j ,k){
        bnr01Group.animate({
            marginLeft : j + '%'
        }, 500, function(){
            if(j == 0){
                $('.bnr01 .image').last().prependTo(bnr01Group);
            }else{
                $('.bnr01 .image').first().appendTo(bnr01Group);
            }
            bnr01Group.css('marginLeft', k +'%');
        });
    }

    if(wd > 1024){
        ml = -16.7;
        bnr02Btn.draggable({
            containment : 'parent',
            drag : function(){
                btnLeft = $(this).position().left;
                btnWid = $(this).width();
                barWid = $('.bnr02 .bars').width();
                per = btnLeft / (barWid - btnWid) * 100;
                $('.bnr02 .imgGroup').css('marginLeft', -per * 0.5 + '%');
            }
        });
    }else if(wd <= 1024 && wd > 420){
        ml = -25;
    }
    bnr01Img.last().prependTo(bnr01Group);
        bnr01Group.css('marginLeft', ml + '%');
        bnr01Btn.first().click(function(){
            infiSlide(0, ml);
        });
        bnr01Btn.last().click(function(){
            infiSlide(ml*2, ml);
        }); 
});