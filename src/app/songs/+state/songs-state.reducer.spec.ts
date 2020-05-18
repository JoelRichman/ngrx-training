import { SongStateReducer } from './songs-state.reducer';
import { InitialSongsState } from './songs-state.models';

import * as actions from './songs-state.actions';

describe('Songs Reducer', () => {

  it('should return default state', () => {
    const result = SongStateReducer(InitialSongsState, { type: '' });
    expect(result).toBe(InitialSongsState);
  });

  it('should set the search string', () => {
    const searchString = 'test';
    const action = actions.SetSearchString({ searchString });
    const result = SongStateReducer(InitialSongsState, action);
    expect(result.searchString).toBe(searchString);
  });

});
