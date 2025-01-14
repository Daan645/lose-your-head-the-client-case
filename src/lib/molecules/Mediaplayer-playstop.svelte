<script>
  import { onMount } from "svelte";
  // Variabele om de audio file te gebruiken
  let audio;
  // Variable om bij te houden of de audio file wordt afgespeeld
  let isPlaying = false;
  // Functie om de audio te stoppen
  // heeft een boolean van true dat de audio wordt afgespeeld
  function playAudio() {
    if (audio) {
      audio.play();
      isPlaying = true;
    }
  }
  // Functie om de audio te stoppen
  // heeft een boolean van false dat de audio wordt gestopt
  function stopAudio() {
    if (audio) {
      audio.pause();
      isPlaying = false;
    }
  }
  // Functie die wordt uitgevoerd wanneer de component wordt gemount
  onMount(() => {
    // hier geef ik de audio met een specifiek audiobestand mee
    audio = new Audio("/muziek/Amy Winehouse - Back To Black.mp3");
  });
</script>

<!-- de if statement om te kijken of de audio wordt afgespeeld -->
{#if isPlaying}
  <li>
    <!-- de pause button word weergeven en gebruikt als de play button actief word en met prevent default wordt er voor gezorgt dat de gebruiker niet naar een andere pagina wordt toegeleid -->
    <a
      href="#"
      aria-label="Pause"
      class="audio__pause"
      on:click|preventDefault={stopAudio}
    >
      <img
        width="93"
        class="audio__group-pause"
        alt="pause button"
        src="/stop-button.svg"
      />
    </a>
  </li>
  <!-- anders wordt de play button weergegeven -->
{:else}
  <li>
    <!-- de play button word weergeven en gebruikt als de pause button actief word en met prevent default wordt er voor gezorgt dat de gebruiker niet naar een andere pagina wordt toegeleid -->
    <a
      href="#"
      aria-label="Play"
      class="audio__play"
      on:click|preventDefault={playAudio}
    >
      <img
        width="93"
        class="audio__group-play"
        alt="play button"
        src="/play-button.svg"
      />
    </a>
  </li>
  <!-- de if statement sluit -->
{/if}

<style>
  .audio__group-play {
    height: 1.5rem;
    width: 1.5rem;
    @media only screen and (min-width: 982px) {
      height: 2.5rem;
      width: 2.5rem;
    }
  }

  .audio__group-pause {
    height: 1.5rem;
    width: 1.5rem;
    @media only screen and (min-width: 982px) {
      height: 2.5rem;
      width: 2.5rem;
    }
  }
</style>
