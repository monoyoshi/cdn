$(document).ready(function() {

    let isTouching = false;
    let currentTap = undefined;
    let scrollOffset = 0;

    let $drag = $("#drag");
    let $tap = $("#tap");

    let cDimensions = 15;

    $(document).on("mousedown", function(position) {
        isTouching = true;
        if (!$tap.hasClass("ped")) {
            let tapDimension = parseInt($tap.css("width"));
            $tap
                .addClass("ped")
                .css({
                    left: `${position.pageX - (tapDimension / 2)}px`,
                    top: `${position.pageY - (tapDimension / 2) - scrollOffset}px`
                });
            clearTimeout(currentTap);
            currentTap = setTimeout(() => {
                $tap.removeClass("ped");
            }, 250);
        };
    });

    $(document).on("mousemove", function(position) {
        if (isTouching) {
            let $dragpiece = $("<div>", {
                class: "dtrailpiece",
                css: {
                    left: `${position.pageX - (cDimensions / 2)}px`,
                    top: `${position.pageY - (cDimensions / 2) - scrollOffset}px`
                }
            });
            let dustDimensions = Math.floor(Math.random() * cDimensions * 1.5);
            let $dragdust = $("<div>", {
                class: "dragdust",
                css: {
                    left: `${position.pageX - (cDimensions * 1.25) + Math.floor(Math.random() * cDimensions * 2.5)}px`,
                    top: `${position.pageY - (cDimensions * 1.25) + Math.floor(Math.random() * cDimensions * 2.5) - scrollOffset}px`,
                    width: `${dustDimensions}px`,
                    height: `${dustDimensions}px`,
                    opacity: Math.random(),
                }
            });
            $drag
                .append($dragpiece)
                .append($dragdust);
                $dragpiece.animate({
                    left: `${position.pageX}px`,
                    top: `${position.pageY - scrollOffset}px`
                }, 400, "linear", function() {
                    $(this).remove();
                    $dragdust.remove();
                });
        }
    });

    $(document).on("mouseup", function() {
        isTouching = false;
    });

    $(document).on("scroll", function() {
        scrollOffset = $(this).scrollTop();
    });

});