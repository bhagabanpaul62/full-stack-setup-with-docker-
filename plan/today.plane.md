# PHASE 1.1 - Backend Foundation

## Objective

Build the foundation of Triakshi AI CRM.

By the end of this phase we should have:

* Authentication
* Authorization
* PostgreSQL Database
* Drizzle ORM
* Project Structure
* Docker Setup
* API Standards
* User Management

No AI.

No CRM.

No Campaigns.

No Voice Calling.

This phase only creates the backend foundation.

---

# Architecture

```text
Client
   ↓
Next.js Frontend
   ↓
Express API
   ↓
Drizzle ORM
   ↓
PostgreSQL
```

---

# Tech Stack

## Runtime

Node.js

## Language

TypeScript

## Framework

Express.js

## Database

PostgreSQL

## ORM

Drizzle ORM

## Validation

Zod

## Authentication

JWT

## Password Hashing

bcrypt

## Environment

dotenv

## Logging

Pino

## Containerization

Docker

---

# Folder Structure

```text
src/

├── config/
│
├── db/
│   ├── index.ts
│   ├── schema/
│   └── migrations/
│
├── modules/
│
│   └── auth/
│       ├── auth.controller.ts
│       ├── auth.service.ts
│       ├── auth.repository.ts
│       ├── auth.route.ts
│       ├── auth.validation.ts
│       └── auth.types.ts
│
├── middlewares/
│
├── utils/
│
├── constants/
│
├── app.ts
│
└── server.ts
```

---

# Database Setup

## User Table

```text
users
```

Fields:

```text
id
name
email
password
role
isActive
createdAt
updatedAt
```

---

## Role Enum

```text
ADMIN
AGENT
```

Description:

ADMIN

* Full Access

AGENT

* CRM Access
* Lead Access
* Customer Access

---

# Authentication Flow

## Register

```text
POST /api/v1/auth/register
```

Request:

```json
{
  "name": "Bhagaban Paul",
  "email": "bhagaban@example.com",
  "password": "Password123"
}
```

Flow:

User

↓

Validate Input

↓

Check Existing Email

↓

Hash Password

↓

Save User

↓

Return Success

---

## Login

```text
POST /api/v1/auth/login
```

Flow:

Email

↓

Find User

↓

Compare Password

↓

Generate JWT

↓

Return Tokens

---

# JWT Strategy

## Access Token

Lifetime:

15 minutes

Contains:

```json
{
  "userId": "",
  "role": ""
}
```

---

## Refresh Token

Lifetime:

30 days

Used For:

Generate New Access Token

---

# APIs To Build

## Register

```http
POST /api/v1/auth/register
```

---

## Login

```http
POST /api/v1/auth/login
```

---

## Refresh Token

```http
POST /api/v1/auth/refresh-token
```

---

## Logout

```http
POST /api/v1/auth/logout
```

---

## Current User

```http
GET /api/v1/auth/me
```

---

# Middleware

## Authentication Middleware

Purpose:

Verify JWT

Flow:

```text
Request
↓
Read Token
↓
Verify JWT
↓
Attach User
↓
Next()
```

---

## Authorization Middleware

Purpose:

Check Role

Example:

```ts
authorize("ADMIN")
```

Flow:

```text
Request
↓
User Role
↓
Permission Check
↓
Allow / Deny
```

---

# Validation

Using:

Zod

Example:

Register Validation

```text
name

required

email

required
valid email

password

minimum 8 chars
```

---

# Error Handling

Create Global Error Handler

Responsibilities:

* Validation Errors
* JWT Errors
* Database Errors
* Custom Errors

Response Format:

```json
{
  "success": false,
  "message": "",
  "errors": []
}
```

---

# Success Response Format

```json
{
  "success": true,
  "message": "",
  "data": {}
}
```

---

# Environment Variables

```env
PORT=5000

DATABASE_URL=

JWT_ACCESS_SECRET=

JWT_REFRESH_SECRET=

JWT_ACCESS_EXPIRES_IN=15m

JWT_REFRESH_EXPIRES_IN=30d
```

---

# Docker Setup

Containers

```text
postgres
backend
```

Current Phase does not need:

* Redis
* Ollama
* Worker

Add those later.

---

# Deliverables

Authentication

* Register
* Login
* Refresh Token
* Logout
* Current User

Authorization

* Role Middleware

Database

* PostgreSQL
* Drizzle

Infrastructure

* Docker
* Environment Setup

Quality

* Validation
* Error Handling
* Logging

---

# Definition Of Done

All conditions must be true:

[ ] User can register

[ ] User can login

[ ] JWT works

[ ] Refresh token works

[ ] Logout works

[ ] Protected routes work

[ ] Role middleware works

[ ] PostgreSQL connected

[ ] Drizzle migration works

[ ] Docker starts successfully

[ ] Standard API response format implemented

If all boxes are checked, Phase 1.1 is complete.
