// JavaScript Document
jQuery(document).ready(function(){
    //tab
    tabfirstset();
    $('.tab-list button').click(function(){
        var _this = $(this);
        var _thisp = _this.parent();
        var _acttab = _this.attr('data-name');
        _thisp.parent().find('.active').removeClass('active');
        _thisp.addClass('active');
        _thisp.parent().parent().find('.tab-cont').hide();
        $('#'+_acttab).show();
        return false;
    });
    function tabfirstset(){
        $('.tab-list li:last-child').addClass('active');
        $('.tab-cont').hide();
        $('.tab-cont:last-child').show();
    }
    
    //edit
    $('#editBtn').click(function(){
        var _this = $(this);
        if(_this.text()=='편집'){
            //sortable
            $( "#sortable" ).sortable({
                disabled: false,
                placeholder: "ui-state-highlight"
            });
            $( "#sortable" ).disableSelection();
            
            //add
            $("#sortable").parent().append('<button class="addBtn">+</button>');
            $("#sortable").parent().find(".addBtn").click(function(){
                $("#sortable").append('<li class="ui-state-default"></li>');
                $("#sortable li").prepend('<a href="#" class="delBtn">-</a>');
                $("#sortable a.delBtn").click(function(event){
                    event.preventDefault();
                    var _this = $(this);
                    _this.parent().remove();
                });
            });
            //delete
            $("#sortable li").prepend('<a href="#" class="delBtn">-</a>');
            $("#sortable a.delBtn").click(function(){
                var _this = $(this);
                _this.parent().remove();
            });
            _this.text('완료')
        }else if(_this.text()=='완료'){
            $( "#sortable" ).sortable({
                disabled: true
            });
            $("#sortable").parent().find('.addBtn').remove();
            $("#sortable li").find('.delBtn').remove();
            _this.text('편집')     
        }
    });
    
    console.log();
    
});