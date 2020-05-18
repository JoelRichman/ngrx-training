import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ISong } from './song.model';
import { Action } from '@ngrx/store';
import { switchMap } from 'rxjs/operators';

import * as actions from '../+state/songs-state.actions';

@Injectable()
export class SongsApiService {
  constructor(private httpClient: HttpClient) {}

  getSongs(): Observable<Action> {
    return this.httpClient
      .get<ISong[]>('/assets/data/songs.json')
      .pipe(switchMap(songs => of(actions.SetSongs({ songs }))));
  }
}
