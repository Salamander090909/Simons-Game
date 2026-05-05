let fargeRekkefølge =
[[], 'green', 'red', 'yellow', 'blue'] // rekkefølge på hvordan fargene står i

let spillerInputt =
[] //lagrer hva som brukeren trykker og sammenligner med maskinSekvens

let maskinSekvens =
[] //lagrer hva en farge velger som sinn random farge

let rundeFarge

let rundeClick

let score = 0

const GameBegin =
document.querySelector('#GameBegin')
    GameBegin.addEventListener('click', function() {
        spillerInputt = []
        maskinSekvens = []
        score = 0
        document.querySelector('#score').textContent = 'Score: 0'
        document.querySelector('#gameOver').classList.add('hidden');
        nyRunde()
    })

function nyRunde() {
    score++
    document.querySelector('#score').textContent = 'Score: ' + score
    rundeFarge = fargeRekkefølge[Math.floor(Math.random() * 4 + 1)];
    const farge = document.querySelector('#' + rundeFarge);
    maskinSekvens.push(rundeFarge);
    visSekvens()
}

function visSekvens() {
    for (let i = 0; i < maskinSekvens.length; i++) {
        const farge = document.querySelector('#' + maskinSekvens[i]);

        setTimeout(() => {
            farge.style.backgroundColor = 'grey';

            setTimeout(() => {
                farge.style.backgroundColor = "";
            }, 500);
        }, i * 700);
    }
}



//når brukeren trykker på en av knappene blir dette pushet inn i spillerInputt arrayen
const greenClick =
document.querySelector('#green');
    greenClick.addEventListener('click', function() {
        spillerInputt.push('green')
        const i = spillerInputt.length - 1;
        if (spillerInputt[i] == maskinSekvens[i]) {
            if (spillerInputt.length == maskinSekvens.length) {
                spillerInputt = []
                nyRunde()
            }
        } else {
            document.querySelector('#gameOver').classList.remove('hidden');
        }
})

const redClick =
document.querySelector('#red');
    redClick.addEventListener('click', function() {
        spillerInputt.push('red')
        const i = spillerInputt.length - 1;
        if (spillerInputt[i] == maskinSekvens[i]) {
            if (spillerInputt.length == maskinSekvens.length) {
                spillerInputt = []
                nyRunde()
            }
        } else {
            document.querySelector('#gameOver').classList.remove('hidden');
        }
})

const yellowClick =
document.querySelector('#yellow');
    yellowClick.addEventListener('click', function() {
        spillerInputt.push('yellow')
        const i = spillerInputt.length - 1;
        if (spillerInputt[i] == maskinSekvens[i]) {
            if (spillerInputt.length == maskinSekvens.length) {
                spillerInputt = []
                nyRunde()
            }
        } else {
            document.querySelector('#gameOver').classList.remove('hidden');
        }
})

const blueClick =
document.querySelector('#blue');
    blueClick.addEventListener('click', function() {
        spillerInputt.push('blue')
        const i = spillerInputt.length - 1;
        if (spillerInputt[i] == maskinSekvens[i]) {
            if (spillerInputt.length == maskinSekvens.length) {
                spillerInputt = []
                nyRunde()
            }
        } else {
            document.querySelector('#gameOver').classList.remove('hidden');
        }
})
