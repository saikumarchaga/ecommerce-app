# E-Commerce Application

A simple e-commerce app with a Node.js/Express backend and React frontend, integrated with a Jenkins multibranch pipeline.

## Prerequisites
- Node.js (v16 or later)
- Git
- Jenkins (optional, for CI/CD)

## Setup

### Backend
1. Navigate to `backend/`.
2. Run `npm install`.
3. Create a `.env` file (see `backend/.env` example).
4. Run `npm start` to start the server (default: `http://localhost:5000`).

### Frontend
1. Navigate to `frontend/`.
2. Run `npm install`.
3. Create a `.env` file (see `frontend/.env` example).
4. Run `npm start` to start the app (default: `http://localhost:3000`).

### Tests
- Backend: `cd backend && npm test`
- Frontend: `cd frontend && npm test`

## CI/CD Setup
1. Push the code to a GitHub repository.
2. Configure Jenkins with the Multibranch Pipeline Plugin.
3. Add a webhook in GitHub to trigger Jenkins builds.
4. Ensure Jenkins has Node.js installed.

## Extending the App
- Add a database (e.g., MongoDB) for persistent storage.
- Integrate a payment gateway (e.g., Stripe).
- Expand test coverage with integration and end-to-end tests.

## Branching Strategy
- `main`: Production
- `develop`: Staging
- `feature/*`: Feature development (e.g., `feature/payment-gateway`)
