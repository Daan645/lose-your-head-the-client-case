<script>
    import Button from "./Button.svelte";
  
    export let numberOfLi = 0;
    export let text = [ ];
    export let textColor = "var(--dark)";
    export let textSize = "var(--text-size)";
    export let textDecoration = "none";
    export let bold = "";
    export let styleType = "none";
    export let href = [ ];
    export let label = [ ];
  </script>
  
  <ul>
    {#each Array(numberOfLi) as _, index}
      <li style="list-style-type: {styleType};">
        <a href={href[index] || "#"} aria-label={label[index]}>
          <p style="color: {textColor}; font-size: {textSize}; text-decoration: {textDecoration}; font-weight: {bold};">{text[index]}</p>
        </a>
      </li>
    {/each}
  </ul>
  
  <style>
    /* Voeg je eigen styling hier toe */
  a {
    cursor: pointer;
  }
  </style>