import React, { useState } from 'react';
import {  IonInput, IonItem, IonButton, IonIcon ,IonItemDivider, IonImg } from '@ionic/react';

import './FormContainer.css';
import dots from '../images/cercuri.png';

const FormContainer: React.FC = () => {

    const [text, setText] = useState<string>();
    const [number, setNumber] = useState<number>();
    const name='Okita';
    return (
        <div className="app-form">
                <img src={dots} alt="" className="app-bg"/>
                <div className="form-header">
                <h1>Glare Studio</h1>
                <h2>Bem Vindo, <br/> <b>{name}!</b> </h2>
                </div>
                <div className="form-group">
                <p>Username</p>
                <IonItem>
                    <IonInput value={text} placeholder="" onIonChange={e => setText(e.detail.value!)} clearInput></IonInput>
                    
                </IonItem>
                </div>
                <div className="form-group">
                <p>Password</p>
                <IonItem>
                    <IonInput type="password" value={text} placeholder=""  clearInput></IonInput>
                </IonItem>
                </div>
                <div className="form-group-btn">
                <IonButton expand="full" color="danger" className="form-btn" type="submit">Login</IonButton>
                <a href="/register">Não tenho conta</a>
                <a href="/register">Esqueçeu sua senha?</a>
                </div>
        </div>
    );
};
export default FormContainer;