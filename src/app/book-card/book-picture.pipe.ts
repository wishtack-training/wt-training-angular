import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../cart/cart';

@Pipe({
  name: 'bookPicture'
})
export class BookPicturePipe implements PipeTransform {

  transform(book: Book): string {
    return book?.pictureUri ?? `https://source.unsplash.com/featured?${encodeURIComponent(book.title)}`;
  }

}
