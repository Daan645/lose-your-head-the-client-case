<section class="audio" aria-label="Audio Player">
    <div class="audio__container">
        <section class="audio__player">
            <!-- navigation media player-->
            <ul class="audio__list">
                <li class="audio__link"><a alt="LIVE" href="/">LIVE</a></li>
                <li class="audio__link"><a alt="STATIONS" href="/">STATIONS</a></li>
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
            height: 500px;
            width: 300px ;
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
  </style>