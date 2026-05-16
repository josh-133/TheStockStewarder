from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

from app.services.stock_service import fetch_quote

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:4200"],
    allow_methods=["GET"],
    allow_headers=["*"],
)

# Default watchlist symbols
WATCHLIST_SYMBOLS = ["NVDA", "AAPL", "MSFT"]


@app.get("/watchlist")
def get_watchlist():
    results = []
    for symbol in WATCHLIST_SYMBOLS:
        quote = fetch_quote(symbol)
        if quote:
            results.append(quote)
    return results


@app.get("/quote/{symbol}")
def get_quote(symbol: str):
    quote = fetch_quote(symbol.upper())
    if not quote:
        raise HTTPException(
            status_code=404,
            detail=f"No data found for ticker '{symbol.upper()}'. It may be invalid or markets may be closed.",
        )
    return quote
