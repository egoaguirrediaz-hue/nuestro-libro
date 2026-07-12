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

    const button = document.getElementById("beginButton");

    button.addEventListener("click", startExperience);

}

function startExperience() {

    const music = document.getElementById("music");

    music.volume = 0.25;

    music.play();

    const welcome = document.getElementById("welcome");

    welcome.style.opacity = "0";

    setTimeout(() => {

        welcome.remove();

        playIntro();

    }, 1500);

}

function openBook() {

    document.querySelector(".cover").classList.add("hidden");

    document.getElementById("page1").classList.remove("hidden");

}


async function revealLetter() {

    const items = document.querySelectorAll("#page1 .fade-item");

    for (const item of items) {

        const text = item.innerText;
        item.innerText = "";

        if (text.includes("Mi Amor")) {

            fadeVolume(0.12, 2500);

        }

        item.classList.add("show");

        await typeWriter(item, text, 50);

        if (text.includes("Gracias por elegirme")) {

            fadeVolume(0.25, 3500);

        }

        if (text.includes("Chris")) {

            createPetals();

        }

        await wait(800);

    }

}

async function typeWriter(element, text, speed = 50) {

    for (let i = 0; i < text.length; i++) {

        element.innerHTML += text.charAt(i);

        await wait(speed);

    }

}

function openBook() {

    document.querySelector(".cover").classList.add("hidden");

    document.getElementById("page1").classList.remove("hidden");

    revealLetter();

}

const paragraphs = document.querySelectorAll("#story-page2 .typing");

async function typeParagraph(element, speed = 45) {

    const text = element.textContent.trim();

    element.textContent = "";
    element.classList.add("show");

    const cursor = document.createElement("span");
    cursor.className = "cursor";
    cursor.textContent = "|";
    element.appendChild(cursor);

    for (let i = 0; i < text.length; i++) {

        cursor.insertAdjacentText("beforebegin", text[i]);

        await new Promise(resolve => setTimeout(resolve, speed));
    }

    cursor.remove();

    // pequeña pausa antes del siguiente párrafo
    await new Promise(resolve => setTimeout(resolve, 600));
}

async function startStory() {

    for (const paragraph of paragraphs) {
        await typeParagraph(paragraph);
    }
    await wait(500); // pequeña pausa

    document.querySelector("#page2 .next-btn").classList.add("show");
     document.querySelector("#page3 .next-btn").classList.add("show");

}

/*=====================================
PÁGINA III
======================================*/
async function revealPage3() {

    const paragraphs = document.querySelectorAll("#page3 .page3-text");

    for (const p of paragraphs) {

        const text = p.textContent.trim();

        p.textContent = "";

        p.style.visibility = "visible";

        p.classList.add("typing-cursor");


        for (let i = 0; i < text.length; i++) {

            p.textContent += text[i];

            await wait(45);

        }


        p.classList.remove("typing-cursor");

        await wait(700);

    }


    // Cuando termina TODO el texto aparece el botón
    document.querySelector("#page3 .page3-button")
        .classList.add("show");

}