<script>
    import Schedule from "../lib/molecules/schedule.svelte";
    import WeekSelectie from '../lib/molecules/WeekSelectie.svelte';

    export let data;
</script>
<div class="skiplink">
    <a href="#weekSelectie">Naar kalender</a>
    <a href="#schedule">Naar schema</a>
</div>

<main>
    <WeekSelectie/>
    <Schedule {data}/>
</main>
