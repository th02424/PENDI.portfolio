$(function(){
    //변수
    var wd = $(window).width();
    var cnt02View = $('.cnt02 .artView article');
    var cnt02Article = $('.cnt02 .artFamily article');
    var cnt02Paging = $('.cnt02 li');
    var cnt03View = $('.cnt03 .artView .ovrGrid');
    var cnt03Article = $('.cnt03 .artGroup article');
    var cnt03Line = $('.cnt03 .artGroup article .texts');
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
    function classShow(target, ind){
        target.removeClass('show');
        target.eq(ind).addClass('show');
    }


    cnt02Article.click(function(){
        var ind = $(this).index();
        if($(this).parent().attr('class') == 'artRight'){
            ind += 2;
        }
        classShow(cnt02View, ind);
        classShow(cnt02Paging, ind);
    });
    cnt02Paging.click(function(){
        var ind = $(this).index();
        classShow(cnt02View, ind);
        classShow(cnt02Paging, ind);
    });
    cnt03Article.click(function(){
        var ind = $(this).index();
        classShow(cnt03View, ind);
        classShow(cnt03Line, ind);
    });
    $('i.xi-heart').click(screenHeart);

});