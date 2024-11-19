<section class="audio" aria-label="Audio Player">
    <div class="audio__container">
        <section class="audio__player">
            <!-- navigation media player-->
            <ul class="audio__list">
                <li class="audio__link"><a href="/">LIVE</a></li>
                <li class="audio__link"><a href="/">STATIONS</a></li>
                <li><img  width="93px" class="audio__list-link" alt="pop out" src="/Pop-out.svg"></li>
            </ul>

            <span class="audio__line"></span>

            <figure class="audio__figure">
                <img class="audio__amy" width="93px" alt="foto Amy whine house" src="/amy-whine-house.png">
                <p class="audio__dj-text"><img class="audio__dj" width="93px" alt="foto dj icoon" src="/DJ.svg"> Sander Hoogendorn</p>
            </figure>

            <article class="audio__text">
                <h2>Goud van oud</h2>
                <p class="audio__omschrijving"><img width="93px" class="audio__klok" alt="tijd icoon" src="/Time.svg"> Back To Black - Amy Winehouse</p>
            </article>

            <ul class="audio__group">
                <ul class="audio__kijk-live">
                    <img  width="93px" class="audio__group-live" id="audio__play-btn" alt="kijk live button" src="/live-icon.svg">
                    <li>Kijk live</li>
                </ul>
                <li><img  width="93px" class="audio__group-cast" id="audio__play-btn" alt="casting button" src="/Casting.svg"></li>
                <li><img  width="93px" class="audio__group-play" id="audio__play-btn" alt="play button" src="/play-button.svg"></li>
                <ul class="audio__whats-app">
                    <img  width="93px" class="audio__group-whatsapp" id="audio__play-btn" alt="whats app button" src="/Whatsapp-Icon-Link.svg">
                    <li>App studio</li>
                </ul>
            </ul>

            <section class="audio__volgende">
                <article class="audio__overzicht">
                    <h2 class="audio__overzicht-header">Eerder op radio Veronica</h2>
                    <div class="audio__artiesten-container">
                    <article class="audio__tijd">
                        <h3 class="audio-tijd-header">Nu</h3>
                        <span class="audio__volgende-lijn"></span>
                        <p>16:45</p>
                        <span class="audio__volgende-lijn"></span>
                    </article>
                        <section class="audio__artiesten-wachtrij">
                            <article>
                                <img class="audio__artiesten-foto" width="93px" src="/amy-whine-house.png" alt="foto album amy winehouse">
                                <h2 class="audio__foto-header">Back to black</h2>
                                <p>Amy winhouse</p>
                                <hr>
                            </article>
                            <article>
                                <img class="audio__artiesten-foto" width="93px" src="/Soul-asylum.png" alt="foto aulbum soul asylum">
                                <h2 class="audio__foto-header">Run away train</h2>
                                <p>Soul Asylum</p>
                                <hr>
                            </article>
                        </section>
                    </div>
                    <article class="audio__lijst">
                        <a class="audio__lijst-link" href="/">
                            Volledige lijst<img class="audio__pijl" width="93px" src="/pijl.svg" alt="pijl icoon volgende lijst">
                        </a>
                    </article>
                </article>
        </section>
    </div>
</section>

<audio id="audio" src="your-audio-file.mp3"></audio>

<style>
    .audio {
        width: 100%;
    }

    .audio__container {
        margin: 0.5rem;

        @media only screen and (min-width: 982px) {
            margin: 0;  
        }
    }

    .audio__player {
        display: flex;
        flex-direction: row;
        gap: 0.8rem;
        padding: 5px;
        width: 96vw;
        height: 70px;
        box-shadow: 7px 3px 25px 0px rgba(213 210 213);
        border-radius: 5px;
        position: absolute;
        bottom: 110px;

        @media only screen and (min-width: 600px) and (max-width: 980px){
            width: 98vw;
        }

        @media only screen and (min-width: 982px) {
            position: unset;
            height: 900px;
            width: 312px ;
            display: flex;
            flex-direction: column;
            padding: 1rem;
            align-items: center;
        }
    }

    .audio__amy {
        height: 3.75rem;
        width: 3.75rem;
        
        @media only screen and (min-width: 982px) {
            width: 10rem;
            height: 10rem;
        }
    }

    .audio__text {
        gap: 1rem;
        display: flex;
        flex-direction: column;
        gap: 0.2rem;

        @media only screen and (min-width: 982px) {
            align-items: center;
            gap: 0.8rem;
        }
    }
  
    h2 {
        width: 155px;
    }

    .audio__klok {
        width: 1rem;
    }

    .audio__omschrijving {
        display: flex;
        flex-direction: row;
        gap: 0.2rem;
        width: 14rem;
        height: 1em; 
        font-size: 14px;
    }

    .audio__group {
        display: flex;
        flex-direction: row;
        gap: 0.7rem;
        align-items: center;
        justify-content: flex-end;
        padding: 0.5rem;
        margin-left: auto;

        @media only screen and (min-width: 600px) and (max-width: 980px){
            justify-content: flex-end;
        }

        @media only screen and (min-width: 982px) {
            align-items: unset;
        }

    }

    .audio__group-cast {
        width: 1.5rem;
        height: 1.5rem;

        @media only screen and (min-width: 982px) {
            display: none;
        }
    }

    .audio__group-play {
        height: 1.5rem;
        width: 1.5rem;

        @media only screen and (min-width: 982px) {
            height: 2.5rem;
            width: 2.5rem;
        }
    }

    /* TABS DESKTOP */
    .audio__list {
        display: flex;
        flex-direction: row;
        gap: 2rem;
        overflow: auto;
        font-family: "BrutalType";
        font-weight: 900;
        align-items: center;
        overflow: hidden;
        width: 100%;


        @media only screen and (min-width: 320px) and (max-width: 980px){
            display: none;
        }
    }

    .audio__figure {
        @media only screen and (min-width: 982px) {
        display: flex;
        flex-direction: column;
        gap: 0.8rem;
        }
    }

    .audio__dj-text {
        @media only screen and (min-width: 320px) and (max-width: 980px){
            display: none;
        }
    }

    .audio__dj {
        @media only screen and (min-width: 320px) and (max-width: 980px){
            display: none;
        }


        @media only screen and (min-width: 982px) {
            width: 0.8rem;
        }
    }

    .audio__line {
        @media only screen and (min-width: 320px) and (max-width: 980px){
            display: none;
        }


        @media only screen and (min-width: 982px) {
            width: 100%;
            height: 2px;
            background-color: var(--grey);
        }
    }

    

    .audio__link {
        list-style-type: none;
    }

    a {
        color: var(--grey);
        cursor: pointer;
    }

    .audio__list-link {
        @media only screen and (min-width: 960px) {
            width: 1.5rem;
            margin-left: auto;
        }
    }

    .audio__group-live {
        width: 2.5rem;
        height: 2.5rem;
    }

    .audio__group-whatsapp {
        width: 2.5rem;
        height: 2.5rem;
    }

    .audio__kijk-live {
        @media only screen and (min-width: 320px) and (max-width: 980px){
            display: none;
        }

        @media only screen and (min-width: 982px) {
            display: flex;
            flex-direction: column;
            align-items: center;

        }
    }

    .audio__whats-app {
        @media only screen and (min-width: 320px) and (max-width: 980px){
            display: none;
        }

        @media only screen and (min-width: 982px) {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }

    .audio__link a:hover {
        color: var(--secondary-color);
        border-bottom: solid 0.2rem var(--secondary-color);
        transition: 0.2s ease-in;
    }

    /* Volgende */
    .audio__volgende {
    @media only screen and (min-width: 320px) and (max-width: 980px){
        display: none;
    }

    @media only screen and (min-width: 982px) {
        display: flex;
        flex-direction: row;
        width: 20px;
        gap: 1.5rem;
        margin-right: auto;
        }
    }

    .audio__overzicht {
        @media only screen and (min-width: 982px) {
            padding: 0.2rem;
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }
    }

    .audio__artiesten-container {
        @media only screen and (min-width: 982px) {
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
        }
    }

    .audio__overzicht-header {
        width: 280px;
    }

    .audio__tijd {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 0.5rem;
    }

    .audio-tijd-header {
        color: var(--secondary-color);
    }

    .audio__volgende-lijn {
        border-left: 2px dashed var(--grey);
        width: 80px;
        height: 130px;
        display: inline-block;
    }

    .audio__artiesten-wachtrij {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

    .audio__artiesten-foto {
        width: 80px;
        height: 80px;
    }

    .audio__foto-header {
    width: 170px;
    }

    .audio__artiesten-wachtrij p {
        padding-bottom: 1rem;
    }

    .audio__lijst-link {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        font-size: 1.2rem;
        color: var(--secondary-color);
        font-weight: bold;
    }

    .audio__pijl {
        width: 24px;
        margin-left: auto;
    }
</style>