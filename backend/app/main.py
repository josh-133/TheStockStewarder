from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:4200"],
    allow_methods=["GET"],
    allow_headers=["*"],
)

WATCHLIST = [
    {"ticker": "NVDA", "price": 182.34, "changePercent": 2.1},
    {"ticker": "AAPL", "price": 211.56, "changePercent": -0.8},
    {"ticker": "MSFT", "price": 430.12, "changePercent": 0.4},
]


@app.get("/watchlist")
def get_watchlist():
    return WATCHLIST