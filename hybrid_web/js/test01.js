// JavaScript Document
jQuery(document).ready(function(){
    $("#sortWrap").sortable({
        axis: "y",
        containment: "parent",
        update: function (event, ui) {
            var order = $(this).sortable('toArray', {
                attribute: 'data-order'
            });
            console.log(order);
        }
    });
    
    $('#sortWrap').children().eq(2).hide();
    $('#sortWrap').children().eq(3).hide();
    $('#sortWrap').children().eq(4).hide();
    
    $('#moreData').children().eq(0).hide();
    $('#moreData').children().eq(1).hide();
    
    $('#sortWrap a').click(function(){
        el = $(this).parent();
        elIndex = el.index();
        el.hide();
        $('#moreData').children().eq(elIndex).show();
    });

    $('#moreData a').click(function(){
        el = $(this).parent();
        elIndex = el.index();
        el.hide();
        $('#sortWrap').children().eq(elIndex).show();
    });
	
});