const introMessages = [

    "Hay personas que llegan...",

    "y cambian nuestros días.",

    "Sin hacer ruido...",

    "Sin pedir nada...",

    "Simplemente estando.",

    "Hace exactamente dos meses...",

    "comenzó nuestro capítulo favorito ❤️"

];

/*==============================
ESTRELLAS
==============================*/

const stars = document.getElementById("stars");

for (let i = 0; i < 120; i++) {

    const star = document.createElement("div");

    star.className = "star";

    star.style.left = Math.random() * 100 + "%";

    star.style.top = Math.random() * 100 + "%";

    const size = Math.random() * 4 + 1;
    star.style.opacity = Math.random();
    star.style.width = size + "px";

    star.style.height = size + "px";

    star.style.animationDelay = (Math.random() * 5) + "s";

    star.style.animationDuration = (3 + Math.random() * 5) + "s";

    stars.appendChild(star);

}

async function playIntro() {

    const intro = document.getElementById("intro");

    const text = document.getElementById("introText");

    for (const msg of introMessages) {

        text.style.opacity = 0;

        await wait(700);

        text.innerHTML = msg;

        text.style.opacity = 1;

        await wait(2500);

    }

    intro.style.opacity = 0;

    setTimeout(() => {

        intro.remove();

        const cover = document.getElementById("cover");

        cover.classList.remove("hidden");

        setTimeout(() => {

            cover.classList.add("show");

        }, 100);

    }, 2000);

}

function wait(ms) {

    return new Promise(resolve => {

        setTimeout(resolve, ms);

    });

}

window.onload = () => {

    playIntro();

}

function openBook() {

    document.querySelector(".cover").classList.add("hidden");

    document.getElementById("page1").classList.remove("hidden");

}

async function revealLetter() {

    const items = document.querySelectorAll("#page1 .fade-item");

    for (const item of items) {

        const text = item.innerText;

        if (text.includes("Mi Amor")) {

            fadeVolume(0.12, 2500);

        }

        item.classList.add("show");

        if (text.includes("Gracias por elegirme")) {

            fadeVolume(0.25, 3500);

        }

        if (text.includes("Chris")) {

            createPetals();

        }

        await wait(1800);

    }

}

function openBook() {

    document.querySelector(".cover").classList.add("hidden");

    document.getElementById("page1").classList.remove("hidden");

    revealLetter();

}