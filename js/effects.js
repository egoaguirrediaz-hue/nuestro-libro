function fadeVolume(target, duration) {

    const music = document.getElementById("music");

    const start = music.volume;

    const step = (target - start) / 40;

    let count = 0;

    const interval = setInterval(() => {

        music.volume += step;

        count++;

        if (count >= 40) {

            music.volume = target;

            clearInterval(interval);

        }

    }, duration / 40);

}

function createPetals() {

    for (let i = 0; i < 4; i++) {

        setTimeout(() => {

            
            const paper = document.querySelector(".paper");

            const rect = paper.getBoundingClientRect();

           

        }, i * 600);

    }

}