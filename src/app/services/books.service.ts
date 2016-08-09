import {Http, Response} from "@angular/http";
import {Injectable} from "@angular/core";
import {Book} from "../models/book";
import {Observable} from 'rxjs/Observable';

@Injectable()
export class BooksService {

    private booksURL = "http://prod.synchronit.com/appbase-webconsole/json?command=%20get%20books";

    constructor(private http: Http) {}

    getBooks() {
        return this.http.get(this.booksURL).map(this.extractData).catch(this.handleError);
    }


    private extractData(res: Response): Array<Book> {
        let body = res.json();
        let books = body.resultSet.rows.map((item) => {
            let book: Book = new Book();
            for (let i = 0 ; i < item.length ; i++) {
                switch (i) {
                    case 0:
                    book.title = item[i];
                    break;
                    case 1:
                    book.author = item[i];
                    break;
                    case 2:
                    book.authorLink = item[i];
                    break;
                    case 3:
                    book.summary = item[i];
                    break;
                    case 4:
                    book.comments = item[i];
                    break;
                    case 5:
                    book.level = item[i];
                    break;
                    case 6:
                    book.audience = item[i];
                    break;
                    case 7:
                    book.learnTip = item[i];
                    break;
                    case 8:
                    book.picture = "img/books/" + item[i];
                    break;
                }
            }
            return book;
        });

        return books || {};
    }
    private handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
} 