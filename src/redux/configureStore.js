import { createStore, combineReducers, compose } from "redux"
import simple from "./reducers/simple"

const w = typeof window !== "undefined" ? window : null

const composeEnhancers =
    (w && w.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

export default function(initialState = {}) {
    const rootReducer = combineReducers({
        simple
    })

    const store = createStore(rootReducer, initialState, composeEnhancers())

    return store
}
