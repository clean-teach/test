// JavaScript Document
jQuery(document).ready(function(){
    $("#sortWrap").sortable();
    
    var selectData = $('#sortWrap');
    var moreData = $('#moreData');
    
    //클릭이동 함수
    $('#container a').click(function(){
        if($(this).parent().parent().attr("id")==moreData.attr("id")){
            var el = $(this).parent();
            movEl = el.detach();
            selectData.append(movEl);
            $(this).text('-');
            el.find('span').text('=');
        }else if($(this).parent().parent().attr("id")==selectData.attr("id")){
            var el = $(this).parent();
            movEl = el.detach();
            moreData.append(movEl);
            $(this).text('+');
            el.find('span').text('');
        }
        //console.log($(this).parent().parent().attr("id"));
        console.log(moreData.attr("id"));
    });
    
});