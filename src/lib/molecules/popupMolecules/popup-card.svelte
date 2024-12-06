<script>
    import { onMount } from 'svelte';
  
    let items = Array(10).fill({
      name: 'Back to black - Amy Winehouse',
      image: 'amy-whine-house.png'
    });
  
    let container;
  
    onMount(() => {
      const scrollableElement = container;
  
      scrollableElement.addEventListener('scroll', () => {
        const scrollY = scrollableElement.scrollTop;
        const maxScroll = scrollableElement.scrollHeight - scrollableElement.clientHeight;
  
        const scrollProgress = scrollY / maxScroll;
  
        scrollableElement.querySelectorAll('.liedjes-container').forEach((item, index) => {
          const itemProgress = Math.min(1, Math.max(0, (scrollProgress - (index * 0.1))));
  
          const opacity = Math.max(0, itemProgress);
          const scale = 1 + itemProgress * 0.5;
          const y = (itemProgress * 150) + 'px'; 
  
          item.style.opacity = opacity;
          item.style.transform = `scale(${scale}) translateY(${y})`;  
        });
      });
    });
  </script>
  
  <div class="liedjes-scrollable" bind:this={container}>
    <div>
      {#each items as item}
        <div class="liedjes-container">
          <figure>
            <img class="image-amy" src="{item.image}" width="93" alt="foto amy winehouse">
          </figure>
          <article class="liedjes-text">
            <h3>Goud van oud</h3>
            <p>{item.name}</p>
          </article>
        </div>
      {/each}
    </div>
  </div>
  
  <style>
    .liedjes-scrollable {
      max-height: 824px;
      width: 320px;
      overflow-y: auto;
      scrollbar-width: thin;
      scrollbar-color: #ccc transparent;
      margin-top: 20px;
    }
  
    .liedjes-scrollable::-webkit-scrollbar {
      width: 8px;
    }
  
    .liedjes-scrollable::-webkit-scrollbar-thumb {
      background-color: #ccc;
      border-radius: 4px;
    }
  
    .liedjes-scrollable::-webkit-scrollbar-track {
      background-color: transparent;
    }
  
    .liedjes-container {
      display: flex;
      flex-direction: row;
      gap: 0.5em;
      border-top: 1px solid var(--grey);
      border-bottom: 1px solid var(--grey);
      width: 320px;
      padding: 10px;
      opacity: 0;  
      transform: scale(0.5) translateY(50px); 
      transition: transform 0.3s ease, opacity 0.3s ease;
    }
  
    .liedjes-text {
      display: flex;
      flex-direction: column;
      gap: 0.5em;
      width: 250px;
    }
  </style>
  