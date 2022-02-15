import { CREATE_POST, DELETE_POST, GET_DATA, GET_POST, REGISTER, UPDATE_POST } from "../Actions/type";



const intialState = {
    loading: false,
    userinfo: [],
    postinfo: {},
    userdetails: {},
    resinfo: [],

}

export default (state = intialState, { type, payload }) => {
    switch (type) {
        case GET_DATA:
            return {
                ...state,
                userinfo: payload
            };
        case GET_POST:
            return {
                ...state,
                postinfo: payload
            };
        case CREATE_POST:
            return {
                ...state,
                userinfo: [payload, ...state.userinfo],

            };
        case REGISTER:
            return {
                ...state,
                userdetails: payload,

            };
        case UPDATE_POST:
            return {
                ...state,
                userinfo: state.userinfo.map((postItem) =>
                    postItem.id == payload.id ? payload : postItem
                ),
            };
            case DELETE_POST:
                return {
                  ...state,
                  userinfo: state.userinfo.filter((postItem) => postItem.id != payload),
                };

        default:
            return state;
    }



};