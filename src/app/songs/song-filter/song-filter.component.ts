import { Component } from '@angular/core';

@Component({
  selector: 'app-song-filter',
  template: `
    <label>Genre:</label>
    <select #songFilter (change)="onChange(songFilter.value)" class="form-control">
      <option
        *ngFor="let genre of genres"
        [value]="genre"
        [selected]="selectedGenre === genre"
        (click)="onChange(genre)"
      >
        {{ genre }}
      </option>
    </select>
  `,
  styles: [],
})
export class SongFilterComponent {
  genres = ['All', 'Rock', 'Grunge', 'Disco'];
  selectedGenre = 'All';

  onChange(combo: any) {
    this.selectedGenre = combo.value;
  }
}
