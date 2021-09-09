window.onload = function(e) {
    //var screenH = screen.availHeight; // 윈도우 창 높이
    var windowH = window.innerHeight; // 브라우저 창 높이(작업표시줄 제외)
    var headerH = document.querySelector("#header").offsetHeight;
    var scrollBox = document.querySelector("#wrapper .scroll-box");
    var contH = document.querySelector("#wrapper .scroll-box .content-wrap ").offsetHeight;
    
    scrollBox.style.height = (windowH - headerH) + 'px';
    
    /* 컨텐츠 부분 배경 스크롤 */
    var goalPoint = document.getElementById('goal_point');
    var goalPointHammer = new Hammer(goalPoint);

    goalPointHammer.get('pan').set({ direction: Hammer.DIRECTION_VERTICAL, threshold: 0 });
    //goalPointHammer.get('press').set({threshold: 0, pointer: 1, time: 0 });
    goalPointHammer.on("pan press", handleDrag);
    
    //var lastPosY = 0;
    var isDragging = false;
    function handleDrag(ev) {
        //var elem = ev.target;
        if ( ! isDragging ) {
            isDragging = true;
            lastPosY = goalPoint.offsetTop;
          }
        var posY = ev.deltaY + lastPosY;
        if(goalPoint.offsetTop < 0){
            posY = 0;
        }else if(goalPoint.offsetTop > contH){
            posY = contH;
        }
        goalPoint.style.top = posY + "px";
        if (ev.isFinal) {
            isDragging = false;
        }
        
        valueSet()
        scrollSet()
        
        //console.log(elem);
//        console.log(goalPoint.offsetTop);
//        console.log(scrollBox.offsetHeight-100);
//        console.log(goalPoint.offsetTop <= (scrollBox.offsetHeight) && goalPoint.offsetTop > (scrollBox.offsetHeight-200));
//        console.log(goalPoint.offsetTop - scrollBox.offsetHeight+100);
        
        var i = 0;
        while(i < 1){
            console.log(i);
            i++;
        }
    }
    
    function valueSet(){
        var valueArea = document.querySelector("#goal_point .value");
        //var value = goalPoint.offsetTop/36;
        valueArea.innerText = Math.round(goalPoint.offsetTop/37.5);
    }
    
    function scrollSet(){        
        if(goalPoint.offsetTop <= (scrollBox.offsetHeight) && goalPoint.offsetTop > (scrollBox.offsetHeight-200)){
//            scrollBox.scrollTop = goalPoint.offsetTop - scrollBox.offsetHeight+100;
        }
    }
}




















