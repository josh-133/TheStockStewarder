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

  private readonly apiUrl = 'http://localhost:8000/watchlist';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchStocks();
  }

  fetchStocks(): void {
    this.loading = true;
    this.error = '';
    this.http.get<Stock[]>(this.apiUrl).subscribe({
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
}
