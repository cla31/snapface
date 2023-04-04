export class FaceSnap{
    // title:string;
    // description:string;
    // createDate:Date;
    // //le nombre de likes
    // snaps:number;
    // imageUrl:string;
    
    // constructor(title:string,description:string,createDate:Date,snaps:number,imageUrl:string){
    //     this.title=title;
    //     this.description=description;
    //     this.createDate= createDate;
    //     this.snaps=snaps;
    //     this.imageUrl=imageUrl;
    // }
// Pour faire plus court que tout ce qu'il y a écrit ci-dessus
    constructor(public title:string,
        public description:string,
        public createDate:Date,
        public snaps:number,
        public imageUrl:string){
    }
}