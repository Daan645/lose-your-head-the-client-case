<script>
    import { onMount } from "svelte";

    let buttonText = "Verstuur"; // Normale button text
    let isSubmitting = false; // check of de form aan het submitten is
    let message = ""; //verbind met textarea valleu

    async function send(event) {
        event.preventDefault(); 
        // Zorg ervoor dat textveld eerst gevuld is
        if (!message.trim()) {
            alert("Het tekstveld mag niet leeg zijn.");
            return;
        }

        isSubmitting = true; 
        buttonText = "Bezig met versturen..."; // Update de button tekst

        const data = {
            message: message,
            date: new Date().toISOString(), // Current date and time in ISO format
        };

        try {
            const response = await fetch("https://fdnd-agency.directus.app/items/mh_logs", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error(`Server error: ${response.status}`);
            }

            // Assuming the response is successful
            buttonText = "Verstuurd";
        } catch (error) {
            console.error("Er is een fout opgetreden", error);
            buttonText = "Er is een fout opgetreden";
        } finally {
            isSubmitting = false;
        }
    }
</script>



<div>
    <form class="error-form" on:submit={send}>
        <label for="textfield">Wat ging er mis?</label>
        <textarea id="textfield" spellcheck="true"  placeholder="Vertel wat u deed voor deze error" bind:value={message} required></textarea>
        <button class="form-button" type="submit" aria-label="Verstuur uw bericht" disabled={isSubmitting}>{buttonText}</button>
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