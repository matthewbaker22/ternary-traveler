import apiActions from "./api.js"
import renderEntries from "./entriesDOM.js"

const updateFormFields = entryId => {
    const hiddenEntryId = document.getElementById("entryId")
    const costInput = document.getElementById("costUpdate")
    const reviewInput = document.getElementById("review")

    fetch(`http://localhost:8088/interests/${entryId}`)
        .then(resp => resp.json())
        .then(entry => {
            hiddenEntryId.value = entry.id
            costInput.value = entry.cost
            reviewInput.value = entry.review
        })
    
    const updateButton = document.getElementById("update-button")
    
    updateButton.addEventListener("click", () => {
        apiActions.updateEntry(entry)
        console.log("update button was clicked")
    })
}

const entryList = document.getElementById("container")

export default {
    entryEventListener: () => {
        entryList.addEventListener("click", (event) => {
            if (event.target.id.startsWith("deleteEntry--")) {
                console.log("delete button clicked")
                const deleteBtnId = event.target.id
                const deleteBtnArray = deleteBtnId.split("--")
                const entryIdToDelete = deleteBtnArray[1]

                alert("Do you wish to delete this?")

                apiActions.deleteEntry(entryIdToDelete)
                    .then(apiActions.getInterests)
                    .then(renderEntries)
            } else if (event.target.id.startsWith("editEntry--")) {
                const entryIdToEdit = event.target.id.split("--")[1]
                updateFormFields(entryIdToEdit)

                console.log("edit button clicked")
            }
        })
    }
}


