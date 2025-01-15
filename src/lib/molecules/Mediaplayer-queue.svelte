<div class="audio__volgende">
  <article class="audio__overzicht">
    <h2 class="audio__overzicht-header">Eerder op radio Veronica</h2>
    <div class="audio__artiesten-container">
      <article class="audio__tijd">
        <h3 class="audio-tijd-header">Nu</h3>
        <span class="audio__volgende-lijn"></span>
        <p class="audio__tijd-digitaal">16:45</p>
        <span class="audio__volgende-lijn"></span>
      </article>
      <div class="audio__artiesten-wachtrij">
        <article>
          <img
            class="audio__artiesten-foto"
            width="93"
            src="/amy-whine-house.png"
            alt="foto album amy winehouse"
          />
          <h2 class="audio__foto-header">Back to black</h2>
          <p>Amy winhouse</p>
          <span></span>
        </article>
        <article>
          <img
            class="audio__artiesten-foto"
            width="93"
            src="/Soul-asylum.png"
            alt="foto aulbum soul asylum"
          />
          <h2 class="audio__foto-header">Run away train</h2>
          <p>Soul Asylum</p>
          <span></span>
        </article>
      </div>
    </div>
    <div class="audio__lijst">
      <button aria-label="volledige lijst" class="audio__hidden-button">
        Volledige lijst<img
          class="audio__pijl"
          width="93"
          src="/pijl.svg" alt=""
        />
      </button>
    </div>
  </article>
</div>

<style>
  .audio__volgende {
    @media screen and (min-width: 320px) and (max-width: 980px) {
      display: 
      none;
    }

    @media screen and (min-width: 982px) {
      display: flex;
      flex-direction: row;
      width: 20px;
      gap: 1.5rem;
      margin-right: auto;
      position: relative;
    }
  }

  .audio__overzicht {
    @media screen and (min-width: 982px) {
      padding: 0.2rem;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
  }

  .audio__overzicht-header {
    width: 280px;
  }

  .audio__artiesten-container {
    @media screen and (min-width: 982px) {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
    }
  }

  .audio__tijd {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
  }

  .audio__volgende-lijn {
    border-left: 2px dashed var(--grey);
    width: 32px;
    height: 64px;
    margin-bottom: 1em;
    display: inline-block;
    margin: 20px 0px 0px 20px;
  }

  .audio-tijd-header {
    color: var(--secondary-color);
    position: absolute;
    top: 2.5em;
    left: 0.7em;
  }

  .audio__volgende-lijn {
    border-left: 2px dashed var(--grey);
    width: 32px;
    height: 64px;
    margin-bottom: 1em;
    display: inline-block;
    margin: 20px 0px 0px 20px;
  }

  .audio__tijd-digitaal {
    position: absolute;
    top: 9em;
    left: 0.5em;
  }

  .audio__artiesten-wachtrij {
    display: flex;
    flex-direction: column;
    gap: 1.5em;
  }

  .audio__artiesten-wachtrij article {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
  }

  .audio__artiesten-foto {
    width: 80px;
    height: 80px;

    @media screen and (min-width: 982px) {
      width: 50px;
      height: 50px;
    }
  }

  .audio__hidden-button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    display: flex;
    width: 100%;
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

  /* Grid */
  .audio__artiesten-wachtrij article:nth-child(1) .audio__artiesten-foto {
    grid-column: 1 / 2;
    grid-row: 1 / 3;
  }
  .audio__artiesten-wachtrij article:nth-child(2) .audio__artiesten-foto {
    grid-column: 1 / 2;
    grid-row: 1 / 3;
  }
  .audio__foto-header {
    width: 170px;
  }
  .audio__artiesten-wachtrij article:nth-child(1) .audio__foto-header {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
  }
  .audio__artiesten-wachtrij article:nth-child(2) .audio__foto-header {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
  }
  .audio__artiesten-wachtrij p {
    padding-bottom: 1rem;
  }
  .audio__artiesten-wachtrij article:nth-child(1) p {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
  }
  .audio__artiesten-wachtrij article:nth-child(2) p {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
  }
  .audio__artiesten-wachtrij article:nth-child(1) span {
    display: inline-block;
    background-color: var(--grey);
    height: 1px;
    grid-column: 2 / 3;
    grid-row: 3 / 4;
  }
  .audio__artiesten-wachtrij article:nth-child(2) span {
    display: inline-block;
    background-color: var(--grey);
    height: 1px;
    grid-column: 2 / 3;
    grid-row: 3 / 4;
  }
</style>
