const counter = {
    inCount: 0
}

export function reducer(state = counter, action) {
    if (action.type === "PLUS") {
        return {...state, inCount: state.inCount + 1}
    } else if (action.type === "MINUS") {
        if (state.inCount === 0) {
            return state;
        } else {
            return {...state, inCount: state.inCount - 1}
        }
    }
    return state
}
