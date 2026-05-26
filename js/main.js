let fargeRekkefølge =
[[], 'green', 'red', 'yellow', 'blue'] // rekkefølge på hvordan fargene står i

let spillerInputt =
[] //lagrer hva som brukeren trykker og sammenligner med maskinSekvens

const fargeToner = 
{ green: 400, red: 470, yellow: 530, blue: 600 }

let maskinSekvens =
[] //lagrer hva en farge velger som sinn random farge

let rundeFarge

let rundeClick

let spillerKanKlikke = false

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
    rundeFarge = fargeRekkefølge[Math.floor(Math.random() * 4 + 1)]; //tar et tilfeldig tall fra 1-4
    const farge = document.querySelector('#' + rundeFarge); //gjør om det tilfeldige talle om til rundens farge
    maskinSekvens.push(rundeFarge);
    score++
    document.querySelector('#score').textContent = 'Score: ' + score
    if (score > highscore) {
        highscore = score
        document.querySelector('#HighScore').textContent = 'Highscore: ' + highscore
        localStorage.setItem('highscore', highscore)
    }
    visSekvens()
}

function visSekvens() {
    setTimeout(() => {

        spillerKanKlikke = false
        for (let i = 0; i < maskinSekvens.length; i++) {

            const farge = document.querySelector('#' + maskinSekvens[i]);
            
            setTimeout(() => {
                playTone(fargeToner[maskinSekvens[i]])
                if(i === maskinSekvens.length -1) {
                    spillerKanKlikke = true
                }
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
    click(greenClick, "green", 400)

const redClick =
document.querySelector('#red');
    click(redClick, "red", 470)

const yellowClick =
document.querySelector('#yellow');
    click(yellowClick, "yellow", 530)

const blueClick =
document.querySelector('#blue');
    click(blueClick, "blue", 600)

const audioCtx = new AudioContext();

function playTone(freq) {
    const osc = audioCtx.createOscillator();
    osc.frequency.value = freq;
    osc.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.1);
}

function fargeSkift(farge) {
    farge.style.backgroundColor = 'white';
        setTimeout(() => {
            farge.style.backgroundColor = "";
        }, 200);  
}

function click(fargeClick, farge, tone) {
    fargeClick.addEventListener('click', function() {
        if (!spillerKanKlikke) return
        spillerInputt.push(farge)
            playTone(tone)
            fargeSkift(fargeClick)
        const i = spillerInputt.length - 1;
        nesteGameOver(i)   
} )}