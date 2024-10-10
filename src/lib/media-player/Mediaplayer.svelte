<section class="audio" aria-label="Audio Player">
    <div class="audio__container">
        <figure class="audio__player">
            <img class="audio__amy" width="93px" id="audio__play-btn" alt="play button" src="/amy-whine-house.png">
            <h2>Goud van oud</h2>
            <p class="audio__omschrijving"><img width="93px" class="audio__klok" alt="tijd icoon" src="/Time.svg"> Back To Black - Amy Winehouse</p>
            <ul class="audio__group">
                <li><img  width="93px" class="audio__group-cast" id="audio__play-btn" alt="play button" src="/Casting.svg"></li>
                <li><img  width="93px" class="audio__group-play" id="audio__play-btn" alt="play button" src="/play-button.svg"></li>
            </ul>

        </figure>
    </div>
</section>
<audio id="audio" src="your-audio-file.mp3"></audio>

  <style>
    section {
        padding: 5px;
        width: 100vw;
    }

    .audio__container {
        padding: 5px;
        width: 96%;
        height: 70px;
        box-shadow: 1px 2px 2px 2px gray;
        border-radius: 5px;
        position: absolute;
        bottom: 110px;
    }

    .audio__player {
        display: grid;
        grid-template-columns: 60px 120px 50px 50px;
        grid-template-rows: 25px 25px;
        gap: 0.8rem;
    }

    .audio__amy {
        height: 3.75rem;
        width: 3.75rem;
        grid-column: 1/2;
        grid-row: 1/3;
    }
  
    h2 {
        grid-column: 2/3;
        grid-row: 1/1;
        width: 155px;
    }

    .audio__klok {
        width: 1rem;
    }

    .audio__omschrijving {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.2rem;
        width: 14rem;
        height: 1em;
        grid-column: 2/3;
        grid-row: 2/3;   
        font-size: 14px;
    }

    .audio__group {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        grid-column: 5/6;
        grid-row: 1/3;
        align-items: center;
        justify-content: center ;
    }

    .audio__group-cast {
        width: 2rem;
        height: 2rem;
        /* grid-column: 5/6;
        grid-row: 1/2;  */
    }

    .audio__group-play {
        height: 2rem;
        width: 2rem;
        /* grid-column: 6/7;
        grid-row: 1/2;  */
    }
  </style>