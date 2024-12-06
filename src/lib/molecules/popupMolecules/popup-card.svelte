<script>
    import { onMount } from "svelte";

    // For each voor de kaarten
    let items = Array(10).fill({
        name: 'Back to black - Amy whinehouse',
        image: 'amy-whine-house.png'
    });

    onMount(() => {
        if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
            gsap.registerPlugin(ScrollTrigger);

            const liedjes = gsap.utils.toArray(".liedjes-container");

            liedjes.forEach((liedje) => {
                gsap.fromTo(
                    liedje,
                    {
                        opacity: 0,
                        scale: 0.9,
                        y: 50,
                        backgroundPosition: "100% 0%",
                    },
                    {
                        opacity: 1,
                        scale: 1,
                        y: 0,
                        backgroundPosition: "0% 100%", // beweegt de gradient
                        scrollTrigger: {
                            trigger: liedje,
                            scrub: true,
                            start: "top 95%",
                            end: "top 60%",
                            scroller: ".liedjes-scrollable",
                        },
                    }
                );

                
                gsap.to(liedje, {
                    backgroundPosition: "200% 200%", 
                    duration: 10, 
                    repeat: -1, 
                    ease: "linear",
                });
            });
        } else {
            console.error("GSAP or ScrollTrigger is not available.");
        }
    });
</script>

<div class="liedjes-scrollable">
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
</div>   


<style>
    .liedjes-scrollable {
        max-height: 824px; 
        width: 320px;
        overflow-y: auto; 
        scrollbar-width: thin; 
        scrollbar-color: #ccc transparent; 
    }

    .liedjes-scrollable::-webkit-scrollbar {
        width: 8px; 
    }

    .liedjes-scrollable::-webkit-scrollbar-thumb {
        background-color: #ccc;
        border-radius: 4px; 
    }

    .liedjes-scrollable::-webkit-scrollbar-track {
        background-color: transparent; 
    }
    
    .liedjes-container {
        display: flex;
        flex-direction: row;
        gap: 0.5em;
        box-shadow: 7px 3px 25px 0px rgba(213 210 213);
        width: 320px;
        padding: 10px;
        background: linear-gradient(45deg,#ff7e5f, #feb47b, #43cea2, #185a9d); 
        background-size: 300% 300%; 
        background-repeat: no-repeat; 
    }

    .liedjes-text {
        display: flex;
        flex-direction: column;
        gap: 0.5em;
        width: 250px;
    }
</style>