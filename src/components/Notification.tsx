import React from 'react';
import {IonChip, IonLabel,IonBadge, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent ,IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const Announcements: React.FC = () => {
  return (
        <IonCard>
        <IonCardHeader>
          <IonCardSubtitle>Homework</IonCardSubtitle>
          <IonCardTitle>Math 101</IonCardTitle>
        </IonCardHeader>

        <IonCardContent>
        Your homework is graded:
        <IonChip color="primary">
          <IonLabel> 5/10</IonLabel>
        </IonChip>
        </IonCardContent>
      </IonCard>
  );
};

export default Announcements;
