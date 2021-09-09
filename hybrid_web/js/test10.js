window.onload = function(e) {
//    var container = document.getElementById('container')
//    var swiper = new Hammer(container)
//
//    swiper.on('swipeleft', function (e) {
//      next()
//    })
//    swiper.on('swiperight', function (e) {
//      prev()
//    })
//
//    // Slide functions
//    var list = container.querySelector('.list')
//    var items = list.querySelectorAll('.item')
//    var index = 0
//
//    function slide () {
//      list.style.webkitTransform = 'translate('+(-index * 100)+'%, 0)'
//    }
//
//    function next () {
//      if (index < items.length - 1) {
//        index ++
//        slide()
//      }
//    }
//
//    function prev () {
//      if (index > 0) {
//        index --
//        slide()
//      }
//    }
    
    var myElement = document.getElementById('myElement');

    // create a simple instance
    // by default, it only adds horizontal recognizers
    // 기본적으로 간단한 인스턴스를 만들고, 수평 인식 자만 추가합니다.
    var mc = new Hammer(myElement);

    // let the pan gesture support all directions.
    // this will block the vertical scrolling on a touch-device while on the element
    // 팬 제스처가 모든 방향을 지원하도록하십시오. 이렇게하면 요소 위에있는 동안 터치 장치의 세로 스크롤이 차단됩니다.
    mc.get('pan').set({ direction: Hammer.DIRECTION_ALL });

    // listen to events...
    mc.on("panleft panright panup pandown tap press", function(ev) {
        myElement.textContent = ev.type +" gesture detected.";
    });
    
    
    //drag 예제
    var myBlock = document.getElementById('dragMe');
    var statusBar = document.getElementById('status');

    // create a simple instance on our object
    // 객체에 간단한 인스턴스를 만듭니다.
    var mc = new Hammer(myBlock);

    // add a "PAN" recognizer to it (all directions)
    // "PAN"인식기를 추가합니다 (모든 방향)
    mc.add( new Hammer.Pan({ direction: Hammer.DIRECTION_ALL, threshold: 0 }) );

    // tie in the handler that will be called
    // 호출할 핸들러를 묶습니다.
    mc.on("pan", handleDrag);

    // poor choice here, but to keep it simple
    // setting up a few vars to keep track of things.
    // at issue is these values need to be encapsulated
    // in some scope other than global.
    // 여기서 가난한 선택이지만, 사물을 추적하기 위해 몇 가지 병을 간단하게 설정하는 것이 중요합니다. 문제는 이러한 값을 전역이 아닌 다른 범위에 캡슐화해야한다는 것입니다.
    var lastPosX = 0;
    var lastPosY = 0;
    var isDragging = false;
    function handleDrag(ev) {

      // for convience, let's get a reference to our object
      // convience를 위해서 객체에 대한 참조를 얻자.
      var elem = ev.target;

      // DRAG STARTED
      // here, let's snag the current position
      // and keep track of the fact that we're dragging
      // 여기, 현재 위치를 파악하고 우리가 끌고 있다는 사실을 추적합시다.
      if ( ! isDragging ) {
        isDragging = true;
        lastPosX = elem.offsetLeft;
        lastPosY = elem.offsetTop;
        setStatus("You, sir, are dragging me...");

        setBlockText("WOAH");
      }

      // we simply need to determine where the x,y of this
      // object is relative to where it's "last" known position is
      // 이 객체의 x, y가 어디에서 "마지막"알려진 위치와 관련이 있는지를 결정하면됩니다.
      // NOTE: 
      //    deltaX and deltaY are cumulative
      // Thus we need to always calculate 'real x and y' relative
      // to the "lastPosX/Y"
      // 참고 : deltaX와 deltaY는 누적됩니다. 따라서 "lastPosX / Y"에 상대적인 'real x and y'
      var posX = ev.deltaX + lastPosX;
      var posY = ev.deltaY + lastPosY;

      // move our element to that position
      // 요소를 그 위치로 이동시킨다.
      elem.style.left = posX + "px";
      elem.style.top = posY + "px";

      // DRAG ENDED
      // this is where we simply forget we are dragging
      // 이것은 우리가 드래그하는 것을 잊어 버리는 곳입니다.
      if (ev.isFinal) {
        isDragging = false;
        setStatus("Much better. It's nice here.");
        setBlockText("Thanks");
      }
        console.log(lastPosY);
    }

    function setStatus(msg) {
      statusBar.textContent = msg;
    }
    function setBlockText(msg) {
      myBlock.textContent = msg;
    }
}





















