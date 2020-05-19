import { Injectable } from '@angular/core';
import { Sticker } from './stickers.model';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class StickerService {
  private stickers: Sticker[] = [
    {
      name: "test1",
      imageUrl: `${environment.stickerPath}/chihuahua/chihuahua-1.png`
    }
  ];

  constructor() { }
}
