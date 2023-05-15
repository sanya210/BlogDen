export class Article{
    public postTitle: String;
    public postCategory: String;
    public postContent: String;
    public postedOn: Date;
    public modifiedOn: Date;
    //public preview: String;

    constructor(postTitle: String, postCategory: String, postContent: String, postedOn: Date, modifiedOn: Date){
        this.postTitle=postTitle;
        this.postCategory=postCategory;
        this.postContent=postContent;
        this.postedOn=postedOn;
        this.modifiedOn=modifiedOn;
    }
}