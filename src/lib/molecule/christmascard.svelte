<script>
  import { onMount } from "svelte";
  import {
    savedCardNumber,
    topgradient,
    bottomgradient,
    lightbulbscolor,
  } from "$lib/stores/cardStore";
  import Fallingsnow from "$lib/atoms/christmas/fallingsnow.svelte";
  import Lightbulb from "$lib/atoms/christmas/lightbulb.svelte";
  import NumberButton from "$lib/atoms/numberButton.svelte";

  export let programLink = "";
  export let programName = "Unnamed Program";
  export let showLogo = "";
  export let thumbnailImgSrc = "";
  let PrimaryColors = ["#1b2d53", "#37508d", "#81a4dc"];
  // "#216789", "#c0cad6"
  let SecondaryColors = [
    "#2EBF61",
    "#FF272A",
    "#FFA500",
    "#FFD700",
    "#FFC0CB",
    "#FAFAFA",
  ];
  //
  let TertiaryColors = ["#E3DAD1", "#C0CAD6", "#F1EEE7", "#DEE5EB"];
  // "#FEFEFD"
  let Colors = [];

  function setpropertyofcolor(colorValue, color) {
    const card = document.getElementById(`popover-${programLink}-card`);
    const container = card.querySelector(".popover-card");
    if (colorValue === 1) {
      topgradient.set(color);
      container.style.setProperty("--top-gradient", color);
    } else if (colorValue === 2) {
      lightbulbscolor.set(color);
      const bulbs = card.querySelectorAll(".bubble");
      bulbs.forEach((bulb) => {
        bulb.style.setProperty("--bulblight", color);

        // if color is the color of the background, add class
        if (color === "white") {
          bulb.classList.add("white");
        } else {
          bulb.classList.remove("white");
        }
      });
    } else if (colorValue === 3) {
      container.style.setProperty("--bottom-gradient", color);
      bottomgradient.set(color);
    }
  }

  function toggleColor(colorValue, color) {
    if (document.startViewTransition) {
      document.startViewTransition(setpropertyofcolor(colorValue, color));
    } else {
      setpropertyofcolor(colorValue, color);
    }
  }

  onMount(() => {
    savedCardNumber.subscribe((value) => {
      function gwneenfunctie() {
        Colors = [];
        if (value === 1) {
          Colors = PrimaryColors.map((color) => ({ value: 1, color }));
        } else if (value === 2) {
          Colors = SecondaryColors.map((color) => ({ value: 2, color }));
        } else if (value === 3) {
          Colors = TertiaryColors.map((color) => ({ value: 3, color }));
        }
      }

      if (document.startViewTransition) {
        document.startViewTransition(gwneenfunctie);
      } else {
        gwneenfunctie();
      }
    });
  });

  const firstbutton = 1;
  const thirdbutton = 3;
</script>

<div
  data-sveltekit-preload-data="hover"
  class="popover"
  popover
  id="popover-{programLink}-card"
  style="--vt:{programLink}"
>
  <div class="popover-container">
    <div class="popover-card">
      <NumberButton cardNumber={firstbutton} />
      <Fallingsnow />
      <span class="name">Speciaal voor ...</span>
      <span class="title">{programName}</span>
      <Lightbulb />
      <span class="listennow">Luister nu</span>
      <NumberButton cardNumber={thirdbutton} />

      <picture class="showlogo">
        <source
          srcset={thumbnailImgSrc
            ? `https://fdnd-agency.directus.app/assets/${thumbnailImgSrc}?format=webp`
            : "/path/to/default/image.jpg"}
          alt={programName}
        />
        <source
          srcset={thumbnailImgSrc
            ? `https://fdnd-agency.directus.app/assets/${thumbnailImgSrc}?format=jpg`
            : "/path/to/default/image.jpg"}
          alt={programName}
        />
        <img
          loading="lazy"
          src={thumbnailImgSrc
            ? `https://fdnd-agency.directus.app/assets/${thumbnailImgSrc}?format=jpeg`
            : "/path/to/default/image.jpg"}
          alt={programName}
        />
      </picture>

      <picture class="logo">
        <source
          srcset={showLogo
            ? `https://fdnd-agency.directus.app/assets/${showLogo}?format=webp&height=96&width=96`
            : "/path/to/default/image.jpg"}
          alt={programName}
        />
        <source
          srcset={showLogo
            ? `https://fdnd-agency.directus.app/assets/${showLogo}?format=jpg&height=96&width=96`
            : "/path/to/default/image.jpg"}
          alt={programName}
        />
        <img
          loading="lazy"
          src={showLogo
            ? `https://fdnd-agency.directus.app/assets/${showLogo}?format=jpeg&height=96&width=96`
            : "/path/to/default/image.jpg"}
          alt={programName}
        />
      </picture>
    </div>

    <div class="popover-menu">
      <button class="button">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 4L4 20M4 4L20 20"
            stroke="#FF272A"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <div class="color-picker primary">
        {#each Colors as color (color.color)}
          <button
            style="background: {color.color}"
            on:click={() => toggleColor(color.value, color.color)}
          />
        {/each}
      </div>

      <button class="button">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_672_4473)">
            <path
              d="M20 6L9 17L4 12"
              stroke="white"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_672_4473">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>
    </div>
  </div>
</div>

<style>
  /* Edit buttons */
  :global(.popover-card #number-1) {
    top: 1rem;
    left: 85%;
    transform: translateX(-50%);
  }

  :global(.popover-card #number-3) {
    top: calc(100% - 3.5rem);
    left: 48%;
    transform: translateX(-50%);
  }

  /* Card text */

  span {
    position: absolute;
    color: white;
    text-transform: uppercase;
  }

  .name {
    top: 2rem;
    left: 1rem;
    font-size: 1rem;
    font-weight: 500;
    text-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  }

  .title {
    top: 3.7rem;
    left: 1rem;
    font-size: 2.2rem;
    font-weight: 700;
    padding-right: 20px;
    text-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  }

  .listennow {
    top: 17.5rem;
    right: -4rem;
    font-size: 2rem;
    font-weight: 900;
    rotate: -90deg;
  }

  .showlogo {
    border-radius: 99999px;
    position: absolute;
    bottom: 1rem;
    left: -3rem;
    width: 15rem;
    height: 15rem;
    overflow: hidden;
    border: 3px solid white;

    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }

  .logo {
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    width: 8rem;
    height: 2.5rem;
    overflow: hidden;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: right;
  }

  /* Popover */

  [popover] {
    z-index: 999;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1000;
    pointer-events: none;
  }

  .popover-container {
    pointer-events: all;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    gap: 0.5rem;
  }

  .popover-container .popover-card {
    --top-gradient: #37508d;
    --bottom-gradient: #fefefd;
    background: linear-gradient(var(--top-gradient), var(--bottom-gradient));
    transition: 0.3s;
    pointer-events: all;
    border: none;
    border-radius: 12px;
    height: fit-content;
    height: 30rem;
    max-width: 20rem;
    width: 100%;
    border-color: #fff;
    position: relative;
    width: 20rem;
  }

  .popover-container .popover-menu {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }

  .popover-container .popover-menu > button,
  .popover-container .popover-menu > div {
    background: white;
    padding: 10px;
    display: grid;
    place-items: center;

    width: 3.5rem;
    border: none;
    border-radius: 12px;
  }

  .popover-container .popover-menu > .button {
    height: 3.5rem;
    cursor: pointer;
    &:hover {
      background: #e4e4e4;
    }
  }

  .popover-container .popover-menu > .button:last-child {
    background: #2ebf61;
    transition: 0.1s;
  }

  .popover-container .popover-menu > .button:last-child:hover {
    background: #238545;
    transition: 0.1s;
  }

  /* 2EBF61 */

  .popover-container .popover-menu .color-picker {
    display: flex;
    align-items: center;
    justify-items: center;
    flex-direction: column;
    gap: 0.5rem;
    padding: 10px;
    height: fit-content;
    min-height: 3.5rem;
    view-transition-name: colorpicker;
  }

  .color-picker button {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    aspect-ratio: 1 / 1;
    border: none;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      filter: brightness(80%);
      transition: 0.3s;
    }

    &:active {
      filter: brightness(40%);
      transition: 0.3s;
    }
  }

  /* in card elements */
  .popover-card {
    position: relative;
    overflow: hidden;
  }
</style>
