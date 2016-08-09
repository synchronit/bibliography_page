import {Component, Input} from "@angular/core";
import {Book} from './models/book';
@Component({
    selector: "list-comp",
    templateUrl: "./app/list.html"
})
export class ListComponent {
    @Input() books: Array<Book>;
}

