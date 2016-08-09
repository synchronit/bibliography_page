import {Component, Input} from "@angular/core";
import {Book} from './models/book';
@Component({
    selector: "details-comp",
    templateUrl: "./app/details.html"
})
export class DetailsComponent {
    @Input() books: Array<Book>;
}

