export class Book {
    title: string;
    author: string ;
    authorLink: string ;
    summary: string;
    comments: string;
    level: string;
    audience: string;
    learnTip: string;
    picture: string;
    constructor() {
        this.title, this.author, this.authorLink, this.summary, this.comments, this.level, this.audience,
        this.learnTip, this.picture = "";
    }
}