// header and footer generation
// I wanna have a header and a footer I can easily update through one file
// especially since it's static across all pages

function preheader(active) {
    // active = active "section" of the website
    // my funny workaround is just an array
    let current = {
        index: ["", "https://bladewyrm.dev"],
        profile: ["", "https://bladewyrm.dev/profile.html"],
        projects: ["", "https://bladewyrm.dev/projects.html"],
        vquber: ["", "https://vquber.bladewyrm.dev"]
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
        case "vtuber": {
            current.vtuber[0] = "active";
            current.vtuber[1] = undefined;
            break;
        };
    };

    return current;
};

function header(active) {
    let current = preheader(active);

    $("header").append($("<nav>", {
        css: {
            "display": "flex",
            "align-items": "center",
            "justify-content": "center",
            "width": "100%",
            "pointer-events": "none"
        }
    })
        .append($("<a>", {
            class: "dluibtn",
            id: current.index[0],
            css: {
                "background-color": "lightskyblue"
            },
            href: current.index[1]
        }))
        .append($("<a>", {
            class: "dluibtn",
            id: current.profile[0],
            css: {
                "background-color": "lightpink"
            },
            href: current.profile[1]
        }))
        .append($("<a>", {
            class: "dluibtn",
            id: current.projects[0],
            css: {
                "background-color": "var(--white)"
            },
            href: current.projects[1]
        }))
        .append($("<a>", {
            class: "dluibtn",
            id: current.vquber[0],
            css: {
                "background-color": "lightpink"
            },
            href: current.vquber[1]
        }))
        // tis is here so I can just have a trans flag hehe
        .append($("<a>", {
            class: "dluibtn",
            css: {
                "background-color": "lightskyblue"
            }
        }))
    );
};

function footer() {
    $("footer")
        .append($("<div>", {
            css: {
                "position": "relative",
                "top": "13px",
                "font-family": `"RocknRoll One", sans-serif`,
                "font-size": "10px",
                "color": "var(--lgray)",
                "user-select": "none"
            }
        })
            .html("made with love and pure hyperfixation by <b>kyu(ren)</b>")
        )
        .append($("<img>", {
            src: `https://cdn.bladewyrm.dev/images/kyurem/sprite-animated_kyurem.png`,
            height: 32,
            width: 32,
            css: {
                "margin": "0 10px"
            }
        })
    );
};

// "get url parameters" but I think it's funny to keep everything as one letter
// *gurlp* t-they're right behind me, isn't it
function gURLP(p) {
    return new URLSearchParams(document.location.search).get(p);
};

$(document).ready(function() {
    $(this).scrollTop(0);

    /*
    // body background gradient rotation
    let $body = $("body");
    let deg = parseInt($body.css("--vpdeg")) + 1;
    setInterval(() => {
        if (deg == 360) deg = 0;
        $body.css("background-image", `linear-gradient(${deg}deg, var(--bg1), var(--bg2))`);
        ++deg;
    }, 50);
    */
});