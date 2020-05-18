import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SongsStateKey, ISongsState } from './songs-state.models';


export const querySongsState = createFeatureSelector<ISongsState>(SongsStateKey);

export const querySongs  = createSelector(querySongsState, state => state.songs);
export const querySongSearchString = createSelector(querySongsState, state => state.searchString);

export const querySongList = createSelector(querySongs, querySongSearchString, (songs, search) => {
  if (!songs.filter) {
    return songs;
  }

  return songs.filter((x) => {
    return x.title.toLowerCase()
      .indexOf(search.toLowerCase()) > -1;
  });
});


