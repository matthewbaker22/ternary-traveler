import apiActions from "./api.js"
import renderEntries from "./entriesDOM.js"

const entryList = document.getElementById("container")

const updateFormFields = entryId => {
    const hiddenEntryId = document.getElementById("entryId")
    const pointOfInterestInput = document.getElementById("pointOfInterest")
    const descriptionInput = document.getElementById("description")
    const costInput = document.getElementById("cost")
    const placeInput = document.getElementById("place")
    
    fetch(`http://localhost:8088/${entryId}`)
        .then(resp => resp.json())
        .then(entry => {
            hiddenEntryId.value = entry.id
            pointOfInterestInput.value = entry.
        })
}