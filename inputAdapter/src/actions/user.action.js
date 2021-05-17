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
import { ServiceUser } from '../services/user.service';
import firebase from '../config/firebaseConfig';

export function loginUser(id) {
    return async dispatch => {
        dispatch( loginUserInit() );

        try {

            const response = await ServiceUser.loginUser(id);

            if ( response.status >= 400 ) {
                dispatch( loginUserError(true) );
            } else {
                dispatch( loginUserSuccess( response.data ) );
            }

        } catch (error) {
            dispatch( loginUserError(true) );
        }
    }
}

const loginUserInit = () => ({
    type: LOGIN_USER
});

const loginUserError = state => ({
    type: LOGIN_USER_ERROR,
    payload: state
});

const loginUserSuccess = user => ({
    type: LOGIN_USER_SUCCESS,
    payload: user
})

export function createUser(user) {
    return async dispatch => {
        dispatch( createUserInit() );

        try {
            
            const response = await ServiceUser.createUser(user);

            if ( response.status >= 400 ) {
                dispatch( createUserError(true) );
            } else {
                console.log('creating user ...');
                console.log(response.data.id, user.photoURL, user.uid);
                localStorage.setItem('user', JSON.stringify(response.data.id));
                
                await firebase.firestore().collection('user').doc(`${response.data.id}`).set({
                    "image": user.photoURL,
                    "uid": user.uid
                });

                console.log('creating user ...')

                dispatch( createUserSuccess( response.data ) );
            }

        } catch (error) {
            console.log(error);
            dispatch( createUserError(true) );
        }
    }
}

const createUserInit = () => ({
    type: CREATE_USER
});

const createUserError = state => ({
    type: CREATE_USER_ERROR,
    payload: state
});

const createUserSuccess = user => ({
    type: CREATE_USER_SUCCESS,
    payload: user
});

export function updateUser(user) {
    return async dispatch => {
        dispatch( updateUserInit() );

        try {
            
            const response = await ServiceUser.updateUsers(user);

            if ( response.status >= 400 ) {
                dispatch( updateUserError(true) );
            } else {
                dispatch( updateUserSuccess( response.data ) );
            }

        } catch (error) {
            dispatch( updateUserError(true) );
        }
    }
}

const updateUserInit = () => ({
    type: UPDATE_USER
});

const updateUserError = state => ({
    type: UPDATE_USER_ERROR,
    payload: state
});

const updateUserSuccess = user => ({
    type: UPDATE_USER_SUCCESS,
    payload: user
});

export function deleteUser(id) {
    return async dispatch => {
        dispatch( deleteUserInit() );

        try {
            
            const response = await ServiceUser.deleteUser(id);

            if ( response.status >= 400 ) {
                dispatch( deleteUserError(true) );
            } else {
                dispatch( deleteUserSuccess( response.data ) );
            }

        } catch (error) {
            dispatch( deleteUserError(true) );
        }
    }
}

const deleteUserInit = () => ({
    type: DELETE_USER
});

const deleteUserError = state => ({
    type: DELETE_USER_ERROR,
    payload: state
});

const deleteUserSuccess = user => ({
    type: DELETE_USER_SUCCESS,
    payload: user
});

export function getUsers() {
    return async dispatch => {
        dispatch( getUsersInit() );

        try {
            
            const response = await ServiceUser.getUsers();

            if ( response.status >= 400 ) {
                dispatch( getUsersError(true) );
            } else {
                dispatch( getUsersSuccess( response.data ) );
            }

        } catch (error) {
            dispatch( getUsersError(true) );
        }
    }
}

const getUsersInit = () => ({
    type: GET_USER
});

const getUsersError = state => ({
    type: GET_USER_ERROR,
    payload: state
});

const getUsersSuccess = user => ({
    type: GET_USER_SUCCESS,
    payload: user
});
