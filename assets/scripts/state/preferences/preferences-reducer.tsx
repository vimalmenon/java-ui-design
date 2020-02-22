import {TOGGLE_DRAWER, TOGGLE_MODE, SET_PALETTE, SET_PALETTE_COLOR, SET_PRIMARY_MAIN, SET_PREFERENCES} from "./preferences-types"; 

export default function (oldState, action) {
    let state;
    switch (action.type) {
        case TOGGLE_MODE:
            state = {...oldState};
            return {
                ...state,
                palette : {
                    ...state.palette,
                    type: action.mode
                }
            };
        case TOGGLE_DRAWER:
            state = {...oldState};
            state.drawer = action.drawer;
            return state;
        case SET_PALETTE_COLOR:
            state = {...oldState};
            state.palette[action.props] = action.value;
            return state;
        case SET_PALETTE:
            state = {...oldState};
            state.palette = action.palette;
            return state;
        case SET_PRIMARY_MAIN:
            state = {...oldState};
            state.palette.primary.main = action.color;
            return state;
        case SET_PREFERENCES:
            state = {...action.preferences};
            return state;
        default: 
            return oldState;
    }
}