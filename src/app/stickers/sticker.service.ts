import { Injectable, OnInit } from '@angular/core';
import { Sticker } from './stickers.model';
import { environment } from '../../environments/environment';
import { StickerList } from './stickers-list.model';
import { chihuahuaCuteSticker } from './data/chihuahua-cute';


@Injectable({
  providedIn: 'root'
})
export class StickerService {
  private _stickers: StickerList[];

  constructor() {
    
    this.initStickers();
   }


  get stickers() {
    return this._stickers;
  }

  getStickerList(stickerListId: number) {
    return this._stickers.find(stickerList => stickerList.id === stickerListId);
  }

  private initStickers() {
    if (!this._stickers)
        this._stickers = []
    this._stickers.push(chihuahuaCuteSticker);
    
  }
}
