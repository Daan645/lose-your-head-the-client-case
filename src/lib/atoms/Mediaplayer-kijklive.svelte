<li>
  <a href="/" aria-label="Kijk live" class="audio__kijk-live">
    <img
      width="93"
      class="audio__group-live"
      id="audio__live-btn"
      alt="kijk live button"
      src="/live-icon.svg"
    />
    <p>Kijk live</p>
  </a>
</li>

<style>
  .audio__kijk-live {
    @media only screen and (min-width: 320px) and (max-width: 980px) {
      display: none;
    }
    
    @media only screen and (min-width: 982px) {
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

  p {
    color: var(--grey);
  }
</style>
