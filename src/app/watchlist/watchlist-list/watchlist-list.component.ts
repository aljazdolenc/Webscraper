import { WatchlistGroup } from './../../shared/watchlist.model';
import { WatchlistService } from './watchlist.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-watchlist-list',
  templateUrl: './watchlist-list.component.html',
  styleUrls: ['./watchlist-list.component.css']
})
export class WatchlistListComponent implements OnInit {

  watchlistArray: WatchlistGroup[];

  constructor(private watchlistService: WatchlistService) { }

  ngOnInit(): void {
    this.watchlistArray = this.watchlistService.getWatchlistArrays();
  }
}
