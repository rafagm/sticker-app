import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StickersPage } from './stickers.page';

const routes: Routes = [
  {
    path: '',
    component: StickersPage
  },
  {
    path: 'sticker-details',
    children: [
      {
        path: ":stickerListId",
        loadChildren: () => import('./sticker-details/sticker-details/sticker-details.module').then( m => m.StickerDetailsPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StickersPageRoutingModule {}
