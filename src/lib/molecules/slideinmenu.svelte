<script>
    import Slideinmenu_link from '../atoms/Slideinmenu_link.svelte';
    export let menuVisible = false; // Prop to control visibility
    import { onMount } from 'svelte';
    import { gsap } from "gsap";


    onMount(() => {
        // Select all .box elements, reverse their order, and animate
        const boxes = Array.from(document.querySelectorAll(".box")).reverse();

        gsap.to(boxes, {
            y: 0, 
            duration: 1.5, 
            ease: "back.out", 
            stagger: 0.2,
            delay: 1

        });
        const ballstwo = Array.from(document.querySelectorAll(".balltwo"));

        gsap.to(ballstwo, {
            x: 20, 
            duration: 1.5, 
            ease: "back.out", 
            delay: 2.5

        });

    });
</script>

<nav class:visible={menuVisible}>
        <Slideinmenu_link label="" sublabel="De FM frequenties van Radio Veronica"/>
        <Slideinmenu_link label="" sublabel="Alle programma's van radio Veronica"/>
        <Slideinmenu_link label="DJ Overzicht" sublabel="Alle DJ's van Radio Veronica"/>
        <Slideinmenu_link label="Privacyverklaring" sublabel="Informatie over je gegevens"/>
        <Slideinmenu_link label="Gebruikersvoorwaarden" sublabel="De algemene voorwaarden"/>
        <Slideinmenu_link label="Cookieverklaring" sublabel="Overzicht van gebruikte cookies"/>
        <Slideinmenu_link label="Cookie voorkeuren" sublabel="Bekijk de voorkeuren"/> 
        <div class="box"></div>
</nav>

<style>
    nav{
        position: absolute;
        display: flex;
        flex-direction: column;
        z-index: 90;
        width: 100%;
        height: 100vh;
        transform: translateY(0%);
        display: none;
        bottom: 95px ;
        & .box{
            transform: translateY(1000%);
            color: white;
        }
    }

    nav.visible  {
        display: flex; /* Ensure the menu becomes visible */
        align-items: center;
        gap: 0px;
        animation: mainslide 0.3s forwards;

        & .box:nth-child(1){
            background-color: gold;
            width: 3vw;
        }
        & .box:nth-child(2){
            background-color: #0D2801;
            width: 16vw;
        }
        & .box:nth-child(3){
            background-color: #0E2B01;
            width: 32vw;

        }
        & .box:nth-child(4){
            background-color: #0D2801;
            width: 52vw;
        }
        & .box:nth-child(5){
            background-color: #0E2B01;
            width: 62vw;
        }
        & .box:nth-child(6){
            background-color: #0E2B01;
            width: 72vw;
        }
        & .box:nth-child(7){
            background-color: #0D2801;
            width: 80vw;
            border-radius: 16px;
        }
    }

    nav.visible div{
        width: 100px;
        height: 50px;
        background-color: brown;
        
    }


    @keyframes mainslide{
        0%{
            transform: translateY(100%);
        }

        100%{
            transform: translateY(30%);
        }
    }



</style>
    
