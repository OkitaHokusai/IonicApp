import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import NotFound from '../components/NotFound';

const Error: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          
        </IonHeader>
        <NotFound/>
      </IonContent>
    </IonPage>
  );
};

export default Error;
