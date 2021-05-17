import React, { Fragment } from 'react';
import Particles from 'react-particles-js';
import { useRouteMatch, Link } from 'react-router-dom';
import { 
    Login,
    Register as Register2
} from '../Common';

const Register = () => {

    const match = useRouteMatch();

    const LoginActive = () => {
        if ( match.url === '/login' || match.url === '/Login' ) return 'active';
    }

    const RegisterActive = () => {
        if ( match.url === '/register' || match.url === '/Register' ) return 'active';
    }

    return ( 
        <Fragment>
            <Particles 
                params={{
                    particles: {
                        color: {
                            value: "#5755d9"
                        },
                        line_linked: {
                            shadow: {
                                enable: true,
                                color: "#32b643",
                                blur: 0
                            }
                        }, 
                        collisions: {
                            enable: true,
                        },
                        size: {
                            random: true,
                            value: 5,
                        },
                    }
                }} 
            />
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%', zIndex: 400, position: 'fixed' }}>
                <div class="card" style={{ width: '90%', maxWidth: '500px' }}>
                    <div class="card-body">
                    <ul class="tab tab-block">
                        <li class={`tab-item ${LoginActive()}`}>
                            <Link to='/Login'>Login</Link>
                        </li>
                        <li class={`tab-item ${RegisterActive()}`}>
                            <Link to='/Register'>Register</Link>
                        </li>
                    </ul>
                    {
                        match.url === '/Login' || match.url === '/login' 
                        ?
                            <Login/>
                        : <Register2/>
                    }
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
 
export default Register;
