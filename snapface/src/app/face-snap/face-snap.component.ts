import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
// Pour initialiser ces propriétés en suivant 
// les best practices Angular, vous allez utiliser la méthode  ngOnInit(). 
// Pour l'utiliser, votre component doit implémenter l'interface  OnInit
export class FaceSnapComponent implements OnInit {
  // Pour éviter que typescrit râle on ajoute un bind (le point d'exclamation)
title!:string;
description!:string;
createDate!:Date;
//le nombre de likes
snaps!:number;
imageUrl!:string;
buttonText!:string;

//C'est ici qu'on initialise les propriétés
//On prépare les données
ngOnInit(){
this.title="Archibald";
this.description="Mon meilleur ami depuis tout petit !";
this.createDate= new Date();
this.snaps=6;
this.imageUrl='https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg';
this.buttonText='Oh Snap!!';
}

onSnap(){
if(this.buttonText==='Oh Snap!!'){
  //L'utilisateur n'a pas encore cliqué sur le bouton
  this.snaps++;
  this.buttonText='Oups! unSnap!!';
}
else{
  // Si on est déjà sur unSnap
  this.snaps--;
  this.buttonText='Oh Snap!!';
}
}

}
