// JavaScript Document
jQuery(document).ready(function(){
    var list = $('.content li');
    var listLength = list.length;
    
    var overallNow = list.eq(0).find('.now .data').text();
    var overallGoal = list.eq(0).find('.goal .data').text();
    $('.top_area .goals_wrap .data strong').text(Math.round((overallNow/overallGoal)*100));
    
    for(var i=0; i<listLength; i++){
        var _this = list.eq(i);
        var areaLength = _this.find('.area').length;
        
        function barDivid(areaLength){
            _this.find('.area').css('width', 100/areaLength + '%');
            _this.find('.area').eq(1).find('.bar').css('background', '#99ff99');
            _this.find('.area').eq(3).find('.bar').css('background', '#996666');
        }
        barDivid(areaLength);
        
        if(_this.find('.goal .data').text()==""){
           _this.find('.goal_pointer').hide();
        }else{
           _this.find('.goal_pointer').show();
        }
        
        var nowFigure = _this.find('.now .data').text();
        var goalFigure = _this.find('.goal .data').text();
        _this.find('.now_pointer').animate({left:nowFigure+'px'},1000);
        _this.find('.goal_pointer').animate({left:goalFigure+'px'},1000);
        
        //console.log();
    }
    
});