import React from 'react';
import { IonList, IonItem, IonLabel, IonInput, IonButton, IonSelect, IonSelectOption } from '@ionic/react';
import { Plugins } from '@capacitor/core'
import './Login.css';

const { Storage } = Plugins

const Register: React.FC = () => {
  let email: string;
  let password: string;
  let type: string;


  const addUser = async () => {
    let newUser = {
      email,
      password,
      type
    }
    const ret = await Storage.get({ key: 'user' });
    const value = JSON.stringify(ret.value) 
    const users = JSON.parse(JSON.parse(value));
    console.log(users)
    if(users===null){
      Storage.set({
        key:'user',
        value: JSON.stringify([{
          email:email,
          password:password,
          type:type
        }])
      }).then(()=>{
        console.log('Added')
      })
    }
    console.log(users)
    users.push(newUser)

    Storage.set({
      key:'user',
      value: JSON.stringify(users)
    }).then(()=>{
      console.log('Added')
    })


  }

  return (
    <IonList id="loginlist">
      <IonItem >
        <IonLabel position="floating">Email</IonLabel>
        <IonInput type="text" clearInput onIonChange={(e) => { email = e.detail.value }}></IonInput>
      </IonItem>
      <IonItem>
        <IonLabel position="floating">Password</IonLabel>
        <IonInput type="password" onIonChange={(e) => { password = e.detail.value }}></IonInput>
      </IonItem>
      <IonItem>
        <IonLabel position="floating">Type</IonLabel>
        <IonSelect onIonChange={(e) => { type = e.detail.value }}>
          <IonSelectOption value="teacher">Teacher</IonSelectOption>
          <IonSelectOption value="student">Student</IonSelectOption>
        </IonSelect>
      </IonItem>
      <IonButton onClick={addUser}>Register</IonButton>
    </IonList>
  );
};

export default Register;
