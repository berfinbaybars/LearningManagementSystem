import React from 'react';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent ,IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const Announcements: React.FC = () => {
  return (
        <IonCard>
        <IonCardHeader>
          <IonCardSubtitle>MATH101</IonCardSubtitle>
          <IonCardTitle>Midterm 1</IonCardTitle>
        </IonCardHeader>

        <IonCardContent>
          Midterm exam will be at 12AM on 29/03/2019
        </IonCardContent>
      </IonCard>
  );
};

export default Announcements;
