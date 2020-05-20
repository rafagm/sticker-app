import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StickerList } from '../../stickers-list.model';
import { StickerService } from '../../sticker.service';
import { Sticker } from '../../stickers.model';

@Component({
  selector: 'app-sticker-details',
  templateUrl: './sticker-details.page.html',
  styleUrls: ['./sticker-details.page.scss'],
})
export class StickerDetailsPage implements OnInit {
  stickerList: StickerList;
  selectedStickers: Sticker[];

  @ViewChild("contentChatbox", {static: false})
  contentChatBoxElement;

  constructor(private activatedRoute: ActivatedRoute,
              private stickerService: StickerService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paraMap => {
      if (paraMap.has("stickerListId")) {
        const stickerListId = paraMap.get("stickerListId");

        this.stickerList = this.stickerService.getStickerList(stickerListId);
      }
        
    })
  }

  ionViewWillEnter(){
    this.selectedStickers = [];
  }

  onSelectSticker(stickerName: string) {
    const selectedSticker = this.stickerList.stickers.find(sticker => sticker.name === stickerName);    
    this.selectedStickers.push(selectedSticker);

    this.contentChatBoxElement.nativeElement.scrollTop = this.contentChatBoxElement.nativeElement.scrollHeight


  }

}
