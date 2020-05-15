import React from 'react';
import { IonList, IonItem, IonLabel, IonInput, IonButton } from '@ionic/react';
import './Login.css';
import users from "../data/users.json";

let email : any;
let password : any;

const check = () => {
  users.users.map(user => {
    if(user.email === email && user.password === password){
      sessionStorage.setItem("type",user.type);
      sessionStorage.setItem("email", user.email);
      if(user.type === "teacher"){
        window.location.href = "http://localhost:8100/page/Lessons"
        
      }
      if(user.type === "student"){
        window.location.href = "http://localhost:8100/page/Announcements"
        console.log("Student Login")
      }
    }
    else {
      console.log("User is not found")
    }
  
  })
}

const Login: React.FC = () => {
  return (
    <IonList id="loginlist">
      <IonItem >
        <IonLabel position="floating">Email</IonLabel>
        <IonInput type="text" name="email" onIonChange = {(e) => { email = e.detail.value}} ></IonInput>
      </IonItem>
      <IonItem>
        <IonLabel position="floating">Password</IonLabel>
        <IonInput type="password" onIonChange = {(e) => { password = e.detail.value}}></IonInput>
      </IonItem>
      <IonButton onClick={check}>Login</IonButton>
    </IonList>
);
};

export default Login;
