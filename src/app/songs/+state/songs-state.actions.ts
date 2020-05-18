import { createAction, props } from '@ngrx/store';
import { ISong } from '../api/song.model';

export const SetSongs = createAction('[songs] SetSongs', props<{ songs: ISong[] }>());

export const SetSearchString = createAction('[songs] SetSearchString', props<{ searchString: string }>());
