import { User } from "./user.model";

export class followRequest{
    // follower: number;
    // followee: number;
    public follower:User;
    public followee:User;
    constructor( follower:User, followee:User){
        this.follower = follower;
        this.followee = followee;
    }
}