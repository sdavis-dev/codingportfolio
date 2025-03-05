document.addEventListener("DOMContentLoaded", function () {
    function typeEffect(element, text, speed, callback) {
        let i = 0;
        element.innerHTML = text.replace(/<span>.*<\/span>/, ""); // Remove span while typing
        element.style.opacity = "1"; // Fade in before typing

        function type() {
            if (i < text.length) {
                element.innerHTML = text.substring(0, i + 1);
                i++;
                setTimeout(type, speed);
            } else {
                element.classList.remove("typing"); // Remove cursor effect
                if (callback) setTimeout(callback, 500);
            }
        }

        element.classList.add("typing"); // Add cursor effect
        type();
    }

    function showSpan(element) {
        const span = element.querySelector("span");
        if (span) {
            setTimeout(() => {
                span.style.opacity = "1"; // Fade in the gradient span
            }, 300);
        }
    }

    // Hide elements initially
    const h1Element = document.getElementById("typing-h1");
    const h3Element = document.getElementById("typing-h3");

    h1Element.style.opacity = "0";
    h3Element.style.opacity = "0";

    // Start animation sequence
    setTimeout(() => {
        typeEffect(h1Element, "Hey Everyone, It's <span>SeDerrick</span>", 100, function () {
            showSpan(h1Element); // Show the span after typing

            setTimeout(() => {
                typeEffect(h3Element, "An Inspired <span>Software Engineer</span>", 100, function () {
                    showSpan(h3Element); // Show the span after typing
                });
            }, 500); // Delay before h3 starts
        });
    }, 500); // Initial delay before h1 starts
});