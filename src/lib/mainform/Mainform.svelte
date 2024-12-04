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



<div class="wrapper">
    <form class="error-form" on:submit={send}>
        <div>
            <label  for="emailfield">Wat ging er mis?</label>
            <input type="email" placeholder="Email invullen">
        </div>
        <div>
            <label  for="textfield">Wat ging er mis?</label>
            <textarea id="textfield" spellcheck="true"  placeholder="Vertel wat u deed voor deze error" bind:value={message} required></textarea>
        </div>
        <div>
            <button class="form-button" type="submit" aria-label="Verstuur uw bericht" disabled={isSubmitting}>{buttonText}</button>
        </div>
    </form>
</div>

<style>

    form{
        display: grid;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: 1fr;
        height: 100%;
    }
    form > div{
        padding: 8em;
        display: flex;
        flex-direction: column;
    }

    form div:nth-child(1){
        background-color: var(--primary-color);
    }
    form div:nth-child(2){
        background-color: var(--grey);
    }
    form div:nth-child(3){
        background-color: var(--secondary-color);
    }
    .wrapper{
        height: 100%;
    }
</style>