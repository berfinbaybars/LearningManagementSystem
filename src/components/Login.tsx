import React from 'react';
import { IonList, IonItem, IonLabel, IonInput, IonButton } from '@ionic/react';
import './Login.css';

let email : any;
let password : any;

const teacher = {
  email: "teacher@gmail.com",
  password: "123"
}
const student = {
  email: "student@gmail.com",
  password: "123"
}

const check = () => {
  
  if(email === teacher.email && password === teacher.password){
    sessionStorage.setItem("type","teacher");
    console.log("Teacher Login");
    window.location.href = "http://localhost:8100/page/Announcements"
  }
  else if(email === student.email && password === student.password){
    sessionStorage.setItem("type","student");
    window.location.href = "http://localhost:8100/page/Announcements"
    console.log("Student Login")
  }
  else {
    console.log("User is not found")
  }

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
