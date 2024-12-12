<script>
    import Header from "../lib/organism/Header.svelte";
    import Mobilenav2 from "../lib/organism//Mobilenav2.svelte";
    import Footer from '../lib/organism/Footer.svelte';

    import { onNavigate } from '$app/navigation';

        onNavigate((navigation) => {
            if (!document.startViewTransition) return;

            return new Promise((resolve) => {
                document.startViewTransition(async () => {
                    resolve();
                    await navigation.complete;
                });
            });
});
</script>

<Header/>
<Mobilenav2/>
<slot></slot>

<Footer/>  

<style></style>