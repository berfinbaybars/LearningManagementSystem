import React, { useState } from 'react';
import { IonList, IonItem, IonLabel, IonInput, IonButton, IonToast } from '@ionic/react';
import './Login.css';
import { Plugins } from '@capacitor/core'

const { Storage } = Plugins


let email : any;
let password : any;



class Login extends React.Component<{},{logined:boolean ,showToast1: boolean}> {
  constructor(props){
    super(props)
    this.state = {
      showToast1:false,
      logined:false
    }
  } 
  check = async() => {
    const ret = await Storage.get({ key: 'user' });
    const value = JSON.stringify(ret.value) 
    let users = JSON.parse(JSON.parse(value));
    if(!users){
      users= [{}]
    }
    //console.log(users)
    users.forEach(user => {
      if(user.email === email && user.password === password){
        this.setState({logined:true})
        //console.log(logined)
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
    })
    if(this.state.logined === false) {
      this.setState({showToast1:true})
    }
  }
  render(){
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
        <IonButton onClick={this.check}>Login</IonButton>
        <IonToast
          isOpen={this.state.showToast1}
          onDidDismiss={() => this.setState({showToast1:false})}
          message="Invalid credentials"
          duration={1200}
          position="bottom"
          color="danger"
        />
      </IonList>
      
  );
  }
  
};

export default Login;
