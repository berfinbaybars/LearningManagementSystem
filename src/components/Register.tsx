import React,{useState} from 'react';
import { IonList, IonItem, IonLabel, IonInput, IonButton, IonSelect, IonSelectOption, IonToast } from '@ionic/react';
import { Plugins } from '@capacitor/core'
import './Login.css';

const { Storage } = Plugins

const Register: React.FC = () => {
  let email: string;
  let password: string;
  let type: string;
  const [showToast1, setToast1] = useState(false)


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
        setToast1(true)
      })
    }
    console.log(users)
    users.push(newUser)

    Storage.set({
      key:'user',
      value: JSON.stringify(users)
    }).then(()=>{
      setToast1(true)
      window.location.href="http://localhost:8100/Login"
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
      <IonToast
        isOpen={showToast1}
        onDidDismiss={() => setToast1(false)}
        message="User added"
        duration={800}
        position="top"
        color="success"
      />
    </IonList>
  );
};

export default Register;
