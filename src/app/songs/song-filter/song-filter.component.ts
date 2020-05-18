import { Component } from '@angular/core';
import { SongsStateFacade } from '../+state/songs-state.facade';

@Component({
  selector: 'app-song-filter',
  template: `
    <label>Genre:</label>
    <select #songFilter (change)="facade.onGenreFilter(songFilter.value)" class="form-control">
      <option
        *ngFor="let genre of facade.genreList$ | async"
        [value]="genre"
        [selected]="genre === (facade.genreFilter$ | async)"
      >
        {{ genre }}
      </option>
    </select>
  `,
  styles: [],
})
export class SongFilterComponent {
  constructor(public facade: SongsStateFacade) { }
}
