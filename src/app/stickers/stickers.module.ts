import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StickersPageRoutingModule } from './stickers-routing.module';

import { StickersPage } from './stickers.page';
import { StickerListItemComponent } from './sticker-item/sticker-item/sticker-list-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StickersPageRoutingModule
  ],
  declarations: [StickersPage, StickerListItemComponent]
})
export class StickersPageModule {}
