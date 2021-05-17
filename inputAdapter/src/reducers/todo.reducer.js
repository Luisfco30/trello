import {
    GET_TODOS,
    GET_TODOS_ERROR,
    GET_TODOS_SUCCESS,
    CREATE_TODO,
    CREATE_TODO_ERROR,
    CREATE_TODO_SUCCESS,
    UPDATE_TODO,
    UPDATE_TODO_ERROR,
    UPDATE_TODO_SUCCESS,
    DELETE_TODO,
    DELETE_TODO_ERROR,
    DELETE_TODO_SUCCESS
} from '../types'

const initState = {
    todos: [],
    loading: false,
    error: null
}

export default function( state = initState, action ) {
    switch (action.type) {
        case GET_TODOS:
            return {
                ...state,
                todos: [],
                loading: true,
                error: null
            }

        case GET_TODOS_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }

        case GET_TODOS_SUCCESS:
            return {
                ...state,
                loading: false,
                todos: action.payload
            }
            case CREATE_TODO:
            return {
                ...state,
                todos: [],
                loading: true,
                error: null
            }

        case CREATE_TODO_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }

        case CREATE_TODO_SUCCESS:
            return {
                ...state,
                loading: false,
                todos: action.payload
            }
            case UPDATE_TODO:
            return {
                ...state,
                todos: [],
                loading: true,
                error: null
            }

        case UPDATE_TODO_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }

        case UPDATE_TODO_SUCCESS:
            return {
                ...state,
                loading: false,
                todos: action.payload
            }
            case DELETE_TODO:
            return {
                ...state,
                todos: [],
                loading: true,
                error: null
            }

        case DELETE_TODO_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }

        case DELETE_TODO_SUCCESS:
            return {
                ...state,
                loading: false,
                todos: action.payload
            }    
        default:
            return state
    }
}