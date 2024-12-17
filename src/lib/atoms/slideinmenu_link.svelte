<script>
  export let label = ""; // Changes the label text
  export let sublabel =""
  export let href = "#"; // Changes the href
  export let title = ""; // Changes the alt text

</script>

<li class="box">
    <div class="ball"></div>
    <div class="balltwo"></div>
    <a {title} {href}>
        <div>
            <span>
                {label}
            </span>
            <span>
                {sublabel}
            </span>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/></svg>
    </a>
</li>


<style>


    li{
       border: none;
       border-radius: 16px 16px 0px 0px;

       &:nth-child(1){
            & .ball , .balltwo{
                display: none;
            }
       }

       &:nth-child(2){
        & .ball {
            display: none;
            }
            & .balltwo {
                display: none;
            }
       }
       &:nth-child(3){
        & .ball {
                transform: translateX(400%);
            }
            & .balltwo {
                transform: translateX(400%);
            }
       }
       &:nth-child(4){
        & .ball {
                transform: translateX(65000%);
            }
            & .balltwo {
                transform: translateX(750%);
            }
       }
       &:nth-child(5){
        & .ball {
                transform: translateX(700%);
            }
            & .balltwo {
                transform: translateX(900%);
            }
       }
       &:nth-child(6){
        & .ball {
                transform: translateX(1100%);
            }
            & .balltwo {
                transform: translateX(1100%);
            }
       }
       &:nth-child(7){
            & .ball {
                transform: translateX(1000%);
            }
            & .balltwo {
                transform: translateX(1200%);
            }
       }
       & .ball{
        z-index: 1;
        width: 25px;
        height: 25px;
        background-color: var(--primary-color);
        position: absolute;
        margin-top: 1em;
        border-radius: 60px;
        }
        & .balltwo{
            width: 25px;
            height: 25px;
            background-color: var(--secondary-color);
            position: absolute;
            margin-top: 2.5em;
            border-radius: 60px;
            z-index: 1;
        }
    }
    a{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 2em 2em;
        color: var(--light);
        
    }

    svg{
        transition: ease-out 0.3s;
    }

    a div{
        display: flex;
        flex-direction: column;
        gap: 0.5em;
    }

    a div span:nth-child(1){
        font-weight: 600;
        font-size: 1.1em;
        z-index: 2;
    }

    a:hover ,  a:active , a:focus , li:hover , li:focus{
        color: var(--primary-color);
    }

    a:focus> svg{
        margin-right: -4px;
        transition: ease-out 0.3s;
        transform: scale(125%);
    }

    @media (prefers-reduced-motion: reduce) {
        a, svg {
        transition: none;
        transform: none;
        }
        a:focus{
        transition: none;
        transform: none;
    }
    } 
    li span:nth-of-type(2) {
        display: none; /* Hide the second span */
    }

  /* toegankelijkheid Kleuren */
  @media (prefers-contrast: more) {
    a {
      color: var(--dark);
    }
    li span:nth-of-type(2) {
        display: none; /* Hide the second span */
    }
}
  

</style>