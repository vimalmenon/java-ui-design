import {SET_SESSION} from "./user-types";

export default function (oldState:any, action : any) {
    let state;
    switch (action.type) {
    	case SET_SESSION:
            state = {...oldState};
            state.session = action.session;
            return state;
        default: 
            return oldState;
    }
}