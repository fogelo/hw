import {Dispatch} from "redux";
import {requestsAPI} from "../api/api";

const initState = {
    response: "",
    error: false
}


export const requestReducer = (state: StateType = initState, action: RequestActionType): StateType => { // fix any
    switch (action.type) {
        case "set-response":
            return {...state, response: action.response}
        case "set-error":
            return {...state, error: action.error}
        default:
            return state;
    }
};


//actions
export const setResponseAC = (response: string) => ({type: "set-response", response} as const)
export const setErrorAC = (error: boolean) => ({type: "set-error", error} as const)

//thunks
export const requestTC = (checked: boolean) => (dispatch: Dispatch) => {
    requestsAPI.postChecked(checked)
        .then(res => {
            dispatch(setErrorAC(false))
            dispatch(setResponseAC(res.data.errorText))
        }).catch(error => {
        dispatch(setErrorAC(true))
        dispatch(setResponseAC(error.response.data.errorText))
    })
}

//types
type StateType = typeof initState
export type RequestActionType = ReturnType<typeof setErrorAC> | ReturnType<typeof setResponseAC>