import axios from "axios";
import {
    SEND_MESSAGE_FAILED,
    SEND_MESSAGE_REQUEST,
    SEND_MESSAGE_SUCCESS,
} from "../variables/variableMessage";
import {
    USER_LOGIN_FAILED,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
} from "../variables/variablesUsers";

const config = {
    headers: {
        "Content-Type": "application/json",
    },
};

export const actionUserLogin = (userData) => async (dispatch, getState) => {
    try {
        dispatch({ type: USER_LOGIN_REQUEST });
        const { data } = await axios.post("/api/users/login", userData, config);
        if (data) {
            dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
        }
    } catch (error) {
        dispatch({ type: USER_LOGIN_FAILED, error: error });
    }
};

export const actionSendMessage =
    (dataMessage) => async (dispatch, getState) => {
        try {
            dispatch({ type: SEND_MESSAGE_REQUEST });
            const { data } = await axios.post(
                "/api/message",
                dataMessage,
                config
            );
            if (data) {
                dispatch({ type: SEND_MESSAGE_SUCCESS, payload: data });
            }
        } catch (error) {
            dispatch({ type: SEND_MESSAGE_FAILED, error: error });
        }
    };
