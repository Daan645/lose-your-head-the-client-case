<li>
  <button aria-label="casting" class="audio__casthidden-button">
    <img
      width="93"
      class="audio__group-cast"
      alt=""
      src="/Casting.svg"
    >
  </button>
</li>

<style>
  .audio__casthidden-button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
  }

  .audio__group-cast {
    width: 1.25rem;
    height: 1.25rem;
    
    @media screen and (min-width: 982px) {
      display: none;
    }
  }
</style>
