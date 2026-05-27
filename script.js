const blocchi = [
    {
        colore: "#fce4ec",
        testo: "#5d4037",
        domande: [
            'Potendo scegliere una persona qualunque nel mondo, chi ti piacerebbe invitare a cena? (valgono anche personaggi storici)',
            'Che cosa faresti nella tua giornata perfetta?',
            'Se domani potessi svegliarti con una nuova qualità o abilità a tua scelta, quale sceglieresti?',
            'Se avessi la possibilità di sapere una verità sulla tua vita, il futuro o su qualsiasi altra cosa, cosa vorresti sapere?',
        ],
        log: [''],
    },
    {
        colore: "#ce93d8",
        testo: "#4a148c",
        domande: [
            'Cosa apprezzi di più in un\'amicizia o in una persona che entra a far parte della tua vita?',
            'Qual è il ricordo più bello che hai conservato finora?',
            'C\'è qualcosa che vorresti fare da molto tempo ma che non hai ancora avuto il coraggio di fare?',
            'Qual è l\'elemento della tua vita per il quale ti senti più grato\/a oggi?',
        ],
        log: ['Elaboro le risposte...', 'Abbiamo rotto il ghiaccio..', 'Livello 2 pronto.'],

    },
    {
        colore: "#4a148c",
        testo: "#f3e5f5",
        domande: [
            'Dimmi 3 cose che hai capito di avere in comune con me in questo poco tempo.',
            'Casa tua sta andando a fuoco, hai tempo per prendere un solo oggetto: cosa prenderesti?',
            'Se il nostro rapporto dovesse passare ad un livello successivo, cosa dovrei sapere di te?',
            'Dimmi qualcosa che ti piace particolarmente di me',
        ],
        log: ['Andiamo più in profondità...', 'Sintonizzazione in corso...', 'Livello 3 pronto.'],
    },
    {
        colore: "#390b70",
        testo: "#f8f0fa",
        domande: [
            'Se dovessi morire oggi senza poter parlare con nessuno, cosa rimpiangeresti di non aver mai detto?',
            'Hai la possi'
        ],
        log: ['Mancano altre due domande prima della prova finale', 'Connessione in corso...', 'Caricamento domande finali'],
        //log: ['E adesso è il momento dell\'ultima prova...', 'il momento del silenzio'],
    }
];

let bloccoCorrente = 0;
let domandaCorrente = 0;

function mostraDomanda() {
    const container = document.getElementById('app-container');
    const blocco = blocchi[bloccoCorrente];
    if (domandaCorrente < blocco.domande.length) {
        container.innerHTML = `
            <h2 style="font-size: 1.5rem; opacity: 0.7;">Livello ${bloccoCorrente + 1}</h2>
            <p style="font-size: 2.5rem; padding: 0 20px;">${blocco.domande[domandaCorrente]}</p>
            <button onclick="prossimaDomanda()">Proseguiamo</button>
        `;
    } else {
        if (bloccoCorrente < blocchi.length - 1) {
            bloccoCorrente++;
            domandaCorrente = 0;
            lanciaCaricamento();
        } else {
            startTimer4minutes();
        }
    }
}

function lanciaCaricamento() {
    const container = document.getElementById('app-container');
    const nuovoBlocco = blocchi[bloccoCorrente];

    document.documentElement.style.setProperty('--bg-color', nuovoBlocco.colore);
    document.documentElement.style.setProperty('--text-color', nuovoBlocco.testo);

    // Durata crescente
    const durataCaricamento = 4000 + (bloccoCorrente * 3000);

    container.innerHTML = `
        <div class="log-container">
            <div id="log-box"></div>
            <div class="progress-container" style="width:100%; height:8px; background:rgba(0,0,0,0.1); border-radius:10px; margin-top:20px; overflow:hidden;">
                <div id="bar" style="height:100%; width:0; background:var(--text-color); transition: width linear;"></div>
            </div>
        </div>
    `;

    const logBox = document.getElementById('log-box');
    const bar = document.getElementById('bar');

    setTimeout(() => {
        bar.style.transitionDuration = `${durataCaricamento}ms`;
        bar.style.width = "100%";
    }, 50);

    const tempoPerOgniLog = durataCaricamento / nuovoBlocco.log.length;
    nuovoBlocco.log.forEach((testo, i) => {
        setTimeout(() => {
            logBox.innerHTML += `<p style="font-family:monospace; font-size:1.2rem; margin:5px 0;">> ${testo}</p>`;
        }, i * tempoPerOgniLog);
    });

    setTimeout(() => {
        mostraDomanda();
    }, durataCaricamento + 500);
}

function prossimaDomanda() {
    domandaCorrente++;
    mostraDomanda();
}

function startTimer4minutes() {
    const container = document.getElementById('app-container');
    container.innerHTML = `
        <h1>L'ultima prova</h1>
        <p>Guardatevi negli occhi in silenzio per 4 minuti</p>
        <div id="timer" style="font-size: 4.5rem; margin: 20px 0;">04:00</div>
        <button id="btnStart" onclick="startCountdown()">Inizia</button>
    `;
}

function startCountdown() {
    document.getElementById('btnStart').style.display = 'none';
    let tempo = 240; // 4 minuti (240 secondi)

    const audioAlert = new Audio('sound.mp3');

    const interval = setInterval(() => {
        tempo--;
        let min = Math.floor(tempo / 60);
        let sec = tempo % 60;
        document.getElementById('timer').innerText = `${min}:${sec < 10 ? '0' : ''}${sec}`;

        if (tempo <= 0) {
            clearInterval(interval);

            // 2. Riproduci il suono di notifica alla fine dei 4 minuti
            audioAlert.play().catch(e => console.log("Errore riproduzione audio:", e));

            // 3. Mostra la domanda finale sul patto d'onestà (Opzione 2)
            document.getElementById('app-container').innerHTML = `
                <div class="log-container" style="text-align: left; max-width: 600px; margin: 0 auto; padding: 20px;">
                    <p style="font-family:monospace; color:var(--text-color); opacity:0.7; margin-bottom:15px;">> [SYSTEM]: Timer scaduto.</p>
                    <p style="font-family:monospace; color:var(--text-color); opacity:0.7; margin-bottom:25px;">> [SYSTEM]: Inizializzazione fase conclusiva...</p>
                    
                    <h2 style="font-size: 2rem; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 20px;">
                        Livello finale
                    </h2>
                    
                    <p style="font-size: 2.5rem; line-height: 1.6; margin-bottom: 30px;">
                        Avete diritto a una domanda a testa, a scelta libera. <br>
                        La sola regola rimasta è l'onestà al 100%. <br><br>
                        <strong>Chi inizia?</strong>
                    </p>
                    
                    <button onclick="mostraSchermataFinale()">Fine dell'esperimento</button>
                </div>
            `;
        }
    }, 1000);
}


function mostraSchermataFinale() {
    document.getElementById('app-container').innerHTML = `
        <div class="log-container">
            <p>> Ultima prova completata </p>
            <p>> Si dice che questo test faccia innamorare le persone.</p>
            <p>> Quindi ora che siamo innamorati che si fa? ❤️</p>
        </div>
    `;
}

function schermataIniziale() {
    const container = document.getElementById('app-container');
    document.documentElement.style.setProperty('--bg-color', blocchi[0].colore);
    document.documentElement.style.setProperty('--text-color', blocchi[0].testo);

    container.innerHTML = `
        <h1 style="margin-bottom: 20px;">Pronti per l'esperimento?</h1>
        <p style="font-size: 1.8rem; min-height: auto; margin-bottom: 40px;">
            basato sull\'esperimento delle 36 domande per innamorarsi ideato dallo psicologo Arthur Aron
        </p>
        <button onclick="mostraDomanda()">Inizia il test</button>
    `;
}

// Avvia tutto solo quando il DOM è pronto
document.addEventListener('DOMContentLoaded', schermataIniziale);