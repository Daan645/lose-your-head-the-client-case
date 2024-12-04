<script>
     import Homelink from '../../lib/homelink/Homelink.svelte';
     import Mainform from '../../lib/mainform/Mainform.svelte';
</script>
<section class="hero">
    <!-- <Homelink/> -->
    <h1> Error </h1>
    <h2>Laten we dat oplossen</h2>
    <img src="output-onlinepngtools 1.png">
</section>
<section class="sectionpin">
    <div class="pin-wrap-sticky flex-left"> 
        <div class="pin-wrap">
            <Mainform/>
        </div>
    </div>
   
</section>

<style>
    @media only screen and (min-width: 600px) and (max-width: 960px) {
    }
    @media only screen and (min-width: 960px) {

            .hero{
                height: 100vh;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                background-color: var(--grey);
                 
            }

            .hero h1{
                margin-left: 000px;
                color: var(--primary-color);
                font-size: 6em;
                transform: rotate(270deg);
                z-index: 10;
                text-transform: uppercase;
                text-shadow: 6px 6px 0px black;
            }
            .hero h2{
                color: var(--light);
                position: absolute;
                margin-right: -500px;
                z-index: 10;
                text-transform: uppercase;
                text-shadow: 4px 4px 0px black;
            }

            .hero img{
                height: 50vw;
                position: absolute;
                left: 0;
                bottom: 0;
                z-index: 0;
            }
            .sectionpin{
                height: 400vh;
                overflow: visible;
                view-timeline-name: --section-pin-tl;
                view-timeline-axis: block;
            }

        @keyframes move {
            to {
                /* Move horizontally so that right edge is aligned against the viewport */
                transform: translateX(calc(-100% + 100vw));
            }
            }

            .pin-wrap-sticky {
                /* Stick to Top */
                height: 100vh;
                width: 100vw;
                position: sticky;
                top: 0;
                width: 100vw;
                overflow-x: hidden;
            }

            .pin-wrap {
                height: 100vh;
                width: 250vmax;
                will-change: transform;
                animation: linear move forwards;
                animation-timeline: --section-pin-tl;
                animation-range: contain 0% contain 100%;
            }
    }
</style>