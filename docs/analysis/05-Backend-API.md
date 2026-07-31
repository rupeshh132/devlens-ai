# Backend API Contracts

This document defines the REST API contracts for the DevLens AI backend. All endpoints are prefixed with the base API version, e.g., `/api/v1`.

## 1. Global API Standards

### 1.1 API Envelope
All successful API responses adhere to the following consistent envelope format:
```json
{
  "success": true,
  "data": {},
  "message": "Operation successful",
  "timestamp": "2026-07-31T12:00:00Z"
}
```

### 1.2 Error Envelope
All error responses adhere to the following consistent format:
```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_FAILED",
    "message": "The provided input is invalid.",
    "details": [
      {
        "field": "email",
        "message": "Email must be a valid email address."
      }
    ]
  }
}
```

### 1.3 Pagination Format
Endpoints that return lists of data (e.g., `GET /repositories`) include a standardized pagination object within the `data` payload:
```json
{
  "success": true,
  "data": {
    "items": [ ... ],
    "pagination": {
      "page": 1,
      "limit": 20,
      "totalItems": 145,
      "totalPages": 8
    }
  },
  "message": "Fetched successfully",
  "timestamp": "2026-07-31T12:00:00Z"
}
```
*   **Query Params:** `?page=1&limit=20`

### 1.4 Filtering & Sorting
*   **Filtering:** Filters are applied via query parameters (e.g., `?status=Healthy&language=TypeScript`).
*   **Sorting:** Sorting is applied via the `sort` parameter (e.g., `?sort=-createdAt` for descending, `?sort=name` for ascending).

### 1.5 Versioning Strategy
The API utilizes URI versioning. The current stable version is `v1`.
Example: `https://api.devlens.ai/api/v1/repositories`

### 1.6 Rate Limiting Considerations
*   **Public/Auth Routes:** 5 requests per minute per IP to prevent brute-force attacks.
*   **Standard Routes:** 100 requests per minute per user.
*   **Heavy Routes (e.g., Analysis Trigger):** 10 requests per hour per user.
*   Responses include `X-RateLimit-Limit`, `X-RateLimit-Remaining`, and `X-RateLimit-Reset` headers.

### 1.7 Idempotency
Endpoints that trigger significant state changes (e.g., `POST /repositories/{id}/analyze`) support an `Idempotency-Key` header. Submitting multiple requests with the same key within a 24-hour window returns the cached response of the initial request without re-triggering the action.

---

## 2. Authentication APIs

### `POST /auth/login`
**Purpose:** Authenticate a user and issue JWT access and refresh tokens.
*   **Authentication Required:** False
*   **Validation Rules:** `email` must be valid; `password` must not be empty.
*   **Request:**
    ```json
    {
      "email": "user@example.com",
      "password": "securepassword123"
    }
    ```
*   **Response (200 OK):**
    ```json
    {
      "success": true,
      "data": {
        "accessToken": "eyJhbGciOiJIUzI1NiIs...",
        "refreshToken": "def456..."
      },
      "message": "Login successful",
      "timestamp": "2026-07-31T12:00:00Z"
    }
    ```
*   **Status Codes:** `200 OK`, `400 Bad Request`, `401 Unauthorized`.
*   **Error Responses:** `INVALID_CREDENTIALS` (401).

### `POST /auth/register`
**Purpose:** Create a new user account.
*   **Authentication Required:** False
*   **Validation Rules:** `email` unique and valid; `password` min 8 chars, 1 uppercase, 1 number.
*   **Request:**
    ```json
    {
      "fullName": "Jane Doe",
      "email": "jane@example.com",
      "password": "SecurePassword123!"
    }
    ```
*   **Response (201 Created):**
    ```json
    {
      "success": true,
      "data": { "id": "usr_123" },
      "message": "User registered successfully",
      "timestamp": "2026-07-31T12:00:00Z"
    }
    ```
*   **Status Codes:** `201 Created`, `400 Bad Request`, `409 Conflict`.
*   **Error Responses:** `EMAIL_ALREADY_EXISTS` (409).

### `POST /auth/logout`
**Purpose:** Invalidate the user's current refresh token.
*   **Authentication Required:** True
*   **Validation Rules:** `refreshToken` must be provided in body or secure cookie.
*   **Response (200 OK):** Success message.
*   **Status Codes:** `200 OK`, `401 Unauthorized`.

### `POST /auth/refresh`
**Purpose:** Obtain a new access token using a valid refresh token.
*   **Authentication Required:** False
*   **Validation Rules:** Valid, non-expired refresh token required.
*   **Response (200 OK):** New `accessToken`.
*   **Status Codes:** `200 OK`, `401 Unauthorized`.

### `POST /auth/forgot-password`
**Purpose:** Send a password reset link to the user's email.
*   **Authentication Required:** False
*   **Validation Rules:** `email` must be valid.
*   **Response (200 OK):** Success message (always 200 even if email doesn't exist, to prevent enumeration).
*   **Status Codes:** `200 OK`, `400 Bad Request`.

### `POST /auth/reset-password`
**Purpose:** Reset the user's password using a secure token.
*   **Authentication Required:** False
*   **Validation Rules:** `token` must be valid; `newPassword` meets complexity rules.
*   **Response (200 OK):** Success message.
*   **Status Codes:** `200 OK`, `400 Bad Request`.

---

## 3. Repository APIs

### `GET /repositories`
**Purpose:** Fetch a paginated list of the user's connected repositories.
*   **Authentication Required:** True
*   **Validation Rules:** `page` > 0, `limit` <= 100.
*   **Request:** `GET /repositories?page=1&limit=10&status=Healthy`
*   **Response (200 OK):** Paginated `items` of repository objects.
*   **Status Codes:** `200 OK`, `401 Unauthorized`.

### `POST /repositories`
**Purpose:** Connect a new repository to DevLens AI.
*   **Authentication Required:** True
*   **Validation Rules:** `url` must be a valid Git URL.
*   **Request:**
    ```json
    {
      "url": "https://github.com/rupeshh132/devlens-ai"
    }
    ```
*   **Response (201 Created):** Created repository object.
*   **Status Codes:** `201 Created`, `400 Bad Request`, `403 Forbidden` (no access to repo), `409 Conflict` (already connected).

### `GET /repositories/{id}`
**Purpose:** Retrieve detailed information about a specific repository.
*   **Authentication Required:** True
*   **Validation Rules:** `{id}` must be a valid UUID.
*   **Response (200 OK):** Detailed repository object.
*   **Status Codes:** `200 OK`, `401 Unauthorized`, `404 Not Found`.

### `DELETE /repositories/{id}`
**Purpose:** Disconnect and permanently delete a repository and its history.
*   **Authentication Required:** True
*   **Validation Rules:** `{id}` must be a valid UUID.
*   **Response (200 OK):** Success message.
*   **Status Codes:** `200 OK`, `401 Unauthorized`, `403 Forbidden`, `404 Not Found`.

### `POST /repositories/{id}/analyze`
**Purpose:** Trigger a new AI analysis job for the repository.
*   **Authentication Required:** True
*   **Validation Rules:** Repository must not currently be `Queued` or `Analyzing`.
*   **Request Headers:** `Idempotency-Key` (Optional).
*   **Response (202 Accepted):**
    ```json
    {
      "success": true,
      "data": { "jobId": "job_789", "status": "Queued" },
      "message": "Analysis queued successfully",
      "timestamp": "2026-07-31T12:00:00Z"
    }
    ```
*   **Status Codes:** `202 Accepted`, `401 Unauthorized`, `404 Not Found`, `409 Conflict`.
*   **Error Responses:** `ANALYSIS_ALREADY_IN_PROGRESS` (409).

### `GET /repositories/{id}/status`
**Purpose:** Poll the current status and progress of an active analysis.
*   **Authentication Required:** True
*   **Validation Rules:** `{id}` must be a valid UUID.
*   **Response (200 OK):**
    ```json
    {
      "success": true,
      "data": {
        "status": "Scanning",
        "progress": 35,
        "currentStep": "Extracting AST metrics"
      },
      "message": "Status retrieved",
      "timestamp": "2026-07-31T12:00:00Z"
    }
    ```
*   **Status Codes:** `200 OK`, `401 Unauthorized`, `404 Not Found`.

---

## 4. Analysis APIs

### `GET /analyses`
**Purpose:** Fetch a paginated history of all analyses run by the user across all repos.
*   **Authentication Required:** True
*   **Response (200 OK):** Paginated list of analysis summaries.

### `GET /analyses/{id}`
**Purpose:** Retrieve the full results of a specific analysis run.
*   **Authentication Required:** True
*   **Response (200 OK):** Contains overall score, timestamps, and commit hash.

### `GET /analyses/{id}/findings`
**Purpose:** Retrieve the detailed, categorized findings (AI recommendations) for an analysis.
*   **Authentication Required:** True
*   **Request:** `GET /analyses/{id}/findings?category=Security&severity=Critical`
*   **Response (200 OK):** List of finding objects (title, description, file, line, priority).

### `GET /analyses/{id}/scores`
**Purpose:** Retrieve the individual category scores and weightings for a specific run.
*   **Authentication Required:** True
*   **Response (200 OK):** Breakdown of Architecture, Security, Code Quality, etc., scores.

### `GET /analyses/{id}/history`
**Purpose:** Retrieve historical score trends leading up to this specific analysis.
*   **Authentication Required:** True
*   **Response (200 OK):** Array of historical data points for charting.

---

## 5. Report APIs

### `GET /reports`
**Purpose:** Fetch a list of generated downloadable reports.
*   **Authentication Required:** True
*   **Response (200 OK):** Paginated list of report metadata.

### `GET /reports/{id}`
**Purpose:** Retrieve metadata about a specific report.
*   **Authentication Required:** True
*   **Response (200 OK):** Report metadata (format, size, generatedAt).

### `GET /reports/{id}/download`
**Purpose:** Download the actual report file (PDF or JSON).
*   **Authentication Required:** True
*   **Request:** `GET /reports/{id}/download?format=pdf`
*   **Response (200 OK):** Binary file stream or JSON blob. (Does not use standard envelope).
*   **Status Codes:** `200 OK`, `401 Unauthorized`, `404 Not Found`.

---

## 6. User APIs

### `GET /users/me`
**Purpose:** Retrieve the authenticated user's profile information.
*   **Authentication Required:** True
*   **Response (200 OK):**
    ```json
    {
      "success": true,
      "data": {
        "id": "usr_123",
        "fullName": "Jane Doe",
        "email": "jane@example.com",
        "role": "USER"
      },
      "message": "User fetched successfully",
      "timestamp": "2026-07-31T12:00:00Z"
    }
    ```
*   **Status Codes:** `200 OK`, `401 Unauthorized`.

### `PATCH /users/me`
**Purpose:** Update the authenticated user's profile settings.
*   **Authentication Required:** True
*   **Validation Rules:** Fields must be valid if provided (e.g., `fullName` string, `email` valid format).
*   **Request:**
    ```json
    {
      "fullName": "Jane Smith"
    }
    ```
*   **Response (200 OK):** Updated user object.
*   **Status Codes:** `200 OK`, `400 Bad Request`, `401 Unauthorized`.
