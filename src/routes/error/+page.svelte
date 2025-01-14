<script>
     import Homelink from '../../lib/homelink/Homelink.svelte';
     import Mainform from '../../lib/mainform/Mainform.svelte';
</script>

<section class="error-page">

    <div class="flex-left"> 
        <Homelink/>
        <h1>403</h1>
        <h2>Laten we dat oplossen</h2>
    </div>

    <div class="flex-right">
        <Mainform/>
    </div>

</section>

<style>
    .error-page {
        padding: 2em 2em;
        gap: 2em;
        display: flex;
        flex-direction: column;
    }

    .error-page .flex-left .flex-right {
        display: flex;
        flex-direction: column;
        gap: 1em;
    }

    .error-page .flex-left h1 {
        margin-top: 0.25em;
        font-size: 6em;
        color: var(--secondary-color);
    }

    .error-page .flex-left h2 {
        font-size: 1.5em;
        font-weight: 500;
    }

    .error-page .flex-right {
        display: flex;
        flex-direction: column;
    }

    @media only screen and (min-width: 600px) and (max-width: 960px) {
        .error-page {
            margin: 0 auto;
            max-width: 520px;
        }
    }
    @media only screen and (min-width: 960px) {
        .error-page {
            align-items: center;
            justify-content: center;
            flex-direction: row;
            gap: 5em;
        }

        .error-page h1 {
            font-size: 7em;
        }
    }
</style>