import React, { useState } from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonContent, IonGrid, IonRow, IonCol, IonIcon, IonFab, IonFabButton, IonChip, IonHeader, withIonLifeCycle, useIonViewDidEnter } from '@ionic/react';
import { heartOutline,heart } from 'ionicons/icons';
import classes from '../data/classes.json'
import './Login.css';
import { setFavs, delFavs } from '../data/favs';
import favs from '../data/favs'
const email = sessionStorage.getItem("email")

const Classes: React.FC = () => {
    classes.classes.map(cl=> {
        favs.map(fav => {
            //console.log(fav)
            if(fav.cl === cl.name){
                cl.ifFaved = true
            }
        })
    })
    
  
    
  return (
    <IonContent>
        <IonGrid>
            <IonRow>
                {
                    classes.classes.map((cl,i) => {
                        //console.log(cl)
                        if (cl.ifFaved){
                            return(
                                <IonCol key={i} size="12">
                                    <IonCard>
                                        <IonFab id="favbtn" vertical="top" horizontal="end">
                                            <IonFabButton onClick={function(){
                                                    delFavs(email,cl.name)
                                                    window.location.reload()
                                                }} id={cl.desc} color="light">
                                                <IonIcon id={cl.name} color="danger" icon={heart}></IonIcon>
                                            </IonFabButton>
                                        </IonFab>
    
                                    <IonCardHeader>
                                        <IonCardTitle>{cl.name} </IonCardTitle>
                                    </IonCardHeader>
                                        <IonCardContent>{cl.desc}</IonCardContent>
                                    </IonCard>
                                </IonCol>
                            )
                        }
                        else {
                            return(
                                <IonCol key={i} size="12">
                                    <IonCard>
                                        <IonFab id="favbtn" vertical="top" horizontal="end">
                                            <IonFabButton onClick={function(){
                                                    setFavs(email,cl.name)
                                                    window.location.reload()
                                                }} id={cl.desc} color="light">
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
                        }
                        
                    })
                }
            
            </IonRow>
        </IonGrid>
  </IonContent>
  );
};

export default Classes ;
