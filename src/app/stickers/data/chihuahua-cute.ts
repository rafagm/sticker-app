import { environment } from 'src/environments/environment';
import { StickerList } from '../stickers-list.model';

export const chihuahuaCuteSticker: StickerList =  {
    id: 1,
    name: "Chihuahua cute",
    imageUrl: `${environment.stickerPath}/chihuahua/chihuahua-cute-1.png`,
    stickers: [
      {
        name: "Chihuahua cute 1",
        imageUrl: `${environment.stickerPath}/chihuahua/chihuahua-cute-1.png`
      },
      {
        name: "Chihuahua cute 2",
        imageUrl: `${environment.stickerPath}/chihuahua/chihuahua-cute-2.png`
      }
    ]
  };