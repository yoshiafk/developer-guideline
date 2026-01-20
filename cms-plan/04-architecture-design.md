# Architecture Design

## Overview

This document outlines the system architecture for the CMS deployment, designed for production on OpenShift with PostgreSQL and local development using Docker Compose.

---

## High-Level Architecture

```mermaid
graph TB
    subgraph "Users"
        A1[Content Editors]
        A2[Developers]
        A3[End Users]
    end
    
    subgraph "Frontend Layer"
        B1[React SPA - Guidelines Portal]
        B2[CMS Admin Panel]
    end
    
    subgraph "API Layer"
        C1[Payload CMS API]
        C2[REST Endpoints]
        C3[GraphQL Endpoints]
    end
    
    subgraph "Data Layer"
        D1[(PostgreSQL)]
        D2[Media Storage]
        D3[Redis Cache]
    end
    
    A1 --> B2
    A2 --> B2
    A3 --> B1
    
    B1 --> C2
    B1 --> C3
    B2 --> C1
    
    C1 --> D1
    C1 --> D2
    C1 --> D3
```

---

## System Components

### Component Overview

| Component | Technology | Purpose | Port |
|-----------|------------|---------|------|
| Frontend (Guidelines) | React + Vite | Public-facing portal | 3000 |
| CMS Backend | Payload CMS (Node.js) | Content management API | 3001 |
| Database | PostgreSQL 15 | Primary data store | 5432 |
| Cache | Redis 7 | Session & query cache | 6379 |
| Media Storage | MinIO / S3 | File uploads | 9000 |
| Reverse Proxy | Nginx / OpenShift Routes | Load balancing, SSL | 80/443 |

### Database Schema Design

```mermaid
erDiagram
    USERS {
        uuid id PK
        string email UK
        string password_hash
        string name
        string role
        timestamp created_at
        timestamp updated_at
    }
    
    GUIDELINES {
        uuid id PK
        string title
        string slug UK
        text content
        string status
        uuid category_id FK
        uuid author_id FK
        timestamp published_at
        timestamp created_at
        timestamp updated_at
    }
    
    CATEGORIES {
        uuid id PK
        string name
        string slug UK
        string description
        int sort_order
    }
    
    MEDIA {
        uuid id PK
        string filename
        string mime_type
        int size
        string url
        string alt_text
        uuid uploaded_by FK
        timestamp created_at
    }
    
    GUIDELINE_SECTIONS {
        uuid id PK
        uuid guideline_id FK
        string title
        text content
        int order
        string anchor
    }
    
    USERS ||--o{ GUIDELINES : authors
    CATEGORIES ||--o{ GUIDELINES : contains
    USERS ||--o{ MEDIA : uploads
    GUIDELINES ||--o{ GUIDELINE_SECTIONS : has
```

---

## Local Development Environment

### Docker Compose Configuration

```yaml
# docker-compose.yml
version: '3.8'

services:
  # PostgreSQL Database
  postgres:
    image: postgres:15-alpine
    container_name: cms-postgres
    environment:
      POSTGRES_DB: cms_db
      POSTGRES_USER: cms_user
      POSTGRES_PASSWORD: cms_password
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data
      - ./init-db:/docker-entrypoint-initdb.d
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U cms_user -d cms_db"]
      interval: 10s
      timeout: 5s
      retries: 5

  # Redis Cache
  redis:
    image: redis:7-alpine
    container_name: cms-redis
    ports:
      - "6379:6379"
    volumes:
      - redis_data:/data
    healthcheck:
      test: ["CMD", "redis-cli", "ping"]
      interval: 10s
      timeout: 5s
      retries: 5

  # MinIO (S3-compatible storage)
  minio:
    image: minio/minio:latest
    container_name: cms-minio
    environment:
      MINIO_ROOT_USER: minio_admin
      MINIO_ROOT_PASSWORD: minio_password
    command: server /data --console-address ":9001"
    ports:
      - "9000:9000"
      - "9001:9001"
    volumes:
      - minio_data:/data
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:9000/minio/health/live"]
      interval: 30s
      timeout: 20s
      retries: 3

  # Payload CMS
  cms:
    build:
      context: ./cms
      dockerfile: Dockerfile
    container_name: cms-payload
    environment:
      NODE_ENV: development
      DATABASE_URL: postgres://cms_user:cms_password@postgres:5432/cms_db
      PAYLOAD_SECRET: your-super-secret-key-here
      REDIS_URL: redis://redis:6379
      S3_ENDPOINT: http://minio:9000
      S3_ACCESS_KEY: minio_admin
      S3_SECRET_KEY: minio_password
      S3_BUCKET: cms-media
    ports:
      - "3001:3001"
    depends_on:
      postgres:
        condition: service_healthy
      redis:
        condition: service_healthy
      minio:
        condition: service_healthy
    volumes:
      - ./cms:/app
      - /app/node_modules
    command: npm run dev

  # Frontend Development Server
  frontend:
    build:
      context: .
      dockerfile: Dockerfile.frontend
    container_name: cms-frontend
    environment:
      VITE_CMS_API_URL: http://localhost:3001
    ports:
      - "3000:3000"
    depends_on:
      - cms
    volumes:
      - .:/app
      - /app/node_modules
    command: npm run dev

  # pgAdmin (optional - database management)
  pgadmin:
    image: dpage/pgadmin4:latest
    container_name: cms-pgadmin
    environment:
      PGADMIN_DEFAULT_EMAIL: admin@example.com
      PGADMIN_DEFAULT_PASSWORD: admin
    ports:
      - "5050:80"
    depends_on:
      - postgres
    profiles:
      - tools

volumes:
  postgres_data:
  redis_data:
  minio_data:
```

### CMS Dockerfile

```dockerfile
# cms/Dockerfile
FROM node:20-alpine

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci

# Copy source code
COPY . .

# Build for production (skip in dev)
ARG NODE_ENV=development
RUN if [ "$NODE_ENV" = "production" ]; then npm run build; fi

# Expose port
EXPOSE 3001

# Start command (overridden in docker-compose for dev)
CMD ["npm", "start"]
```

### Project Structure

```
developer-guideline/
├── cms/                          # Payload CMS
│   ├── src/
│   │   ├── collections/          # Content types
│   │   │   ├── Guidelines.ts
│   │   │   ├── Categories.ts
│   │   │   ├── Media.ts
│   │   │   └── Users.ts
│   │   ├── blocks/               # Content blocks
│   │   │   ├── CodeBlock.ts
│   │   │   ├── CalloutBlock.ts
│   │   │   └── ImageBlock.ts
│   │   ├── globals/              # Singleton content
│   │   │   └── Settings.ts
│   │   ├── access/               # Access control
│   │   │   └── index.ts
│   │   └── payload.config.ts     # Main config
│   ├── Dockerfile
│   ├── package.json
│   └── tsconfig.json
│
├── src/                          # Frontend (existing)
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   │   └── useCMS.ts             # CMS data fetching
│   └── ...
│
├── docker-compose.yml
├── docker-compose.prod.yml
└── ...
```

---

## OpenShift Production Deployment

### Architecture Diagram

```mermaid
graph TB
    subgraph "OpenShift Cluster"
        subgraph "Route / Ingress"
            R1[guidelines.company.com]
            R2[cms.company.com]
        end
        
        subgraph "Frontend Deployment"
            F1[Frontend Pod 1]
            F2[Frontend Pod 2]
        end
        
        subgraph "CMS Deployment"
            C1[CMS Pod 1]
            C2[CMS Pod 2]
        end
        
        subgraph "Services"
            S1[Frontend Service]
            S2[CMS Service]
        end
        
        subgraph "Data Services"
            D1[(PostgreSQL - Operator)]
            D2[Redis - Operator]
            D3[S3 Storage - External]
        end
        
        R1 --> S1
        R2 --> S2
        S1 --> F1
        S1 --> F2
        S2 --> C1
        S2 --> C2
        
        C1 --> D1
        C2 --> D1
        C1 --> D2
        C2 --> D2
        C1 --> D3
        C2 --> D3
        
        F1 --> S2
        F2 --> S2
    end
```

### Kubernetes/OpenShift Manifests

#### Namespace

```yaml
# k8s/namespace.yaml
apiVersion: v1
kind: Namespace
metadata:
  name: developer-guideline
  labels:
    app.kubernetes.io/name: developer-guideline
```

#### PostgreSQL (Using Crunchy Data Operator)

```yaml
# k8s/postgres.yaml
apiVersion: postgres-operator.crunchydata.com/v1beta1
kind: PostgresCluster
metadata:
  name: cms-postgres
  namespace: developer-guideline
spec:
  postgresVersion: 15
  instances:
    - name: instance1
      replicas: 2
      dataVolumeClaimSpec:
        accessModes:
          - ReadWriteOnce
        resources:
          requests:
            storage: 10Gi
  backups:
    pgbackrest:
      repos:
        - name: repo1
          volume:
            volumeClaimSpec:
              accessModes:
                - ReadWriteOnce
              resources:
                requests:
                  storage: 5Gi
```

#### CMS Deployment

```yaml
# k8s/cms-deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: cms
  namespace: developer-guideline
spec:
  replicas: 2
  selector:
    matchLabels:
      app: cms
  template:
    metadata:
      labels:
        app: cms
    spec:
      containers:
        - name: cms
          image: registry.company.com/developer-guideline/cms:latest
          ports:
            - containerPort: 3001
          env:
            - name: NODE_ENV
              value: "production"
            - name: DATABASE_URL
              valueFrom:
                secretKeyRef:
                  name: cms-secrets
                  key: database-url
            - name: PAYLOAD_SECRET
              valueFrom:
                secretKeyRef:
                  name: cms-secrets
                  key: payload-secret
            - name: REDIS_URL
              valueFrom:
                secretKeyRef:
                  name: cms-secrets
                  key: redis-url
            - name: S3_ENDPOINT
              valueFrom:
                configMapKeyRef:
                  name: cms-config
                  key: s3-endpoint
            - name: S3_ACCESS_KEY
              valueFrom:
                secretKeyRef:
                  name: cms-secrets
                  key: s3-access-key
            - name: S3_SECRET_KEY
              valueFrom:
                secretKeyRef:
                  name: cms-secrets
                  key: s3-secret-key
          resources:
            requests:
              memory: "256Mi"
              cpu: "250m"
            limits:
              memory: "512Mi"
              cpu: "500m"
          livenessProbe:
            httpGet:
              path: /api/health
              port: 3001
            initialDelaySeconds: 30
            periodSeconds: 10
          readinessProbe:
            httpGet:
              path: /api/health
              port: 3001
            initialDelaySeconds: 5
            periodSeconds: 5
---
apiVersion: v1
kind: Service
metadata:
  name: cms-service
  namespace: developer-guideline
spec:
  selector:
    app: cms
  ports:
    - port: 3001
      targetPort: 3001
  type: ClusterIP
```

#### OpenShift Routes

```yaml
# k8s/routes.yaml
apiVersion: route.openshift.io/v1
kind: Route
metadata:
  name: cms-route
  namespace: developer-guideline
spec:
  host: cms.company.com
  to:
    kind: Service
    name: cms-service
  port:
    targetPort: 3001
  tls:
    termination: edge
    insecureEdgeTerminationPolicy: Redirect
---
apiVersion: route.openshift.io/v1
kind: Route
metadata:
  name: frontend-route
  namespace: developer-guideline
spec:
  host: guidelines.company.com
  to:
    kind: Service
    name: frontend-service
  port:
    targetPort: 3000
  tls:
    termination: edge
    insecureEdgeTerminationPolicy: Redirect
```

#### Secrets Management

```yaml
# k8s/secrets.yaml (apply from sealed-secrets or vault)
apiVersion: v1
kind: Secret
metadata:
  name: cms-secrets
  namespace: developer-guideline
type: Opaque
stringData:
  database-url: "postgres://user:pass@cms-postgres-primary:5432/cms"
  payload-secret: "your-production-secret-key"
  redis-url: "redis://redis-master:6379"
  s3-access-key: "your-s3-access-key"
  s3-secret-key: "your-s3-secret-key"
```

---

## CI/CD Pipeline

### Jenkins Pipeline

```groovy
// Jenkinsfile
pipeline {
    agent any
    
    environment {
        REGISTRY = 'registry.company.com'
        IMAGE_NAME = 'developer-guideline/cms'
        OPENSHIFT_PROJECT = 'developer-guideline'
    }
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Test') {
            steps {
                dir('cms') {
                    sh 'npm ci'
                    sh 'npm run lint'
                    sh 'npm run test'
                }
            }
        }
        
        stage('Build') {
            steps {
                dir('cms') {
                    sh """
                        docker build -t ${REGISTRY}/${IMAGE_NAME}:${BUILD_NUMBER} \
                            --build-arg NODE_ENV=production .
                    """
                }
            }
        }
        
        stage('Push') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'registry-credentials',
                    usernameVariable: 'REGISTRY_USER',
                    passwordVariable: 'REGISTRY_PASS'
                )]) {
                    sh """
                        docker login ${REGISTRY} -u ${REGISTRY_USER} -p ${REGISTRY_PASS}
                        docker push ${REGISTRY}/${IMAGE_NAME}:${BUILD_NUMBER}
                        docker tag ${REGISTRY}/${IMAGE_NAME}:${BUILD_NUMBER} \
                            ${REGISTRY}/${IMAGE_NAME}:latest
                        docker push ${REGISTRY}/${IMAGE_NAME}:latest
                    """
                }
            }
        }
        
        stage('Deploy to Dev') {
            when {
                branch 'develop'
            }
            steps {
                sh """
                    oc project ${OPENSHIFT_PROJECT}-dev
                    oc set image deployment/cms \
                        cms=${REGISTRY}/${IMAGE_NAME}:${BUILD_NUMBER}
                    oc rollout status deployment/cms
                """
            }
        }
        
        stage('Deploy to Prod') {
            when {
                branch 'main'
            }
            steps {
                input message: 'Deploy to production?'
                sh """
                    oc project ${OPENSHIFT_PROJECT}
                    oc set image deployment/cms \
                        cms=${REGISTRY}/${IMAGE_NAME}:${BUILD_NUMBER}
                    oc rollout status deployment/cms
                """
            }
        }
    }
    
    post {
        always {
            cleanWs()
        }
    }
}
```

---

## Security Considerations

### Authentication & Authorization

```mermaid
graph LR
    A[User Request] --> B{Authenticated?}
    B -- No --> C[Login Page]
    B -- Yes --> D{Authorized?}
    D -- No --> E[403 Forbidden]
    D -- Yes --> F[Access Granted]
    
    C --> G[JWT Token]
    G --> B
```

### Security Checklist

| Area | Implementation |
|------|----------------|
| Authentication | JWT tokens with refresh rotation |
| Authorization | Role-based access control (RBAC) |
| Data Encryption | TLS 1.3 in transit, AES-256 at rest |
| Secrets | OpenShift Secrets / External Vault |
| Input Validation | Server-side validation, XSS prevention |
| Rate Limiting | API rate limiting per user/IP |
| Audit Logging | All CMS actions logged |
| Backup | Automated daily backups with retention |

### Network Policies

```yaml
# k8s/network-policy.yaml
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: cms-network-policy
  namespace: developer-guideline
spec:
  podSelector:
    matchLabels:
      app: cms
  policyTypes:
    - Ingress
    - Egress
  ingress:
    - from:
        - podSelector:
            matchLabels:
              app: frontend
        - podSelector:
            matchLabels:
              app: ingress-nginx
      ports:
        - protocol: TCP
          port: 3001
  egress:
    - to:
        - podSelector:
            matchLabels:
              app: postgres
      ports:
        - protocol: TCP
          port: 5432
    - to:
        - podSelector:
            matchLabels:
              app: redis
      ports:
        - protocol: TCP
          port: 6379
```

---

## Monitoring and Observability

### Metrics Collection

```yaml
# k8s/service-monitor.yaml
apiVersion: monitoring.coreos.com/v1
kind: ServiceMonitor
metadata:
  name: cms-monitor
  namespace: developer-guideline
spec:
  selector:
    matchLabels:
      app: cms
  endpoints:
    - port: metrics
      interval: 30s
      path: /metrics
```

### Key Metrics to Monitor

| Metric | Alert Threshold | Description |
|--------|-----------------|-------------|
| Response Time (P95) | > 500ms | API latency |
| Error Rate | > 5% | 5xx responses |
| CPU Usage | > 80% | Container CPU |
| Memory Usage | > 85% | Container memory |
| DB Connections | > 90% pool | PostgreSQL connections |
| Disk Usage | > 80% | Storage capacity |

### Logging Strategy

```typescript
// Structured logging example
import pino from 'pino';

const logger = pino({
  level: process.env.LOG_LEVEL || 'info',
  formatters: {
    level: (label) => ({ level: label }),
  },
  redact: ['password', 'token', 'secret'],
});

// Usage
logger.info({ action: 'guideline.created', guidelineId: '123' }, 'New guideline created');
```

---

## Backup and Disaster Recovery

### Backup Strategy

| Component | Frequency | Retention | Method |
|-----------|-----------|-----------|--------|
| PostgreSQL | Daily | 30 days | pg_dump + S3 |
| Media Files | Continuous | 90 days | S3 replication |
| Configuration | On change | Indefinite | Git |

### Recovery Procedures

```bash
# Database restore
pg_restore -h $DB_HOST -U $DB_USER -d cms_db backup.dump

# Media restore
aws s3 sync s3://backup-bucket/media s3://production-bucket/media

# Full environment restore
oc apply -f k8s/
oc rollout restart deployment/cms
```

---

## Next Steps

1. Follow [Implementation Roadmap](./05-implementation-roadmap.md) to begin development
2. Set up local development environment using Docker Compose
3. Configure CI/CD pipeline for automated deployments
