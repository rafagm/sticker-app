import { Injectable } from '@angular/core';
import { Sticker } from './stickers.model';
import { environment } from '../../environments/environment';
import { StickerList } from './stickers-list.model';


@Injectable({
  providedIn: 'root'
})
export class StickerService {
  private _stickers: StickerList[] = [
    {
      id: 1,
      name: "Chihuahua",
      imageUrl: `${environment.stickerPath}/chihuahua/chihuahua-1.png`,
      stickers: [
        {
          name: "Chihuahua 1",
          imageUrl: `${environment.stickerPath}/chihuahua/chihuahua-1.png`
        },
        {
          name: "Chihuahua 1",
          imageUrl: `${environment.stickerPath}/chihuahua/chihuahua-1.png`
        },
        {
          name: "Chihuahua 1",
          imageUrl: `${environment.stickerPath}/chihuahua/chihuahua-1.png`
        },
        {
          name: "Chihuahua 1",
          imageUrl: `${environment.stickerPath}/chihuahua/chihuahua-1.png`
        },
        {
          name: "Chihuahua 1",
          imageUrl: `${environment.stickerPath}/chihuahua/chihuahua-1.png`
        },
        {
          name: "Chihuahua 1",
          imageUrl: `${environment.stickerPath}/chihuahua/chihuahua-1.png`
        },
        {
          name: "Chihuahua 1",
          imageUrl: `${environment.stickerPath}/chihuahua/chihuahua-1.png`
        },
        {
          name: "Chihuahua 1",
          imageUrl: `${environment.stickerPath}/chihuahua/chihuahua-1.png`
        }
      ]
    },
    {
      id: 2,
      name: "lista 2",
      imageUrl: `${environment.stickerPath}/chihuahua/chihuahua-1.png`,
      stickers: [
        {
          name: "Chihuahua 1",
          imageUrl: `${environment.stickerPath}/chihuahua/chihuahua-1.png`
        }
      ]
    },
    {
      id: 3,
      name: "lista 3",
      imageUrl: `${environment.stickerPath}/chihuahua/chihuahua-1.png`,
      stickers: [
        {
          name: "Chihuahua 1",
          imageUrl: `${environment.stickerPath}/chihuahua/chihuahua-1.png`
        }
      ]
    }
    
  ];

  constructor() { }

  get stickers() {
    return this._stickers;
  }

  getStickerList(stickerListId: number) {
    return this._stickers.find(stickerList => stickerList.id === stickerListId);
  }
}
