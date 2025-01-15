<script>
  import Tabs from "../lib/molecules/tabs.svelte";
  import Schedule from "../lib/molecules/schedule.svelte";
  import WeekSelectie from "../lib/molecules/WeekSelectie.svelte";
  import Mediaplayer from "../lib/media-player/Mediaplayer.svelte";
  import Footer from '../lib/organism/Footer.svelte';

  export let data;
</script>

<main>
  <Tabs class="tabs"/>
  <WeekSelectie class="weekselectie" />
  <Schedule class="schedule" {data} />
  <Mediaplayer class=""/>  
  <Footer/>  
</main>

<style>
  :global(section:has(.navigation-buttons)) {
    grid-area: weekselectie;
  }

  :global(.schedule) {
    grid-area: schedule;
  }
  :global(.radioplayer) {
    grid-area: radioplayer;
  }
  :global(footer) {
    grid-area: footer;
  }
  :global(.tabs) {
    grid-area: tabs;
  }


  @media only screen and (min-width: 982px) {
    main {
      display: grid;
      grid-template-columns: 300px auto;
      grid-template-rows: auto;
      grid-template-areas:
        "radioplayer tabs"
        "radioplayer weekselectie"
        "radioplayer schedule"
        "radioplayer footer";
      overflow-x: hidden;
    }
  }
</style>
