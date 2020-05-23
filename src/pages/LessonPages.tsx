import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonModal, IonButton, 
    IonLabel, IonInput, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle} from '@ionic/react';
import React, { useState } from 'react';
import { useParams } from 'react-router';
import './Page.css';
import classes from '../data/classes.json'
import anns from '../data/announcements.json'
import '../components/Login.css'


const ClassPages: React.FC = () => {

    const { name } = useParams<{ name: string; }>();
    const [showModal, setShowModal] = useState(false)
    let announcement:string

    const addAnnouncement = () => {
        setShowModal(false)
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>{name}</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <IonHeader collapse="condense">
                <IonToolbar>
                    <IonTitle size="large">{name}</IonTitle>
                </IonToolbar>
                </IonHeader>
                <IonButton id="addButton" onClick={() => setShowModal(true)}>Add Announcement</IonButton>

                {anns.announcements.map(ann => {
                    if(ann.class === name) {
                        return(
                            <IonCard >
                            <IonCardHeader>
                            <IonCardTitle>{ann.class}</IonCardTitle>
                            </IonCardHeader>
                    
                            <IonCardContent>
                                {ann.text}
                            </IonCardContent>
                        </IonCard>      
                        )
                    }
            })}
            </IonContent>
            <IonModal isOpen={showModal}>
                <IonButton color="danger" onClick={() => setShowModal(false)}>Close</IonButton>
                <IonList id="loginlist">
                    <IonItem >
                        <IonLabel position="floating">Announcement</IonLabel>
                        <IonInput type="text" onIonChange={(e) => { announcement = JSON.stringify(e.detail.value) }}></IonInput>
                    </IonItem>
                    <IonButton onClick={addAnnouncement}>Add Announcement</IonButton>
                </IonList>
            </IonModal>
        </IonPage>
        
  );
};

export default ClassPages;
