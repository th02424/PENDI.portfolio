$(function(){
    //변수
    var mainBtn = $('.main .btns div');
    var cnt02Btn = $('.cnt02 section .btns i');
    var cnt02Article = $('.cnt02 article');
    var cnt02ArtCnt = [];
    var cnt03Btn = $('.cnt03 .btn');
    var cnt03ArtGroup = $('.cnt03 .artGroup');
    var cnt04Btn = $('.cnt04 .btn');
    var wd = $(window).width();
    function screenHeart(){
        var heart = $('.heart');
        heart.animate({
            opacity : 1
        }, 500, function(){
           heart.animate({
               opacity: 0
           }, 1000);
        })
    }
    
    mainBtn.click(function(){
        var ind = $(this).index() + 1;
        var offset = $('.cnt0' + ind).offset();
        $('html, body').animate({scrollTop : offset.top - 40}, 500);
    });

    
    $('.cnt01 .menu').find('h4:last').click(screenHeart);
    cnt04Btn.click(screenHeart);

   
    //아티클 이동
    cnt02Btn.first().click(function(j){
        //article 저장     
        for(var i = 0; i < cnt02Article.length; i++){
            cnt02ArtCnt[i] = cnt02Article.eq(i).html();
        }
        var j = cnt02Article.length - 1;
        for(var i = 0; i < cnt02Article.length; i++){
            cnt02Article.eq(j).html(cnt02ArtCnt[i]);      
            j++;
            if(j >= cnt02Article.length - 1){
            j = 0;
            }
        } 
    });
    cnt02Btn.last().click(function(j){
        //article 저장     
        var j = cnt02Article.length - 1;
        for(var i = 0; i < cnt02Article.length; i++){
            cnt02ArtCnt[i] = cnt02Article.eq(i).html();
        }
        for(var i = 0; i < cnt02Article.length; i++){
            cnt02Article.eq(i).html(cnt02ArtCnt[j]);      
            j++;
            if(j >= cnt02Article.length - 1){
            j = 0;
            }
        } 
    });

    $('.cnt02').on('click', '.artGroup article', function(){
        var current = $(this).index();
        var j = cnt02Article.length - 1;
        for(var i = 0; i < cnt02Article.length; i++){
            cnt02ArtCnt[i] = cnt02Article.eq(i).html();
        }
        for(var i = 0; i < cnt02Article.length; i++){
            cnt02Article.eq(j).html(cnt02ArtCnt[current]);      
            j++;
            current++;
            if(j >= cnt02Article.length - 1){
                j = 0;
            }
            if(current >= cnt02Article.length){
                current = 0;
            }
        }
    });





    //PC
    if(wd > 1024){

         //drag
        $('.cnt01 .btn:first').draggable({
            containment : 'parent',
            drag: function(){
                var barWd = $('.cnt01 .menu .ovrGrid').width();
                var currentX = $(this).css('left').slice(0, -2);
                var x =  Number(currentX) / barWd * 100; 
                $('.cnt01 .artGroup:first').css('marginLeft', (-100 + x) + '%');
                $('.shadow:first').css('width', 100-x + '%')
            }
        });
        $('.cnt01 .btn:last').draggable({
            containment : 'parent',
            drag: function(){
                var barWd = $('.cnt01 .menu .ovrGrid').width();
                var currentX = $(this).css('left').slice(0, -2);
                var x =  Number(currentX) / barWd * 100; 
                $('.cnt01 .artGroup:last').css('marginRight', -x + '%');
                $('.shadow:last').css('width', x + 1.2 + '%')
            }
        });
    

        cnt03ArtGroup.first().css('margin-left', '-20%');
        cnt03ArtGroup.first().find('article:first').appendTo(cnt03ArtGroup.first());
        cnt03Btn.first().click(function(){
            cnt03ArtGroup.first().animate({
                marginLeft :  -40 + '%'
            }, 500, function(){
                cnt03ArtGroup.first().css('margin-left', '-20%');
                cnt03ArtGroup.first().find('article:first').appendTo(cnt03ArtGroup.first());
            });
        });
    
    
        cnt03ArtGroup.last().css('margin-right', '-20%');
        cnt03ArtGroup.last().find('article:first').appendTo(cnt03ArtGroup.last());
        cnt03Btn.last().click(function(){
            cnt03ArtGroup.last().animate({
                marginRight : -40 + '%'
            }, 500, function(){
                cnt03ArtGroup.last().find('article:first').appendTo(cnt03ArtGroup.last());
                cnt03ArtGroup.last().css('margin-right', '-20%');
            });
        });

       
    //TABLET    
    }else if(wd > 480 && wd <= 1024){
        var tabBtns = $('.tabBtn');
        var tabBtn = $('.tabBtn i');
        var cnt03ArtViewGroup = $('.artViewGroup');
        function tabBtn1to2(){
            cnt03ArtViewGroup.css('marginLeft', '-100%');
            tabBtns.css({
                left : 'inherit',
                right : 'calc(50% / 8 * 3 - 20px)'
            });
            tabBtns.find('span').removeClass('show');
            tabBtns.find('span:eq(1)').addClass('show');
        }
        function tabBtn2to1(){
            cnt03ArtViewGroup.css('marginLeft', '0');
            tabBtns.css({
                right : 'inherit',
                left : 'calc(50% / 8 * 3)'
            });
            tabBtns.find('span').removeClass('show');
            tabBtns.find('span:eq(0)').addClass('show');
        }
        
        tabBtn.last().click(tabBtn1to2);
        tabBtn.first().click(tabBtn2to1);
        tabBtns.find('span:eq(0)').click(tabBtn2to1);
        tabBtns.find('span:eq(1)').click(tabBtn1to2);
    //MOBILE
    }else if(wd <= 480){
        var moBtns = $('.moBtn');
        var moBtn = $('.moBtn i');
        var cnt03ArtGroup1 = $('.artViewTop .artGroup');
        var cnt03i = 0;
        function move(cnt03i){
            
            cnt03ArtGroup1.css({
                marginLeft : -100 * cnt03i + '%'
            });
            moBtns.find('span').removeClass('show');
            moBtns.find('span:eq(' + cnt03i + ')').addClass('show');
        }
        moBtn.first().click(function(){
            cnt03i--;
            if(cnt03i <= 0){
                cnt03i = 0;
            }
            move(cnt03i);
        });
        moBtn.last().click(function(){
            cnt03i++;
            if(cnt03i >= 3){
                cnt03i = 3;
            }
            move(cnt03i);
        });
        moBtns.find('span').click(function(){
            cnt03i = $(this).index() - 1;
            move(cnt03i);
        })
    }

});