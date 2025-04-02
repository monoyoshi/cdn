// 404 error page generation
// I wanna have a 404 page I can easily update through one file
// especially since it's static across all projects

function main404() {
    $("main")
        .append($("<div>", {
            class: "widescreen darkmode",
            css: {
                "height": "calc(100vh - 140px)",
                "padding-top": "90px"
            }
        })
            .append($("<div>", {
                class: "row center"
            })
                .append($("<div>", {
                    class: "column-40"
                })
                    .append($("<div>", {
                        class: "h1"
                    })
                        .text("Error 404: page not found")
                    )
                    .append($("<div>", {
                        class: "quote"
                    })
                        .html("and where do <b>you</b> think you're going?<br>")
                    )
                    .append($("<p>")
                        .html("Okay so, the page you're trying to go to doesn't exist. Honestly, I probably just messed up a link again. Don't worry though, it'll fix itself in time. Probably. You know, like, when I feel like it. My brain works in mysterious ways.<br>")
                    )
                )
                .append($("<div>", {
                    class: "column-30"
                })
                    .append($("<img>", {
                        src: "https://cdn.bladewyrm.dev/images/404.gif",
                        alt: "get 404'd idiot (if the image doesn't load then maybe I'm the idiot here)",
                        css: {
                            "width": "100%"
                        }
                    }))
                )
            )
        )
        .append("<div>", {
            css: {
                "margin-bottom": "90px"
            }
        });
};