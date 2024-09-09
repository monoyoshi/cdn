$(document).ready(function() {

    const $root = $(":root"); // :root element, holder of variables
    let cDimension = parseInt($root.css("--sizeClick"));
    // let clDimension = parseInt($root.css("--sizeClickLink")); todo: link click (bigger animation)

    $("#asset_cursor")
        .append($("<div>", {
            id: "click"
        }))
        .append($("<div>", {
            id: "drag"
        }));

    let mouseDownRN = false;
    let currentTap = undefined;
    let scrollOffset = 0;

    let $click = $("#click");
    let $drag = $("#drag");

    $(document).on("mousedown", function(position) {
        mouseDownRN = true;
        if (!$click.hasClass("ed")) {
            $click
                .addClass("ed")
                .css({
                    left: `${position.pageX - (cDimension / 2)}px`,
                    top: `${position.pageY - (cDimension / 2) - scrollOffset}px`
                });
            clearTimeout(currentTap);
            currentTap = setTimeout(() => {
                $click.removeClass("ed");
            }, 250);
        };
    });

    $(document).on("mousemove", function(position) {
        if (mouseDownRN) {
            let cRatio = cDimension / 10;
            let $dragpiece = $("<div>", {
                class: "dtrailpiece",
                css: {
                    left: `${position.pageX - (cRatio / 2)}px`,
                    top: `${position.pageY - (cRatio / 2) - scrollOffset}px`
                }
            });
            let dustDimensions = Math.floor(Math.random() * cRatio * 1.5);
            let $dragdust = $("<div>", {
                class: "dragdust",
                css: {
                    left: `${position.pageX - (cRatio * 1.25) + Math.floor(Math.random() * cRatio * 2.5)}px`,
                    top: `${position.pageY - (cRatio * 1.25) + Math.floor(Math.random() * cRatio * 2.5) - scrollOffset}px`,
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
        mouseDownRN = false;
    });

    $(document).on("scroll", function() {
        scrollOffset = $(this).scrollTop();
    });

});