import axios from "axios";
import React, {useEffect, useReducer} from "react";

const defaultState = {
    response: null,
    isFetching: true,
    error: null,
}

const reducer1 = (state:any,action:any) => {
    switch (action.type){
        case "fetched":
            return{
                ...state,
                isFetching: false,
                responseData: action.payload,
            }

        case "error":
            return {
                ...state,
                isFetching: false,
                error: action.payload,
            }

        default:
            return state;
    }
}

const useRequest = (url:string, component_index:string) => {
    const [state, setState] = useReducer(reducer1, defaultState)

    useEffect(() => {
        axios.get(url, {
            params:{
                component_index: component_index,
            }
        }).then(response => {
            setState({
                type:"fetched",
                payload: response.data,
            })
        }).catch(error => {
            setState({
                type:"fetched",
                payload: error,
            })
        })
    },[url])

    console.log(state);
    return state.response;
}

export {useRequest};