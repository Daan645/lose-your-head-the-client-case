<script>
    // Component imports
import Span from "../../lib/atoms/Span.svelte";
import Ul from "../../lib/atoms/Ul.svelte";
</script>

<main>
    <section class="slam-fm-container">
        <Span text="SLAM" textSize="13em" textColor="var(--secondary-color)"/>
        <Span text="FM" textSize="13em" textColor="var(--secondary-color)"/>
        <Ul title= true; titleText="SOCIALS" titleSize="5em" titleColor="var(--secondary-color)" numberOfLi= {3} href={["https://www.facebook.com/slamfm/?locale=nl_NL", "https://www.instagram.com/slamofficial/?hl=nl", "https://x.com/i/flow/login?redirect_after_login=/slamofficial"]} text= {["FACEBOOK", "INSTAGRAM", "X"]} textSize= "4em" textColor="var(--secondary-color)" label= {["FACEBOOK", "INSTAGRAM", "X"]}  textDecoration= "underline" bold= "bold"/>
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

:global(.span-component:nth-of-type(2)) {
bottom: 0;
left: 5%;
}

:global(.span-component:first-of-type) {
    top: 1;
    right: 5%;
}

:global(.span-component:nth-of-type(2)) {
    position: absolute;

bottom: 0;
left: 5%;
}

:global(.ul-component){
bottom: 10%;
right: 5%;

}

</style>