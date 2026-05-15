# Tasks: Real Stock API

**Branch**: `001-real-stock-api` | **Status**: ✅ Implemented

---

## Phase 1: Backend

- [x] T001 Add `yfinance==0.2.61` to `backend/requirements.txt`
- [x] T002 Create `backend/app/services/__init__.py`
- [x] T003 Create `backend/app/services/stock_service.py` — `fetch_quote(symbol)` using `yf.Ticker.fast_info`
- [x] T004 Update `backend/app/main.py` — replace mock data with `fetch_quote`; add `GET /quote/{symbol}` endpoint with 404 handling

---

## Phase 2: Frontend

- [x] T005 Update `app.component.ts` — add `lookupTicker()`, wire to `GET /quote/{symbol}`, handle 404 error message
- [x] T006 Update `app.component.html` — add "Look Up" button, lookup result card, and lookup error display
- [x] T007 Update `app.component.css` — add `.lookup-result` card styles

---

## Phase 3: Docs

- [x] T008 Create `specs/001-real-stock-api/spec.md`
- [x] T009 Create `specs/001-real-stock-api/plan.md`
- [x] T010 Create `specs/001-real-stock-api/tasks.md` (this file)

---

## Install

After pulling this branch, reinstall backend deps:

```bash
cd backend
source .venv/bin/activate
pip install -r requirements.txt
```
