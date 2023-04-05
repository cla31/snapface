import { Component, OnInit,Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
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

ngOnInit(){
this.buttonText='Oh Snap!!';
}

onSnap(){
if(this.buttonText==='Oh Snap!!'){
  //L'utilisateur n'a pas encore cliqué sur le bouton
  this.faceSnap.snaps++;
  this.buttonText='Oops, unSnap!';
}
else{
  // Si on est déjà sur unSnap
  this.faceSnap.snaps--;
  this.buttonText='Oh Snap!!';
}
}
//Ecrire d'autres snaps!!! (cf fin dernière vidéo!!!)

}
