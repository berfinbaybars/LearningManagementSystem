import React, { useState } from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonContent, IonButton, IonModal, IonInput, IonList,IonItem, IonLabel, IonToast } from '@ionic/react';
import { Plugins } from '@capacitor/core'

const { Storage } = Plugins
const email = sessionStorage.getItem("email");



class Notes extends React.Component<{},{notes: any, showModal: boolean, showToast1: boolean, note:any, noteClass:any}> {
    constructor(props){
        super(props)
        this.state = {
          notes:[],
          showModal:false,
          showToast1:false,
          note:'',
          noteClass:'',
        }
    }

    addNote = async() => {
        let data = {
            email,
            note:this.state.note,
            class:this.state.noteClass
        }
        if(this.state.notes===null){
            Storage.set({
                key:'note',
                value: JSON.stringify([{
                email:email,
                note:this.state.note,
                class:this.state.noteClass
                }])
            }).then(()=>{
                this.setState({showToast1:true})
                this.setState({showModal:false})
            })
        }else {
            this.state.notes.push(data)

            Storage.set({
            key:'note',
            value: JSON.stringify(this.state.notes)
            }).then(()=>{
                this.setState({showToast1:true})
                this.setState({showModal:false})

            })
        }
        
    }

    getNotes = async() => {
        let ret = await Storage.get({ key: 'note' })
        let value = JSON.stringify(ret.value) 
        let nts = JSON.parse(JSON.parse(value));
        let data = []
        if(nts){
            nts.forEach(note => {
                if(note.email === email){
                    data.push(note)
                }
            })
        }
        this.setState({notes:data})
        //console.log(notes)
    }
    componentWillMount(){
        this.getNotes()
    }
    render(){
        return (
            <IonContent>
                <IonButton id="addButton" onClick={() => this.setState({showModal:true})}>Add Note</IonButton>
                
                {   
                    this.state.notes.map((note, i) => {
                        return(
                            <IonCard key={i}>
                            <IonCardHeader>
                            <IonCardTitle>{note.class}</IonCardTitle>
                            </IonCardHeader>
                    
                            <IonCardContent>
                                {note.note}
                            </IonCardContent>
                        </IonCard>      
                        )
                    })
                }
                <IonModal isOpen={this.state.showModal}>
                    <IonButton color="danger" onClick={() => this.setState({showModal:true})}>Close</IonButton>
                    <IonList id="loginlist">
                        <IonItem >
                            <IonLabel position="floating">Class</IonLabel>
                            <IonInput type="text" onIonChange={(e) => { this.setState({noteClass: e.detail.value}) }}></IonInput>
                        </IonItem>
                        <IonItem>
                            <IonLabel position="floating">Note</IonLabel>
                            <IonInput onIonChange={(e) => { this.setState({note: e.detail.value}) }}></IonInput>
                        </IonItem>
                        <IonButton onClick={this.addNote}>Add Note</IonButton>
                    </IonList>
                </IonModal>
                <IonToast
                    isOpen={this.state.showToast1}
                    onDidDismiss={() => this.setState({showToast1:false})}
                    message="Note added"
                    duration={800}
                    position="top"
                    color="success"
                />
            </IonContent>
            
            
        )
    }
    
  
};

export default Notes;
