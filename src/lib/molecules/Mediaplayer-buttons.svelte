<script>
  import MediaplayerCasting from "../atoms/Mediaplayer-casting.svelte";
  import MediaplayerKijklive from "../atoms/Mediaplayer-kijklive.svelte";
  import MediaplayerPlaystop from "./Mediaplayer-playstop.svelte";
  import MediaplayerAppstudio from "../atoms/Mediaplayer-appstudio.svelte";
</script>

<ul class="audio__group">
  <MediaplayerCasting />
  <MediaplayerKijklive />
  <MediaplayerPlaystop />
  <MediaplayerAppstudio />
</ul>

<style>
  .audio__group {
    display: flex;
    flex-direction: row;
    gap: 0.7rem;
    align-items: center;
    justify-content: flex-end;
    padding: 0.5rem;
    margin-left: auto;

    @media screen and (min-width: 600px) and (max-width: 980px) {
      justify-content: flex-end;
    }

    @media screen and (min-width: 982px) {
      align-items: unset;
      margin-left: unset;
      margin-bottom: 180px;
    }
  }
</style>
