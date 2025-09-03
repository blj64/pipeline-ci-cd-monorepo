# Pipeline CI/CD monorepo (Angular + FastAPI)

## 🎯 About project
Ce projet est un **monorepo** qui contient :
- **Frontend** : Angular (apps/frontend), servi par Nginx
- **Backend** : FastAPI (apps/backend), exposé sur `/health`

L’objectif : démontrer un pipeline complet **CI/CD** de build, test et déploiement dockerisé.

---

## ⚙️ Stack technique
- **Frontend** : Angular 17+, ESLint, Karma (ChromeHeadless)
- **Backend** : FastAPI, Pytest, Ruff
- **CI/CD** : GitHub Actions
- **Containerisation** : Docker, Docker Compose
- **Registry** : GitHub Container Registry (GHCR)
- **Reverse proxy** : Nginx (intégré dans l’image frontend)

---

## 📦 Features
- Lint + tests unitaires (frontend + backend)
- Dockerfiles multi-stage optimisés (`distroless`, `slim`)
- `.dockerignore` pour réduire le build context
- CI : build & push des images Docker (GHCR)
- Staging : déploiement automatisé (via Docker Compose)

---

## 📐 Diagramme du pipeline

```mermaid
flowchart LR
    A[Code push/PR] --> B[GitHub Actions CI]
    B -->|Lint & Tests| C{OK ?}
    C -->|No| D[Fail build ❌]
    C -->|Yes| E[Build Docker images]
    E --> F[Push to GHCR]
    F --> G[Deploy staging (Docker Compose)]
    G --> H[Frontend + Backend up ✅]
