import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
  IonButton,
} from '@ionic/react';

import React from 'react';
import { useLocation } from 'react-router-dom';
import { alert, alertCircleOutline,libraryOutline, mailOutline, personCircleOutline, personAddOutline } from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [];
let hide = false
let logindata = sessionStorage.getItem("type");
if(!logindata){
  hide = true
  appPages.push(
    {
      title: 'Register',
      url: '/Register',
      iosIcon: personAddOutline,
      mdIcon: personAddOutline
    },
    {
      title: 'Login',
      url: '/Login',
      iosIcon: personCircleOutline,
      mdIcon: personCircleOutline
    },
  )
}

if(logindata === "teacher"){
  appPages.push(
    {
      title: 'Announcements',
      url: '/page/Announcements',
      iosIcon: alertCircleOutline,
      mdIcon: alert
    },
    {
      title: 'Notifications',
      url: '/page/Notifications',
      iosIcon: mailOutline,
      mdIcon: mailOutline
    },
    {
      title: 'Classes',
      url: '/page/Classes',
      iosIcon: libraryOutline,
      mdIcon: libraryOutline
    },
  )
}

if(logindata === "student"){
  appPages.push(
    {
      title: 'Announcements',
      url: '/page/Announcements',
      iosIcon: alertCircleOutline,
      mdIcon: alert
    },
    {
      title: 'Notifications',
      url: '/page/Notifications',
      iosIcon: mailOutline,
      mdIcon: mailOutline
    },
    {
      title: 'Classes',
      url: '/page/Classes',
      iosIcon: libraryOutline,
      mdIcon: libraryOutline
    },
  )
}


const Menu: React.FC = () => {
  const location = useLocation();
  const logout = () => {
    sessionStorage.removeItem("type");
    window.location.href = "http://localhost:8100/Login"
  }

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>PSO</IonListHeader>
          <IonNote>Personal School Overview</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" icon={appPage.iosIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
        <IonButton color="danger" onClick={logout} hidden={hide}>Logout</IonButton>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
