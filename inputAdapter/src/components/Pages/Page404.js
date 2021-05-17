import React from 'react';
import Particles from 'react-particles-js';

const Page404 = () => {
    return ( 
        <div className='bg-primary' style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', color: '#ffffff', alignItems: 'center', flexDirection: 'column' }}>
            <Particles 
                params={{
                    particles: {
                        color: {
                            value: "#ffffff"
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
            <h1>404</h1>
            <p>Page not found.</p>
        </div>
    );
}
 
export default Page404;
