import React from 'react';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonContent, IonGrid, IonRow, IonCol, IonButton,IonIcon, IonFab, IonFabButton } from '@ionic/react';
import { heartOutline,heart } from 'ionicons/icons';
import classes from '../data/classes.json'
import './Login.css';

const Classes: React.FC = () => {
  return (
    <IonContent>
        <IonGrid>
            <IonRow>
                {
                    classes.classes.map(cl => {
                        return(
                            <IonCol size="6">
                                <IonCard>
                                    <IonFab vertical="top" horizontal="end">
                                        <IonFabButton onClick={()=>{
                                            if(document.getElementById(cl.name)?.getAttribute("icon")===heart){
                                                document.getElementById(cl.name)?.setAttribute("icon",heartOutline)
                                            }else{
                                                document.getElementById(cl.name)?.setAttribute("icon",heart)
                                                }
                                            }} color="light">
                                            <IonIcon id={cl.name} color="danger" icon={heartOutline}></IonIcon>
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

export default Classes;
