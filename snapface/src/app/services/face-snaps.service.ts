import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
// Un service est une classe, 
// et la façon la plus simple de déclarer 
// une classe comme étant un service est 
// d'utiliser le décorateur  @Injectable()  
// qui s'importe depuis  @angular/core:
@Injectable({
  providedIn: 'root'
})
// L'objet de configuration qui spécifie  
// providedIn: 'root'  dit à Angular d'enregistrer 
// ce service à la racine de l'application. 
// Ce sera très souvent le cas pour vos services, 
// car ça permet de s'assurer de n'avoir qu'
// une seule instance du service, 
// partagée par tous les partis intéressés.
// Le premier élément que vous allez déporter 
// dans votre service est le tableau des FaceSnaps. 
// Il est important de savoir qu'un service n'a pas 
// de méthode  ngOnInit(), car les services ne sont 
// pas instanciés de la même manière que les components. 
// Il faudra donc déclarer et 
// initialiser le tableau dans la même expression :
export class FaceSnapsService {
    faceSnaps: FaceSnap[] = [
          { 
            id: 1,
            title: 'Archibald',
            description: 'Mon meilleur ami depuis tout petit !',
            imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
            createdDate: new Date(),
            snaps: 350,
            location: 'Paris'
          },
          { 
            id: 2,
            title: 'Three Rock Mountain',
            description: 'Un endroit magnifique pour les randonnées.',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
            createdDate: new Date(),
            snaps: 0,
            location: 'la montagne'
          },
          { 
            id: 3,
            title: 'Un bon repas',
            description: 'Mmmh que c\'est bon !',
            imageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
            createdDate: new Date(),
            snaps: 0
          }
    ]
    getAllFaceSnaps(): FaceSnap[] {
        return this.getAllFaceSnaps();
    }

    // Cette méthode retourne un FaceSnap si 
    // elle le trouve (d'où son type de retour), 
    // et  throw  une erreur sinon.

    getFaceSnapById(faceSnapId: number): FaceSnap {
        const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
        if (!faceSnap) {
            throw new Error('FaceSnap not found!');
        } else {
            return faceSnap;
        }
      }
    // snapFaceSnapById(faceSnapId: number): void {
    //     const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    //     if (faceSnap) {
    //         faceSnap.snaps++;
    //     } else {
    //         throw new Error('FaceSnap not found!');
    //     }
    // }

    // unsnapFaceSnapById(faceSnapId: number): void {
    //     const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    //     if (faceSnap) {
    //         faceSnap.snaps--;
    //     } else {
    //         throw new Error('FaceSnap not found!');
    //     }
    // }
    // Maintenant la partie fun : vous allez modifier l'empreinte 
    // de  snapFaceSnapById()  pour qu'elle accepte un deuxième 
    // argument qui permettra de choisir le  snapType  – un snap, ou un unsnap.
    // Voici une première idée :
    // snapFaceSnapById(faceSnapId: number, snapType: string): void {
    //     const faceSnap = this.getFaceSnapById(faceSnapId);
    //     snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
    // }
    //Ninja typescript
    // Cette méthode utilise  getFaceSnapById()  pour récupérer le FaceSnap, 
    // et si le deuxième argument est  'snap', rajoute un snap ; sinon, elle enlève un snap.
    // Cependant, on pourrait passer n'importe quelle chaîne de caractères à cette méthode. 
    // Afin de limiter les possibilités à des options sémantiques, 
    // on peut remplacer le type  string  par un literal type :
    snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
        const faceSnap = this.getFaceSnapById(faceSnapId);
        snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
    }


}