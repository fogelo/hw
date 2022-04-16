export type PersonType = {
    _id: number
    name: string
    age: number
}

const initState: PersonType[] = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

type SortType = {
    type: 'sort'
    payload: 'up' | 'down'
}

type CheckType = {
    type: 'check'
    payload: number
}

type ActionType = SortType | CheckType

export const homeWorkReducer = (state: PersonType[] = initState, action: ActionType): PersonType[] => {
    switch (action.type) {
        case 'sort': {
            // need to fix
            return action.payload === 'up'
                ? [...state.sort((a, b) => a.name === b.name ? 0 : +(a.name > b.name) || -1)]
                : [...state.sort((a, b) => a.name === b.name ? 0 : +(a.name < b.name) || -1)]
        }
        case 'check': {
            // need to fix
            return state.filter(s => s.age > action.payload)
        }
        default:
            return state
    }
}