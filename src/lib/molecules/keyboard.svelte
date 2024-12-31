<script>
    import { onMount } from "svelte";
// variables for keyboard
    let audio;
    let gainNode;
    let oscillator;
    let isStarted = false;


// variables for dance
let audioParty;
let audioExplosion;
let isPlaying = false; // Houd bij of het feest-geluid speelt
  
 

 


onMount(() => {
    audio = new (window.AudioContext || window.webkitAudioContext)();
    gainNode = audio.createGain();
    gainNode.gain.value = 0.5;
    gainNode.connect(audio.destination);

    oscillator = audio.createOscillator();
    oscillator.type = 'sawtooth';
    oscillator.connect(gainNode);

    audioExplosion = new Audio('audio/explosion.mp3')
    audioParty = new Audio('/audio/cat.mp3');
    audioParty.addEventListener('ended', () => {
        isPlaying = false; // Zet isPlaying terug naar false als het nummer stopt
    });
});


    // functions for keyboard
    function playNote() {
        if (!isStarted) {
            oscillator.start(); // Start de oscillator eenmalig
            isStarted = true;
            console.log("Oscillator gestart");
        }
        oscillator.frequency.value = this.dataset.note;
        gainNode.gain.setValueAtTime(0.5, audio.currentTime); // Zet het volume aan
    }

function stopNote() {
    if (isStarted) {
        gainNode.gain.setValueAtTime(0, audio.currentTime); // Zet het volume uit
        console.log("Volume uit");
    }
}

//  Functions for party

  function playSound() {
        if (!isPlaying) {
            audioExplosion.currentTime = 0;
            audioParty.currentTime = 0; // Reset audio naar het begin
            audioExplosion.play()
            audioParty.play(); // Speel geluid af
            isPlaying = true; // Zet status naar "aan"

            var confettiSettings = { target: 'partyBackground' }; // Zorg ervoor dat je de juiste ID gebruikt
         var confetti = new ConfettiGenerator(confettiSettings);
         confetti.render(); // Start de confetti
     }
    }

   
</script>

{#if !isPlaying}
<section class="page-wrapper">
<button on:click={playSound} id="partyButton" aria-label="cat brainrot">PARTY</button>


<ol class= "notes">
    <li>
        <button data-note="420" on:mousedown={playNote} on:mouseout={stopNote} on:mouseup={stopNote}></button>
    </li>
    <li>
        <button data-note="430" on:mousedown={playNote} on:mouseout={stopNote} on:mouseup={stopNote}></button>
    </li>
    <li>
        <button data-note="440" on:mousedown={playNote} on:mouseout={stopNote} on:mouseup={stopNote}></button>
    </li>
    <li>
        <button data-note="450" on:mousedown={playNote} on:mouseout={stopNote} on:mouseup={stopNote}></button>
    </li>
<li>
    <button data-note="460" on:mousedown={playNote} on:mouseout={stopNote} on:mouseup={stopNote}></button>
</li>
<li>
    <button data-note="470" on:mousedown={playNote} on:mouseout={stopNote} on:mouseup={stopNote}></button>
</li>
<li>
    <button data-note="480" on:mousedown={playNote} on:mouseout={stopNote} on:mouseup={stopNote}></button>
</li>
<li>
    <button data-note="490" on:mousedown={playNote} on:mouseout={stopNote} on:mouseup={stopNote}></button>
</li>
<li>
    <button data-note="500" on:mousedown={playNote} on:mouseout={stopNote} on:mouseup={stopNote}></button>
</li>
<li>
    <button data-note="510" on:mousedown={playNote} on:mouseout={stopNote} on:mouseup={stopNote}></button>
</li>
<li>
    <button data-note="520" on:mousedown={playNote} on:mouseout={stopNote} on:mouseup={stopNote}></button>
</li>
<li>
    <button data-note="530" on:mousedown={playNote} on:mouseout={stopNote} on:mouseup={stopNote}></button>
</li>
<li>
    <button data-note="540" on:mousedown={playNote} on:mouseout={stopNote} on:mouseup={stopNote}></button>
</li>
<li>
    <button data-note="550" on:mousedown={playNote} on:mouseout={stopNote} on:mouseup={stopNote}></button>
</li>
<li>
    <button data-note="560" on:mousedown={playNote} on:mouseout={stopNote} on:mouseup={stopNote}></button>
</li>
<li>
    <button data-note="570" on:mousedown={playNote} on:mouseout={stopNote} on:mouseup={stopNote}></button>
</li>
</ol>

<ol class="semi-notes">
    <li>
        <button data-note="600" on:mousedown={playNote} on:mouseout={stopNote} on:mouseup={stopNote}></button>
    </li>
    <li>
        <button data-note="610" on:mousedown={playNote} on:mouseout={stopNote} on:mouseup={stopNote}></button>
    </li>
    <li>
        <button data-note="620" on:mousedown={playNote} on:mouseout={stopNote} on:mouseup={stopNote}></button>
    </li>
    <li>
        <button data-note="630" on:mousedown={playNote} on:mouseout={stopNote} on:mouseup={stopNote}></button>
    </li>
    <li>
        <button data-note="640" on:mousedown={playNote} on:mouseout={stopNote} on:mouseup={stopNote}></button>
    </li>
    <li>
        <button data-note="650" on:mousedown={playNote} on:mouseout={stopNote} on:mouseup={stopNote}></button>
    </li>
    <li>
        <button data-note="660" on:mousedown={playNote} on:mouseout={stopNote} on:mouseup={stopNote}></button>
    </li>
    <li>
        <button data-note="670" on:mousedown={playNote} on:mouseout={stopNote} on:mouseup={stopNote}></button>
    </li>
    <li>
        <button data-note="440" on:mousedown={playNote} on:mouseout={stopNote} on:mouseup={stopNote}></button>
    </li>
    <li>
        <button data-note="430" on:mousedown={playNote} on:mouseout={stopNote} on:mouseup={stopNote}></button>
    </li>
    <li>
        <button data-note="420" on:mousedown={playNote} on:mouseout={stopNote} on:mouseup={stopNote}></button>
    </li>
    <li>
        <button data-note="440" on:mousedown={playNote} on:mouseout={stopNote} on:mouseup={stopNote}></button>
    </li>
    <li>
        <button data-note="430" on:mousedown={playNote} on:mouseout={stopNote} on:mouseup={stopNote}></button>
    </li>
    <li>
        <button data-note="420" on:mousedown={playNote} on:mouseout={stopNote} on:mouseup={stopNote}></button>
    </li>
</ol>

</section>
{/if}
{#if isPlaying}
<div class= "party-background">
    <img class="explosion" src="img/explode.gif" alt="explosion">
    <img class="disco-ball" src="img/discoBall.gif" alt="disco-ball">
    <img class="nyan-cat" src="img/nyan-cat.gif" alt="nyan-cat">


    <img src="img/elf.gif" alt="elf">
    <img class="cat-dancing" src="img/cat.png" alt="cat">
    <img src="img/elf.gif" alt="elf">
</div>
{/if}




<style>
.page-wrapper, .party-background {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
}

button {
        display: flex;
        background-color: white;
        width: 5vw;
        height: 20vw;
        cursor: pointer;
    }



.party-background {
    flex-direction: row;
}
#partyButton {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2em;
    font-weight: bold;
    color: white;
        background-color: red;
        border-radius: 100%;
        width: 5em;
        height: 5em;
        margin: 5em;
        border: 20px solid rgb(218, 0, 0);
    }

.notes {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    background-color: green;
    width: 85vw;
    height: 40vh;
    border-radius: 30px;
    top: 3%;

}

   

    button:active {
      background-color: rgb(222, 222, 222);
      scale: 0.98;
    }

  
/* 
    .semi-notes li {
        margin: 0 3em 0 0;
    } */

    .semi-notes {
        display: flex;
        position: absolute;
        left: 12%;
        top: 62.5%;
    }

   .semi-notes button {
        background-color: rgb(19, 19, 19);
        width: 2vw;
        height: 20vh;
        z-index: 1;
        margin-right: 4.1em;
    }

    .explosion {
        width: 170vw;
        height: 170vh;
        position: absolute;
        z-index: 1;
        animation: explosion 2s ease forwards;
    }

    .disco-ball {
        position: absolute;
        top: -5%;
        left: 42%;
    }

    .nyan-cat {
        animation: nyan-cat-flying 1s infinite;
        animation-delay: 3s; /* Wacht 1 seconde voordat de animatie start */
        position: absolute;
        top: 10vh;
        left: 0vw;
    }
    .cat-dancing {
        animation: cat-dancing 0.2s infinite;
        margin: 0 20em 0 20em;
    }

    .party-background {
        animation: party-background 1s infinite;
    }

 @keyframes cat-dancing {
from {
    transform: rotateY(0);
}

to {
    transform: rotateY(360deg);
}
 }

 @keyframes party-background {
    0% {
        background-color: white;
    }

    10% {
        background-color: red;
    }

    20% {
        background-color: rgb(0, 192, 0);
    }

    30% {
        background-color: hotpink;
    }

    40% {
        background-color: lightblue;
    }

    50% {
        background-color: yellow;
    }

    60% {
        background-color: blue;
    }

    70% {
        background-color: purple;
    }

    80% {
        background-color: steelblue;
    }

    90% { background-color: orange;
    }

    100% {background-color: white;
    }
    }

    @keyframes nyan-cat-flying {
        from {
            transform: translateX(-20vw);
        }

        to {
            transform: translateX(120vw);
        }
    }
 
    @keyframes explosion {
        from {
            opacity: 1;
        }

        to {
            opacity: 0;
        }
    }
  

</style>