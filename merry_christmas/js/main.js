$(function () {
    var pageTimer = {}; //定义计算器全局变量
    var elems = [];

    setTimeout(function () {
        var pageSlider = PageSlider.case({
            loop: true,
            translate3d: true,
            callback: {
                1: function () {
                    clearAll();
                    var $ele_1 = $('#ele_1');
                    var $ele_2 = $('#ele_2');
                    var $ele_6 = $('#ele_6');
                    var $ele_7 = $('#ele_7');
                    var $ele_8 = $('#ele_8');
                    var $ele_3 = $('#ele_3');
                    var $ele_4 = $('#ele_4');
                    var $ele_5 = $('#ele_5');
                    var $ele_9 = $('#ele_9');
                    var $ele_10 = $('#ele_10');
                    var $ele_11 = $('#ele_11');
                    var $ele_12 = $('#ele_12');
                    var $ele_13 = $('#ele_13');
                    var $ele_14 = $('#ele_14');
                    elems = [$ele_1, $ele_2, $ele_3, $ele_4, $ele_5, $ele_6, $ele_7, $ele_8, $ele_9, $ele_10, $ele_11, $ele_12, $ele_13]
                    $ele_1.css('animation', 'fadeIn 1s ease 1s 1 both')
                    $ele_2.css('animation', 'fadeIn 1s ease 1s 1 both')
                    $ele_3.css('animation', 'fadeIn 1s ease 6s 1 both;')
                    $ele_6.css('animation', 'fadeIn 1s ease 1.5s 1 both')
                    $ele_7.css('animation', 'bounceIn 0.8s ease 1.5s 1 both')
                    $ele_8.css('animation', 'bounceIn 0.8s ease 1.5s 1 both')
                    $ele_4.css('animation', 'fadeIn 1s ease 7.3s 1 both')
                    $ele_5.css('animation', 'flipInX 1s ease 6.8s 1 both')
                    $ele_9.css('animation', 'fadeIn 0.1s ease 6.5s 1 both')
                    $ele_10.css('animation', 'bounceIn 1s ease 6.8s 1 both')
                    $ele_11.css('animation', 'bounceIn 1s ease 6.8s 1 both')
                    $ele_12.css('animation', 'fadeIn 1s ease 0.7s 1 both')
                    $ele_13.css('animation', 'fadeInDown 1s ease 0.3s 1 both')
                    $ele_14.css('animation', 'fadeIn 1s ease 0.9s 1 both')
                    pageTimer["timer1"] = setTimeout(() => {
                        $ele_7.css('animation', 'bounce 1s ease 0s 1 both')
                        $ele_8.css('animation', 'bounce 1s ease 0s 1 both')
                    }, 2500);
                    pageTimer["timer2"] = setTimeout(() => {
                        $ele_7.css('animation', 'swing 0.5s ease 0s 4 both')
                        $ele_8.css('animation', 'bounce 1s ease 2.5s 1 both')
                    }, 3500);
                    pageTimer["timer3"] = setTimeout(() => {
                        $ele_7.css('animation', 'bounce 1s ease 0s 1 both')
                    }, 5000);
                    pageTimer["timer4"] = setTimeout(() => {
                        $ele_7.css('animation', 'fadeOut 0.1s ease 0s 1 both')
                        $ele_8.css('animation', 'fadeOut 0.1s ease 0s 1 both')
                        $ele_1.css('animation', 'fadeOut 1s ease 0s 1 both')
                        $ele_2.css('animation', 'fadeOut 1s ease 0s 1 both')
                        $ele_6.css('animation', 'fadeOut 1s ease 0s 1 both')
                    }, 5800);
                    pageTimer["timer5"] = setTimeout(() => {
                        $ele_3.css('animation', 'flash 3s ease 0s 1 both')
                    }, 7000);
                },
                2: function () {
                    clearAll();
                    var $ele_21 = $('#ele_21');
                    var $ele_22 = $('#ele_22');
                    var $ele_23 = $('#ele_23');
                    var $ele_24 = $('#ele_24');
                    var $ele_25 = $('#ele_25');
                    var $ele_26 = $('#ele_26');
                    var $ele_27 = $('#ele_27');
                    var $ele_28 = $('#ele_28');
                    var $ele_29 = $('#ele_29');
                    var $ele_30 = $('#ele_30');
                    elems = [$ele_21, $ele_22, $ele_23, $ele_24, $ele_25, $ele_26, $ele_27, $ele_28, $ele_29, $ele_30]
                    $ele_21.css('animation', 'fadeIn 1s ease 1s 1 both')
                    $ele_22.css('animation', 'fadeIn 1s ease 2.5s 1 both')
                    $ele_23.css('animation', 'fadeIn 1s ease 2.5s 1 both')
                    $ele_24.css('animation', 'fadeIn 1s ease 2.5s 1 both')
                    $ele_25.css('animation', 'fadeIn 1s ease 3.5s 1 both')
                    $ele_26.css('animation', 'fadeInLeftDown 1s ease 4s 1 both')
                    $ele_27.css('animation', 'fadeInDown 1s ease 5.5s 1 both')
                    $ele_28.css('animation', 'fadeInDown 1s ease 5.5s 1 both')
                    $ele_29.css('animation', 'fadeInUp 1s ease 0.6s 1 both')
                    $ele_30.css('animation', 'fadeInDown 1s ease 0.3s 1 both')
                    pageTimer["timer6"] = setTimeout(() => {
                        $ele_22.css('animation', 'swing 1s ease 0s 3 both')
                        $ele_23.css('animation', 'swing 1s ease 0s 3 both')
                        $ele_24.css('animation', 'swing 1s ease 0s 3 both')
                    }, 3500);

                },
                3: function () {
                    clearAll();
                    var $ele_31 = $('#ele_31');
                    var $ele_32 = $('#ele_32');
                    var $ele_33 = $('#ele_33');
                    var $ele_34 = $('#ele_34');
                    var $ele_35 = $('#ele_35');
                    var $ele_36 = $('#ele_36');
                    var $ele_37 = $('#ele_37');
                    var $ele_38 = $('#ele_38');
                    var $ele_39 = $('#ele_39');
                    var $ele_310 = $('#ele_310');
                    var $ele_311 = $('#ele_311');
                    elems = [$ele_31, $ele_32, $ele_33, $ele_34, $ele_35, $ele_36, $ele_37, $ele_38, $ele_39, $ele_310, $ele_311]
                    $ele_31.css('animation', 'flash 3s linear 0s infinite both')
                    $ele_32.css('animation', 'animation: flash 4s linear 0s infinite both')
                    $ele_33.css('animation', 'fadeIn 1s ease 0.3s 1 both')
                    // $ele_34.css('animation', 'fadeIn 1s ease 2.5s 1 both')
                    $ele_35.css('animation', 'fadeIn 1s ease 1s 1 both')
                    $ele_36.css('animation', 'pulse 3s linear 0s infinite both')
                    $ele_37.css('animation', 'fadeIn 1s ease 0.9s 1 both')
                    $ele_38.css('animation', 'flash 4s linear 0s infinite both')
                    $ele_39.css('animation', 'fadeIn 1s ease 2.5s 1 both')
                    $ele_310.css('animation', 'fadeIn 1s ease 0.9s 1 both')
                    $ele_311.css('animation', 'flash 5s linear 0s infinite both')
                },
                4: function () {
                    clearAll();
                },
                5: function () {
                    clearAll();
                },
                6: function () {
                    clearAll();
                }
            }

        });
    }, 2000);

    function clearAll() {
        //全部清除方法
        for (var each in pageTimer) {
            clearTimeout(pageTimer[each]);
        }
        for (let i = 0; i < elems.length; i++) {
            elems[i].css('animation', '');
        }
        elems.splice(0, elems.length);
    }

})
15851802713