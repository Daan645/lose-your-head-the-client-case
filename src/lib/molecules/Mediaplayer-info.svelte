<figure class="audio__figure">
  <img
    class="audio__amy"
    width="93"
    alt="foto Amy whine house"
    src="/amy-whine-house.png"
  />
  <p class="audio__dj-text">
    <img class="audio__dj" width="93" alt="foto dj icoon" src="/DJ.svg" /> Sander
    Hoogendorn
  </p>
</figure>

<article class="audio__text">
  <h2>Goud van oud</h2>
  <p class="audio__omschrijving">
    <img width="93" class="audio__klok" alt="tijd icoon" src="/Time.svg" /> Back
    To Black - Amy Winehouse
  </p>
</article>

<style>
  p {
    color: var(--grey);
  }
  
  .audio__figure {
    @media screen and (min-width: 982px) {
      display: flex;
      flex-direction: column;
      gap: 0.8rem;
    }
  }

  .audio__amy {
    height: 3.75rem;
    width: 3.75rem;

    @media screen and (min-width: 982px) {
      width: 10rem;
      height: 10rem;
    }
  }

  .audio__dj-text {
    @media screen and (min-width: 320px) and (max-width: 980px) {
      display: none;
    }
  }
  .audio__dj {
    @media screen and (min-width: 320px) and (max-width: 980px) {
      display: none;
    }
    @media screen and (min-width: 982px) {
      width: 0.8rem;
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
      margin-bottom: 20px;
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
</style>
