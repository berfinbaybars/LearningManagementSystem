import React from 'react';
import { IonList, IonItem, IonLabel, IonInput, IonButton } from '@ionic/react';
import './Login.css';

const Register: React.FC = () => {
  let email : any;
  let password : any;
  
  const addUser = () => {
    
  }

  return (
    <IonList id="loginlist">
      <IonItem >
        <IonLabel position="floating">Email</IonLabel>
        <IonInput type="text" clearInput onIonChange = {(e) => { email = e.detail.value}}></IonInput>
      </IonItem>
      <IonItem>
        <IonLabel position="floating">Password</IonLabel>
        <IonInput type="password" onIonChange = {(e) => { password = e.detail.value}}></IonInput>
      </IonItem>
      <IonButton onClick={addUser}>Register</IonButton>
    </IonList>
);
};

export default Register;
