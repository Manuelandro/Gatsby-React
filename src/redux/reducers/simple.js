import { createReducer } from "reduxsauce"

const reducer = (state, action) => {
    try {
        return state
    } catch (err) {
        console.log(err)
        return state
    }
}

const HANDLERS = {
    TEST: reducer
}

export default createReducer({}, HANDLERS)
