// 404 error page generation
// I wanna have a 404 page I can easily update through one file
// especially since it's static across all projects

function main404() {
    $("main")
        .append($("<div>", {
            class: "widescreen center darkmode",
            css: {
                "height": "100vh"
            }
        })
            .append($("<div>", {
                class: "row"
            })
                .append($("<div>", {
                    class: "column-15"
                }))
                .append($("<div>", {
                    class: "column-50"
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
                    class: "column-20"
                })
                    .append($("<img>", {
                        src: "https://cdn.bladewyrm.dev/images/404.gif",
                        alt: "get 404'd idiot (if the image doesn't load then maybe I'm the idiot here)"
                    }))
                )
            )
        );
};