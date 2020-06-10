import React, { useState } from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonContent, withIonLifeCycle } from '@ionic/react';
import { Plugins } from '@capacitor/core'

const { Storage } = Plugins
const email = sessionStorage.getItem('email')


class Announcements extends React.Component<{},{anns: any}> {
  constructor(props){
    super(props)
    this.state = {
      anns: []
    }
  }
  favs = []
  getFavs = async() => {
    let ret = await Storage.get({ key: 'fav' })
    /* let value = JSON.stringify(ret.value) 
    let fav = JSON.parse(JSON.parse(value)); */
    let fav = JSON.parse(ret.value)
    if(fav){
        //console.log(fav)
        fav.map(f => {
            if(f.email === email){
                this.favs.push(f)
            }
        })
    }
    //console.log(favs)
  }

  getAnns = async() => {
    let ret = await Storage.get({ key: 'ann' })
    let value = JSON.stringify(ret.value) 
    let announces = JSON.parse(JSON.parse(value));
    let data = []
    if(announces){
        //console.log(announces)
        announces.map(ann => {
            this.favs.map(fav => {
                //console.log(fav, ann)
                if(ann.cl === fav.cl){
                    data.push(ann)
                }
            })
        })
    }
    data.reverse()
    this.setState({anns: data })
  }

  componentWillMount (){
    this.getFavs()
    this.getAnns()
  }

  
  render(){
    return (
      <IonContent>
        {
          this.state.anns.map((ann,i) => {
                return(
                  <IonCard key={i}>
                    <IonCardHeader>
                      <IonCardTitle>{ann.cl}</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>{ann.text}</IonCardContent>
                  </IonCard>
                )
          })
        }
        
      </IonContent>
          
    );
  }
};

export default withIonLifeCycle(Announcements);
