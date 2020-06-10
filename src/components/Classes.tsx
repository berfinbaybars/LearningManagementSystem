import React, { useState } from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonContent, IonGrid, IonRow, IonCol, IonIcon, IonFab, IonFabButton, IonChip, IonHeader, withIonLifeCycle, useIonViewDidEnter } from '@ionic/react';
import { heartOutline,heart, time } from 'ionicons/icons';
import classes from '../data/classes.json'
import './Login.css';
import { setFavs, delFavs } from '../data/favs';
import { Plugins } from '@capacitor/core'

const email = sessionStorage.getItem("email")
const { Storage } = Plugins

class Classes extends React.Component<{},{cls: any,favs:any}> {
    constructor(props){
        super(props)
        this.state = {
            cls: [],
            favs: []
        }
    }
    getFavs = async() => {
        let ret = await Storage.get({ key: 'fav' })
        /* let value = JSON.stringify(ret.value) 
        let fav = JSON.parse(JSON.parse(value)); */
        let fav = JSON.parse(ret.value)
        let data = []
        if(fav){
            //console.log(fav)
            fav.map(f => {
                if(f.email === email){
                    data.push(f)
                }
            })
        }
        //console.log(data)
        classes.classes.map(cl=> {
            data.map(fav => {
                //console.log(fav)
                if(fav.cl === cl.name){
                    cl.ifFaved = true
                   // console.log(cl)

                }
            })
        })
        this.setState({cls:classes.classes})

        //console.log(favs)
    }
    componentWillMount(){
        this.getFavs()
    }
    
   render(){
    //console.log(this.state.cls)
    //console.log(this.state.favs)
    

    return (
        <IonContent>
            <IonGrid>
                <IonRow>
                    {
                        this.state.cls.map((cl,i) => {
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
   } 
  
};

export default Classes ;
