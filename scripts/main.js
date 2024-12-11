import { pairingsList } from "./pairings.js"
import { celebritiesList, celebrityClickedEvent } from "./celebrities.js"
import { kidsList, kidClickedEvent } from "./kids.js"

const mainContainer = document.querySelector("#container")

const applicationHTML = `
    <h1>Make a Memory for Kids</h1>
    <article class="details">
        <section class="detail--column list details__kids">
            <h2>Kids</h2>
            ${kidsList()}
        </section>
        <section class="detail--column details__celebrities">
            <h2>Celebrities</h2>
            ${celebritiesList()}
        </section>
    </article>

    <article class="assignments">
        <h2>Pairings</h2>
        ${pairingsList()}
    </article>
`

mainContainer.innerHTML = applicationHTML

addEventListener(
    "click",
    (clickEvent) => {
        switch(clickEvent.target.dataset.type){
            case "kid" : 
                kidClickedEvent(clickEvent)
                break;
            case "celebrity" :
                celebrityClickedEvent(clickEvent)

                break;
        }
    }
)

