const entryFactory = entry => `
    <section id="entry">
        <h1>Point of Interest: ${entry.pointOfInterest}</h1>
        <h1>Description: ${entry.description}</h1>
        <h1>Cost: ${entry.cost}</h1>
        <h1>Review: ${entry.review}</h1>
        <h1>Place: ${entry.place.name}</h1>
        <button id="editEntry--${entry.id}">Edit Entry</button>
        <button id="deleteEntry--${entry.id}">Delete Entry</button>
    </section>
`

export default entryFactory