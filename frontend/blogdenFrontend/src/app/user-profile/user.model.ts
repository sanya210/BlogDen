export class User{
    // userId: number;
    // email: String;
    // userFirstName: String;
    // userLastName: String;
    // userDesc: String;
    // userPhoto: String;

    // constructor(userId: number,
    //     email: String,
    //     userFirstName: String,
    //     userLastName: String,
    //     userDesc: String,
    //     userPhoto: String){
    //     this.userId=userId;
    //     this.email=email;
    //     this.userFirstName=userFirstName;
    //     this.userLastName=userLastName;
    //     this.userDesc=userDesc;
    //     this.userPhoto=userPhoto;

    // }

    constructor(public userId: number,
        public email: String,
        public userFirstName: String,
        public userLastName: String,
        public userDesc: String,
        public userPhoto: String){}

    // public constructor(public userId:number){}
}