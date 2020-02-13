import apiActions from "./api.js"
import renderEntries from "./entriesDOM.js"

const clearForm = () => {
    const hiddenEntryId = document.getElementById("entryId")
    const pointOfInterestInput = document.getElementById("pointOfInterest")
    const descriptionInput = document.getElementById("description")
    const costInput = document.getElementById("cost")
    const placeInput = document.getElementById("place")

    hiddenEntryId.value = ""
    pointOfInterestInput.value = ""
    descriptionInput.value = ""
    costInput.value = ""
    placeInput.value = ""
}



const addEventListener = () => {
    const saveButton = document.getElementById("submit-button")

    saveButton.addEventListener("click", () => {
        console.log("button was clicked")

        const hiddenEntryId = document.getElementById("entryId")
        const pointOfInterestInput = document.getElementById("pointOfInterest")
        const descriptionInput = document.getElementById("description")
        const costInput = document.getElementById("cost")
        const placeInput = document.getElementById("place")

        const entry = {
            pointOfInterest: pointOfInterestInput.value,
            description: descriptionInput.value,
            cost: parseInt(costInput.value),
            placeId: parseInt(placeInput.value),
            review: ""
        }

        if (hiddenEntryId.value !== "") {
            entry.id = parseInt(hiddenEntryId.value)
            apiActions.updateEntry(entry)
                .then(() => {
                    apiActions.getInterests()
                        .then(renderEntries)
                        .then(clearForm)
                })
        } else {
            apiActions.addEntry(entry)
                .then(() => {
                    apiActions.getInterests()
                        .then(renderEntries)
                        .then(clearForm)
                })
        }
    })
}

export default addEventListener