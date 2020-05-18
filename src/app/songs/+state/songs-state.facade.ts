import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { SetSearchString } from './songs-state.actions';

import * as selectors from './songs-state.selectors';

@Injectable()
export class SongsStateFacade {
  songsList$ = this.store.pipe(select(selectors.querySongList));
  searchFilter$ = this.store.pipe(select(selectors.querySongSearchString));
  genreList$ = this.store.pipe(select(selectors.queryGenreList));

  constructor(private store: Store) { }

  onSearch(search: string) {
    this.store.dispatch(SetSearchString({ searchString: search }));
  }
}
