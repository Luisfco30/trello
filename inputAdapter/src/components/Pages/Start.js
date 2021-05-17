import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Note } from '../Common';

const Start = () => {
    return ( 
        <Fragment>
            <div class="hero bg-primary">
                <div 
                    class="hero-body" 
                    style={{ 
                        display: 'flex', 
                        justifyContent: 'center', 
                        alignItems: 'center',
                        flexDirection: 'column'
                    }}
                >
                    <h1>Welcome!</h1>
                    <p>Trello App</p>
                </div>
            </div>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px' }} >
                <Link to='/Login' style={{ margin: '5px' }} className='btn btn-lg'>Login</Link>
                <Link to='/Register' style={{ margin: '5px' }} className='btn btn-lg'>Register</Link>
            </div>
            <div class="container">
                <div class="columns">
                    <Note
                        name='Christian Serrano'
                        description='Developer Fron-End'
                    />
                    <Note
                        name='Antonio Perez'
                        description='Developer Fron-End'
                    />
                    <Note
                        name='Francisco Ponce'
                        description='Developer Fron-End'
                    />
                    <Note
                        name='Arturo Vallejo'
                        description='Developer Back-End'
                    />
                    <Note
                        name='Jazael Hiram'
                        description='Developer Back-End'
                    />
                    <Note
                        name='Luis Mario Luna'
                        description='Developer Back-End'
                    />
                </div>
            </div>
        </Fragment>
    );
}
 
export default Start;