<li>
  <button aria-label="app studio" class="audio__apphidden-button">
    <img
      width="93"
      class="audio__group-whatsapp"
      alt=""
      src="/Whatsapp-Icon-Link.svg"
    >
    App studio
  </button>
</li>

<style>
  .audio__apphidden-button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
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

  .audio__group-whatsapp {
    width: 1.25rem;
    height: 1.25rem;
  }
</style>
