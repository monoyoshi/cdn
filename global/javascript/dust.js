$(document).ready(function() {

    // variables
    // magic
    let $dustCanvas = $("#asset_dust");

    // functions
    // generate particles of amount a
    function generate(a) {
        let i = 0;
        while (i < a) {
            let diameter = Math.floor(Math.random() * 10) + 5; // size of particle
            let left = Math.floor(Math.random() * 109) - 10; // where particle begins, x-axis
            let bottom = Math.floor(Math.random() * 20) - 10; // where particle begins, y-axis
            // build particle
            let $particleBuild = $("<div>", {
                class: "particle",
                css: {
                    width: diameter,
                    height: diameter,
                    left: `${left}%`,
                    bottom: `${bottom}%`
                }
            });
            let lifespan = Math.floor((Math.random() * 10) + 5) * 1000; // particle lifespan: how long particle will remain rendered
            $dustCanvas.append($particleBuild); // add particle into canvas
            // animation: float upwards to the right and gradually disappear
            setTimeout(() => { // opacity animation workaround
                $particleBuild.toggleClass("dfo");
                $particleBuild.css("animation-duration", `${lifespan}ms`);
            }, parseInt($(".particle").css("animation-duration"))+1000);
            $particleBuild.animate({
                left: `+=${Math.floor(Math.random() * 20) + 15}%`,
                bottom: `+=${Math.floor(Math.random() * 45) + 30}%`
            }, lifespan+1000, "linear", function() {
                $(this).remove(); // remove so it doesn't clutter
            });
            ++i;
        };
    };

    generate(9);

    setInterval(() => {
        generate(Math.floor(Math.random() * 3) + 1); // generate at least 1 and at most 3 at a time
    }, 500);

});