# TheStockStewarder
Stewarding Stocks in a smart and Godly manner


# How to run
Frontend:
```
cd /mnt/c/Users/Joshua/Documents/GitHub/TheStockStewarder/frontend
npx ng serve --port 4200
```

Backend:
```
source .venv/bin/activate
pip install fastapi "uvicorn[standard]"
uvicorn app.main:app --reload --port 8000
```