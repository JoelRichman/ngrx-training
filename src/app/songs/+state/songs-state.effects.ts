import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { createEffect, ofType } from '@ngrx/effects';
import { switchMap, filter, map, withLatestFrom } from 'rxjs/operators';

import * as actions from './songs-state.actions';
import { SongsApiService } from '../api/songs-api.service';
import { ROUTER_NAVIGATION, RouterNavigationAction } from '@ngrx/router-store';
import { SongsStateFacade } from './songs-state.facade';

@Injectable()
export class SongsStateEffects {
  getSongs$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.GetSongs),
      withLatestFrom(this.facade.searchFilter$, this.facade.genreFilter$),
      switchMap(([action, searchFilter, genreFilter]) => this.songsApi.getSongs())
    )
  );

  songListRouted$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ROUTER_NAVIGATION),
      filter((action: RouterNavigationAction) => action.payload.routerState.url === '/songs/list'),
      map((action) => actions.GetSongs())
    )
  );

  songsFiltered$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.SetSearchString, actions.SetGenreFilter),
      map((action) => actions.GetSongs())
    )
  );

  constructor(private actions$: Actions, private songsApi: SongsApiService, private facade: SongsStateFacade) {}
}
