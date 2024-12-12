<script>
    import Slideinmenu_link from '../atoms/Slideinmenu_link.svelte';
    export let menuVisible = false; // Prop to control visibility

</script>

<nav class="sldie " class:visible={menuVisible}>
        <Slideinmenu_link label="Frequenties" sublabel="De FM frequenties van Radio Veronica"/>
        <Slideinmenu_link label="Programma Overzicht" sublabel="Alle programma's van radio Veronica"/>
        <Slideinmenu_link label="DJ Overzicht" sublabel="Alle DJ's van Radio Veronica"/>
        <Slideinmenu_link label="Privacyverklaring" sublabel="Informatie over je gegevens"/>
        <Slideinmenu_link label="Gebruikersvoorwaarden" sublabel="De algemene voorwaarden"/>
        <Slideinmenu_link label="Cookieverklaring" sublabel="Overzicht van gebruikte cookies"/>
        <Slideinmenu_link label="Cookie voorkeuren" sublabel="Bekijk de voorkeuren"/> 
</nav>

<style>
    nav{
        background-color: var(--light);
       position: absolute;
        margin-top: 69.30px;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        z-index: 90;
        width: 100%;
        height: 100%;
        transition:  right  0.3s ease-out;
        top: 0;
        right: -400vw;
        display: none;
        view-transition-name: slideinmenu;
    }

    .visible {
        display: flex; /* Ensure the menu becomes visible */
        right: 0; /* Slide into view */
        transition:  right  0.3s ease-out;        
   
        animation: psychedelic-tunnel 10s  alternate;
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    display: flex;
  }
    

    @keyframes psychedelic-tunnel {
    0% {
        background: radial-gradient(circle, rgba(255,0,255,1) 0%, rgba(255,255,0,1) 100%);
        filter: blur(0px) hue-rotate(0deg);
        transform: perspective(500px) rotateX(0deg) rotateY(0deg) scale(1);
    }
    10% {
        background: conic-gradient(from 0deg, rgba(0,255,255,1), rgba(255,0,255,1), rgba(0,255,135,1));
        filter: blur(5px) hue-rotate(45deg);
        transform: perspective(500px) rotateX(45deg) rotateY(30deg) scale(1.2);
    }
    20% {
        background: conic-gradient(from 90deg, rgba(255,255,0,1), rgba(255,0,150,1), rgba(0,210,255,1));
        filter: blur(15px) hue-rotate(90deg);
        transform: perspective(800px) rotateX(90deg) rotateY(-30deg) scale(0.9);
    }
    40% {
        background: repeating-radial-gradient(circle, rgba(0,255,135,1) 0%, rgba(58,123,213,1) 10%, rgba(255,78,80,1) 15%);
        filter: blur(25px) hue-rotate(180deg);
        transform: perspective(600px) rotateX(-45deg) rotateY(60deg) scale(1.5);
    }
    60% {
        background: radial-gradient(circle, rgba(255,0,255,1), rgba(0,255,255,1), rgba(255,255,0,1));
        filter: blur(20px) hue-rotate(270deg);
        transform: perspective(1000px) rotateX(60deg) rotateY(-60deg) scale(1.1);
    }
    80% {
        background: conic-gradient(from 180deg, rgba(255,0,150,1), rgba(249,212,35,1), rgba(0,210,255,1));
        filter: blur(10px) hue-rotate(360deg);
        transform: perspective(400px) rotateX(-90deg) rotateY(90deg) scale(0.8);
    }
    100% {
        background: radial-gradient(circle, rgba(255,0,255,1) 0%, rgba(255,255,0,1) 100%);
        filter: blur(0px) hue-rotate(0deg);
        transform: perspective(500px) rotateX(0deg) rotateY(0deg) scale(1);
    }
}





</style>
    
