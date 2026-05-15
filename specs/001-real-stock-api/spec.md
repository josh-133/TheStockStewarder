# Feature Specification: Real Stock API

**Feature Branch**: `001-real-stock-api`
**Created**: 2026-05-15
**Status**: Implemented

## Goal

Replace hardcoded mock stock data with live prices and daily change percentages
fetched from Yahoo Finance via the `yfinance` library.

## User Scenarios

### User Story 1 — View live watchlist prices (P1)

The dashboard loads and shows current prices and daily change % for NVDA, AAPL,
and MSFT fetched in real time from Yahoo Finance.

**Acceptance Scenarios**:

1. **Given** the backend is running, **When** the user opens the dashboard,
   **Then** the watchlist table shows live prices with a non-zero changePercent.
2. **Given** the markets are open, **When** the user clicks Refresh,
   **Then** the prices update to the latest values.
3. **Given** a provider error for one symbol, **When** the watchlist loads,
   **Then** that symbol is silently omitted rather than crashing the endpoint.

### User Story 2 — Look up an arbitrary ticker (P2)

The user types a ticker symbol into the search box and clicks "Look Up" to see
its current price and daily change.

**Acceptance Scenarios**:

1. **Given** a valid ticker (e.g. TSLA), **When** the user clicks Look Up,
   **Then** the price and change % appear in a result card above the table.
2. **Given** an invalid ticker (e.g. ZZZZ), **When** the user clicks Look Up,
   **Then** an error message is shown: "No data found for 'ZZZZ'."

### Edge Cases

- What happens when Yahoo Finance returns `None` for price? → Symbol omitted from watchlist; 404 returned for single lookup.
- What happens when markets are closed? → `fast_info.last_price` reflects last close; data is still valid.

## Requirements

- Use `yfinance` (`fast_info`) for price and previous close.
- Calculate `changePercent` as `(last_price - previous_close) / previous_close * 100`.
- Round price to 2 decimal places, changePercent to 2 decimal places.
- `GET /watchlist` returns all valid symbols from the default list.
- `GET /quote/{symbol}` returns a single quote or 404 for invalid symbols.
- Secrets: no API key required; no credentials to manage.
- Frontend: "Look Up" button calls `/quote/{symbol}` and displays the result card.
