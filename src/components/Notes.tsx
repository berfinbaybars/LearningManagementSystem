import React, { useState } from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonContent, IonButton, IonModal, IonInput, IonList,IonItem, IonLabel } from '@ionic/react';
import { Plugins } from '@capacitor/core'

const { Storage } = Plugins
const notes = []
const email = sessionStorage.getItem("email");
const getNotes = async() => {
    let ret = await Storage.get({ key: 'note' })
    let value = JSON.stringify(ret.value) 
    let nts = JSON.parse(JSON.parse(value));
    if(nts){
        nts.forEach(note => {
            if(note.email === email){
                notes.push(note)
            }
        })
    }
    console.log(notes)
}
getNotes()


const Notes: React.FC = () => {
    const [showModal, setShowModal] = useState(false)
    let note
    let noteClass
    
    const addNote = async() => {
        setShowModal(false);
        let data = {
            email,
            note:note,
            class: noteClass
        }
        if(notes===null){
            Storage.set({
                key:'note',
                value: JSON.stringify([{
                email:email,
                note:note,
                class:noteClass
                }])
            }).then(()=>{
                console.log('Added')
            })
        }else {
            notes.push(data)

            Storage.set({
            key:'note',
            value: JSON.stringify(notes)
            }).then(()=>{
                console.log('Added')
        })
        }
        
    }
    console.log(notes)
    return (
        <IonContent>
            <IonButton id="addButton" onClick={() => setShowModal(true)}>Add Note</IonButton>
            
            {   
                notes.map((note, i) => {
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
            <IonModal isOpen={showModal}>
                <IonButton color="danger" onClick={() => setShowModal(false)}>Close</IonButton>
                <IonList id="loginlist">
                    <IonItem >
                        <IonLabel position="floating">Class</IonLabel>
                        <IonInput type="text" onIonChange={(e) => { noteClass = e.detail.value }}></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="floating">Note</IonLabel>
                        <IonInput onIonChange={(e) => { note = e.detail.value }}></IonInput>
                    </IonItem>
                    <IonButton onClick={addNote}>Add Note</IonButton>
                </IonList>
            </IonModal>
        </IonContent>
        
        
    )
  
};

export default Notes;
