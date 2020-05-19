import { Component, OnInit, Input } from '@angular/core';
import { StickerList } from '../../stickers-list.model';

@Component({
  selector: 'app-sticker-list-item',
  templateUrl: './sticker-list-item.component.html',
  styleUrls: ['./sticker-list-item.component.scss'],
})
export class StickerListItemComponent implements OnInit {
  @Input()
  stickers: StickerList;

  added = false;

  constructor() { }

  ngOnInit() {}

}
