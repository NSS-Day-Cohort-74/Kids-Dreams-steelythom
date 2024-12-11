import { getChildren } from "./database.js"

const children = getChildren()

export const kidsList = () => {
    let html = "<ol>"

    for (const child of children) {
        html += `<li data-id="${child.id}" data-type="kid" data-wish="${child.wish}">${child.name}</li>`
    }

    html += "</ol>"
    return html
}

export const kidClickedEvent = (clickEvent) => {
    let dataset = clickEvent.target.dataset
    window.alert(`${clickEvent.target.innerHTML}'s wish is to ${dataset.wish}`)
}

