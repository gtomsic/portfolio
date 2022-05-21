import {
    SEND_MESSAGE_FAILED,
    SEND_MESSAGE_REQUEST,
    SEND_MESSAGE_SUCCESS,
} from "../variables/variableMessage";

export const reducerSendMessage = (state = { message: {} }, action) => {
    switch (action.type) {
        case SEND_MESSAGE_REQUEST:
            return { loading: true };
        case SEND_MESSAGE_SUCCESS:
            return { loading: false, message: action.payload };
        case SEND_MESSAGE_FAILED:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};
