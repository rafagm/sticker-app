import { Sticker } from './stickers.model';

export interface StickerList {
    id: string,
    name: string;
    imageUrl: string;
    stickers: Sticker[];
}