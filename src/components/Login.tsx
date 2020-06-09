import React, { useState } from 'react';
import { IonList, IonItem, IonLabel, IonInput, IonButton, IonToast } from '@ionic/react';
import './Login.css';
import { Plugins } from '@capacitor/core'

const { Storage } = Plugins


let email : any;
let password : any;



const Login: React.FC = () => {
  const [showToast1, setToast1] = useState(false)
  const [logined, setLogined] = useState(false)
  const check = async() => {
    const ret = await Storage.get({ key: 'user' });
    const value = JSON.stringify(ret.value) 
    let users = JSON.parse(JSON.parse(value));
    if(!users){
      users= [{}]
    }
    //console.log(users)
    users.forEach(user => {
      if(user.email === email && user.password === password){
        setLogined(true)
        /* let tp = JSON.parse(user.type)
        console.log(tp) */
        sessionStorage.setItem("type",user.type);
        sessionStorage.setItem("email", user.email);
        if(user.type === "teacher"){
          window.location.href = "http://localhost:8100/page/Lessons"
          
        }
        if(user.type === "student"){
          window.location.href = "http://localhost:8100/page/Classes"
          console.log("Student Login")
        }
      }
    })
    if(logined === false) {
      setToast1(true)
    }
  }
  return (
    <IonList id="loginlist">
      <IonItem >
        <IonLabel position="floating">Email</IonLabel>
        <IonInput type="text" name="email" onIonChange = {(e) => { email = e.detail.value }} ></IonInput>
      </IonItem>
      <IonItem>
        <IonLabel position="floating">Password</IonLabel>
        <IonInput type="password" onIonChange = {(e) => { password = e.detail.value }}></IonInput>
      </IonItem>
      <IonButton onClick={check}>Login</IonButton>
      <IonToast
        isOpen={showToast1}
        onDidDismiss={() => setToast1(false)}
        message="User not found"
        duration={800}
        position="top"
        color="danger"
      />
    </IonList>
    
);
};

export default Login;
