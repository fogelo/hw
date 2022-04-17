export type StateType = {
    loading: boolean
}

const initState: StateType = {
    loading: false
}

export const loadingReducer = (state = initState, action: ActionType): StateType => { // fix any
    switch (action.type) {
        case 'set-loading': {
            return {...state, loading: action.loading}
        }
        default:
            return state
    }
}

type ActionType = LoadingActionType

type LoadingActionType = {
    type: 'set-loading'
    loading: boolean
}

export const loadingAC = (loading: boolean): LoadingActionType => ({type: 'set-loading', loading}) // fix any