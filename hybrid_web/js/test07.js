// JavaScript Document
jQuery(document).ready(function(){
    var graphWrapH = $('.graph_wrap').innerHeight();
    var nowFigure = $('.content .cont02').text();
    //nowFigure = (nowFigure/graphWrapH)*100;
    $('.graph li').prepend('<div class="figure"></div>');
    $('.graph li:last-child').find('.figure').css('height',nowFigure+'px');
    console.log(nowFigure);
    
});