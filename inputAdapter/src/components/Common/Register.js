import React, { useState, Fragment, useEffect } from 'react';
import firebase from 'firebase';
import app from '../../config/firebaseConfig';
import { createUser } from '../../actions/user.action';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';

const Register = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [errorCatch, setErrorCatch] = useState(false);

    const dispatch = useDispatch();
    const create = user => dispatch( createUser(user) );

    const { user, loading, error } = useSelector( state => state.user );

    const RegisterGoogle = e => {
        e.preventDefault();
        const Provider = new firebase.auth.GoogleAuthProvider();

        firebase
            .auth()
            .signInWithPopup(Provider)
            .then( result => {
                create({ Nombre: result.user.displayName, photoURL: result.user.photoURL, uid: result.user.uid });
            }).catch( error => {
                setErrorCatch(true);
            })
    }

    const Register = async e => {
        e.preventDefault();
        app.auth().createUserWithEmailAndPassword( email, password ).then( user => {
            create({ Nombre: username });
        }).catch( error => {
            setErrorCatch(true);
        })
        
    }

    useEffect(() => {
        if ( username !== '' ||
            email !== '' ||
            password !== '' )
            setErrorCatch(false);
    }, [username, email, password]);

    return (
            <Fragment>
            {
                user
                ? 
                    <Redirect to='/todo' />
                :
                <form class="form-horizontal" style={{ padding: '15px' }}>
                    <div class="form-group" style={{ margin: '20px 0' }}>
                        <div class="col-3 col-sm-12">
                            <label class="form-label" for="Email">Email</label>
                        </div>
                        <div class="col-9 col-sm-12">
                            <input value={email} onChange={e => setEmail(e.target.value)} class="form-input" type="email" id="Email" placeholder="Email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,14}$"/>
                        </div>
                    </div>
                    <div class="form-group" style={{ margin: '20px 0' }}>
                        <div class="col-3 col-sm-12">
                            <label class="form-label" for="username">Username</label>
                        </div>
                        <div class="col-9 col-sm-12">
                            <input value={username} onChange={e => setUsername(e.target.value)} class="form-input" type="text" id="username" placeholder="username"/>
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
                        errorCatch || error
                        ?
                        <div class="toast toast-error">
                            Error en el registro
                        </div>
                        : null
                    }
                    <button onClick={Register} class="btn btn-primary btn-lg btn-block">{ loading ? <div class="loading"></div> : "Register" }</button>
                    <div class="divider text-center" data-content="OR"></div>
                    <button onClick={RegisterGoogle} class="btn btn-primary btn-lg btn-block" style={{ margin: '15px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><i class="fab fa-google"></i>{ loading ? <div class="loading"></div> : "Register With Google" }</button>
                </form>
            }
        </Fragment>
    );
}
 
export default Register;
