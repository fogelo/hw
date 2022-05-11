import React, {ChangeEvent, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RequestActionType, requestTC} from "./bll/requestReducer";
import {AppStoreType} from "../h10/bll/store";
import {Button, Typography} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import {ThunkDispatch} from "redux-thunk";


const Request = () => {
    const [checked, setChecked] = useState(false)
    const dispatch: ThunkDispatch<AppStoreType, unknown, RequestActionType> = useDispatch()
    const response = useSelector<AppStoreType, string>(state => state.request.response)
    const error = useSelector<AppStoreType, boolean>(state => state.request.error)

    const post = () => {
        dispatch(requestTC(checked))
    }
    const onChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
        setChecked(e.currentTarget.checked)
    }
    return (
        <div>
            <Checkbox checked={checked}
                      onChange={onChangeHandle}/>
            <Button variant="outlined" onClick={post}>post</Button>
            <Typography color={error ? 'red' : 'green'} variant={"h5"} mt={1}>{response}</Typography>


        </div>
    );
};

export default Request;