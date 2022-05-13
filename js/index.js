$(function(){
    //변수
    var cnt01Pbtn = $('.cnt01 .paging li');
    var cnt01artGroup = $('.cnt01 .artGroup');
    var cnt01Index;
    var cnt04Btn = $('.cnt04 .btns i');
    var cnt04artGroup = $('.cnt04 .artGroup');
    var wd = $(window).width();
    //함수
    function infiSlide(j){
        cnt04artGroup.animate({
            marginLeft : j + '%'
        }, 500, function(){
            if(j == 0){
                cnt04artGroup.find('.artFamily:last').prependTo(cnt04artGroup);
            }else{
                cnt04artGroup.find('.artFamily:first').appendTo(cnt04artGroup);
            }
            cnt04artGroup.css({marginLeft: '-100%'}); 
        });
    }
    //PC
    if(wd > 1024){

        //컨텐츠1 페이징 가로
        cnt01Pbtn.click(function(){
            cnt01Index = $(this).index();
            cnt01artGroup.css({
                marginLeft : cnt01Index * -100 + '%'
            });
            cnt01Pbtn.removeClass('show');
            $(this).addClass('show');
        });

        //컨텐츠4 무한 슬라이드
        cnt04artGroup.find('.artFamily:last').prependTo(cnt04artGroup);
        cnt04artGroup.css({marginLeft: '-100%'});
        cnt04Btn.first().click(function(){
            infiSlide(0);
        });
        cnt04Btn.last().click(function(){
            infiSlide(-200);
        });
    //TABLET    
    }else if(wd > 480 && wd <= 1024){
        //컨텐츠1 페이징 세로
        cnt01Pbtn.click(function(){
            cnt01Index = $(this).index();
            cnt01artGroup.css({
                marginTop :  'max(' + cnt01Index * -9 + 'rem,' + -360 * cnt01Index+ 'px)'
            });
            cnt01Pbtn.removeClass('show');
            $(this).addClass('show');
        });

        //컨텐츠4 무한 슬라이드
        cnt04artGroup.find('.artFamily:last').prependTo(cnt04artGroup);
        cnt04artGroup.css({marginLeft: '-100%'});
        cnt04Btn.first().click(function(){
            infiSlide(0);
        });
        cnt04Btn.last().click(function(){
            infiSlide(-200);
        });

    //MOBILE
    }else if(wd <= 480){
        //컨텐츠1 이미지 순서 바꾸기
        for(var i = 1; i<12; i+=3){
            var i1 = $('.cnt01 .i' + i).css('backgroundImage');
            var i2 =  $('.cnt01 .i' + (i + 1)).css('backgroundImage');
            $('.cnt01 .i' + i).css('backgroundImage', i2);
            $('.cnt01 .i' + (i + 1)).css('backgroundImage', i1);
        }
        //컨텐츠4 마진 조정
        cnt04artGroup.css({marginLeft: 0});

        //컨텐츠1 페이징 세로
        cnt01Pbtn.click(function(){
            cnt01Index = $(this).index();
            cnt01artGroup.css({
                marginLeft : cnt01Index * -100 + '%'
            });
            cnt01Pbtn.removeClass('show');
            $(this).addClass('show');
        });
    }
});