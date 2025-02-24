const typewriterText = document.querySelector(".typewriter-text");
const words = ["Desarrollador web", "Especialista en ciberseguridad"];
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

function hamburg() {
    const dropdown = document.querySelector(".dropdown");
    dropdown.classList.toggle("active");
}

document.addEventListener("click", (event) => {
    const dropdown = document.querySelector(".dropdown");
    const hamburgIcon = document.querySelector(".hamburg");

    if (dropdown.contains(event.target) || !hamburgIcon.contains(event.target)) {
        dropdown.classList.remove("active");
    }
});
