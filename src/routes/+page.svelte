<script>
  import Tabs from "../lib/molecules/tabs.svelte";
  import Schedule from "../lib/molecules/schedule.svelte";
  import WeekSelectie from "../lib/molecules/WeekSelectie.svelte";
  import Footer from "$lib/organism/Footer.svelte";
  import Radioplayer from "../lib/organism/Radioplayer.svelte";

  export let data;
</script>

<main>
  <WeekSelectie class="weekselectie"></WeekSelectie>
  <Schedule class="schedule" {data}></Schedule>
  <Radioplayer class="radioplayer"></Radioplayer>
  <Footer class="footer"></Footer>
</main>

<style>
main {
  overflow-x: hidden;
}
  :global(section:has(.navigation-buttons)) {
    grid-area: weekselectie;
  }

  :global(.schedule) {
    grid-area: schedule;
  }
  :global(article.audio) {
    grid-area: radioplayer;
  }
  :global(footer) {
    grid-area: footer;
  }

  @media only screen and (min-width: 982px) {
    main {
      display: grid;
      grid-template-columns: 300px 100%;
      grid-template-rows: auto;
      grid-template-areas:
        "radioplayer weekselectie"
        "radioplayer schedule"
        "radioplayer footer";
    }
  }
</style>
