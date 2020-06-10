import React, { useState } from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonContent, IonButton, IonModal, IonInput, IonList,IonItem, IonLabel, IonToast, IonFab, IonFabButton, IonIcon } from '@ionic/react';
import { Plugins } from '@capacitor/core'
import { copy } from 'ionicons/icons';

const { Storage, Clipboard } = Plugins
const email = sessionStorage.getItem("email");



class Notes extends React.Component<{},{notes: any, showModal: boolean, showToast1: boolean,showToast2: boolean, note:any, noteClass:any}> {
    constructor(props){
        super(props)
        this.state = {
          notes:[],
          showModal:false,
          showToast1:false,
          note:'',
          noteClass:'',
          showToast2:false
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
            this.state.notes.reverse()
            console.log(this.state.notes)
            this.state.notes.push(data)
            console.log(this.state.notes)
            Storage.set({
            key:'note',
            value: JSON.stringify(this.state.notes)
            }).then(()=>{
                this.setState({showToast1:true})
                this.setState({showModal:false})

            })
            this.state.notes.reverse()
        }
        
    }

    copyNote = async(text) => {
        Clipboard.write({
            string:text
        })
        let res = await Clipboard.read()
        console.log(res)
        this.setState({showToast2:true})
    }

    getNotes = async() => {
        let ret = await Storage.get({ key: 'note' })
        let value = ret.value
        
        if(value){
            let nts = JSON.parse(value);
            let data = []
            nts.forEach(note => {
                if(note.email === email){
                    data.push(note)
                }
            })
            data.reverse()
            this.setState({notes:data})
        }
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
                                    <IonFab  vertical="top" horizontal="end" edge={false}>
                                        <IonFabButton size="small" onClick={()=>this.copyNote(note.note)}>
                                            <IonIcon icon={copy}></IonIcon>
                                        </IonFabButton>
                                    </IonFab>
                                </IonCardHeader>
                        
                                <IonCardContent>
                                    {note.note}
                                </IonCardContent>
                            </IonCard>      
                        )
                    })
                }
                <IonModal isOpen={this.state.showModal}>
                    <IonButton color="danger" id="close-btn" onClick={() => this.setState({showModal:false})}>Close</IonButton>
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
                    duration={1200}
                    position="bottom"
                    color="success"
                />
                <IonToast
                    isOpen={this.state.showToast2}
                    onDidDismiss={() => this.setState({showToast2:false})}
                    message="Copied"
                    duration={1200}
                    position="bottom"
                    color="success"
                />
            </IonContent>
            
            
        )
    }
    
  
};

export default Notes;
