const initState = {
    theme: "dark"
};

export const themeReducer = (state: StateType = initState, action: ActionType): StateType => { // fix any
    switch (action.type) {
        case "set-theme": {
            return {...state, theme: action.theme};
        }
        default:
            return state;
    }
};


type ActionType = {
    type: "set-theme"
    theme: string
}

type StateType = typeof initState
export const changeThemeAC = (theme: string): ActionType => ({type: "set-theme", theme}); // fix any