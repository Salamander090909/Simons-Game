let fargeRekkefølge =
[[], 'green', 'red', 'yellow', 'blue'] // rekkefølge på hvordan fargene står i

let spillerInputt =
[] //lagrer hva som brukeren trykker og sammenligner med maskinSekvens

let maskinSekvens =
[] //lagrer hva en farge velger som sinn random farge

let rundeFarge

let rundeClick

let score

let highscore = Number(localStorage.getItem('highscore')) || 0
document.querySelector('#HighScore').textContent = 'Highscore: ' + highscore

const GameBegin =
document.querySelector('#GameBegin')
    GameBegin.addEventListener('click', function() {
        spillerInputt = []
        maskinSekvens = []
        score = -1
        document.querySelector('#score').textContent = 'Score: 0' //får score til å gå ned til 0 før spille starter
        document.querySelector('#gameOver').classList.add('hidden'); //legger på hidden class til game over så man ikke kan se den
        nyRunde()
    })

function nyRunde() {
    if (score > highscore) {
        highscore = score
        document.querySelector('#HighScore').textContent = 'Highscore: ' + highscore
        localStorage.setItem('highscore', highscore)
    }
    rundeFarge = fargeRekkefølge[Math.floor(Math.random() * 4 + 1)]; //tar et tilfeldig tall fra 1-4
    const farge = document.querySelector('#' + rundeFarge); //gjør om det tilfeldige talle om til rundens farge
    maskinSekvens.push(rundeFarge);
    score++
    document.querySelector('#score').textContent = 'Score: ' + score
    visSekvens()
}

function visSekvens() {
    setTimeout(() => {

        for (let i = 0; i < maskinSekvens.length; i++) {
            const farge = document.querySelector('#' + maskinSekvens[i]);
            
            setTimeout(() => {
                farge.style.backgroundColor = 'white';
                
                setTimeout(() => {
                    farge.style.backgroundColor = "";
                }, 500);
            }, i * 700);
        }
    }, 1000);
}


//når brukeren trykker på en av knappene blir dette pushet inn i spillerInputt arrayen
function nesteGameOver(i) {
    if (spillerInputt[i] == maskinSekvens[i]) {
            if (spillerInputt.length == maskinSekvens.length) {
                spillerInputt = []
                nyRunde()
            }
        } else {
            document.querySelector('#gameOver').classList.remove('hidden');
        }
}



const greenClick =
document.querySelector('#green');
    greenClick.addEventListener('click', function() {
        spillerInputt.push('green')
            greenClick.style.backgroundColor = 'white';
            setTimeout(() => {
                greenClick.style.backgroundColor = "";
            }, 200);    
        const i = spillerInputt.length - 1;
        nesteGameOver()
})


const redClick =
document.querySelector('#red');
    redClick.addEventListener('click', function() {
        spillerInputt.push('red')
            redClick.style.backgroundColor = 'white';
            setTimeout(() => {
                redClick.style.backgroundColor = "";
            }, 200);  
        const i = spillerInputt.length - 1;
        nesteGameOver()
})

const yellowClick =
document.querySelector('#yellow');
    yellowClick.addEventListener('click', function() {
        spillerInputt.push('yellow')
            yellowClick.style.backgroundColor = 'white';
            setTimeout(() => {
                yellowClick.style.backgroundColor = "";
            }, 200);  
        const i = spillerInputt.length - 1;
        nesteGameOver()
})

const blueClick =
document.querySelector('#blue');
    blueClick.addEventListener('click', function() {
        spillerInputt.push('blue')
            blueClick.style.backgroundColor = 'white';
            setTimeout(() => {
                blueClick.style.backgroundColor = "";
            }, 200);  
        const i = spillerInputt.length - 1;
        nesteGameOver()
})
