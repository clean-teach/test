// JavaScript Document
jQuery(document).ready(function(){
    $("#sortWrap").sortable();
    
    var dataList = $('#dataList');
    var selectData = $('#sortWrap');
    var moreData = $('#moreData');
    
    //배열에 .detach()로 저장
    var test = [];
    dataList.children().each(function(){
        test.push($(this).detach());
    });
    moreData.each(function(){
        $(this).html(test);
    });
    
    //console.log(selectData.html());
    
    
    //배열에 담아 복제
    /*var test = [];
    moreData.children().each(function(){
        test.push($(this).clone());
    });
    selectData.each(function(){
        $(this).html(test);
    });
    moreData.children().remove();*/
    
    //클릭이동 함수
    function clickMove(clickTg,moveTg){
        clickTg.click(function(e){
            e.preventDefault();
            var el = $(this).parent();
            var tgNum = el.data('order')-1;
            test.push(el.detach());
            moveTg.append(test[tgNum]);
            delete test[tgNum];
            
            console.log(moveTg);
        }); 
    }
    
    clickMove(moreData.children('div').children('a'),selectData);
    //clickMove(selectData.children('div').children('a'),moreData);
    
});