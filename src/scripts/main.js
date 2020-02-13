import apiAction from "./api.js"
import renderEntries from "./entriesDOM.js"
import addEventListener from "./eventListeners.js"
import events from "./events.js"

addEventListener()
events.entryEventListener()
apiAction.getInterests().then(renderEntries)