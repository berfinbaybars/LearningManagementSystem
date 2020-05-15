import React from 'react';
import { IonList, IonItem, IonLabel, IonInput, IonButton, IonSelect, IonSelectOption } from '@ionic/react';
import './Login.css';
import userjson from '../data/users.json';

const Register: React.FC = () => {
  let email: string;
  let password: string;
  let type: string;

  const addUser = () => {
    
  }

  return (
    <IonList id="loginlist">
      <IonItem >
        <IonLabel position="floating">Email</IonLabel>
        <IonInput type="text" clearInput onIonChange={(e) => { email = JSON.stringify(e.detail.value) }}></IonInput>
      </IonItem>
      <IonItem>
        <IonLabel position="floating">Password</IonLabel>
        <IonInput type="password" onIonChange={(e) => { password = JSON.stringify(e.detail.value) }}></IonInput>
      </IonItem>
      <IonItem>
        <IonLabel position="floating">Type</IonLabel>
        <IonSelect onIonChange={(e) => { type = JSON.stringify(e.detail.value) }}>
          <IonSelectOption value="teacher">Teacher</IonSelectOption>
          <IonSelectOption value="student">Student</IonSelectOption>
        </IonSelect>
      </IonItem>
      <IonButton onClick={addUser}>Register</IonButton>
    </IonList>
  );
};

export default Register;
