// JavaScript Document
jQuery(document).ready(function(){
    var ftg;
    var ltg;
    var joystickControlBtn = $('#joystickControlBtn');
    var frontIndicator = $('#frontIndicator');
    var filist = frontIndicator.find('li');
    var filistLength = filist.length;
    var leftIndicator = $('#leftIndicator');
    var lilist = leftIndicator.find('li');
    var lilistLength = lilist.length;
    
    joystickControlBtn.find('button').click(function(){
        var _this = $(this);
        var fac = filist.filter('.active').index();
        var lac = lilist.filter('.active').index();
        
        if(_this.attr('class')=='top' && fac > 0){
            filist.removeClass('active');
            filist.eq(fac-1).addClass('active');
        }else if(_this.attr('class')=='right' && lac < (lilistLength-1)){
            lilist.removeClass('active');
            lilist.eq(lac+1).addClass('active');
        }else if(_this.attr('class')=='bottom' && fac < (filistLength-1)){
            filist.removeClass('active');
            filist.eq(fac+1).addClass('active');
        }else if(_this.attr('class')=='left' && lac > 0){
            lilist.removeClass('active');
            lilist.eq(lac-1).addClass('active');
        }
    });
});