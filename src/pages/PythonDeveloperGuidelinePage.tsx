import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '@/components/PageHero';
import Layout from '@/components/Layout';
import FileTree, { FileTreeItem } from '@/components/FileTree';
import OnThisPage from '@/components/OnThisPage';
import CodeSnippet from '@/components/CodeSnippet';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
    Terminal,
    Cpu,
    Database,
    ShieldCheck,
    Zap,
    CheckCircle2,
    Layers,
    PenTool,
    FlaskConical,
    ArrowRight,
    BookOpen,
    CircleAlert as AlertCircle,
    FileCode,
    Settings,
    Bug,
    Server,
    Activity
} from 'lucide-react';

const chapters = [
    { id: "overview", title: "1. Project Overview", icon: BookOpen },
    { id: "project-structure", title: "2. Project Structure", icon: Layers },
    { id: "fastapi", title: "3. FastAPI Standards", icon: Zap },
    { id: "pydantic", title: "4. Pydantic Validation", icon: ShieldCheck },
    { id: "database", title: "5. Database Access", icon: Database },
    { id: "ai-integration", title: "6. AI/ML Integration", icon: Cpu },
    { id: "testing", title: "7. Testing Standards", icon: FlaskConical },
    { id: "code-style", title: "8. Code Style", icon: PenTool },
    { id: "error-handling", title: "9. Error Handling", icon: Bug },
    { id: "ci-cd", title: "10. CI/CD Pipeline", icon: Terminal },
];

const folderStructureData: FileTreeItem[] = [
    {
        name: "project-root",
        type: "folder",
        children: [
            {
                name: "app",
                type: "folder",
                children: [
                    { name: "__init__.py", type: "file" },
                    { name: "main.py", type: "file", comment: "FastAPI application entry" },
                    { name: "config.py", type: "file", comment: "Settings and configuration" },
                    {
                        name: "api",
                        type: "folder",
                        children: [
                            { name: "__init__.py", type: "file" },
                            { name: "deps.py", type: "file", comment: "Dependency injection" },
                            {
                                name: "v1",
                                type: "folder",
                                children: [
                                    { name: "__init__.py", type: "file" },
                                    { name: "router.py", type: "file", comment: "API router aggregation" },
                                    {
                                        name: "endpoints",
                                        type: "folder",
                                        children: [
                                            { name: "users.py", type: "file", comment: "User endpoints" },
                                            { name: "items.py", type: "file", comment: "Item endpoints" }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: "core",
                        type: "folder",
                        children: [
                            { name: "security.py", type: "file", comment: "Auth & JWT logic" },
                            { name: "exceptions.py", type: "file", comment: "Custom exceptions" }
                        ]
                    },
                    {
                        name: "models",
                        type: "folder",
                        children: [
                            { name: "__init__.py", type: "file" },
                            { name: "user.py", type: "file", comment: "SQLAlchemy models" }
                        ]
                    },
                    {
                        name: "schemas",
                        type: "folder",
                        children: [
                            { name: "__init__.py", type: "file" },
                            { name: "user.py", type: "file", comment: "Pydantic schemas" }
                        ]
                    },
                    {
                        name: "services",
                        type: "folder",
                        children: [
                            { name: "user_service.py", type: "file", comment: "Business logic" }
                        ]
                    },
                    {
                        name: "db",
                        type: "folder",
                        children: [
                            { name: "session.py", type: "file", comment: "Database session" },
                            { name: "base.py", type: "file", comment: "Base model class" }
                        ]
                    }
                ]
            },
            {
                name: "tests",
                type: "folder",
                children: [
                    { name: "conftest.py", type: "file", comment: "Pytest fixtures" },
                    { name: "test_users.py", type: "file", comment: "Test files" }
                ]
            },
            { name: "alembic", type: "folder", comment: "Database migrations" },
            { name: "requirements.txt", type: "file", comment: "Dependencies" },
            { name: "pyproject.toml", type: "file", comment: "Project configuration" },
            { name: "Dockerfile", type: "file" }
        ]
    }
];

const PythonDeveloperGuidelinePage: React.FC = () => {
    const breadcrumbs = [
        { label: 'Home', href: '/' },
        { label: 'Backend Guidelines' },
        { label: 'Python' }
    ];

    return (
        <Layout>
            <PageHero
                title="Python & AI Guideline"
                subtitle="Standardized practices for AI integration, data processing, and FastAPI development at AII."
                breadcrumbs={breadcrumbs}
            />

            <div className="py-12 flex flex-col lg:flex-row gap-12">
                <main className="flex-1 min-w-0 space-y-32 pb-24">

                    {/* Chapter 1: Project Overview */}
                    <section id="overview" className="scroll-mt-28 space-y-8">
                        <div className="space-y-4">
                            <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 1</Badge>
                            <h2 className="text-4xl font-extrabold tracking-tight">Project Overview</h2>
                            <p className="text-xl text-muted-foreground leading-relaxed">
                                Python is our go-to language for <strong>AI/ML</strong>, <strong>data processing</strong>, and <strong>rapid API development</strong>. We focus on readability, strict type hints, and efficient data processing pipelines.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {[
                                { text: "Python 3.10+", icon: Terminal },
                                { text: "FastAPI Framework", icon: Zap },
                                { text: "Pydantic v2", icon: ShieldCheck },
                                { text: "SQLAlchemy 2.0", icon: Database },
                                { text: "PyTorch / TensorFlow", icon: Cpu },
                                { text: "Poetry / pip", icon: Settings },
                            ].map((tech, i) => (
                                <div key={i} className="glass flex items-center gap-3 p-4 rounded-xl border border-border/50">
                                    <tech.icon className="h-5 w-5 text-primary" />
                                    <span className="font-semibold text-sm">{tech.text}</span>
                                </div>
                            ))}
                        </div>

                        {/* New Developer Checklist */}
                        <div className="mt-12 p-8 rounded-3xl bg-yellow-500/5 border border-yellow-500/10 space-y-6">
                            <div className="flex items-center gap-3 text-yellow-600">
                                <div className="p-2 rounded-lg bg-yellow-500/10">
                                    <CheckCircle2 className="h-6 w-6" />
                                </div>
                                <h3 className="text-2xl font-bold">New Developer Checklist</h3>
                            </div>
                            <p className="text-muted-foreground">Follow these steps to get your first Python project running at AII:</p>
                            <div className="grid gap-4">
                                {[
                                    { step: "Install Python", desc: "Install Python 3.10+ via pyenv or your package manager. Verify with: python --version" },
                                    { step: "Create Virtual Environment", desc: "Run 'python -m venv .venv' and activate with 'source .venv/bin/activate'" },
                                    { step: "Install Dependencies", desc: "Run 'pip install -r requirements.txt' or 'poetry install' for the project." },
                                    { step: "Setup IDE", desc: "Install VS Code with Python extension or PyCharm Professional." },
                                    { step: "Run Application", desc: "Execute 'uvicorn app.main:app --reload' to start the FastAPI server." },
                                    { step: "Run Tests", desc: "Execute 'pytest' to verify the baseline project is stable." },
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 p-4 rounded-xl border border-border/50 bg-background/50">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500/10 text-yellow-600 flex items-center justify-center font-bold text-sm">
                                            {i + 1}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-foreground">{item.step}</h4>
                                            <p className="text-sm text-muted-foreground">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <Separator />

                    {/* Chapter 2: Project Structure */}
                    <section id="project-structure" className="scroll-mt-28 space-y-12">
                        <div className="space-y-4">
                            <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 2</Badge>
                            <h2 className="text-4xl font-extrabold tracking-tight">Project Structure</h2>
                            <p className="text-lg text-muted-foreground">Standard project layout for all AII Python applications.</p>
                        </div>

                        <FileTree
                            title="FastAPI Project Layout"
                            data={folderStructureData}
                        />

                        <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10 space-y-4">
                            <h4 className="font-bold flex items-center gap-2 text-primary"><Layers className="h-5 w-5" /> Layer Responsibilities</h4>
                            <div className="grid md:grid-cols-2 gap-6 text-sm">
                                <div className="space-y-2">
                                    <p><strong>API Layer</strong>: Route handlers, request/response handling, dependency injection.</p>
                                    <p><strong>Services Layer</strong>: Business logic, data transformation, orchestration.</p>
                                </div>
                                <div className="space-y-2">
                                    <p><strong>Models Layer</strong>: SQLAlchemy ORM models for database entities.</p>
                                    <p><strong>Schemas Layer</strong>: Pydantic models for validation and serialization.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <Separator />

                    {/* Chapter 3: FastAPI Standards */}
                    <section id="fastapi" className="scroll-mt-28 space-y-12">
                        <div className="space-y-4">
                            <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 3</Badge>
                            <h2 className="text-4xl font-extrabold tracking-tight">FastAPI Standards</h2>
                            <p className="text-lg text-muted-foreground">Core patterns for building high-performance APIs with FastAPI.</p>
                        </div>

                        <div className="space-y-8">
                            <div className="space-y-4">
                                <h4 className="text-xl font-bold flex items-center gap-2"><Zap className="h-5 w-5 text-yellow-500" /> Router Organization</h4>
                                <CodeSnippet
                                    language="python"
                                    code={`# app/api/v1/endpoints/users.py
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession

from app.api.deps import get_db, get_current_user
from app.schemas.user import UserCreate, UserResponse, UserUpdate
from app.services.user_service import UserService

router = APIRouter(prefix="/users", tags=["Users"])


@router.get("/", response_model=list[UserResponse])
async def get_users(
    skip: int = 0,
    limit: int = 100,
    db: AsyncSession = Depends(get_db),
) -> list[UserResponse]:
    """Get all users with pagination."""
    service = UserService(db)
    return await service.get_all(skip=skip, limit=limit)


@router.get("/{user_id}", response_model=UserResponse)
async def get_user(
    user_id: int,
    db: AsyncSession = Depends(get_db),
) -> UserResponse:
    """Get a user by ID."""
    service = UserService(db)
    user = await service.get_by_id(user_id)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"User with id {user_id} not found"
        )
    return user


@router.post("/", response_model=UserResponse, status_code=status.HTTP_201_CREATED)
async def create_user(
    user_data: UserCreate,
    db: AsyncSession = Depends(get_db),
) -> UserResponse:
    """Create a new user."""
    service = UserService(db)
    return await service.create(user_data)`}
                                />
                            </div>

                            <div className="space-y-4">
                                <h4 className="text-xl font-bold flex items-center gap-2"><Settings className="h-5 w-5 text-emerald-500" /> Dependency Injection</h4>
                                <CodeSnippet
                                    language="python"
                                    code={`# app/api/deps.py
from typing import AsyncGenerator
from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from sqlalchemy.ext.asyncio import AsyncSession

from app.db.session import async_session_maker
from app.core.security import verify_token
from app.models.user import User

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/api/v1/auth/login")


async def get_db() -> AsyncGenerator[AsyncSession, None]:
    """Dependency that provides a database session."""
    async with async_session_maker() as session:
        try:
            yield session
            await session.commit()
        except Exception:
            await session.rollback()
            raise


async def get_current_user(
    token: str = Depends(oauth2_scheme),
    db: AsyncSession = Depends(get_db),
) -> User:
    """Dependency that returns the current authenticated user."""
    payload = verify_token(token)
    if not payload:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid authentication credentials",
        )
    # Fetch and return user from database
    ...`}
                                />
                            </div>
                        </div>
                    </section>

                    <Separator />

                    {/* Chapter 4: Pydantic Validation */}
                    <section id="pydantic" className="scroll-mt-28 space-y-12">
                        <div className="space-y-4">
                            <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 4</Badge>
                            <h2 className="text-4xl font-extrabold tracking-tight">Pydantic Validation</h2>
                            <p className="text-lg text-muted-foreground">Type-safe data validation and serialization with Pydantic v2.</p>
                        </div>

                        <div className="grid grid-cols-1 gap-8">
                            <div className="space-y-4">
                                <h4 className="text-xl font-bold">Schema Design</h4>
                                <CodeSnippet
                                    language="python"
                                    code={`# app/schemas/user.py
from datetime import datetime
from pydantic import BaseModel, EmailStr, Field, field_validator


class UserBase(BaseModel):
    """Base schema with shared attributes."""
    email: EmailStr
    full_name: str = Field(..., min_length=2, max_length=100)


class UserCreate(UserBase):
    """Schema for creating a user."""
    password: str = Field(..., min_length=8, max_length=100)
    
    @field_validator("password")
    @classmethod
    def validate_password(cls, v: str) -> str:
        if not any(c.isupper() for c in v):
            raise ValueError("Password must contain uppercase")
        if not any(c.isdigit() for c in v):
            raise ValueError("Password must contain a digit")
        return v


class UserUpdate(BaseModel):
    """Schema for updating a user (all optional)."""
    email: EmailStr | None = None
    full_name: str | None = Field(None, min_length=2, max_length=100)


class UserResponse(UserBase):
    """Schema for user response."""
    id: int
    is_active: bool
    created_at: datetime
    
    model_config = {"from_attributes": True}`}
                                />
                            </div>
                            <div className="space-y-4">
                                <h4 className="text-xl font-bold">Settings Management</h4>
                                <CodeSnippet
                                    language="python"
                                    code={`# app/config.py
from functools import lru_cache
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    """Application settings with environment variable support."""
    
    # Application
    app_name: str = "AII Python Service"
    debug: bool = False
    
    # Database
    database_url: str
    database_pool_size: int = 5
    
    # Security
    secret_key: str
    access_token_expire_minutes: int = 30
    
    # External Services
    redis_url: str | None = None
    
    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        case_sensitive=False,
    )


@lru_cache
def get_settings() -> Settings:
    """Cached settings instance."""
    return Settings()`}
                                />
                            </div>
                        </div>
                    </section>

                    <Separator />

                    {/* Chapter 5: Database Access */}
                    <section id="database" className="scroll-mt-28 space-y-12">
                        <div className="space-y-4">
                            <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 5</Badge>
                            <h2 className="text-4xl font-extrabold tracking-tight">Database Access</h2>
                            <p className="text-lg text-muted-foreground">SQLAlchemy 2.0 with async support and Alembic migrations.</p>
                        </div>

                        <div className="space-y-8">
                            <CodeSnippet
                                title="SQLAlchemy Model"
                                language="python"
                                code={`# app/models/user.py
from datetime import datetime
from sqlalchemy import String, Boolean, DateTime, func
from sqlalchemy.orm import Mapped, mapped_column

from app.db.base import Base


class User(Base):
    """User database model."""
    
    __tablename__ = "users"
    
    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    email: Mapped[str] = mapped_column(String(255), unique=True, index=True)
    hashed_password: Mapped[str] = mapped_column(String(255))
    full_name: Mapped[str] = mapped_column(String(100))
    is_active: Mapped[bool] = mapped_column(Boolean, default=True)
    created_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True), 
        server_default=func.now()
    )
    updated_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True),
        server_default=func.now(),
        onupdate=func.now()
    )`}
                            />

                            <CodeSnippet
                                title="Async Database Session"
                                language="python"
                                code={`# app/db/session.py
from sqlalchemy.ext.asyncio import (
    AsyncSession,
    async_sessionmaker,
    create_async_engine,
)

from app.config import get_settings

settings = get_settings()

engine = create_async_engine(
    settings.database_url,
    pool_size=settings.database_pool_size,
    echo=settings.debug,
)

async_session_maker = async_sessionmaker(
    engine,
    class_=AsyncSession,
    expire_on_commit=False,
)`}
                            />
                        </div>
                    </section>

                    <Separator />

                    {/* Chapter 6: AI/ML Integration */}
                    <section id="ai-integration" className="scroll-mt-28 space-y-12">
                        <div className="space-y-4">
                            <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 6</Badge>
                            <h2 className="text-4xl font-extrabold tracking-tight">AI/ML Integration</h2>
                            <p className="text-lg text-muted-foreground">Patterns for integrating machine learning models into FastAPI services.</p>
                        </div>

                        <div className="space-y-8">
                            <CodeSnippet
                                title="Model Loading Pattern"
                                language="python"
                                code={`# app/ml/model_manager.py
from functools import lru_cache
from pathlib import Path
import torch
from transformers import AutoModelForSequenceClassification, AutoTokenizer


class ModelManager:
    """Singleton for managing ML model lifecycle."""
    
    _instance = None
    _model = None
    _tokenizer = None
    
    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
        return cls._instance
    
    def load_model(self, model_path: str | Path) -> None:
        """Load model once at startup."""
        self._tokenizer = AutoTokenizer.from_pretrained(model_path)
        self._model = AutoModelForSequenceClassification.from_pretrained(
            model_path
        )
        self._model.eval()  # Set to evaluation mode
        
    def predict(self, text: str) -> dict:
        """Run inference on input text."""
        inputs = self._tokenizer(
            text, 
            return_tensors="pt",
            truncation=True,
            max_length=512
        )
        
        with torch.no_grad():
            outputs = self._model(**inputs)
            probabilities = torch.softmax(outputs.logits, dim=-1)
        
        return {
            "prediction": int(probabilities.argmax()),
            "confidence": float(probabilities.max()),
        }


@lru_cache
def get_model_manager() -> ModelManager:
    """Dependency for model access."""
    return ModelManager()`}
                            />

                            <CodeSnippet
                                title="ML Inference Endpoint"
                                language="python"
                                code={`# app/api/v1/endpoints/predictions.py
from fastapi import APIRouter, Depends, BackgroundTasks
from pydantic import BaseModel

from app.ml.model_manager import ModelManager, get_model_manager

router = APIRouter(prefix="/predictions", tags=["ML Predictions"])


class PredictionRequest(BaseModel):
    text: str


class PredictionResponse(BaseModel):
    prediction: int
    confidence: float


@router.post("/", response_model=PredictionResponse)
async def predict(
    request: PredictionRequest,
    model: ModelManager = Depends(get_model_manager),
) -> PredictionResponse:
    """Run inference on provided text."""
    result = model.predict(request.text)
    return PredictionResponse(**result)`}
                            />
                        </div>
                    </section>

                    <Separator />

                    {/* Chapter 7: Testing Standards */}
                    <section id="testing" className="scroll-mt-28 space-y-12">
                        <div className="space-y-4">
                            <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 7</Badge>
                            <h2 className="text-4xl font-extrabold tracking-tight">Testing Standards</h2>
                            <p className="text-lg text-muted-foreground">Comprehensive testing with pytest and TestClient.</p>
                        </div>

                        <div className="space-y-8">
                            <div className="p-6 rounded-2xl bg-muted/30 border space-y-4">
                                <h4 className="font-bold">Test Naming Convention</h4>
                                <p className="text-sm text-muted-foreground">Follow the pattern: <code className="text-primary">test_functionname_scenario_expected</code></p>
                                <div className="flex flex-wrap gap-2">
                                    <Badge variant="outline" className="font-mono text-xs">test_create_user_valid_data_returns_201</Badge>
                                    <Badge variant="outline" className="font-mono text-xs">test_get_user_not_found_returns_404</Badge>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-8">
                                <CodeSnippet
                                    title="Pytest Fixtures"
                                    language="python"
                                    code={`# tests/conftest.py
import pytest
from httpx import AsyncClient
from sqlalchemy.ext.asyncio import AsyncSession

from app.main import app
from app.db.session import async_session_maker


@pytest.fixture
async def db_session() -> AsyncSession:
    """Provide a clean database session."""
    async with async_session_maker() as session:
        yield session
        await session.rollback()


@pytest.fixture
async def client() -> AsyncClient:
    """Async HTTP client for API testing."""
    async with AsyncClient(
        app=app, 
        base_url="http://test"
    ) as ac:
        yield ac`}
                                />
                                <CodeSnippet
                                    title="API Tests"
                                    language="python"
                                    code={`# tests/test_users.py
import pytest
from httpx import AsyncClient


@pytest.mark.asyncio
async def test_create_user_valid_data_returns_201(
    client: AsyncClient,
) -> None:
    """Test creating a user with valid data."""
    # Arrange
    user_data = {
        "email": "test@example.com",
        "full_name": "Test User",
        "password": "SecurePass123",
    }
    
    # Act
    response = await client.post(
        "/api/v1/users/", 
        json=user_data
    )
    
    # Assert
    assert response.status_code == 201
    data = response.json()
    assert data["email"] == user_data["email"]
    assert "id" in data
    assert "password" not in data  # Never expose`}
                                />
                            </div>
                        </div>
                    </section>

                    <Separator />

                    {/* Chapter 8: Code Style */}
                    <section id="code-style" className="scroll-mt-28 space-y-8">
                        <div className="space-y-4">
                            <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 8</Badge>
                            <h2 className="text-4xl font-extrabold tracking-tight">Code Style & Formatting</h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="p-5 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
                                <p className="text-xs font-bold uppercase text-emerald-600 mb-2">✅ MANDATORY</p>
                                <ul className="text-sm text-muted-foreground space-y-1">
                                    <li>• Type hints on all functions</li>
                                    <li>• Black formatter (line length 88)</li>
                                    <li>• Ruff for linting</li>
                                    <li>• Docstrings on public functions</li>
                                    <li>• PEP 8 naming conventions</li>
                                </ul>
                            </div>
                            <div className="p-5 rounded-xl bg-destructive/5 border border-destructive/20">
                                <p className="text-xs font-bold uppercase text-destructive mb-2">❌ AVOID</p>
                                <ul className="text-sm text-muted-foreground space-y-1">
                                    <li>• Any type without justification</li>
                                    <li>• Functions longer than 50 lines</li>
                                    <li>• Star imports (from x import *)</li>
                                    <li>• Magic numbers without constants</li>
                                    <li>• Global mutable state</li>
                                </ul>
                            </div>
                        </div>

                        <div className="overflow-x-auto rounded-3xl border glass">
                            <table className="w-full text-sm">
                                <thead className="bg-muted text-xs font-bold uppercase tracking-wider text-muted-foreground">
                                    <tr>
                                        <th className="px-6 py-4 text-left">Element</th>
                                        <th className="px-6 py-4 text-left">Convention</th>
                                        <th className="px-6 py-4 text-left">Example</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y border-t">
                                    {[
                                        { el: "Modules", conv: "snake_case", ex: "user_service.py" },
                                        { el: "Classes", conv: "PascalCase", ex: "UserService" },
                                        { el: "Functions", conv: "snake_case", ex: "get_user_by_id" },
                                        { el: "Variables", conv: "snake_case", ex: "user_count" },
                                        { el: "Constants", conv: "SCREAMING_SNAKE_CASE", ex: "MAX_RETRIES" },
                                        { el: "Private", conv: "_leading_underscore", ex: "_internal_method" },
                                    ].map((row, i) => (
                                        <tr key={i} className="hover:bg-accent/5 transition-colors">
                                            <td className="px-6 py-4 font-semibold">{row.el}</td>
                                            <td className="px-6 py-4"><Badge variant="outline" className="bg-primary/5">{row.conv}</Badge></td>
                                            <td className="px-6 py-4 font-mono text-xs text-primary">{row.ex}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <CodeSnippet
                            title="pyproject.toml - Tooling Configuration"
                            language="toml"
                            code={`[tool.black]
line-length = 88
target-version = ["py310"]

[tool.ruff]
line-length = 88
select = ["E", "F", "I", "N", "W", "UP"]
ignore = ["E501"]  # Line length handled by black

[tool.pytest.ini_options]
asyncio_mode = "auto"
testpaths = ["tests"]
addopts = "-v --cov=app --cov-report=term-missing"

[tool.mypy]
python_version = "3.10"
strict = true
warn_return_any = true`}
                        />
                    </section>

                    <Separator />

                    {/* Chapter 9: Error Handling */}
                    <section id="error-handling" className="scroll-mt-28 space-y-12">
                        <div className="space-y-4">
                            <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 9</Badge>
                            <h2 className="text-4xl font-extrabold tracking-tight">Error Handling</h2>
                        </div>

                        <CodeSnippet
                            title="Custom Exception Hierarchy"
                            language="python"
                            code={`# app/core/exceptions.py
from fastapi import HTTPException, status


class AppException(Exception):
    """Base application exception."""
    pass


class NotFoundError(AppException):
    """Resource not found."""
    pass


class ValidationError(AppException):
    """Validation failed."""
    pass


# app/main.py - Exception handlers
from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse

app = FastAPI()


@app.exception_handler(NotFoundError)
async def not_found_handler(request: Request, exc: NotFoundError) -> JSONResponse:
    return JSONResponse(
        status_code=status.HTTP_404_NOT_FOUND,
        content={
            "type": "not_found",
            "title": "Resource Not Found",
            "detail": str(exc),
            "instance": str(request.url),
        },
    )


@app.exception_handler(ValidationError)
async def validation_handler(request: Request, exc: ValidationError) -> JSONResponse:
    return JSONResponse(
        status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
        content={
            "type": "validation_error",
            "title": "Validation Failed",
            "detail": str(exc),
        },
    )`}
                        />
                    </section>

                    <Separator />

                    {/* Chapter 10: Deployment */}
                    <section id="deployment" className="scroll-mt-28 space-y-12">
                        <div className="space-y-4">
                            <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 10</Badge>
                            <h2 className="text-4xl font-extrabold tracking-tight">Deployment</h2>
                        </div>

                        <CodeSnippet
                            title="Dockerfile"
                            language="dockerfile"
                            code={`# Multi-stage build for optimized image
FROM python:3.11-slim as builder

WORKDIR /app

# Install dependencies
COPY requirements.txt .
RUN pip wheel --no-cache-dir --no-deps --wheel-dir /app/wheels -r requirements.txt


FROM python:3.11-slim

WORKDIR /app

# Create non-root user
RUN groupadd -r appgroup && useradd -r -g appgroup appuser

# Copy wheels and install
COPY --from=builder /app/wheels /wheels
RUN pip install --no-cache /wheels/*

# Copy application
COPY ./app ./app

# Switch to non-root user
USER appuser

# Health check
HEALTHCHECK --interval=30s --timeout=3s \\
    CMD curl -f http://localhost:8000/health || exit 1

EXPOSE 8000

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]`}
                        />

                        <div className="p-6 rounded-2xl bg-muted/30 border space-y-4">
                            <h4 className="font-bold">Common Commands</h4>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {[
                                    { cmd: "uvicorn app.main:app --reload", desc: "Run dev server" },
                                    { cmd: "pytest -v --cov=app", desc: "Run tests with coverage" },
                                    { cmd: "alembic upgrade head", desc: "Apply migrations" },
                                    { cmd: "alembic revision --autogenerate", desc: "Create migration" },
                                    { cmd: "black . && ruff check .", desc: "Format and lint" },
                                    { cmd: "mypy app/", desc: "Type checking" },
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-3 p-3 rounded-lg bg-background border">
                                        <code className="text-xs font-mono text-primary whitespace-nowrap">{item.cmd}</code>
                                        <span className="text-xs text-muted-foreground">{item.desc}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Conclusion */}
                    <section id="conclusion" className="p-12 rounded-[2.5rem] bg-primary text-primary-foreground border-none relative overflow-hidden">
                        <div className="relative z-10 space-y-6">
                            <h2 className="text-3xl font-bold">Ready to Build?</h2>
                            <p className="opacity-80 max-w-2xl">Following these Python standards ensures your AI/ML services and APIs are robust, maintainable, and production-ready.</p>
                            <div className="flex gap-4">
                                <Button variant="secondary" asChild>
                                    <a href="/github-axa-usage">GitHub Workflow <ArrowRight className="ml-2 h-4 w-4" /></a>
                                </Button>
                                <Button variant="outline" className="bg-white/10 border-white/20 hover:bg-white/20" asChild>
                                    <a href="/coding-standard">Global Standards</a>
                                </Button>
                            </div>
                        </div>
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl pointer-events-none" />
                    </section>

                </main>

                <OnThisPage chapters={chapters} />
            </div>
        </Layout>
    );
};

export default PythonDeveloperGuidelinePage;
