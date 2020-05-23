import React from 'react';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonContent, IonGrid, IonRow, IonCol, IonButton,IonIcon, IonFab, IonFabButton } from '@ionic/react';
import { heartOutline,heart, arrowForwardCircleOutline } from 'ionicons/icons';
import classes from '../data/classes.json'
import './Login.css';
import users from '../data/users.json'

const Lessons: React.FC = () => {
    interface userClasses {
        name:string;
        desc:string;
    }
    const email = sessionStorage.getItem("email")
    let userClasses:userClasses[] = []
    users.users.map(user => {
        if(user.email===email){
            user.classes?.map(cls => {
                classes.classes.map(cl => {
                    if(cls.name === cl.name){
                        userClasses.push(cl)
                    }
                })
                
            })
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
                                        <IonFabButton onClick={()=>window.location.href=`http://localhost:8100/lesson/${cl.name}`}>
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
  </IonContent>
  );
};

export default Lessons;
