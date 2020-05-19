import { Component, OnInit } from '@angular/core';
import { Sticker } from './stickers.model';
import { StickerService } from './sticker.service';
import { StickerList } from './stickers-list.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stickers',
  templateUrl: './stickers.page.html',
  styleUrls: ['./stickers.page.scss'],
})
export class StickersPage implements OnInit {
  stickers: StickerList[];

  constructor(private stickerService: StickerService,
              private router: Router) { }

  ngOnInit() {
    this.stickers = this.stickerService.stickers;
  }

  onItemClicked(stickerListId: number) {
    if (stickerListId)
      this.router.navigateByUrl("stickers/sticker-details/" + stickerListId);
  }

}
