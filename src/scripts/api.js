const Url = "http://localhost:8088"

export default {
    getInterests () {
        return fetch(`${Url}/interests?_expand=place`)
            .then(resp => resp.json())
    },
    addEntry(entry) {
        return fetch(`${Url}/interests`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(entry)
        })
    },
    updateEntry(entry) {
        return fetch(`${Url}/interests/${entry.id}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(entry)
        })
    },
    deleteEntry(entryId) {
        return fetch(`${Url}/interests/${entryId}`, {
            method: "DELETE"
        })
    }
}