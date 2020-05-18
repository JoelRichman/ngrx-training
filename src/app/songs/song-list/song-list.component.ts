import { Component, OnInit, OnDestroy } from '@angular/core';
import { SongsApiService } from '../api/songs-api.service';
import { Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { SetSongs, SetSearchString } from '../+state/songs-state.actions';
import { querySongList, querySongSearchString } from '../+state/songs-state.selectors';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.scss'],
})
export class SongListComponent implements OnInit, OnDestroy {
  songSubscription: Subscription;

  songsList$ = this.store.pipe(select(querySongList));
  searchFilter$ = this.store.pipe(select(querySongSearchString));

  constructor(private store: Store, private songsApi: SongsApiService) {}

  ngOnInit(): void {
    this.songSubscription = this.songsApi
      .getSongs()
      .subscribe(
        (songs) => {
          this.store.dispatch(SetSongs({ songs }));
        });
  }

  ngOnDestroy(): void {
    this.songSubscription.unsubscribe();
  }

  onSearch(search: string) {
    this.store.dispatch(SetSearchString({ searchString: search }));
  }
}
