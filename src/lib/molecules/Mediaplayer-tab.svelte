<script>
  import MediaPopOut from "../atoms/Media-pop-out.svelte";
</script>

<ul class="audio__list">
  <li class="audio__link"><a href="/">LIVE</a></li>
  <li class="audio__link"><a href="/">STATIONS</a></li>
  <MediaPopOut />
</ul>

<span class="audio__line"></span>

<style>
  a {
    color: var(--grey);
    cursor: pointer;
  }

  /* TABS DESKTOP */
  .audio__list {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 2rem;
    font-family: "BrutalType";
    font-weight: 900;
    align-items: center;
    width: 100%;
    @media only screen and (min-width: 320px) and (max-width: 980px) {
      display: none;
    }
  }

  .audio__link {
    list-style-type: none;
  }

  .audio__line {
    @media only screen and (min-width: 320px) and (max-width: 980px) {
      display: none;
    }

    @media only screen and (min-width: 982px) {
      width: 312px;
      height: 2px;
      background-color: var(--grey);
    }
  }

  .audio__link a:hover {
        color: var(--secondary-color);
        border-bottom: solid 0.2rem var(--secondary-color);
        transition: 0.2s ease-in;
    }
    .audio__link:active{
        color: var(--secondary-color);
        border-bottom: solid 0.2rem var(--secondary-color);
    }
</style>
