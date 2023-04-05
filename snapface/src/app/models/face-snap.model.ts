export class FaceSnap{
    //La classe en plus simple
    title!:string;
    description!:string;
    createdDate!:Date;
    //le nombre de likes
    snaps!:number;
    imageUrl!:string;
     //     //Opérateur optionnel
    location?:string;
    
    // constructor(title:string,description:string,createDate:Date,snaps:number,imageUrl:string){
    //     this.title=title;
    //     this.description=description;
    //     this.createDate= createDate;
    //     this.snaps=snaps;
    //     this.imageUrl=imageUrl;
    // }
// Pour faire plus court que tout ce qu'il y a écrit ci-dessus
    // constructor(public title:string,
    //     public description:string,
    //     public createDate:Date,
    //     public snaps:number,
    //     public imageUrl:string,
    //     //Opérateur optionnel
    //     public location?:string){
    // }
}