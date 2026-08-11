/* =========================================================
   BIRTHDAY WEBSITE JAVASCRIPT
========================================================= */


/* =========================================================
   MUSIC
========================================================= */

const music = document.getElementById("music");

const musicBtn =
    document.getElementById("musicBtn");

const musicIcon =
    document.getElementById("musicIcon");


if (musicBtn && music) {

    musicBtn.addEventListener(
        "click",
        async function () {

            if (music.paused) {

                try {

                    music.load();

                    await music.play();

                    musicIcon.textContent = "❚❚";

                    musicBtn.classList.add(
                        "playing"
                    );

                } catch (error) {

                    console.error(
                        "Music playback failed:",
                        error
                    );

                    alert(
                        "Music could not be played. " +
                        "Please check birthday.mp3."
                    );
                }

            } else {

                music.pause();

                musicIcon.textContent = "♫";

                musicBtn.classList.remove(
                    "playing"
                );

            }

        }
    );


    music.addEventListener(
        "playing",
        function () {

            musicIcon.textContent = "❚❚";

            musicBtn.classList.add(
                "playing"
            );

        }
    );


    music.addEventListener(
        "pause",
        function () {

            musicIcon.textContent = "♫";

            musicBtn.classList.remove(
                "playing"
            );

        }
    );

}


/* =========================================================
   ENVELOPE
========================================================= */

const envelope =
    document.querySelector(".envelope");


if (envelope) {

    envelope.addEventListener(
        "click",
        function () {

            /*
             * Create hearts when the
             * envelope is clicked.
             */

            createHeartBurst(
                window.innerWidth / 2,
                window.innerHeight / 2
            );


            envelope.style.transform =
                "translateY(-7px) scale(1.03)";


            setTimeout(
                function () {

                    const nextPage =
                        envelope.dataset.next;

                    if (nextPage) {

                        window.location.href =
                            nextPage;

                    }

                },
                500
            );

        }
    );

}


/* =========================================================
   CLICK HEART EFFECT
========================================================= */

document.addEventListener(
    "click",
    function (event) {

        /*
         * Don't create a second burst when
         * clicking the envelope because the
         * envelope already creates one.
         */

        if (
            event.target.closest(".envelope")
        ) {
            return;
        }


        /*
         * Don't create hearts when clicking
         * the music button.
         */

        if (
            event.target.closest(".music-btn")
        ) {
            return;
        }


        /*
         * Don't create hearts when clicking
         * navigation buttons.
         */

        if (
            event.target.closest(".nav")
        ) {
            return;
        }


        createHeartBurst(
            event.clientX,
            event.clientY
        );

    }
);


/* =========================================================
   CREATE HEART BURST
========================================================= */

function createHeartBurst(x, y) {

    /*
     * Number of hearts generated
     * for each click.
     */

    const numberOfHearts = 12;


    for (
        let i = 0;
        i < numberOfHearts;
        i++
    ) {

        const heart =
            document.createElement("span");


        heart.className =
            "click-heart";


        /*
         * Heart symbol
         */

        heart.innerHTML = "♥";


        /*
         * Position
         */

        heart.style.left =
            x + "px";

        heart.style.top =
            y + "px";


        /*
         * Random size
         */

        const size =
            15 +
            Math.random() * 25;

        heart.style.fontSize =
            size + "px";


        /*
         * Random direction
         */

        const angle =
            Math.random() *
            Math.PI *
            2;


        /*
         * First movement
         */

        const distance1 =
            30 +
            Math.random() * 70;


        /*
         * Second movement
         */

        const distance2 =
            80 +
            Math.random() * 130;


        /*
         * Final movement
         */

        const distance3 =
            130 +
            Math.random() * 200;


        const x1 =
            Math.cos(angle) *
            distance1;

        const y1 =
            Math.sin(angle) *
            distance1;


        const x2 =
            Math.cos(angle) *
            distance2;

        const y2 =
            Math.sin(angle) *
            distance2 -
            30;


        const x3 =
            Math.cos(angle) *
            distance3;

        const y3 =
            Math.sin(angle) *
            distance3 -
            80;


        /*
         * Pass movement values
         * to CSS.
         */

        heart.style.setProperty(
            "--x1",
            x1 + "px"
        );

        heart.style.setProperty(
            "--y1",
            y1 + "px"
        );

        heart.style.setProperty(
            "--x2",
            x2 + "px"
        );

        heart.style.setProperty(
            "--y2",
            y2 + "px"
        );

        heart.style.setProperty(
            "--x3",
            x3 + "px"
        );

        heart.style.setProperty(
            "--y3",
            y3 + "px"
        );


        /*
         * Random pink shade
         */

        const colors = [
            "pink1",
            "pink2",
            "pink3",
            "pink4",
            "pink5"
        ];

        const randomColor =
            colors[
                Math.floor(
                    Math.random() *
                    colors.length
                )
            ];


        heart.classList.add(
            randomColor
        );


        /*
         * Different animation duration
         */

        const duration =
            1.8 +
            Math.random() * 1.5;

        heart.style.animationDuration =
            duration + "s";


        /*
         * Add heart to page
         */

        document.body.appendChild(
            heart
        );


        /*
         * Remove after animation
         */

        setTimeout(
            function () {

                heart.remove();

            },
            (duration * 1000) + 100
        );

    }

}


/* =========================================================
   KEYBOARD NAVIGATION
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "ArrowRight") {

            const nextButton =
                document.querySelector(
                    ".nav a:last-child"
                );

            if (nextButton) {

                nextButton.click();

            }

        }


        if (event.key === "ArrowLeft") {

            const backButton =
                document.querySelector(
                    ".nav a:first-child"
                );

            if (
                backButton &&
                backButton.getAttribute(
                    "href"
                ) !== "#"
            ) {

                backButton.click();

            }

        }

    }
);


/* =========================================================
   PAGE LOAD ANIMATION
========================================================= */

window.addEventListener(
    "load",
    function () {

        const content =
            document.querySelector(
                ".content"
            );


        if (content) {

            content.style.animation =
                "none";


            void content.offsetWidth;


            content.style.animation =
                "pageIn 0.65s ease both";

        }

    }
);

/* =========================================================
   MAKE A WISH / BLOW CANDLE
========================================================= */

const blowButton =
    document.getElementById("blowButton");

const flame =
    document.getElementById("flame");

const candleContainer =
    document.querySelector(".candle-container");

const wishSuccess =
    document.getElementById("wishSuccess");

const nextPage =
    document.getElementById("nextPage");


if (
    blowButton &&
    flame &&
    wishSuccess
) {

    blowButton.addEventListener(
        "click",
        function () {

            /*
             * Prevent multiple clicks
             */

            if (
                flame.classList.contains("blown")
            ) {
                return;
            }


            /*
             * Blow out flame
             */

            flame.classList.add(
                "blown"
            );


            /*
             * Add blown state
             */

            if (candleContainer) {

                candleContainer.classList.add(
                    "blown"
                );

            }


            /*
             * Change button text
             */

            blowButton.innerHTML =
                "✨ Wish Made!";


            /*
             * Disable button
             */

            blowButton.disabled =
                true;

            blowButton.style.opacity =
                "0.7";

            blowButton.style.cursor =
                "default";


            /*
             * Show success message
             */

            setTimeout(
                function () {

                    wishSuccess.classList.add(
                        "show"
                    );

                },
                500
            );


            /*
             * Enable Next button
             */

            setTimeout(
                function () {

                    if (nextPage) {

                        nextPage.classList.remove(
                            "disabled-next"
                        );

                    }

                },
                900
            );


            /*
             * Create heart burst
             */

            if (
                typeof createHeartBurst ===
                "function"
            ) {

                createHeartBurst(
                    window.innerWidth / 2,
                    window.innerHeight / 2
                );

            }

        }
    );

}