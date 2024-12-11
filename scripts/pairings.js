import { getChildren, getCelebrities } from "./database.js"

const kids = getChildren()
const celebrities = getCelebrities()

const findCelebrityMatch = (kidObject) => {
    let celebrityMatch = null
    for (const celebrity of celebrities) {
        if (celebrity.id === kidObject.celebrityId) {
            celebrityMatch = celebrity
        }
    }
    return celebrityMatch
}

export const pairingsList = () => {
    let html = ""
    html = "<ul>"

    for (const kid of kids) {
        const kidsStar = findCelebrityMatch(kid)
        html += `
            <li>
                ${kid.name} will have memories to cherish after ${kidsStar.sport} star ${kidsStar.name} takes them to ${kid.wish}.
            </li>
        `
    }

    html += "</ul>"

    return html
}

