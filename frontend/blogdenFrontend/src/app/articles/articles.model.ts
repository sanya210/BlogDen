import { Comment } from "./comment.model";
export class Article{
    public postId: number;
    public postTitle: String;
    public postCategory: String;
    public postContent: String;
    public postedOn: Date;
    public modifiedOn: Date;
    public authorName: String;
    public comments: Comment[];
    //public preview: String;

    constructor(postTitle: String, postCategory: String, postContent: String, postedOn: Date, modifiedOn: Date, authorName: String, comments:Comment[]){
        this.postTitle=postTitle;
        this.postCategory=postCategory;
        this.postContent=postContent;
        this.postedOn=postedOn;
        this.modifiedOn=modifiedOn;
        this.authorName=authorName;
        this.comments=comments;
    }
}