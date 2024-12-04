<script>
    // Component imports
import Span from "../../lib/atoms/Span.svelte";
import Ul from "../../lib/atoms/Ul.svelte";
</script>

<main>
    <section class="slam-fm-container">
        <Span text="SLAM" textSize="13em" textColor="var(--secondary-color)"/>
        <Span text="FM" textSize="13em" textColor="var(--secondary-color)"/>
        <Ul title= true; titleText="SOCIALS" titleSize="5.5em" titleColor="var(--secondary-color)" numberOfLi= {3} href={["https://www.facebook.com/slamfm/?locale=nl_NL", "https://www.instagram.com/slamofficial/?hl=nl", "https://x.com/i/flow/login?redirect_after_login=/slamofficial"]} text= {["FACEBOOK", "INSTAGRAM", "X"]} textSize= "4em" textColor="var(--secondary-color)" label= {["FACEBOOK", "INSTAGRAM", "X"]}  textDecoration= "underline" bold= "bold"/>
    </section>
</main>

<style>
.slam-fm-container {
    width: 100vw;
    height: 100vh;
}

:global(.span-component, .ul-component) {
    position: absolute;
}


:global(.span-component:first-of-type) {
    animation: slam-fm-slide-in-right 1.5s ease-out forwards;
    top: 1;
    right: 5%;
}

:global(.span-component:nth-of-type(2)) {
    animation: slam-fm-slide-in-left 1.5s ease-in forwards;    
    bottom: 0;
    left: 5%;
}

:global(.ul-component){
    animation: socials-slide-up 1.6s ease-in forwards;
    bottom: 10%;
    right: 5%;
}


@keyframes slam-fm-slide-in-right {
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
}

@keyframes socials-slide-up {
    from {
        bottom: -60%;
    }

    to{ 
        bottom: 10%;
    }
}
</style>