import {
    CREATE_USER,
    CREATE_USER_ERROR,
    CREATE_USER_SUCCESS,
    GET_USER,
    GET_USER_ERROR,
    GET_USER_SUCCESS,
    UPDATE_USER,
    UPDATE_USER_ERROR,
    UPDATE_USER_SUCCESS,
    DELETE_USER,
    DELETE_USER_ERROR,
    DELETE_USER_SUCCESS,
    LOGIN_USER,
    LOGIN_USER_ERROR,
    LOGIN_USER_SUCCESS
} from '../types';

const initState = {
    login: false,
    users: [],
    error: null,
    loading: false,
    user: null
}

export default function( state = initState, action ) {
    switch ( action.type ) {
        case CREATE_USER:
            return {
                ...state,
                error: null,
                loading: true
            }

        case CREATE_USER_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }

        case CREATE_USER_SUCCESS:
            return {
                ...state,
                login: true,
                loading: false,
                user: action.payload
            }

        case LOGIN_USER:
            return {
                ...state,
                error: null,
                loading: true
            }

        case LOGIN_USER_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }

        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                login: true,
                loading: false,
                user: action.payload
            }

        case GET_USER:
            return {
                ...state,
                users: [],
                error: null,
                loading: true,
            }

        case GET_USER_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }

        case GET_USER_SUCCESS:
            return {
                ...state,
                users: action.payload,
                loading: false
            }

        case UPDATE_USER:
            return {
                ...state,
                error: null,
                loading: true,
                user: null
            }

        case UPDATE_USER_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }

        case UPDATE_USER_SUCCESS:
            return {
                ...state,
                loading: false
            }

        case DELETE_USER:
            return {
                ...state,
                error: null,
                loading: true,
            }

        case DELETE_USER_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }

        case DELETE_USER_SUCCESS:
            return {
                ...state,
                loading: false
            }

        default:
            return state;

    }
}
