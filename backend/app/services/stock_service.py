import yfinance as yf


def fetch_quote(symbol: str) -> dict | None:
    """Fetch live price and daily change for a ticker symbol.

    Returns None if the symbol is invalid or data is unavailable.
    """
    try:
        info = yf.Ticker(symbol).fast_info
        price = info.last_price
        prev_close = info.previous_close

        if price is None or prev_close is None or prev_close == 0:
            return None

        change_pct = round((price - prev_close) / prev_close * 100, 2)
        return {
            "ticker": symbol.upper(),
            "price": round(float(price), 2),
            "changePercent": change_pct,
        }
    except Exception:
        return None
