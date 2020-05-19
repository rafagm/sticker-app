import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StickerList } from '../../stickers-list.model';
import { StickerService } from '../../sticker.service';

@Component({
  selector: 'app-sticker-details',
  templateUrl: './sticker-details.page.html',
  styleUrls: ['./sticker-details.page.scss'],
})
export class StickerDetailsPage implements OnInit {
  stickerList: StickerList;

  constructor(private activatedRoute: ActivatedRoute,
              private stickerService: StickerService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paraMap => {
      if (paraMap.has("stickerListId")) {
        const stickerListId = +paraMap.get("stickerListId");

        this.stickerList = this.stickerService.getStickerList(stickerListId);
      }
        
    })
  }

}
