<li>
  <button aria-label="kijk live" class="audio__livehidden-button">
    <img
      width="93"
      class="audio__group-live"
      alt=""
      src="/live-icon.svg"
    >
    Kijk live
  </button>
</li>

<style>
  .audio__livehidden-button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: var(--grey);


    @media screen and (min-width: 320px) and (max-width: 980px) {
      display: none;
    }
    
    @media screen and (min-width: 982px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.2rem;
    }
  }

  .audio__group-live {
    width: 1.25rem;
    height: 1.25rem;
  }
</style>
