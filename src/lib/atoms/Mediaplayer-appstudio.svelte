<li>
  <a href="/" aria-label="whats app" class="audio__whats-app">
    <img
      width="93"
      class="audio__group-whatsapp"
      id="audio__app-btn"
      alt="whats app button"
      src="/Whatsapp-Icon-Link.svg"
    />
    <p>App studio</p>
  </a>
</li>

<style>
  .audio__whats-app {
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

  .audio__group-whatsapp {
    width: 1.25rem;
    height: 1.25rem;
  }

  p {
    color: var(--grey);
  }
</style>
