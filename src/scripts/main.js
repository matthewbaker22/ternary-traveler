import apiAction from "./api.js"
import renderEntries from "./entriesDOM.js"
import addEventListener from "./eventListeners.js"

addEventListener()

apiAction.getInterests().then(renderEntries)