import { getCelebrities } from "./database.js"

const celebrities = getCelebrities()

export const celebritiesList = () => {
    let html = "<ol>"

    for (const celebrity of celebrities) {
        html += `<li 
                    data-id="${celebrity.id}" 
                    data-type="celebrity"
                    data-sport="${celebrity.sport}"
                    id="star--${celebrity.id}">
                    ${celebrity.name}
                </li>`
    }

    html += "</ol>"
    return html
}


export const celebrityClickedEvent = (clickEvent) => {
    let clickedDS = clickEvent.target.dataset
    window.alert(`This celebrity's sport is ${clickedDS.sport}`)
}
