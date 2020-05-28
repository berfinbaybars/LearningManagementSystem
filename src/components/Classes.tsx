import React from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonContent, IonGrid, IonRow, IonCol, IonIcon, IonFab, IonFabButton, IonChip, IonHeader } from '@ionic/react';
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
                            <IonCol size="12">
                                <IonCard>
                                    <IonFab id="favbtn" vertical="top" horizontal="end">
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
