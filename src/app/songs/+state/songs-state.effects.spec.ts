import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { TestBed } from '@angular/core/testing';
import { SongsStateEffects } from './songs-state.effects';

import { SongsApiService } from '../api/songs-api.service';
import { SongsStateFacade } from './songs-state.facade';

import * as actions from './songs-state.actions';

describe('Songs Effects', () => {
  let actions$: Observable<Action>;
  let effects: SongsStateEffects;
  const songsApiMock = jasmine.createSpyObj<SongsApiService>('', ['getSongs']);
  const songsFacadeMock = jasmine.createSpyObj<SongsStateFacade>('', ['onSearch']);

  songsFacadeMock.searchFilter$ = of('');
  songsFacadeMock.genreFilter$ = of('');

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMockActions(() => actions$),
        SongsStateEffects,
        { provide: SongsApiService, useValue: songsApiMock },
        { provide: SongsStateFacade, useValue: songsFacadeMock }
      ],
    });
    effects = TestBed.get(SongsStateEffects);
  });

  it('SetSearchString should dispatch GetSongs action', () => {
    actions$ = of(actions.SetSearchString({ searchString: 'test' }));
    effects.songsFiltered$.subscribe((action) => {
      const expected = actions.GetSongs();
      expect(action.type).toBe(expected.type);
    });
  });

  it('GetSongs should call API and return SetSongs action', () => {
    const songs = [{ songId: 1, title: 'title', artist: 'artist', genre: 'disco', length: '1' }];
    const setSongsAction = actions.SetSongs({ songs });
    songsApiMock.getSongs.and.returnValue(of(setSongsAction));
    actions$ = of(actions.GetSongs);

    effects.getSongs$.subscribe((action: any) => {
      expect(action.type).toBe(setSongsAction.type);
      expect(action.songs).toBe(songs);
      expect(songsApiMock.getSongs).toHaveBeenCalled();
    });

  });
});
