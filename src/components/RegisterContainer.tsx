import React, { useState } from 'react';
import {  IonInput, IonItem, IonButton, IonIcon ,IonItemDivider, IonImg } from '@ionic/react';

import './FormContainer.css';
import dots from '../images/cercuri.png';
import Waves from '../images/waves.png';

const RegisterContainer: React.FC = () => {

    const [text, setText] = useState<string>();
    const [number, setNumber] = useState<number>();
    const name='Okita';
    return (
        <div className="app-form">
                <img src={dots} alt="" className="app-bg"/>
                <img src={Waves} alt="" className="app-bg1"/>
                <div className="form-header">
                <h1>Glare Studio</h1>
                
                </div>
                <div className="form-group">
                <p>Usuario</p>
                <IonItem>
                    <IonInput value={text} placeholder=""  clearInput></IonInput>
                </IonItem>
                </div>
                <div className="form-group">
                <p>Senha</p>
                <IonItem>
                    <IonInput type="password" value={text} placeholder=""  clearInput></IonInput>
                </IonItem>
                </div>
                <div className="form-group">
                <p>Confirmar Senha</p>
                <IonItem>
                    <IonInput type="password" value={text} placeholder=""  clearInput></IonInput>
                </IonItem>
                </div>
                <div className="form-group">
                <p>Email</p>
                <IonItem>
                    <IonInput type="email" value={text} placeholder=""  clearInput></IonInput>
                </IonItem>
                </div>
                <div className="form-group-btn">
                <IonButton expand="full" color="danger" className="form-btn">Registrar</IonButton>
                <a href="/home">Ja tenho uma conta</a>
                </div>
        </div>
    );
};
export default RegisterContainer;