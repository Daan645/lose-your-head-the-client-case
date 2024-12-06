<script>
     import Homelink from '../../lib/homelink/Homelink.svelte';
     import Mainform from '../../lib/mainform/Mainform.svelte';
</script>
<section class="hero">
    <!-- <Homelink/> -->
    <h1> Error </h1>
    <h2>Laten we dat oplossen</h2>
    <figure class="circle"><span class="shadow"></span></figure>
</section>
<section class="sectionpin">
    <div class="pin-wrap-sticky flex-left"> 
        <div class="pin-wrap">
            
            <Mainform/>
        </div>
    </div>
   
</section>

<style>
    .hero{
        padding: 2em;
        text-transform: uppercase;
    }
    @media only screen and (min-width: 960px) {

            .circle {
                perspective: 1000px;
                position: absolute;
                display: inline-block;
                background: black;
                border-radius: 50%;
                height: 40vw;
                width: 40vw;
                margin: 0;
                z-index: 1;
                left:150px;
                background: url("sphere.png") , radial-gradient(circle at 100px 100px, var(--secondary-color), var(--grey));
                object-fit: cover;
                background-position: center;
                background-repeat: no-repeat;
                animation: move-eye-skew 5s ease-out infinite;
            }
            
            @keyframes move-eye-skew {
                50% {
                    transform: scale(150%) rotateY(20deg) rotateZ(39deg) translateX(20px) translateY(20px) ;
		}
            }
   
            .hero{
                height: 100vh;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                background-color: var(--secondary-color);
                 
            }

            .hero h1{
                margin-left: 80px;
                color: var(--primary-color);
                font-size: 6em;
                transform: rotate(270deg);
                z-index: 2;
                text-transform: uppercase;
                text-shadow: 6px 6px 0px black;
            }
            .hero h2{
                color: var(--light);
                position: absolute;
                margin-right: -500px;
                z-index: 2;
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