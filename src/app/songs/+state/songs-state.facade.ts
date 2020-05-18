import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';

import * as selectors from './songs-state.selectors';
import * as actions from './songs-state.actions';

@Injectable()
export class SongsStateFacade {
  songsList$ = this.store.pipe(select(selectors.querySongList));
  searchFilter$ = this.store.pipe(select(selectors.querySongSearchString));
  genreFilter$ = this.store.pipe(select(selectors.querySongGenreFilter));
  genreList$ = this.store.pipe(select(selectors.queryGenreList));

  constructor(private store: Store) { }

  onSearch(search: string) {
    this.store.dispatch(actions.SetSearchString({ searchString: search }));
  }

  onGenreFilter(genreFilter: string) {
    this.store.dispatch(actions.SetGenreFilter({ genreFilter }));
  }
}
