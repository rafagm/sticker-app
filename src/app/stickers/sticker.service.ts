import { Injectable, OnInit } from '@angular/core';
import { Sticker } from './stickers.model';
import { environment } from '../../environments/environment';
import { StickerList } from './stickers-list.model';
import { chihuahuaCuteSticker } from './data/chihuahua-cute';

import { WebIntent } from '@ionic-native/web-intent/ngx';


@Injectable({
  providedIn: 'root'
})
export class StickerService {
  private _stickers: StickerList[];

  constructor(private webIntent: WebIntent) {
    
    this.initStickers();
   }


  get stickers() {
    return this._stickers;
  }

  getStickerList(stickerListId: string) {
    return this._stickers.find(stickerList => stickerList.id === stickerListId);
  }

  private initStickers() {
    if (!this._stickers)
        this._stickers = []
    this._stickers.push(chihuahuaCuteSticker);
    
  }

  public shareWhastAppStickers(packId: string, packName: string): void {
    
    
    this.webIntent.startActivity({
            action: 'com.whatsapp.intent.action.ENABLE_STICKER_PACK',
            extras: {
                'sticker_pack_id': packId, // A identificação do pacote a ser compartilhado.
                
                //'sticker_pack_authority': '{bundle_id}.stickercontentprovider', 
                // Substitua {bundle_id} pelo bundle id encontrado no config.xml.
                // Como o meu é io.ionic.starter, fica assim:
                'sticker_pack_authority': 'io.ionic.starter.stickercontentprovider', 
                
                'sticker_pack_name': packName // O nome do pacote, sempre coloque o mesmo que o colocado em contents.json
            }
        })
        .then(success => {
            // Esse código é chamado quando tudo ocorre sem problemas.
            console.log("succes call sticker share: ",success);
        })
        .catch(error => {
            // Caso ocorra algum erro, por exemplo, se o usuário não possui o WhatsApp instalado, esse código será chamado.
            console.log("error call sticker share", error);
        });
  }  

}
