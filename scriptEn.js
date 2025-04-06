const typewriterText = document.querySelector(".typewriter-text");
const words = ["Web Developer", "Cybersecurity Specialist"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentWord = words[wordIndex];

    if (!isDeleting) {
        typewriterText.textContent = currentWord.slice(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(type, 1500);
        } else {
            setTimeout(type, 150);
        }
    } else {
        typewriterText.textContent = currentWord.slice(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type, 500);
        } else {
            setTimeout(type, 100);
        }
    }
}

type();
