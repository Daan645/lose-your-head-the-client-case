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
            <label  for="emailfield">Waar kunnen we je bereiken?</label>
            <span class="mailone">Mail</span>
            <span class="mailtwo">Mail</span>
            <input type="email" placeholder="Email invullen">
        </div>
        <div>
            <label  for="textfield">Wat ging er mis?</label>
            <span class="textone">Message</span>
            <span class="texttwo">Message</span>
            <textarea id="textfield" spellcheck="true"  placeholder="Vertel wat u deed voor deze error" bind:value={message} required></textarea>
        </div>
        <div>
            <button class="form-button" type="submit" aria-label="Verstuur uw bericht" disabled={isSubmitting}>{buttonText}</button>
        </div>
    </form>
</div>

<style>
    .wrapper {
    height: 100%;
}

form {
    padding: 0em 2em;
    display: flex;
    flex-direction: column;
    gap: 1em;
}

form  input, textarea{
    display: flex;
}

form textarea{
    field-sizing: content;
}

.mailone , .mailtwo , .textone , .texttwo{
    display: none;
}


@media only screen and (min-width: 960px) {

    .mailone , .mailtwo , .textone , .texttwo{
    display: inline;
    }

    form {
        gap: 0em;
        padding: 0em;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: 1fr;
        height: 100%;
    }

    form > div {
        padding: 8em;
        display: flex;
        flex-direction: column;
    }

    form div:nth-child(1) {
        background-color: var(--dark);
        margin: 0 auto;
        width: 100%;
        color: var(--secondary-color);
    }

    form div:nth-child(1) input {
        width: 800px;
        height: 110px;
        margin-left: 100px;
        padding: 1em;
        background-color: var(--secondary-color);
        border: none;
        font-size: 4em;
    }

    form div:nth-child(1) .mailone {
        text-shadow: 4px 4px 0px var(--grey);
        font-size: 5em;
        font-weight: 800;
        text-transform: uppercase;
        transform: rotate(270deg);
        position: absolute;
        margin-left: -65px;
        margin-top: 170px;
    }

    form div:nth-child(1) .mailtwo {
        text-shadow: 4px 4px 0px var(--grey);
        font-size: 5em;
        font-weight: 800;
        text-transform: uppercase;
    }

    form div:nth-child(2) {
        background-color: var(--grey);
    }

    form div:nth-child(2) textarea {
        width: 1000px;
        min-height: 410px;
        margin-left: 100px;
        padding: 1em;
        background-color: var(--secondary-color);
        border: none;
        font-size: 2em;
    }

    form div:nth-child(2) .textone {
        color: var(--primary-color);
        text-shadow: 6px 6px 0px black;
        font-size: 5em;
        font-weight: 800;
        text-transform: uppercase;
        transform: rotate(270deg);
        position: absolute;
        margin-left: -158px;
        margin-top: 250px;
    }

    form div:nth-child(2) .texttwo {
        color: var(--primary-color);
        text-shadow: 6px 6px 0px black;
        font-size: 5em;
        font-weight: 800;
        text-transform: uppercase;
    }

    form div:nth-child(3) {
        background-color: var(--secondary-color);
        align-items: flex-start;
    }

    form div:nth-child(3) button {
        background-color: var(--primary-color);
        border: none;
        position: absolute;
        padding: 3em 3em;
        font-size: 4em;
        box-shadow: 35px 35px 0px 10px #4f0000;
        right: 55px;
        bottom: 55px;
        transition: ease-out 0.3s;
        font-weight: 800;
        text-transform: uppercase;
    }

    form div:nth-child(3) button:hover {
        transition: ease-out 0.3s;
        right: 0px;
        bottom: 0px;
        color: var(--light);
        cursor: pointer;
    }
}


       
    </style>