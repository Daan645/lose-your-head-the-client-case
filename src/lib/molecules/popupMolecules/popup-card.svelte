<script>
    let items = Array(10).fill({
        name: 'Back to black - Amy whinehouse',
        image: 'amy-whine-house.png'
    });
</script>

<div>
    {#each items as item}
<div class="liedjes-container">
    <figure>
        <img class="image-amy" src="{item.image}" width="93" alt="foto amy winehouse">
    </figure>
    <article class="liedjes-text">
        <h3>Goud van oud</h3>
        <p>{item.name}</p>
    </article>
</div>
    {/each}
</div>

<style>
    .liedjes-container {
        display: flex;
        flex-direction: row;
        gap: 0.5em;
        border-top: 1px solid var(--grey);
        border-bottom: 1px solid var(--grey);
        width: 320px;
        padding: 10px;
    }

    .liedjes-text {
        display: flex;
        flex-direction: column;
        gap: 0.5em;
        width: 250px;
    }
</style>