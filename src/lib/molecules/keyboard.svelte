<script>
    import { onMount } from "svelte";

    let audio;
    let gainNode;
    let oscillator;
    let isStarted = false;

    onMount(() => {
        audio = new (window.AudioContext || window.webkitAudioContext)();
        gainNode = audio.createGain();
        gainNode.gain.value = 0.5;
        gainNode.connect(audio.destination);

        oscillator = audio.createOscillator();
        oscillator.type = 'sawtooth';
        oscillator.connect(gainNode);
    });

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

   
</script>

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

<style>
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

    button {
        display: flex;
        background-color: white;
        width: 5vw;
        height: 20vw;
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
        top: 39%;
    }

   .semi-notes button {
        background-color: rgb(19, 19, 19);
        width: 2vw;
        height: 20vh;
        z-index: 1;
        margin-right: 4.1em;
    }

  

</style>