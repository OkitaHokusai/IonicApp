import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFabList, IonFabButton,IonIcon,IonFab } from '@ionic/react';
import { add, settings, share, person, arrowForwardCircle, arrowBackCircle, arrowUpCircle, logoVimeo, logoFacebook, logoInstagram, home } from 'ionicons/icons';
import './Home.css';

const UserHome: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
      <IonFab vertical="bottom" horizontal="end" edge slot="fixed" className="menu">
          <IonFabButton color="danger">
            <IonIcon icon={settings} />
          </IonFabButton>
          <IonFabList side="start">
            <IonFabButton><IonIcon icon={home} /></IonFabButton>
            <IonFabButton><IonIcon icon={home} /></IonFabButton>
          </IonFabList>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default UserHome;