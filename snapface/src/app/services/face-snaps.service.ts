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
    snapFaceSnapById(faceSnapId: number): void {
        const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
        if (faceSnap) {
            faceSnap.snaps++;
        } else {
            throw new Error('FaceSnap not found!');
        }
    }

    unsnapFaceSnapById(faceSnapId: number): void {
        const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
        if (faceSnap) {
            faceSnap.snaps--;
        } else {
            throw new Error('FaceSnap not found!');
        }
    }
}