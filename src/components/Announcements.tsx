import React from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonContent } from '@ionic/react';
import anns from '../data/anns'

const Announcements: React.FC = () => {
  console.log(anns)

  return (
    <IonContent>
      {
        anns.map((ann,i) => {
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
};

export default Announcements;
