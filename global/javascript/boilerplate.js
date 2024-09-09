// header and footer generation
// I wanna have a header and a footer I can easily update through one file
// especially since it's static across all pages

function header(active) {
    // active = active "section" of the website
    // my funny workaround is just an array
    let current = {
        index: ["", `https://bladewyrm.dev`],
        profile: ["", `https://bladewyrm.dev/profile.html`],
        projects: ["", `https://bladewyrm.dev/projects.html`],
    };

    switch (active) {
        case "index": {
            current.index[0] = "active";
            current.index[1] = undefined;
            break;
        };
        case "profile": {
            current.profile[0] = "active";
            current.profile[1] = undefined;
            break;
        };
        case "projects": {
            current.projects[0] = "active";
            current.projects[1] = undefined;
            break;
        };
    };

    $("header").append($("<nav>", {
        class: "header-nav"
    })
        .append($("<div>", {
            class: "flexbox center",
            css: {
                "margin-bottom": "5px"
            }
        })
            .append($("<a>", {
                class: "header-nav-btn",
                id: current.index[0],
                css: {
                    "background-image": `url('https://cdn.bladewyrm.dev/global/images/headernav/index.svg')`
                },
                href: current.index[1]
            }))
            .append($("<a>", {
                class: "header-nav-btn",
                id: current.profile[0],
                css: {
                    "background-image": `url('https://cdn.bladewyrm.dev/global/images/headernav/profile.svg')`
                },
                href: current.profile[1]
            }))
            .append($("<a>", {
                class: "header-nav-btn",
                id: current.projects[0],
                css: {
                    "background-image": `url('https://cdn.bladewyrm.dev/global/images/headernav/projects.svg')`
                },
                href: current.projects[1]
            }))
        )
    );
};

function footer() {
    $("footer").append($("<div>", {
            class: "textbox"
        })
            .html("made with pure hyperfixation by <b>kyu(ren)</b>")
        )
        .append($("<div>", {
            class: "frame",
            css: {
                "margin": 0,
                "margin-right": "15px",
                "padding": 0,
                "position": "relative",
                "bottom": "7px"
            }
        })
            .append($("<img>", {
                src: `https://cdn.bladewyrm.dev/global/images/kyurem/sprite-animated_kyurem.png`,
                height: "50px",
                width: "50px",
                css: {                    
                    margin: 0,
                    padding: 0
                }
            }))
    )
};

// "get url parameters" but I think it's funny to keep everything as one letter
// *gurlp* t-they're right behind me, isn't it
function gURLP(p) {
    return new URLSearchParams(document.location.search).get(p);
};

$(document).ready(function() {
    $(this).scrollTop(0);

    /*
    // viewport background gradient rotation
    let $viewport = $("#viewport");
    let deg = parseInt($viewport.css("--vpdeg")) + 1;
    setInterval(() => {
        if (deg == 360) deg = 0;
        $viewport.css("background-image", `linear-gradient(${deg}deg, var(--bg1), var(--bg2))`);
        ++deg;
    }, 50);
    */
});