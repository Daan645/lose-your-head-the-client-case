<script>  
    
    export let title = false;
    export let titleText = "";
    export let titleSize = "var(--h2-text-size)";
    export let titleColor = "var(--dark)";
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
  
<section class="ul-component">
  {#if title}
  <h2 style="font-size:{titleSize}; color: {titleColor};">{titleText}</h2> 
  {:else}
<!-- geen title -->
  {/if}
  <ul class="ul-component-list">
    {#each Array(numberOfLi) as _, index}
      <li style="list-style-type: {styleType};">
        <a href={href[index] || "#"} aria-label={label[index]}>
          <p style="color: {textColor}; font-size: {textSize}; text-decoration: {textDecoration}; font-weight: {bold};">{text[index]}</p>
        </a>
      </li>
    {/each}
  </ul>
</section>
  
  <style>
    /* Voeg je eigen styling hier toe */
  section {
    display: flex;
    flex-direction: column;
    width: fit-content;
  }
  
    a {
    cursor: pointer;
  }
  </style>