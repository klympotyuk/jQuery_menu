$(window).on('load resize', function(){
    if($(window).width()<'720'){
        $('nav').css('justify-content','flex-start');
        $('.menu').css('display','none');
        $('#touch-menu__btn').css('display','flex');
    }
    else{
        $('nav').css('justify-content','center');
        $('.menu').css('display','flex');
        $('#touch-menu__btn').css('display','none');
    }
});
$(document).ready(function(){
    $('#touch-menu__btn').on('click',function(e){
        $('.touch-menu').css('display','block');
    });
    $('.touch-menu-items__item').on('click',function(e){
        $('.touch-menu').css('display','none');
    });

    $('#touch-menu__btn').on('mouseenter',function(e){
        $(e.currentTarget).css('color','whitesmoke');
        $(e.currentTarget).css('background','black');
    });
    $('#touch-menu__btn').on('mouseleave',function(e){            
        $(e.currentTarget).css('color','black');
        $(e.currentTarget).css('background','silver');
    });
    $('.fa-chevron-circle-down').on('mouseenter',function(e){
        $(e.currentTarget).css('color','whitesmoke');
    });
    $('.fa-chevron-circle-down').on('mouseleave',function(e){
        $(e.currentTarget).css('color','black');
    });

    $('.touch-menu-items__item a').on('mouseenter',function(e){
        $(e.currentTarget).css('color','whitesmoke');
        $(e.currentTarget).css('background','black');
    });
    $('.touch-menu-items__item a').on('mouseleave',function(e){            
        $(e.currentTarget).css('color','black');
        $(e.currentTarget).css('background','silver');
    });

    $('.menu__item a').on('mouseenter',function(e){
        $(e.currentTarget).css('color','whitesmoke');
        $(e.currentTarget).css('background','black');
    });
    $('.menu__item a').on('mouseleave',function(e){            
        $(e.currentTarget).css('color','black');
        $(e.currentTarget).css('background','silver');
    });    
});
