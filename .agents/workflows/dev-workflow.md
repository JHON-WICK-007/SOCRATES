# Development Workflow

## Overview
This workflow describes the standard operational sequence when adding new features or making updates to SOCRATES.

## 1. Feature Planning
- Check API requirements in `docs/` and UI specs in `DESIGN-apple.md`.
- Determine whether schema changes are required in `backend/src/models/`.

## 2. Backend Implementation
1. Create or update Mongoose schema in `backend/src/models/`.
2. Add validation schema (Joi/express-validator) in `backend/src/utils/` or middleware.
3. Add controller logic in `backend/src/controllers/`.
4. Register route in `backend/src/routes/`.
5. Test endpoint locally.

## 3. Frontend Implementation
1. Define TypeScript interfaces in `frontend/src/types/` (or adjacent services).
2. Add API request service method in `frontend/src/services/`.
3. Build responsive React components in `frontend/src/components/` or `frontend/src/pages/`.
4. Integrate Zustand stores or React Query hooks for state management.
5. Verify responsive layout and micro-interactions.
