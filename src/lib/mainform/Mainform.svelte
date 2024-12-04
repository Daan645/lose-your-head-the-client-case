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
        background-color: var(--dark);
        margin: 0 auto;
        width: 100%;
        color: var(--secondary-color);

        & input{
            width: 800px;
            height: 110px;
            margin-left: 100px;
            padding: 1em;
            background-color: var(--secondary-color);
            border: none;
            font-size: 4em;

        }

        & .mailone{
            text-shadow: 4px 4px 0px var(--grey);
            font-size: 5em;
            font-weight: 800;
            text-transform: uppercase;
            transform: rotate(270deg);
            position: absolute;
            margin-left: -55px;
            margin-top: 150px;
        }

        & .mailtwo{
            text-shadow: 4px 4px 0px var(--grey);
            font-size: 5em;
            font-weight: 800;
            text-transform: uppercase;
        }
    }
    form div:nth-child(2){
        background-color: var(--grey);

        & textarea{
            width: 1000px;
            min-height: 410px;
            margin-left: 100px;
            padding: 1em;
            background-color: var(--secondary-color);
            border: none;
            font-size: 2em;
        }

        & .textone{
            color: var(--primary-color);
            text-shadow: 6px 6px 0px black;
            font-size: 5em;
            font-weight: 800;
            text-transform: uppercase;
            transform: rotate(270deg);
            position: absolute;
            margin-left: -150px;
            margin-top: 250px;
        }

        & .texttwo{
            color: var(--primary-color);
            text-shadow: 6px 6px 0px black;
            font-size: 5em;
            font-weight: 800;
            text-transform: uppercase;
        }
    }
    form div:nth-child(3){
        background-color: var(--secondary-color);
        align-items: flex-start;
        & button{
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

            &:hover{
                transition: ease-out 0.3s;
                right: 0px;
                 bottom: 0px;
                 color: var(--light);
                 cursor: pointer;
            }
        }
    }
    .wrapper{
        height: 100%;
    }
</style>