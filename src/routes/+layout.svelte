<script>
    import Header from "../lib/organism/Header.svelte";
    import Tabs from '../lib/molecules/tabs.svelte';
    import Mobilenav from "../lib/organism/Mobilenav.svelte";
    import Footer from '../lib/organism/Footer.svelte';
    import Popupcard from '../lib/molecules/popupMolecules/popup-card.svelte';
  import PopupCard from "../lib/molecules/popupMolecules/popup-card.svelte";

  

</script>

<!-- <Header/> -->
<!-- <Tabs /> -->
<!-- <Mobilenav/> -->
<!-- <slot></slot> -->
<!-- <Footer/>   -->

<div class="mediaplayer">
    <div class="container">
        <!-- Mediaplayer -->
        <div class="mediaplayer-content">
            <figure>
                <img class="image-amy" src="amy-whine-house.png" width="93" alt="foto amy winehouse">
            </figure>  
            <article>
                <h2>Goud van oud</h2>
                <p><img src="Time.svg" alt="foto klok">Back to black - Amy whinehouse</p>
            </article>
            <button class="cast">
                <img src="Casting.svg" width="93" alt="foto amy winehouse">
            </button>
            <button>
                <img src="play-button.svg" width="93" alt="foto amy winehouse">
            </button>
        </div>
        <a class="overlay-link" href="#popup1"></a>
    </div>
</div>

<!-- popup -->
<div id="popup1" class="overlay">
    <div class="popup">
        <article class="volgende-lijst">
            <h1>volgende lijst</h1>
            <a class="sluit" href="#"><img class="sluit-svg" src="close.svg" alt=""></a>
        </article>
        <span></span>
        <article class="liedjes">
            <h2>liedjes</h2>
                <PopupCard />
        </article>
    </div>
</div>

<style>
        /* Extra Small Devices (Phones) - 320px */
    @media (min-width: 20em) {
    /* Styles for devices 320px and wider */
    }

    /* Small Devices (Large Phones) - 480px */
    @media (min-width: 30em) {
    /* Styles for devices 480px and wider */
    }

    /* Medium Devices (Tablets) - 768px */
    @media (min-width: 48em) {
    /* Styles for devices 768px and wider */
    }

    /* Large Devices (Desktops) - 1024px */
    @media (min-width: 64em) {
    /* Styles for devices 1024px and wider */
    }

    /* Extra Large Devices (Large Desktops) - 1200px */
    @media (min-width: 75em) {
    /* Styles for devices 1200px and wider */
    }

    /* Ultra-Wide Devices - 1440px */
    @media (min-width: 90em) {
    /* Styles for devices 1440px and wider */
    }

    /* MEDIAPLAYER */
    .mediaplayer {
        position: relative;
    }

    .mediaplayer:after {
        content: "";
    }

    .container {
    position: relative;
    width: 100%;
    max-width: 310px;
    height: 80px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    margin-left: 5px;
    box-shadow: 7px 3px 25px 0px rgba(213 210 213);
    padding: 15px;
    border-radius: 0.5em;
    z-index: 10; 

        @media only screen and (min-width: 20.1em) and (max-width: 30em) {
            position: fixed;
            bottom: 0;
            max-width: 470px;
        }

        @media only screen and (min-width: 30.1em) and (max-width: 48em) {
            position: fixed;
            bottom: 0;
            max-width: 760px;
        }
    }

    .mediaplayer-content {
        display: flex;
        flex-direction: row;
        gap: 0.5em;
    }

    .image-amy {
        width: 48px;
    }

    article {
        display: flex;
        flex-direction: column;
        width: 158px;
        gap: 0.2em;

        @media only screen and (min-width: 21em) and (max-width: 30em) {
            width: 100%;
        }

        @media only screen and (min-width: 30.1em) and (max-width: 48em) {
            width: 100%;
        }
    }

     p {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 100%;

        @media only screen and (min-width: 21em) and (max-width: 30em) {
            text-overflow: unset;
        }

        @media only screen and (min-width: 30.1em) and (max-width: 48em) {
            /* text-overflow: unset;
            width: 100%; */
        }
    }

    button {
        position: relative;
        z-index: 20;
        padding: 0;
        margin: 0;
        border: none;
        background: none;
        cursor: pointer;
    }

    button img {
        width: 30px;
    }

    /* POPUP */
    /* Make sure the overlay link takes the whole screen space */
.overlay-link {
  position: absolute; 
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 20; 
    cursor: pointer; 
    text-indent: -9999px;
    background: rgba(0, 0, 0, 0);
}

.container {
  position: relative;
  width: 100%;
  max-width: 310px;
  height: 80px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  margin-left: 5px;
  box-shadow: 7px 3px 25px 0px rgba(213 210 213);
  padding: 15px;
  border-radius: 0.5em;
  z-index: 10;
}

.mediaplayer-content p,
.mediaplayer-content .image-amy {
  pointer-events: none; 
}

.mediaplayer-content button,
.mediaplayer-content img,
.mediaplayer-content svg {
  pointer-events: auto; 
}


/* Make sure the overlay is clickable by having a higher z-index than the mediaplayer */
.overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  transition: opacity 500ms;
  visibility: hidden;
  opacity: 0;
  z-index: 15;
}

.overlay:target {
  visibility: visible;
  opacity: 1;
}

    .popup {
        /* padding: 20px; */
        background: #fff;
        width: 100%;
        height: 100vh;
        position: relative;
        transition: all 5s ease-in-out;
        display: flex;
        flex-direction: column;
    }

    .volgende-lijst {
        display: flex;
        flex-direction: row;
        gap: 1em;
        width: 100%;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid var(--grey);
    }

    .volgende-lijst > h1 {
        padding: 10px 5px;
    }

    span {
        display: inline-block;
        max-width: 100%;
        height: 3px; 
        background-color: var(--grey); 
    }

    .sluit-svg {
        width:20px;
    }

    .liedjes {
        display: flex;
        flex-direction: column;
    }

    .liedjes > h2{
        text-align: center;
        width: 100%;
        padding: 10px;
        width: 320px;
    }
</style>

