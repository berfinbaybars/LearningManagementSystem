import React, { useState } from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonContent, IonGrid, IonRow, IonCol, IonIcon, IonFab, IonFabButton, IonButton, IonItem, IonList,IonLabel,IonInput,IonModal } from '@ionic/react';
import { arrowForwardCircleOutline } from 'ionicons/icons';
import classes from '../data/classes.json'
import './Login.css';
import users from '../data/users.json'
import { Plugins } from '@capacitor/core'

const { Storage } = Plugins

const Lessons: React.FC = () => {
    interface userClasses {
        name:string;
        desc:string;
    }
    const email = sessionStorage.getItem("email")
    const [showModal, setShowModal] = useState(false)
    
    const anns = []

    let announcement
    const [cl, setCl] = useState("")
    const [arr,setArr]= useState([])

    const addAnn = (name) => {
        setShowModal(true)
        console.log(name)
        setCl(name)
    }

    const addAnnouncement = async() => {
        setShowModal(false)
        console.log(cl)
        let ret = await Storage.get({ key: 'ann' })
        let value = JSON.stringify(ret.value) 
        let announces = JSON.parse(JSON.parse(value));
        if(announces){
            setArr(announces)
            announces.forEach(ann => {
                if(ann.class === cl){
                    anns.push(ann)
                }
            })
        }
        console.log(arr)
        console.log(anns)
        let newAnn = {
            text:announcement,
            class:cl
        }
        if(anns===null){
            Storage.set({
                key:'ann',
                value: JSON.stringify([{
                    text:announcement,
                    class:cl
                }])
            }).then(()=>{
                console.log('Added')
            })
        }else {
            anns.push(newAnn)
            Storage.set({
            key:'ann',
            value: JSON.stringify(anns)
            }).then(()=>{
                console.log('Added')
            })
        }
        
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
                        userClasses.map(cl => {
                            return(
                                <IonCol size="6">
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
                    <IonButton color="danger" onClick={() => setShowModal(false)}>Close</IonButton>
                    <IonList id="loginlist">
                        <IonItem >
                            <IonLabel position="floating">Announcement</IonLabel>
                            <IonInput type="text" onIonChange={(e) => { announcement = e.detail.value }}></IonInput>
                        </IonItem>
                        <IonButton onClick={addAnnouncement}>Add Announcement</IonButton>
                    </IonList>
                </IonModal>
    </IonContent>
    );
};

export default Lessons;
