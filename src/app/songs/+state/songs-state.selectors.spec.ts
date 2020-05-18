import * as selectors from './songs-state.selectors';
import { InitialSongsState } from './songs-state.models';

describe('Songs State Selectors', () => {
  it('Should select songs state', () => {
    const globalState = {
      songs: InitialSongsState,
    };
    const result = selectors.querySongsState(globalState);
    expect(result).toBe(globalState.songs);
  });

  it('should query song list', () => {
    const globalState = {
      songs: InitialSongsState,
    };
    globalState.songs.songs = [{ songId: 1, title: 'title', artist: 'artist', genre: 'disco', length: '1' }];
    const result = selectors.querySongs(globalState);
    expect(result).toBe(globalState.songs.songs);
  });
});
