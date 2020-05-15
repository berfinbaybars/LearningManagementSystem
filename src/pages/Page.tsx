import { IonCard, IonIcon,IonButton, IonGrid, IonRow, IonCol, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent ,IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { useParams } from 'react-router';
import Announcements from '../components/Announcements';
import Notification from '../components/Notification';
import './Page.css';
import { heartOutline } from 'ionicons/icons';
import Notes from '../components/Notes';

const Page: React.FC = () => {

  let logindata = sessionStorage.getItem("type");
    if(!logindata){
      console.log("Access denied")
      window.location.href ="http://localhost:8100/Login"
    }
    console.log("Access granted")

  const { name } = useParams<{ name: string; }>();
  if(name === 'Announcements'){
    return (
      <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Announcements />
        <Announcements />
        <Announcements />
        <Announcements />
      </IonContent>
    </IonPage>
    );
  }
  else if(name === 'Notifications'){
    return (
      <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Notification />
        <IonCard>
        <IonCardHeader>
          <IonCardSubtitle>Homework</IonCardSubtitle>
          <IonCardTitle>Math 101</IonCardTitle>
        </IonCardHeader>

        <IonCardContent>
          Your homework is due to tomorrow!
        </IonCardContent>
      </IonCard>
      </IonContent>
    </IonPage>
    );
  }
  else if(name === 'Classes'){
    return (
      <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
      <IonGrid>
        <IonRow>
          <IonCol size="6">
            <IonCard>
            <IonButton class="ion-float-right" color="light"><IonIcon slot="icon-only" color="danger" icon={heartOutline}></IonIcon></IonButton>

              <IonCardHeader>
                <IonCardTitle>MATH 101 </IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                Intro to Calculus
              </IonCardContent>
            </IonCard>
          </IonCol>
          <IonCol size="6">
              <IonCard>
              <IonButton class="ion-float-right" color="light"><IonIcon slot="icon-only" color="danger" icon={heartOutline}></IonIcon></IonButton>
              <IonCardHeader>
                <IonCardTitle>PHYS 101</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                Introduction to Physics
              </IonCardContent>
          </IonCard>
          </IonCol>
        </IonRow>
      </IonGrid>
        
      
      </IonContent>
    </IonPage>
    );
  }
  else if(name === 'Notes'){
    return (
      <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
      <Notes/>

      
      </IonContent>
    </IonPage>
    );
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};

export default Page;
