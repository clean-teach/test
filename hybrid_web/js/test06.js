// JavaScript Document
jQuery(document).ready(function(){
    var winInH = window.innerHeight;
    $('#wrapper').height(winInH);
    var contWrap = $('.content-wrap');
    var moreWrap = $('#more-wrap');
    var moreBtn = $('.more-btn');
    var moreMainMenu = $('.more-main-menu');
    var levelMenu = $('.level-menu');
    
    //moreWrap.css('bottom',-100);
    var tab = $('.tab');
    var cont01 = $('.cont01');
    var scrollH = tab.height() + cont01.height();
    
    levelMenu.hide();
    
    moreBtn.click(function(){
        var _this = $(this);
        if(_this.hasClass('on')==false){
            _this.addClass('on');
            _this.parents().filter('.content-wrap').animate({top: -scrollH},500);
            
        }else if(_this.hasClass('on')==true){
            _this.removeClass('on');
            _this.parents().filter('.content-wrap').animate({top: 0},500);
        }
    });
    
    moreMainMenu.find('button').click(function(){
        var _this = $(this);
        if(_this.parent().index()==0){
            $('.more-cont').children().eq(0+1).show();
            _this.parent().parent().hide();
        }
    });
    
    levelMenu.find('button').click(function(){
        var _this = $(this);
        var levelMenuLength = _this.parents().filter(levelMenu).children().size();
        var host = moreMainMenu.find('li').eq(0).find('button');
        _this.parent().parent().hide();
        moreMainMenu.show();

        for(var i=0; i<(levelMenuLength-1); i++){
            if(_this.parent().index()==i){
                indicator(host,i)
                //i=0;
            }else if(_this.parent().index()==(levelMenuLength-1)){
                host.find('ul').remove();
            }
        }
        console.log(Boolean(_this.parent().index()==(levelMenuLength-1))); 
    });
    
    function indicator(host,lv){
        host.append('<ul class="dot"><li></li><li></li><li></li><li></li><li></li></ul>');
        host.find('.dot li').removeClass('on');
        for(var i=0; i<(5-lv); i++){
            host.find('.dot li').eq(i).addClass('on');
        }
    }
});