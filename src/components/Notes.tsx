import React, { useState } from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonContent, IonButton, IonModal, IonInput, IonList,IonItem, IonLabel, IonTextarea } from '@ionic/react';
import users from '../data/users.json';

const Notes: React.FC = () => {
    interface notes {
        note: string;
        class: string;
    }
    const email = sessionStorage.getItem("email");
    const notes: notes[] =[]
    users.users.map(user => {
        if(user.email === email) {
            user.notes?.map(note => {
                notes.push(note)
            })
        }
    })
    const [showModal, setShowModal] = useState(false)
    let note:string;
    let noteClass:string;
    const addNote = () => {
        setShowModal(false);
        let data = {
           note,
           class: noteClass
        }
        console.log(data)
        notes.push(data)
        console.log(notes)
    }

    return (
        <IonContent>
            <IonButton id="addButton" onClick={() => setShowModal(true)}>Add Note</IonButton>
            {notes.map(note => {
                return(
                    <IonCard >
                    <IonCardHeader>
                    <IonCardTitle>{note.class}</IonCardTitle>
                    </IonCardHeader>
            
                    <IonCardContent>
                        {note.note}
                    </IonCardContent>
                </IonCard>      
                )
            })}
            <IonModal isOpen={showModal}>
                <IonButton color="danger" onClick={() => setShowModal(false)}>Close</IonButton>
                <IonList id="loginlist">
                    <IonItem >
                        <IonLabel position="floating">Class</IonLabel>
                        <IonInput type="text" onIonChange={(e) => { note = JSON.stringify(e.detail.value) }}></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="floating">Note</IonLabel>
                        <IonInput onIonChange={(e) => { noteClass = JSON.stringify(e.detail.value) }}></IonInput>
                    </IonItem>
                    <IonButton onClick={addNote}>Add Note</IonButton>
                </IonList>
            </IonModal>
        </IonContent>
        
        
    )
  
};

export default Notes;
