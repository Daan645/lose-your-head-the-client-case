<script>
    import Slideinmenu_link from '../atoms/Slideinmenu_link.svelte';
    export let menuVisible = false; // Prop to control visibility
    import { gsap } from "gsap";


    let animationInitialized = false;

    $: if (menuVisible && !animationInitialized) {
        animationInitialized = true; // Avoid duplicate animations
        runAnimation();
    }

    

    function runAnimation() {

        const menu = document.querySelectorAll(".menu");
        gsap.fromTo(
            menu,
            { y: 230 , opacity: 0}, // Start position
            { y: 130, duration: 1.5, ease: "back.out", stagger: 0.2, delay: 0.5 , opacity: 1}
        );
        const boxes = Array.from(document.querySelectorAll(".box")).reverse();

        gsap.fromTo(
            boxes,
            { y: 100, opacity: 0 }, // Start position
            { y: 0, opacity: 1, duration: 1.5, ease: "back.out", stagger: 0.2 }
        );

        const ballstwo = Array.from(document.querySelectorAll(".balltwo"));

        gsap.fromTo(
            ballstwo,
            { x: -50, opacity: 0 }, // Start position
            { x: 20, opacity: 1, duration: 2, ease: "back.out" }
        );
    }
   

        

</script>

<nav class="menu" class:visible={menuVisible}>
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
        opacity: 0;
        display: none;

        & .box{
            transform: translateY(1000%);
            color: white;
        }
    }

  
    nav.visible  {
        display: flex; /* Ensure the menu becomes visible */
        align-items: center;
        gap: 0px;
        transform: translateY(100%);
        & .box:nth-child(1){
            background: rgb(255,255,255);
            background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,215,0,1) 100%);
            width: 3vw;
        }
        & .box:nth-child(2){
            background: rgb(66,99,66);
            background: linear-gradient(90deg, rgba(66,99,66,1) 0%, rgba(91,143,91,1) 50%, rgba(66,99,66,1) 100%);
            width: 16vw;
        }
        & .box:nth-child(3){
            background: rgb(21,42,21);
            background: linear-gradient(90deg, rgba(21,42,21,1) 0%, rgba(50,77,50,1) 50%, rgba(21,42,21,1) 100%);
            width: 32vw;

        }
        & .box:nth-child(4){
            background: rgb(66,99,66);
            background: linear-gradient(90deg, rgba(66,99,66,1) 0%, rgba(91,143,91,1) 50%, rgba(66,99,66,1) 100%);
            width: 52vw;
        }
        & .box:nth-child(5){
            background: rgb(21,42,21);
            background: linear-gradient(90deg, rgba(21,42,21,1) 0%, rgba(50,77,50,1) 50%, rgba(21,42,21,1) 100%);
            width: 62vw;
        }
        & .box:nth-child(6){
            background: rgb(66,99,66);
            background: linear-gradient(90deg, rgba(66,99,66,1) 0%, rgba(91,143,91,1) 50%, rgba(66,99,66,1) 100%);
            width: 72vw;
        }
        & .box:nth-child(7){
            background: rgb(21,42,21);
            background: linear-gradient(90deg, rgba(21,42,21,1) 0%, rgba(50,77,50,1) 50%, rgba(21,42,21,1) 100%);
            width: 80vw;
            border-radius: 16px;
        }
    }

    nav.visible div{
        width: 100px;
        height: 50px;
        background: rgb(131,105,83);
        background: linear-gradient(100deg, rgba(131,105,83,1) 0%, rgba(78,64,16,1) 48%, rgba(131,105,83,1) 100%);
    }


   


</style>
    
