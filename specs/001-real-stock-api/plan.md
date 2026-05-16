# Implementation Plan: Real Stock API

**Branch**: `001-real-stock-api` | **Date**: 2026-05-15 | **Spec**: spec.md

## Summary

Replace mock stock data with live quotes from Yahoo Finance using the
`yfinance` library. No API key required. Two backend endpoints: a fixed
watchlist and a single-symbol lookup. The Angular frontend is updated to call
the lookup endpoint and display the result.

## Technical Context

**Language/Version**: Python 3.11 / TypeScript (Angular 15)
**Primary Dependencies**: FastAPI, yfinance, Angular HttpClient
**Storage**: None (stateless; no caching at this stage)
**API Provider**: Yahoo Finance via `yfinance` (`fast_info`)
**Performance**: Acceptable for MVP; each `/watchlist` call fetches 3 symbols
sequentially. Latency is dominated by Yahoo Finance response time (~200–800 ms).
**Secrets**: None required.

## API Provider Choice

`yfinance` was chosen because:
- Free, no API key, no rate-limit registration
- `fast_info` returns `last_price` and `previous_close` in a single call
- Sufficient for a solo MVP watchlist

## Project Structure

```
backend/
├── app/
│   ├── main.py                        # Endpoints: /watchlist, /quote/{symbol}
│   └── services/
│       └── stock_service.py           # fetch_quote(symbol) → dict | None

specs/001-real-stock-api/
├── spec.md
├── plan.md
└── tasks.md
```

## Endpoint Contracts

### GET /watchlist
Response: `[{ ticker, price, changePercent }]`
Errors: Never 500 — invalid symbols are silently skipped.

### GET /quote/{symbol}
Response: `{ ticker, price, changePercent }`
Errors: 404 with `{ detail: "No data found for 'XYZ'..." }` for bad symbols.

## Frontend Changes

- Search input gains a "Look Up" button that calls `/quote/{symbol}`.
- Result card appears above the table showing the looked-up stock.
- Lookup errors display inline below the search bar.
- "Refresh" button renamed target to `fetchWatchlist()`.
