// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

var doc = document.documentElement;
doc.setAttribute('data-useragent', navigator.userAgent);

$(function(){
    $("select").selectify();

    $('.jcarousel')
        .jcarousel({wrap: "circular"})
        .jcarouselAutoscroll({interval: 5000});

    $('.jcarousel-control-prev').jcarouselControl({target: "-=1"});

    $('.jcarousel-control-next').jcarouselControl({target: "+=1"});

    $('.jcarousel-control-prev-small').jcarouselControl({target: "-=1"});

    $('.jcarousel-control-next-small').jcarouselControl({target: "+=1"});

    $('.v-jcarousel')
        .jcarousel({wrap: "circular", vertical: true});

    $('.v-jcarousel-control-prev').jcarouselControl({target: "-=1"});

    $('.v-jcarousel-control-next').jcarouselControl({target: "+=1"});
});