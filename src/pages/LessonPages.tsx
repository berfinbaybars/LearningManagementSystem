import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonModal, IonButton, 
    IonLabel, IonInput, IonCard, IonCardContent, IonCardHeader, IonCardTitle} from '@ionic/react';
import React, { useState } from 'react';
import { useParams } from 'react-router';
import './Page.css';
import '../components/Login.css'



const ClassPages: React.FC = () => {

    const { name } = useParams<{ name: string; }>();
    const [showModal, setShowModal] = useState(false)

    
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

                {/* {anns.map(ann => {
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
            })} */}
            </IonContent>
            
        </IonPage>
        
  );
};

export default ClassPages;
