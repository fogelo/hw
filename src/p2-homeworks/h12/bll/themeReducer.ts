const initState = {
    theme: 'dark'
};

export const themeReducer = (state = initState, action: ActionType): any => { // fix any
    switch (action.type) {
        case 'set-theme': {
            return {...state, theme: action.theme};
        }
        default:
            return state;
    }
};


type ActionType = {
    type: 'set-theme'
    theme: string
}

export const changeThemeAC = (theme: string): ActionType => ({type: 'set-theme', theme}); // fix any