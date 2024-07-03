$(document).ready(function() {
    let $lhs = $("#lhs");
    let $rhs = $("#rhs");

    let $gameHistory = $("#gamehistory");
    let $choices = $("#choices");

    let $buttonZero = $("#0");
    let $buttonOne = $("#1");

    let mh = $lhs.css("height");

    let section = 0;

    function makeChoice(answer = [], next = [], choices = [], sectionJump = 0) {
        let $answer = $("<div>", {
            class: "flexbox",
            css: {
                "margin-left": "30px"
            }
        })
            .append($("<div>", {
                css: {
                    "padding-right": "15px"
                }
            })
                .html("<b>You</b>:")
        );
        
        let i = 0;
        let $theAnswer = $("<div>");
        while (i < answer.length) {
            $answer.append(`${answer[i]}<br>`)
            ++i;
        };
        $theAnswer.append($answer);
        $gameHistory.append($theAnswer);

        i = 0;
        while (i < next.length) {
            $gameHistory.append(`<p>${next[i]}</p>`);
            ++i;
        };

        if (choices.length != 0) {
            i = 0;
            while (i < choices.length) {
                $choices.children().eq(i).addClass("active");
                $choices.children().eq(i).text(choices[i]);
                ++i;
            };
            while (i < $choices.children().length) {
                $choices.children().eq(i).removeClass("active");
                $choices.children().eq(i).text("");
                ++i;
            };
        }
        else {
            $choices.css("display", "none");
        }

        $("button").on("click", function() {
            $rhs.scrollTop($("#gametext").height());
        });

        section = sectionJump;
        if (section == 0) {
            $gameHistory
                .empty()
                .append($("<p>"));
        };
    }
    
    $lhs.css("max-height", mh);
    $rhs.css("max-height", mh);

    // game
    $buttonZero.on("click", function() {
        if (section == 0) {
            makeChoice(
                ["Yo."],
                ["Oh?", "Yo yo! Welcome, welcome!"],
                ["Thank you!", "I heard there were cool things going on?"],
                1
            );
        }
        else if (section == 1) {
            makeChoice(
                ["Thank you! Glad to be here."],
                ["And I'm glad you're here. How are you today?"],
                ["Great!", "Not so good..."],
                2
            );
        }
        else if (section == 2) {
            makeChoice(
                ["Doing pretty good, you?"],
                ["I'm just vibing. It's rare to see anyone else around here, so I'm happy to finally have some company.", "Actually, what brings you here?"],
                ["I'm looking for something...", "...Wait. Are you THE Kyu?"],
                3
            );
        }
        else if (section == 3) {
            makeChoice(
                ["I was told you had some interesting stuff?"],
                ["Oh, really?", "I, in fact, DO have cool stuff. You wanna see them?"],
                ["Sure!"],
                4
            );
        }
        else if (section == 4) {
            makeChoice(
                ["Sure!", "What kinds of things do you have?", "Actually, who ARE you?"],
                ["Oh right, I forgot to introduce myself.", `The name's <a href="profile.html" target="_blank" rel="noopener noreferrer">kyu(ren)</a>. You can call me Kyu, for short. The lowercase is important!`, "I guess you could say I'm an artist, a programmer, and overall a really cool guy."],
                ["Nice to meet you!"],
                5
            );
        }
        else if (section == 5) {
            makeChoice(
                ["Nice to meet you, Kyu!", "You do seem pretty cool."],
                ["Really? Thank you!", `Anyway, if you check out <a href="projects.html" target="_blank" rel="noopener noreferrer">this link</a>, you can see all my published works.`, "There's a lot of fun stuff in there—maybe you'll find something interesting?"],
                ["Thank you!"],
                6
            );
        }
        else if (section == 6) {
            makeChoice(
                ["Thank you!"],
                ["Have fun!"],
                ["[Restart.]"],
                7
            );
        }
        else if (section == 7) {
            makeChoice(
                [""],
                [""],
                ["Yo.", "Heyas!"],
                0
            );
        }
        else if (section == 8) {
            makeChoice(
                ["You made that? That's amazing!"],
                ["Thank you so much! I have that and a lot more, actually!", "You wanna see?"],
                ["Show me!"],
                9
            );
        }
        else if (section == 9) {
            makeChoice(
                ["Really? Where can I find it?"],
                [`If you follow <a href="projects.html" target="_blank" rel="noopener noreferrer">this link</a>, you'll see my stuff.`],
                ["Thank you!"],
                6
            );
        }
        else if (section == 10) {
            makeChoice(
                ["Thank you so much!"],
                ["No problem! Have fun!"],
                ["[Restart.]"],
                7
            );
        }
        else if (section == 11) {
            makeChoice(
                ["Thank you."],
                ["No problem."],
                ["[Restart.]"],
                7
            );
        }
        else if (section == 12) {
            makeChoice(
                ["You made all this? That's amazing..."],
                ["Thank you!", "Yeah, I did all this for fun. You should thank my funny brain for that."],
                ["You're so cool..."],
                13
            );
        }
        else if (section == 13) {
            makeChoice(
                ["That's so cool... Where can I find more?"],
                ["Oh!", `If you wanna check out other cool stuff, check <a href="projects.html" target="_blank" rel="noopener noreferrer">this link</a> out!`],
                ["Okay!"],
                10
            );
        }
        else if (section == 15) {
            makeChoice(
                ["Hold on. You did that?", "That's so cool! Do you have anything else?"],
                ["Heh, I got quite a bit. I'm always cooking too, so I'll get more in time.", `Anyway, if you follow <a href="projects.html" target="_blank" rel="noopener noreferrer">this link</a>, you can see other cool stuff that I've made.`, "I mean, even this website was all made by me. Cool, right?"],
                ["It really is."],
                16
            );
        }
        else if (section == 16) {
            makeChoice(
                ["It really is.", "Thank you so much! I'll go right ahead, if you don't mind."],
                ["No problem! Have fun!"],
                ["[Restart.]"],
                7
            );
        }
    });

    $buttonOne.on("click", function() {
        if (section == 0) {
            makeChoice(
                ["Heyas!"],
                ["Oh?", "Hello there! Welcome to my funny website!"],
                ["Thank you!", "I heard there were cool things going on?"],
                1
            );
        }
        else if (section == 1) {
            makeChoice(
                ["Thanks. I heard you were doing cool things in here?"],
                ["I really am!", "I mean, what do you think of the cursor?", "Try clicking and dragging the cursor across the screen if you haven't yet."],
                ["That's amazing!", "It looks familiar..."],
                8
            );
        }
        else if (section == 2) {
            makeChoice(
                ["I've been feeling down."],
                ["Oh no!", "I do hope you feel better soon.", "With that, why don't you look around? Maybe something of mine will cheer you up."],
                ["Thank you."],
                11
            );
        }
        else if (section == 3) {
            makeChoice(
                ["...Hold on. Are you THE Kyu?"],
                ["Oh! Yeah, that's me.", `The name's <a href="profile.html" target="_blank" rel="noopener noreferrer">kyu(ren)</a>, Kyu for short. The lowercase is important!`, "Anyway, what's up?"],
                ["Amazing..."],
                12
            );
        }
        else if (section == 4) {
            makeChoice(
                ["You made all this? That's amazing..."],
                ["Thank you!", "Yeah, I did all this for fun. You should thank my funny brain for that."],
                ["You're so cool..."],
                5
            );
        }
        else if (section == 8) {
            makeChoice(
                ["It's nice.", "It almost looks...familiar."],
                ["Oh, really?", "Yeah, I made it so it sorta resembles something important to me.", "I got more where that came from too, if you want to see."],
                ["Wait, you did that?"],
                15
            );
        }
    });
})