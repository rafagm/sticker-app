import { Sticker } from './stickers.model';

export interface StickerList {
    id: number,
    name: string;
    imageUrl: string;
    stickers: Sticker[];
}