import {Component, Input} from "@angular/core";
import {Book} from './models/book';
@Component({
    selector: "slider-comp",
    templateUrl: "./app/slider.html"
})
export class SliderComponent {
    @Input() books: Array<Book>;

   getClasses(i) {
       return i === 0 ? "item active" : "item";
   }

}

