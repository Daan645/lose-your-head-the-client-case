<script>
    import Schedule from "../lib/molecules/schedule.svelte";
    import WeekSelectie from '../lib/molecules/WeekSelectie.svelte';
 
    export let data;
</script>

<main class="" id="b">
    <WeekSelectie/>
    <Schedule {data}/> 
</main>

<style>
    .active4{
        opacity: 0;
    }
</style>