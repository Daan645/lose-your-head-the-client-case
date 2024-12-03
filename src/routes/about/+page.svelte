<script>
    // Component imports
import Span from "../../lib/atoms/Span.svelte";
import Ul from "../../lib/atoms/Ul.svelte";
</script>

<main>
<Span text="Slam" textSize="10em" textColor="var(--secondary-color)"/>
<Ul numberOfLi= {3} href={["https://www.facebook.com/slamfm/?locale=nl_NL", "https://www.instagram.com/slamofficial/?hl=nl", "https://x.com/i/flow/login?redirect_after_login=/slamofficial"]} text= {["FACEBOOK", "INSTAGRAM", "X"]} textSize= "1.5em" textColor="var(--secondary-color)" label= {["FACEBOOK", "INSTAGRAM", "X"]}  textDecoration= "underline" bold= "bold"/>
</main>

<style>

</style>