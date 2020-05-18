import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SongListComponent } from './song-list/song-list.component';
import { SongInfoComponent } from './song-info/song-info.component';
import { SongsApiService } from './api/songs-api.service';
import { StoreModule } from '@ngrx/store';
import { SongStateReducer } from './+state/songs-state.reducer';
import { SongsStateKey } from './+state/songs-state.models';

const ROUTES = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  {
    path: 'list',
    component: SongListComponent,
  },
  {
    path: 'info/:songId',
    component: SongInfoComponent
  }
];

@NgModule({
  declarations: [SongListComponent, SongInfoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    StoreModule.forFeature(SongsStateKey, SongStateReducer)
  ],
  providers: [
    SongsApiService
  ]
})
export class SongsModule {}
