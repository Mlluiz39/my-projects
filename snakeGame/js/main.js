let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}

// criando variavel da comida

let food  = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 +1) * box
}

// variavel onde vai iniciar a direção da cobrinha

let direction = "right";

// criando o background

function criarFundo (){
    context.fillStyle  = "#1C1C1C";
    context.fillRect(0, 0, 16 * box, 16 * box);
}

// função para criar a cobrinha

function criarCobra (){
    for (i = 0; i < snake.length; i++){
        context.fillStyle = "#F0F8FF";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

function criarComida(){
    context.fillStyle = "#A52A2A";
    context.fillRect(food.x, food.y, box, box);
}

// captura os eventos do teclado

document.addEventListener("keydown", update);

function update (event){
    if (event.keyCode == 37 && direction != "right") direction = "left";
    if (event.keyCode == 38 && direction != "down") direction  = "up";
    if (event.keyCode == 39 && direction != "left") direction  = "right";
    if (event.keyCode == 40 && direction != "up") direction = "down"; 
}

// função para iniciar o jogo e reiniciar a cobra ao passar da borda

function iniciarJogo(){
    if (snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
    if (snake[0].x < 0 * box && direction == "left") snake[0].x = 16 * box;
    if (snake[0].y > 15 * box && direction == "down") snake[0]. y = 0;
    if (snake[0].y < 0 * box && direction == "up") snake[0].y = 16 * box;

// cria o fim de jogo na colisão da cobrinha

    for (i = 1; i < snake.length; i++){
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
            clearInterval(jogo);
            alert("fim de Jogo! aperte F5 para reiniciar")
        }
    }

    criarFundo();
    criarCobra();
    criarComida();

// variaveis e condições para dar direção a cobrinha

    let snakex = snake[0].x; box;
    let snakey = snake[0].y; box;

    if (direction == "right") snakex += box;
    if (direction == "left") snakex  -= box;
    if (direction == "up") snakey -= box;
    if (direction == "down") snakey += box;

// criando a parte que a cobra come a fruta e cresce

    if (snakex != food.x || snakey != food.y){
        snake.pop();
    }else{
        food.x = Math.floor(Math.random() * 15 + 1) * box,
        food.y = Math.floor(Math.random() * 15 +1) * box
    }

// variavel para criar a cabeça da cobrinha

    let newHead = {
        x: snakex,
        y: snakey
    }

    snake.unshift(newHead);
}

let jogo = setInterval(iniciarJogo, 130);

