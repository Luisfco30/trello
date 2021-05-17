import React from 'react';

const Note = ({ name, description }) => {

    return ( 
        <div class="column col-4">
            <div class="post-it">
                <p class="note">
                    <strong>{name}</strong><br/>
                    {description}<br/>
                </p>
            </div>
        </div>
    );
}
 
export default Note;
