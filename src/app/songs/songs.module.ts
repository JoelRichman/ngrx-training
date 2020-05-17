import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SongListComponent } from './song-list/song-list.component';
import { SongInfoComponent } from './song-info/song-info.component';
import { SongsApiService } from './api/songs-api.service';
import { SongFilterComponent } from './song-filter/song-filter.component';

@NgModule({
  declarations: [SongListComponent, SongInfoComponent, SongFilterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      {
        path: 'list',
        component: SongListComponent,
      },
      {
        path: 'info/:songId',
        component: SongInfoComponent
      }
    ]),
  ],
  providers: [
    SongsApiService
  ]
})
export class SongsModule {}
