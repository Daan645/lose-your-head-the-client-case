<script>
    // Component imports
import Span from "../../lib/atoms/Span.svelte";
import Ul from "../../lib/atoms/Ul.svelte";
</script>

<main>
    <section class="slam-fm-container">
        <Span text="SLAM" textSize="13em" textColor="var(--secondary-color)"/>
        <Span text="FM" textSize="13em" textColor="var(--secondary-color)"/>
        <Ul title= true; titleText="SOCIALS" titleSize="5.5em" titleColor="var(--secondary-color)" numberOfLi= {3} href={["https://www.facebook.com/slamfm/?locale=nl_NL", "https://www.instagram.com/slamofficial/?hl=nl", "https://x.com/i/flow/login?redirect_after_login=/slamofficial"]} text= {["FACEBOOK", "INSTAGRAM", "X"]} textSize= "4em" textColor="var(--secondary-color)" label= {["FACEBOOK", "INSTAGRAM", "X"]} bold= "bold"/>
        <svg class="slam-fm-logo" width="144" height="191" viewBox="0 0 144 191" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M129.699 107.939L32.2479 180.391C22.0218 187.994 7.5 180.695 7.5 167.952L7.5 23.0477C7.5 10.3048 22.0218 3.00589 32.248 10.6088L129.699 83.0612C138.035 89.2588 138.035 101.741 129.699 107.939Z" fill="white" stroke="#FF0967" stroke-width="15"/>
            </svg>
            
    </section>
    
    
    
    <section class="veronica-container">
<h1>veronica</h1>
    </section>
</main>

<style>
main {
    scroll-behavior: smooth;
}

.slam-fm-container {
    display: flex;
    justify-content: center;
    align-items: start;
   position: relative;
    width: 100%;
    height: 300vh;
    clip-path: inset(0 0 0 0);
}

:global(.span-component, .ul-component) {
   
}



:global(.span-component:first-of-type) {
    position: sticky;
    animation: slam-fm-slide-in-right 1.5s ease-out forwards;
    top: 10%;
    left: 60%;
}

:global(.span-component:nth-of-type(2)) {
    position: sticky;
    animation: slam-fm-slide-in-left 1.5s ease-in forwards;    
    top: 70%;
    right: 75%;
}

:global(.ul-component){
    position: sticky;
    animation: socials-slide-up 1.6s ease-in forwards;
    top: 60%;
    left: 70%;
}

:global(.ul-component a) {
    position: relative; /* Optioneel, afhankelijk van stylingvoorkeur */
}

:global(.ul-component a::after) {
    content: '';
    position: absolute;
    width: 100%;
    height: 5px;
    bottom: 0;
    left: 0;
    background-color: var(--secondary-color);
    transform: scaleX(0); /* Start met geen breedte */
    transform-origin: bottom right; /* Animatie start vanaf rechts */
    transition: transform 0.25s ease-out; /* Transitie-instelling */
}

:global(.ul-component a:hover::after) {
    transform: scaleX(1); /* Volledig zichtbaar maken bij hover */
    transform-origin: bottom left; /* Eindigt aan de linkerkant */
}


.slam-fm-logo {
    position: sticky;
    top: 40%;
    right: 45%; 
    transition: transform 10s ease-in-out;
    transform-origin: center center;
    
    /* Vergroot animatie wanneer in de eerste sectie */
    scroll-timeline-name: logo-timeline;
    scroll-timeline-axis: block;
    animation: enlarge-logo 10s ease-out forwards;
    animation-timeline: scroll(y);
    animation-range: 0% 100%;
    clip-path: inset(0 0 0 0); /* Dit zorgt ervoor dat de afbeelding alleen binnen de container zichtbaar is */

}



.veronica-container {
  display: flex;
  justify-content: center;
  position: relative;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #e20074; /* SLAM kleur */
  color: white;
  text-align: center;

  animation: fade linear;
  animation-timeline: view();
}



/* animations */
/* @keyframes slam-fm-slide-in-right {
    from {
        right: 101%;
    }

    to {
        right: 5%;
    }
}

@keyframes slam-fm-slide-in-left {
    from {
        left: 101%;
    }

    to {
        left: 5%;
    }
} */

@keyframes socials-slide-up {
    from {
        bottom: -60%;
    }

    to{ 
        bottom: 4%;
    }
}

@keyframes enlarge-logo {
    from {
        transform: scale(1); /* Start op normale grootte */
    }
    to {
        transform: scale(50); /* Vergroot het logo tot twee keer de grootte */
    }
}

@keyframes shrink-logo {
    from {
        transform: scale(2); /* Begin bij vergrootte versie */
    }
    to {
        transform: scale(1); /* Krimp terug naar de originele grootte */
    }
}

@keyframes fade {
    from {
        transform: opacity(0); /* Begin bij vergrootte versie */
    }
    to {
        transform: opacity(1); /* Krimp terug naar de originele grootte */
    }
}

</style>