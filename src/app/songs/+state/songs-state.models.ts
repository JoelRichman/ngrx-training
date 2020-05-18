import { ISong } from '../api/song.model';

export interface ISongsState {
  songs: ISong[];
  searchString: string;
}

export const InitialSongsState: ISongsState = {
  songs: [],
  searchString: ''
};

export const SongsStateKey = 'songs';
