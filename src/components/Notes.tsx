import React from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonContent } from '@ionic/react';
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

    return (
        <IonContent>
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
            
        </IonContent>
        
        
    )
  
};

export default Notes;
