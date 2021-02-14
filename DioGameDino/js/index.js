const dino = document.querySelector(".dino");
const background = document.querySelector(".background");

let pulando = false;
let GameOver = false;
let position = 0;

function teclaPulo(event) {
    if (event.keyCode === 38) {
        if (!pulando) {
            pulo();
        }
    }
}

function pulo() {
    isJumping = true;

    let intervaloSubida = setInterval(() => {
        if (position >= 150) {
            // Descendo
            clearInterval(intervaloSubida);

            let intervaloDescida = setInterval(() => {
                if (position <= 0) {
                    clearInterval(intervaloDescida);
                    pulando = false;
                } else {
                    position -= 20;
                    dino.style.bottom = position + "px";
                }
            }, 20);
        } else {
            // Subindo
            position += 20;
            dino.style.bottom = position + "px";
        }
    }, 20);
}

function criaCactus() {
    const cactus = document.createElement("div");
    let cactusPosition = 1000;
    let randomTime = Math.random() * 6000;

    if (GameOver) return;

    cactus.classList.add("cactus");
    background.appendChild(cactus);
    cactus.style.left = cactusPosition + "px";

    let tempoEsq = setInterval(() => {
        if (cactusPosition < -60) {
            clearInterval(tempoEsq);
            background.removeChild(cactus);
        } else if (cactusPosition > 0 && cactusPosition < 60 && position < 60) {
            clearInterval(tempoEsq);
            GameOver = true;
            document.body.innerHTML = '<h1 class="game-over">Fim de jogo</h1>';
        } else {
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + "px";
        }
    }, 20);

    setTimeout(criaCactus, randomTime);
};

criaCactus();
document.addEventListener("keyup", teclaPulo);
