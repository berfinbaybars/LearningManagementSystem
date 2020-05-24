import React from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonContent } from '@ionic/react';
import anns from '../data/announcements.json'


const Announcements: React.FC = () => {
  
  return (
    <IonContent>
      {
        anns.announcements.map(ann => {
          return(
            <IonCard>
              <IonCardHeader>
                <IonCardTitle>{ann.class}</IonCardTitle>
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
