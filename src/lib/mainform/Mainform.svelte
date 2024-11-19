<script>
    import { onMount } from "svelte";

    let buttonText = "Verstuur"; //eerste button text
    let isSubmitting = false; // Kijk of form aan het submitten is

    async function send(event) {
        event.preventDefault(); 
        isSubmitting = true; 
        buttonText = "Bezig met versturen..."; // Update button text

        // Hier moet een api call inkomen, maar die doet het nog niet
        await new Promise((resolve) => setTimeout(resolve, 2000));

        // nadat form verstuurd  is
        buttonText = "Verstuurd";
        isSubmitting = false;
    }
</script>


<div>
    <form class="error-form">
        <label for="textfield">Wat is er mis gegaan</label>
        <textarea spellcheck="true"  placeholder="Vertel wat u deed voor deze error" id="textfield"></textarea>
        <button on:click={send} class="form-button" type="submit" aria-label="Verstuur uw bericht">{buttonText}</button>
    </form>
    <p>Alle velden gemarkeerd als vereist moeten worden voltooid</p>
</div>

<style>
    form{
        padding: 2em 0em;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 1em;
    }

    form label{
        font-size: 1.5em;
        font-family: var(--font-family);
        font-weight: 600;
    }

    form textarea{
        width: 100%;
        min-height: 200px;
        padding: 1.5em;
        background-color: #D9D9D9;
        border: none;
        border-radius: 0.25em;
        font-size: 1.1em;
    }

    form textarea::placeholder{
        color: var(--dark);
    }

    form button{
    border-radius: 0.5em;
    font-size: 1.1em;
    font-weight: bold;
    border: none;
    padding: 0.5em 1.5em 0.5em 1.5em;
    cursor: pointer;
    background-color: var(--secondary-color);
    color: var(--light);
    scale: 100%;
    transition: ease-in 0.2s;
    }

    form button:hover{
        cursor: pointer;
        scale: 95%;
        color: var(--light);
        transition: ease-out 0.2s;
    }

    p{
        padding-top: 1em;
    }

    @media (prefers-reduced-motion: reduce) {
        form button {
        transition: none;
        transform: none;
        }
    } 

    @media (prefers-contrast: more) {
        form button {
        background-color: var(--dark);
        }
    }

</style>