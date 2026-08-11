/* =========================================================
   PAGE 2 MESSAGE
========================================================= */

const message = [
    {
        text: "There are millions of people in this world,",
        highlights: [
            "millions",
            "world"
        ]
    },

    {
        text: "but somehow life brought me to you.",
        highlights: [
            "you"
        ]
    },

    {
        text: "I never knew that one person could become",
        highlights: [
            "one person"
        ]
    },

    {
        text: "such an important part of my entire world.",
        highlights: [
            "my entire world"
        ]
    },

    {
        text: "Before you came into my life, I didn't know",
        highlights: [
            "my life"
        ]
    },

    {
        text: "how beautiful it could be to have someone",
        highlights: [
            "beautiful"
        ]
    },

    {
        text: "who truly feels like home.",
        highlights: [
            "home"
        ]
    },

    {
        text: "You slowly became my favorite person,",
        highlights: [
            "favorite person"
        ]
    },

    {
        text: "my favorite conversation, my favorite smile,",
        highlights: [
            "favorite conversation",
            "favorite smile"
        ]
    },

    {
        text: "and my favorite part of every day.",
        highlights: [
            "every day"
        ]
    },

    {
        text: "And today, when I look at you, I realize",
        highlights: [
            "you"
        ]
    },

    {
        text: "how lucky I am that our paths crossed. 💖✨",
        highlights: [
            "lucky"
        ]
    }
];


/* =========================================================
   SETTINGS
========================================================= */

const wordDelay = 120;

const lineDelay = 350;

const messageElement =
    document.getElementById("messageText");

const cursor =
    document.getElementById("cursor");


/* =========================================================
   START ANIMATION
========================================================= */

function startMessageAnimation() {

    messageElement.innerHTML = "";

    cursor.style.display = "inline-block";

    let totalDelay = 0;


    message.forEach((line, lineIndex) => {

        const lineElement =
            document.createElement("div");

        lineElement.className =
            "message-line";


        const words =
            line.text.split(" ");


        words.forEach((word, wordIndex) => {

            const cleanWord =
                word.replace(/[.,!?;:💖✨]/g, "");


            const span =
                document.createElement("span");

            span.className =
                "word";


            /*
             * Check whether this word
             * should be highlighted.
             */

            let isHighlight = false;


            line.highlights.forEach(
                highlight => {

                    const highlightWords =
                        highlight.split(" ");

                    if (
                        highlightWords.includes(
                            cleanWord
                        )
                    ) {
                        isHighlight = true;
                    }

                }
            );


            if (isHighlight) {

                span.classList.add(
                    "highlight"
                );

            }


            /*
             * Keep punctuation and emojis.
             */

            span.textContent = word;


            /*
             * Animation delay
             */

            span.style.animationDelay =
                `${totalDelay}ms`;


            lineElement.appendChild(span);


            /*
             * Next word
             */

            totalDelay += wordDelay;

        });


        messageElement.appendChild(
            lineElement
        );


        /*
         * Pause between lines
         */

        totalDelay += lineDelay;

    });


    /*
     * Hide cursor after complete animation
     */

    setTimeout(() => {

        cursor.style.display = "inline-block";

    }, totalDelay + 500);

}


/* =========================================================
   START WHEN PAGE LOADS
========================================================= */

window.addEventListener(
    "load",
    () => {

        startMessageAnimation();

    }
);


/* =========================================================
   RESTART WHEN PAGE IS SHOWN AGAIN
========================================================= */

document.addEventListener(
    "visibilitychange",
    () => {

        if (
            document.visibilityState === "visible"
        ) {

            startMessageAnimation();

        }

    }
);


/* =========================================================
   NAVIGATION
========================================================= */

function nextPage() {

    /*
     * Replace this with your
     * existing page navigation.
     */

    window.location.href =
        "page3.html";
}


function previousPage() {

    /*
     * Replace this with your
     * existing page navigation.
     */

    window.location.href =
        "index.html";
}