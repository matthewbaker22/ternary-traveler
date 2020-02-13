import entryFactory from "./entryCardFactory.js"

const container = document.getElementById("container")

const renderEntries = (entries) => {
    container.innerHTML = ""

    entries.forEach(entry => {
        const entryHTML = entryFactory(entry)
        container.innerHTML += entryHTML
    })
}

export default renderEntries