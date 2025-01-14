<script>
  import MediaTab from "../molecules/Mediaplayer-tab.svelte";
  import MediaplayerInfo from "../molecules/Mediaplayer-info.svelte";
  import MediaplayerButtons from "../molecules/Mediaplayer-buttons.svelte";
</script>

<div class="audio">
  <div class="audio__container">
    <div class="audio__player">
      <MediaTab />
      <MediaplayerInfo />
      <MediaplayerButtons />
    </div>
  </div>
</div>

<style>
  .audio {
    width: 100%;
  }

  .audio__container {
    margin: 0.5rem;
    @media only screen and (min-width: 982px) {
      margin: 0;
    }
  }

  .audio__player {
    display: flex;
    flex-direction: row;
    gap: 0.8rem;
    padding: 5px;
    width: 96vw;
    height: 70px;
    box-shadow: 7px 3px 25px 0px rgba(213 210 213);
    border-radius: 5px;
    position: absolute;
    bottom: 125px;
    @media only screen and (min-width: 600px) and (max-width: 980px) {
      width: 98vw;
    }

    @media only screen and (min-width: 982px) {
      position: unset;
      height: 100%;
      width: 312px;
      display: flex;
      flex-direction: column;
      padding: 1rem;
      align-items: center;
    }
  }
</style>
