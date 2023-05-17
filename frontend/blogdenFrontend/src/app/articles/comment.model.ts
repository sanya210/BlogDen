export class Comment{
    public commentDesc:String;
    public createdOn:Date;
    public post: Object;
    public user: {
        userFirstName: String;
        userLastName: String;
        email: String;
    };
}