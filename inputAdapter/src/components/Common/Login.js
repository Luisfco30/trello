import React, { useState, useEffect, Fragment } from 'react';
import firebase from 'firebase';
import app from '../../config/firebaseConfig';
import { 
    createUser, 
    getUsers,
    loginUser
} from '../../actions/user.action';
import { useDispatch, useSelector } from 'react-redux';
import { usersVerify } from '../../helper';
import { Redirect } from 'react-router-dom';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorCatch, setErrorCatch] = useState(false); 

    const dispatch = useDispatch();
    const get = () => dispatch(getUsers());
    const create = user => dispatch(createUser(user));
    const login = id => dispatch(loginUser(id));

    const { users, user, loading, error } = useSelector( state => state.user );

    const LoginGoogle = e => {
        e.preventDefault();
        const Provider = new firebase.auth.GoogleAuthProvider();

        firebase
            .auth()
            .signInWithPopup(Provider)
            .then( result => {
                const response = usersVerify(users, result.user.displayName);

                if ( response.flag ) {
                    localStorage.setItem('user', JSON.stringify(response.id));
                    login(response.id);
                } else {
                    create({Nombre: result.user.displayName, photoURL: result.user.photoURL, uid: result.user.uid});
                }

            }).catch( error => {
                setErrorCatch(true);
            })
    }

    const Login = e => {
        e.preventDefault();
        app.auth().signInWithEmailAndPassword(email, password)
            .then( async user => {
                const users = await app.firestore().collection('user').get();
                let id = 0;

                users.forEach( doc => {
                    if ( doc.data()['uid'] === user.user.uid ) {
                        id = doc.id;
                    }
                })

                if ( id === 0 ) {
                    localStorage.setItem('user', JSON.stringify(id));
                    login(id);
                } else {
                    errorCatch(true);
                }

            })
            .catch( error => {
                setErrorCatch(true);
            })
    }

    useEffect(() => {
        get();
    }, [])

    return ( 
        <Fragment>
            {
                user
                ?
                    <Redirect to='/todo' />
                :
                <form class="form-horizontal"  style={{ padding: '15px' }}>
                    <div class="form-group" style={{ margin: '20px 0' }}>
                        <div class="col-3 col-sm-12">
                            <label class="form-label" for="email">Email</label>
                        </div>
                        <div class="col-9 col-sm-12">
                            <input class="form-input" type="text" id="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,14}$" />
                        </div>
                    </div>
                    <div class="form-group" style={{ margin: '20px 0' }}>
                        <div class="col-3 col-sm-12">
                            <label class="form-label" for="pass">Password</label>
                        </div>
                        <div class="col-9 col-sm-12">
                            <input value={password} onChange={e => setPassword(e.target.value)} class="form-input" type="password" id="pass" placeholder="*****" pattern="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$"/>
                        </div>
                    </div>
                    {
                        error || errorCatch 
                        ?
                        <div class="toast toast-error">
                            Error en el login
                        </div>
                        : null
                    }
                    <button onClick={Login} class="btn btn-primary btn-lg btn-block" style={{ margin: '15px 0' }}>{ loading ? <div class="loading"></div> : 'Login' }</button>
                    <div class="divider text-center" data-content="OR"></div>
                    <button onClick={LoginGoogle} class="btn btn-primary btn-lg btn-block" style={{ margin: '15px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><i class="fab fa-google"></i>{ loading ?  <div class="loading"></div> : 'Login With Google' }</button>
                </form>
            }
        </Fragment>
    );
}
 
export default Login;
