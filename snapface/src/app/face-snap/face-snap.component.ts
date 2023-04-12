import { Component, OnInit,Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';
@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
// Pour initialiser ces propriétés en suivant 
// les best practices Angular, vous allez utiliser la méthode  ngOnInit(). 
// Pour l'utiliser, votre component doit implémenter l'interface  OnInit
export class FaceSnapComponent implements OnInit {
  //Un autre décorateur
  @Input()faceSnap!:FaceSnap;
  buttonText!:string;


constructor(private faceSnapsService: FaceSnapsService) {}
ngOnInit(){
this.buttonText='Oh Snap!!';
}

onSnap(){
  if (this.buttonText === 'Oh Snap!') {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id);
      this.buttonText = 'Oops, unSnap!';
    } else {
      this.faceSnapsService.unsnapFaceSnapById(this.faceSnap.id);
      this.buttonText = 'Oh Snap!';
    }
  }
}


