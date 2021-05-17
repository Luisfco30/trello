import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import app from '../../config/firebaseConfig';
import { useSelector } from 'react-redux';

const HeaderDiv = styled.div`
    background-color: #6178e9;
    width: 100vw;
    padding: 10px;
    display: fixed;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #eaeaea;
    font-weight: bold;

    & > p {
        margin: 0;
    }

    & > figure:hover {
        cursor: pointer;
    }
`

const Header = () => {

    const { user } = useSelector( state => state.user );

    const [values, setValues] = useState('CH');
    const [image, setImage] = useState('')

    useEffect(async () => {
        console.log(user.nombre)
        let u1 = user.nombre.split(' ')[0][0];
        let u2 = user.nombre.split(' ')[1][0];

        const i = await (await app.firestore().collection('user').doc(`${user.id}`).get()).data()['image'];
        console.log(i);
        setImage(i);

        setValues(`${u1}${u2}`);
    }, [])

    return ( 
        <HeaderDiv>
            <p>Trello-App</p>
            <figure class="avatar avatar-md" data-initial={values}>
                <img src={image} alt='' />
                <i class="avatar-presence online"></i>
            </figure>
        </HeaderDiv>
    );
}
 
export default Header;
