import React from 'react';
import {IonItemDivider, IonList, IonItem, IonLabel, IonInput, IonButton } from '@ionic/react';
import './Login.css';

const Login: React.FC = () => {
  return (
    <IonList id="loginlist">
    <IonItem >
    <IonLabel position="floating">Email</IonLabel>
      <IonInput type="text" clearInput></IonInput>
    </IonItem>

    <IonItem>
    <IonLabel position="floating">Password</IonLabel>
       <IonInput type="password"></IonInput>
    </IonItem>
    <IonButton>Login</IonButton>

    
  </IonList>
);
};

export default Login;
