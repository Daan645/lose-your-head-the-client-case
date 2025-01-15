<script>
  import { onMount } from "svelte";
  // referentie naar de audio element om muziek te kunnen afspelen of stoppen
  let audioElement;
  // Variable om bij te houden of de audio file wordt afgespeeld
  let isPlaying = false;
  // Functie om de audio te aftespelen
  // heeft een boolean van true dat de audio wordt afgespeeld
  function playAudio() {
    if (audioElement) {
      audioElement.play();
      isPlaying = true;
    }
  }
  // Functie om de audio te stoppen
  // heeft een boolean van false dat de audio wordt gestopt
  function stopAudio() {
    if (audioElement) {
      audioElement.pause();
      isPlaying = false;
    }
  }
  // Functie die wordt uitgevoerd wanneede component wordt gemount
  onMount(() => {
    // voeg een event listener toe aan de audio element om te kijken of de audio is afgelopen
    if (audioElement) {
      audioElement.addEventListener("ended", () => {
        isPlaying = false;
      });
    }
  });
</script>

<!-- de audio audioElement variable wordt geimporteerd en wordt gebruikt om muziek af te spelen dit is gebined aan de audio syntax en zorgt ervoor dat ik kan afspelen en pauzeren-->
<audio bind:this={audioElement} src="/muziek/Amy Winehouse - Back To Black.mp3">
</audio>

<!-- de if statement om te kijken of de audio wordt afgespeeld -->
{#if isPlaying}
  <li>
    <!-- de pause button word weergeven en gebruikt als de play button actief word en met prevent default wordt er voor gezorgt dat de gebruiker niet naar een andere pagina wordt toegeleid -->
    <button aria-label="stop button"
      class="audio__playstop--hidden-button"
      on:click|preventDefault={stopAudio}
    >
      <img
        width="93"
        class="audio__group-pause"
        alt=""
        src="/stop-button.svg"
      >
    </button>
  </li>
  <!-- anders wordt de play button weergegeven -->
{:else}
  <li>
    <!-- de play button word weergeven en gebruikt als de pause button actief word en met prevent default wordt er voor gezorgt dat de gebruiker niet naar een andere pagina wordt toegeleid -->
    <button aria-label="play button"
      class="audio__playstop--hidden-button"
      on:click|preventDefault={playAudio}
    >
      <img
        width="93"
        class="audio__group-play"
        alt=""
        src="/play-button.svg"
      >
    </button>
  </li>
  <!-- de if statement sluit -->
{/if}

<style>
  .audio__group-play,
  .audio__group-pause {
    height: 1.5rem;
    width: 1.5rem;

    @media screen and (min-width: 982px) {
      height: 2.5rem;
      width: 2.5rem;
    }
  }

  .audio__playstop--hidden-button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
  }
</style>
