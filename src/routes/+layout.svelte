<script>
    import Header from "../lib/header/Header.svelte";
    import Mobilenav from "../lib/mobile-nav/Mobilenav.svelte";
    import Footer from '../lib/footer/Footer.svelte';
    import Mediaplayer from "../lib/media-player/Mediaplayer.svelte";
</script>

<!-- <Header/> -->
<Mobilenav/>
<Mediaplayer />
<!-- <Footer/>   -->
<slot></slot>
