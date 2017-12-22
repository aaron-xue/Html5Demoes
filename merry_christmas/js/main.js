$(function () {
    var currentIndex = 1;
    var nextIndex = 2;
    touch.on($(':root')[0], 'swipe', function (ev) {
        switch (ev.direction) {
            case 'up':
                nextIndex = currentIndex++;
                if (nextIndex > 6) {
                    nextIndex = 1;
                }
                if (currentIndex > 6) {
                    currentIndex = 1;
                }
                break;
            case 'down':
                if (nextIndex < 1) {
                    nextIndex = 6;
                }
                if (currentIndex < 1) {
                    currentIndex = 6;
                }
                break;
        }
    })
    touch.on($(':root')[0], 'swipeend', function (ev) {

    })

})