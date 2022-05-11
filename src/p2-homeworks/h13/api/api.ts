import axios from "axios";

export const requestsAPI = {
    postChecked(checked: boolean){
        return axios.post<ResponseT>("https://neko-cafe-back.herokuapp.com/auth/test", {success: checked})
    }
}


//types
type ResponseT = {
    errorText: string
    info: string
    yourBody: {
        success: boolean
    }
    yourQuery: {}
}