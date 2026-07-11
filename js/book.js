async function openBook() {

    const cover = document.querySelector(".cover");

    cover.style.opacity = "0";

    cover.style.transform = "scale(.96)";

    await wait(800);

    cover.classList.add("hidden");

    document.getElementById("moon").style.opacity = "0";

    document.getElementById("stars").style.opacity = "0";

    const page = document.getElementById("page1");

    page.classList.remove("hidden");

    page.classList.add("fadePage");

    revealLetter();

}

const scenes = [

    `Mi Reina...`,

    `Antes de comenzar este libro...

quiero pedirte algo.`,

    `No tengas prisa.

Quiero que disfrutes cada página.`,

    `Porque cada palabra...

cada pausa...

y cada pequeño detalle...

fueron escritos pensando únicamente en ti.`,

    `Hoy no quiero regalarte un regalo.

Quiero regalarte un recuerdo.`,

    `Un lugar...

al que puedas volver

cuando quieras recordar

lo mucho que te amo.`,

    `Porque hace exactamente dos meses...

comenzó el capítulo favorito de mi vida.`,

    `Y espero...

que este sea solo el segundo

de muchísimos capítulos más... ❤️`,

    `Bienvenida...

a Nuestro Libro.`

];

const sceneTimes = [

    3000,

    4000,

    4500,

    6000,

    4500,

    5000,

    5000,

    6000,

    5000

];

function wait(ms) {

    return new Promise(resolve => {

        setTimeout(resolve, ms);

    });

}

async function revealLetter() {

    const text = document.getElementById("sceneText");

    for (let i = 0; i < scenes.length; i++) {

        text.classList.remove("showScene");

        await wait(sceneTimes[i]);
        text.innerHTML = scenes[i].replace(/\n/g, "<br>");

        text.classList.add("showScene");

        await wait(4200);

        if (i < scenes.length - 1) {

            text.classList.remove("showScene");

        }

    }

    createPetals();

    document
        .getElementById("nextPageButton")
        .classList
        .remove("hidden");

}

function nextPage(currentPage, nextPage){

    document.getElementById(currentPage).classList.add("hidden");

    document.getElementById(nextPage).classList.remove("hidden");

}