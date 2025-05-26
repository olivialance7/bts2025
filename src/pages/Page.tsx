import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './Page.css';

const Page: React.FC = () => {

  const { name } = useParams<{ name: string; }>();
const cardContent = [
  {
    title: "Item 1",
    subtitle: "Subtitle 1",
    content: "this is the content for item 1.",
  },
  {
    title: "Item 2",
    subtitle: "Subtitle 2",
    content: "this is the content for item 2.",
  },{
    title: "Item 3",
    subtitle: "Subtitle 3",
    content: "this is the content for item 3.",
  },{
    title: "Item 4",
    subtitle: "Subtitle 4",
    content: "this is the content for item 4.",
  },{
    title: "Item 5",
    subtitle: "Subtitle 5",
    content: "this is the content for item 5.",
  },
]
return (

  <IonPage>

    <IonHeader>
<div className= "ion-padding">
  <h1>Welcome BTS 2025!</h1>
  <p> This is your personalized page</p>
</div>
      <IonToolbar>

        <IonButtons slot="start">

          <IonMenuButton />

        </IonButtons>

        <IonTitle>{name}</IonTitle>

      </IonToolbar>

    </IonHeader>



    <IonContent fullscreen>

      <IonHeader collapse="condense">

        <IonToolbar>

          <IonTitle size="large">{name}</IonTitle>

        </IonToolbar>

      </IonHeader>

      {cardContent.map((item, index) => (

        <IonCard key={index}>

          <img

            alt="Silhouette of mountains"

            src="https://ionicframework.com/docs/img/demos/card-media.png"

          />

          <IonCardHeader>

            <IonCardTitle>{item.title}</IonCardTitle>

            <IonCardSubtitle>{item.subtitle}</IonCardSubtitle>

          </IonCardHeader>



          <IonCardContent>{item.content}</IonCardContent>

        </IonCard>

      ))}

    </IonContent>

  </IonPage>

);

};



export default Page;

