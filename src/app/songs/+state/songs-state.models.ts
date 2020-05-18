import { ISong } from '../api/song.model';

export interface ISongsState {
  songs: ISong[];
  searchString: string;
  genreFilter: string;
}

export const InitialSongsState: ISongsState = {
  songs: [],
  searchString: '',
  genreFilter: 'all'
};

export const SongsStateKey = 'songs';
