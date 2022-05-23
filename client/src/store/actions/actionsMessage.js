import axios from "axios";
import {
    SEND_MESSAGE_FAILED,
    SEND_MESSAGE_REQUEST,
    SEND_MESSAGE_SUCCESS,
} from "../variables/variableMessage";

const config = {
    headers: {
        "Content-Type": "application/json",
    },
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
