import React, { useState } from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonContent, IonGrid, IonRow, IonCol, IonIcon, IonFab, IonFabButton, IonButton, IonItem, IonList,IonLabel,IonInput,IonModal, IonToast } from '@ionic/react';
import { arrowForwardCircleOutline } from 'ionicons/icons';
import classes from '../data/classes.json'
import './Login.css';
import { Plugins } from '@capacitor/core'
import axios from 'axios'
import {allFavs} from '../data/favs';
import https from 'https'
import { setAnns } from '../data/anns';

const { Storage } = Plugins

const Lessons: React.FC = () => {
    interface userClasses {
        name:string;
        desc:string;
    }
    const email = sessionStorage.getItem("email")
    const [showModal, setShowModal] = useState(false)
    const [showToast, setShowToast] = useState(false)
    

    let announcement
    const [cl, setCl] = useState("")

    const addAnn = (name) => {
        setShowModal(true)
        console.log(name)
        setCl(name)
    }

    const addAnnouncement = async() => {
        setShowModal(false)
        //console.log(cl)
        setShowToast(true)
        setAnns(announcement,cl);

        allFavs.map(fav => {
            if(fav.cl === cl){
                let data = {
                    email: fav.email,
                    class: cl,
                    text: announcement
                }

                const instance = axios.create({
                    httpsAgent: new https.Agent({rejectUnauthorized:false})
                })
                
                instance.post('http://localhost:3000/send',{data})
                

            }
        })
    }
    
    let userClasses:userClasses[] = []
    classes.classes.map(cl => {
        if(cl.instructor === email){
            userClasses.push(cl)
        }
    })

    return (
        <IonContent>
            <IonGrid>
                <IonRow>
                    {
                        userClasses.map((cl,i) => {
                            return(
                                <IonCol key={i} size="6">
                                    <IonCard>
                                        <IonFab vertical="top" horizontal="end">
                                            <IonFabButton onClick={()=>addAnn(cl.name)}>
                                                <IonIcon id={cl.name} color="light" icon={arrowForwardCircleOutline}></IonIcon>
                                            </IonFabButton>
                                        </IonFab>

                                    <IonCardHeader>
                                        <IonCardTitle>{cl.name} </IonCardTitle>
                                    </IonCardHeader>
                                        <IonCardContent>{cl.desc}</IonCardContent>
                                    </IonCard>
                                </IonCol>
                            )
                        })
                    }
                
                </IonRow>
            </IonGrid>
            <IonModal isOpen={showModal}>
                <IonButton color="danger" id="close-btn" onClick={() => setShowModal(false)}>Close</IonButton>
                <IonList id="loginlist">
                    <IonItem >
                        <IonLabel position="floating">Announcement</IonLabel>
                        <IonInput type="text" onIonChange={(e) => { announcement = e.detail.value }}></IonInput>
                    </IonItem>
                    <IonButton onClick={addAnnouncement}>Add Announcement</IonButton>
                </IonList>
            </IonModal>
            <IonToast
                isOpen={showToast}
                onDidDismiss={() => setShowToast(false)}
                message="Announcement Added"
                duration={1200}
                position="bottom"
                color="success"
            />
    </IonContent>
    );
};

export default Lessons;
