import {Component, OnInit} from "@angular/core";
import {ListComponent} from './list.component';
import {DetailsComponent} from './details.component';
import {SliderComponent} from './slider.component';

import {BooksService} from "./services/books.service";
import {Observable} from 'rxjs/Observable';
import {Book} from './models/book';
import './rxjs-operators';

declare var $:JQueryStatic;

@Component({
    selector: "app",
    templateUrl: "./app/app.html",
    directives:[DetailsComponent, ListComponent, SliderComponent],
    providers:[BooksService]
})
export class AppComponent implements OnInit {
    private viewStyle: number;
    private books: Array<Book>;
    private errorMessage: string;
    constructor(private booksServ: BooksService) {
        this.books = [];
        this.errorMessage = "";
        this.viewStyle = 0;
    }
    ngOnInit() {
        console.log("Application component initialized ...");
        this.getBooks();
    }
    getBooks() {
        this.booksServ.getBooks().subscribe(
            books => this.books = books,
            error =>  this.errorMessage = <any>error
        );
    }

    changeView(event) {
        $('button.btn-primary').removeClass('active');
        $(event.target).addClass('active');
        if (event.target.id === "btn-list") {
            this.viewStyle = 1;
        } else if (event.target.id === "btn-slider") {
            this.viewStyle = 2;
        } else {
            this.viewStyle = 0;
        }
    }
}