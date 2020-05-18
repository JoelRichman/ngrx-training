import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SongListComponent } from './song-list/song-list.component';
import { SongInfoComponent } from './song-info/song-info.component';
import { SongsApiService } from './api/songs-api.service';
import { StoreModule } from '@ngrx/store';
import { SongStateReducer } from './+state/songs-state.reducer';
import { SongsStateKey } from './+state/songs-state.models';
import { SongsStateEffects } from './+state/songs-state.effects';
import { EffectsModule } from '@ngrx/effects';
import { SongsStateFacade } from './+state/songs-state.facade';
import { SongFilterComponent } from './song-filter/song-filter.component';

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
  declarations: [SongListComponent, SongInfoComponent, SongFilterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    StoreModule.forFeature(SongsStateKey, SongStateReducer),
    EffectsModule.forFeature([SongsStateEffects])
  ],
  providers: [
    SongsApiService,
    SongsStateFacade
  ]
})
export class SongsModule {}
