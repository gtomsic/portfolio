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

export const reducerUserLogin = (state = { user: {} }, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return { loading: true };
        case USER_LOGIN_SUCCESS:
            return { loading: false, user: action.payload };
        case USER_LOGIN_FAILED:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};
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
