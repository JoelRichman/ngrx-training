import { createReducer, on } from '@ngrx/store';
import { InitialSongsState } from './songs-state.models';

import * as actions from './songs-state.actions';

export const SongStateReducer = createReducer(InitialSongsState,
  
  on(actions.SetSongs, (state, action) => { 
    const newState = { ...state };
    newState.songs = action.songs;
    return newState;
  }),

  on(actions.SetSearchString, (state, action) => { 
    const newState = { ...state };
    newState.searchString = action.searchString;
    return newState;
  })

);
