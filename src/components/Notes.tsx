import React from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/react';
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
        <IonCard >
            <IonCardHeader>
            <IonCardTitle>{notes[0].class}</IonCardTitle>
            </IonCardHeader>

            <IonCardContent>
            
            </IonCardContent>
        </IonCard>  
    )
  
};

export default Notes;
