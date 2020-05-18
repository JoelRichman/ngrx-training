import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SongsStateKey, ISongsState } from './songs-state.models';

export const querySongsState = createFeatureSelector<ISongsState>(SongsStateKey);

export const querySongs = createSelector(querySongsState, (state) => state.songs);
export const querySongSearchString = createSelector(querySongsState, (state) => state.searchString);
export const querySongGenreFilter = createSelector(querySongsState, (state) => state.genreFilter);

export const querySongList = createSelector(
  querySongs,
  querySongSearchString,
  querySongGenreFilter,
  (songs, search, genre) => {
    let filteredSongs = songs;

    if (genre) {
      filteredSongs = filteredSongs.filter(x => x.genre === genre);
    }

    if (songs.filter) {
      filteredSongs = filteredSongs.filter((x) => {
        return x.title.toLowerCase().indexOf(search.toLowerCase()) > -1;
      });
    }

    return filteredSongs;
  }
);

export const queryGenreList = createSelector(querySongs, (songs) => {
  const genres = songs.map((x) => x.genre);
  genres.unshift('');
  const genreList = new Set(genres);
  return genreList;
});
