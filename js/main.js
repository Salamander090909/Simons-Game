let fargeRekkefølge =
[[], 'green', 'red', 'yellow', 'blue'] // rekkefølge på hvordan fargene står i

let spillerInputt =
[] //lagrer hva som brukeren trykker og sammenligner med maskinSekvens

let maskinSekvens =
[] //lagrer hva en farge velger som sinn random farge

let rundeFarge

let rundeClick

const farge = 
document.querySelector('#' + maskinSekvens[1])


const GameBegin =
document.querySelector('#GameBegin')
    GameBegin.addEventListener('click', function() {
        nyRunde()
    })


function nyRunde() {
    rundeFarge = fargeRekkefølge[Math.floor(Math.random() * 4 + 1)];
    const farge = document.querySelector('#' + rundeFarge);
    maskinSekvens.push(rundeFarge);
    visSekvens()
}

function visSekvens() {
    for(let i = 0; i < maskinSekvens.length; i++) {
        farge.style.backgroundColor = 'white';
            setTimeout(() => {
        farge.style.backgroundColor = "";
            }, 500);
    }
}


//når brukeren trykker på en av knappene blir dette pushet inn i spillerInputt arrayen
const greenClick =
document.querySelector('#green');
    greenClick.addEventListener('click', function() {
        spillerInputt.push('green')

        if(spillerInputt[spillerInputt.length - 1] == maskinSekvens[maskinSekvens.length -1]) {
            if(spillerInputt.length == maskinSekvens.length) {
                spillerInputt = [] //sletter alt som er inne i spillerInputt array så den er klar for ny runde
                nyRunde()//for å starte neste runde
            }
        }
    })

const redClick =
document.querySelector('#red');
    redClick.addEventListener('click', function() {
        spillerInputt.push('red')

        if(spillerInputt[spillerInputt.length - 1] == maskinSekvens[maskinSekvens.length -1]) {
            if(spillerInputt.length == maskinSekvens.length) {
                spillerInputt = [] //sletter alt som er inne i spillerInputt array så den er klar for ny runde
                nyRunde()//for å starte neste runde
            }
        }
    })

const yellowClick =
document.querySelector('#yellow');
    yellowClick.addEventListener('click', function() {
        spillerInputt.push('yellow')

        if(spillerInputt[spillerInputt.length - 1] == maskinSekvens[maskinSekvens.length -1]) {
            if(spillerInputt.length == maskinSekvens.length) {
                spillerInputt = [] //sletter alt som er inne i spillerInputt array så den er klar for ny runde
                nyRunde()//for å starte neste runde
            }
        }
    })

const blueClick =
document.querySelector('#blue');
    blueClick.addEventListener('click', function() {
        spillerInputt.push('blue')

        if(spillerInputt[spillerInputt.length - 1] == maskinSekvens[maskinSekvens.length -1]) {
            if(spillerInputt.length == maskinSekvens.length) {
                spillerInputt = [] //sletter alt som er inne i spillerInputt array så den er klar for ny runde
                nyRunde()//for å starte neste runde
            }
        }
    })


