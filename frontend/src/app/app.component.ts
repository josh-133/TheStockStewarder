import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Stock {
  ticker: string;
  price: number;
  changePercent: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  stocks: Stock[] = [];
  filtered: Stock[] = [];
  search = '';
  error = '';
  loading = false;
  lookupResult: Stock | null = null;
  lookupError = '';
  lookupLoading = false;

  private readonly apiUrl = 'http://localhost:8000';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchWatchlist();
  }

  fetchWatchlist(): void {
    this.loading = true;
    this.error = '';
    this.http.get<Stock[]>(`${this.apiUrl}/watchlist`).subscribe({
      next: (data) => {
        this.stocks = data;
        this.applyFilter();
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to load watchlist. Is the backend running?';
        this.loading = false;
      }
    });
  }

  applyFilter(): void {
    const term = this.search.trim().toUpperCase();
    this.filtered = term
      ? this.stocks.filter(s => s.ticker.includes(term))
      : [...this.stocks];
  }

  lookupTicker(): void {
    const symbol = this.search.trim().toUpperCase();
    if (!symbol) return;
    this.lookupResult = null;
    this.lookupError = '';
    this.lookupLoading = true;
    this.http.get<Stock>(`${this.apiUrl}/quote/${symbol}`).subscribe({
      next: (data) => {
        this.lookupResult = data;
        this.lookupLoading = false;
      },
      error: (err) => {
        this.lookupError = err.error?.detail ?? `No data found for '${symbol}'.`;
        this.lookupLoading = false;
      }
    });
  }
}
