import React, { useState, useEffect } from 'react';
import PageHero from '@/components/PageHero';
import Layout from '@/components/Layout';
import OnThisPage from '@/components/OnThisPage';
import CodeSnippet from '@/components/CodeSnippet';
import FileTree from '@/components/FileTree';
import ArchitectureDiagram from '@/components/ArchitectureDiagram';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
    Terminal,
    FileCode,
    Database,
    Lock,
    GitBranch,
    Cloud,
    Server,
    Shield,
    Settings,
    CheckCircle2,
    AlertTriangle,
    Layers,
    FolderTree,
    Workflow,
    DollarSign,
    BookOpen,
    Zap,
    RefreshCw,
    Package,
    Eye,
    Play,
    Trash2
} from 'lucide-react';

const chapters = [
    { id: "introduction", title: "1. Introduction to IaC", icon: Terminal },
    { id: "project-structure", title: "2. Project Structure", icon: FolderTree },
    { id: "state-management", title: "3. State Management", icon: Database },
    { id: "modules", title: "4. Modules & Reusability", icon: Package },
    { id: "security", title: "5. Security Best Practices", icon: Shield },
    { id: "cicd", title: "6. CI/CD Integration", icon: Workflow },
    { id: "aws-patterns", title: "7. AWS Provider Patterns", icon: Cloud },
    { id: "tagging", title: "8. Tagging & FinOps", icon: DollarSign },
    { id: "workspaces", title: "9. Workspaces", icon: Layers },
    { id: "case-studies", title: "10. Case Studies", icon: BookOpen },
];

const TerraformGuidelinePage: React.FC = () => {
    const breadcrumbs = [
        { label: 'Home', href: '/' },
        { label: 'Cloud & FinOps' },
        { label: 'Terraform IaC' }
    ];

    const projectStructure = [
        {
            name: "terraform-project",
            type: "folder" as const,
            children: [
                {
                    name: "environments",
                    type: "folder" as const,
                    children: [
                        {
                            name: "dev",
                            type: "folder" as const,
                            children: [
                                { name: "main.tf", type: "file" as const, comment: "Dev environment config" },
                                { name: "variables.tf", type: "file" as const },
                                { name: "terraform.tfvars", type: "file" as const },
                            ]
                        },
                        {
                            name: "prod",
                            type: "folder" as const,
                            children: [
                                { name: "main.tf", type: "file" as const, comment: "Production config" },
                                { name: "variables.tf", type: "file" as const },
                                { name: "terraform.tfvars", type: "file" as const },
                            ]
                        }
                    ]
                },
                {
                    name: "modules",
                    type: "folder" as const,
                    children: [
                        {
                            name: "vpc",
                            type: "folder" as const,
                            children: [
                                { name: "main.tf", type: "file" as const },
                                { name: "variables.tf", type: "file" as const },
                                { name: "outputs.tf", type: "file" as const },
                                { name: "README.md", type: "file" as const },
                            ]
                        },
                        {
                            name: "ec2",
                            type: "folder" as const,
                            children: [
                                { name: "main.tf", type: "file" as const },
                                { name: "variables.tf", type: "file" as const },
                                { name: "outputs.tf", type: "file" as const },
                            ]
                        },
                        {
                            name: "rds",
                            type: "folder" as const,
                            children: [
                                { name: "main.tf", type: "file" as const },
                                { name: "variables.tf", type: "file" as const },
                                { name: "outputs.tf", type: "file" as const },
                            ]
                        }
                    ]
                },
                { name: "backend.tf", type: "file" as const, comment: "Remote state config" },
                { name: "providers.tf", type: "file" as const, comment: "Provider versions" },
                { name: "versions.tf", type: "file" as const, comment: "Terraform version" },
                { name: ".gitignore", type: "file" as const },
                { name: "README.md", type: "file" as const },
            ]
        }
    ];

    return (
        <Layout>
            <PageHero
                title="Terraform IaC Guideline"
                subtitle="Infrastructure as Code best practices for managing AWS resources with Terraform."
                breadcrumbs={breadcrumbs}
                readingTime={40}
            />

            <div className="py-8 flex flex-col lg:flex-row gap-12">
                <main className="flex-1 min-w-0 space-y-16 pb-16">

                    {/* Chapter 1: Introduction */}
                    <section id="introduction" className="scroll-mt-28 space-y-8">
                        <div className="space-y-4">
                            <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 1</Badge>
                            <h2 className="text-4xl font-extrabold tracking-tight">Introduction to Infrastructure as Code</h2>
                            <p className="text-xl text-muted-foreground leading-relaxed">
                                Infrastructure as Code (IaC) is the practice of managing and provisioning infrastructure through machine-readable configuration files rather than manual processes.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {[
                                { text: "Version Controlled", icon: GitBranch, desc: "Track all infrastructure changes in Git" },
                                { text: "Reproducible", icon: RefreshCw, desc: "Deploy identical environments consistently" },
                                { text: "Automated", icon: Zap, desc: "Eliminate manual configuration errors" },
                                { text: "Documented", icon: FileCode, desc: "Code IS the documentation" },
                                { text: "Auditable", icon: Eye, desc: "Review changes before applying" },
                                { text: "Reusable", icon: Package, desc: "Share modules across teams" },
                            ].map((item, i) => (
                                <div key={i} className="glass flex flex-col gap-3 p-6 rounded-2xl border border-border/50 hover:border-primary/30 transition-colors">
                                    <item.icon className="h-8 w-8 text-primary" />
                                    <span className="font-bold text-sm tracking-tight">{item.text}</span>
                                    <span className="text-xs text-muted-foreground">{item.desc}</span>
                                </div>
                            ))}
                        </div>

                        <div className="p-6 rounded-2xl bg-purple-500/5 border border-purple-500/20 space-y-4">
                            <h4 className="font-bold text-lg flex items-center gap-2">
                                <Terminal className="h-5 w-5 text-purple-500" />
                                Why Terraform?
                            </h4>
                            <div className="grid sm:grid-cols-2 gap-4 text-sm">
                                <div className="space-y-2">
                                    <p className="font-medium text-purple-600">Multi-Cloud Support</p>
                                    <p className="text-muted-foreground text-xs">Single tool for AWS, Azure, GCP, and 3000+ providers</p>
                                </div>
                                <div className="space-y-2">
                                    <p className="font-medium text-purple-600">Declarative Syntax</p>
                                    <p className="text-muted-foreground text-xs">Describe desired state, Terraform figures out how</p>
                                </div>
                                <div className="space-y-2">
                                    <p className="font-medium text-purple-600">State Management</p>
                                    <p className="text-muted-foreground text-xs">Tracks real-world resources and their relationships</p>
                                </div>
                                <div className="space-y-2">
                                    <p className="font-medium text-purple-600">Execution Plans</p>
                                    <p className="text-muted-foreground text-xs">Preview changes before applying them</p>
                                </div>
                            </div>
                        </div>

                        {/* Core Workflow */}
                        <div className="p-6 rounded-2xl bg-muted/30 border space-y-4">
                            <h4 className="font-bold">Terraform Core Workflow</h4>
                            <div className="grid grid-cols-4 gap-4 text-center text-xs font-mono">
                                <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
                                    <Terminal className="h-6 w-6 mx-auto text-blue-500 mb-2" />
                                    <p className="font-bold">terraform init</p>
                                    <p className="text-muted-foreground mt-1">Initialize backend & providers</p>
                                </div>
                                <div className="p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/20">
                                    <Eye className="h-6 w-6 mx-auto text-yellow-500 mb-2" />
                                    <p className="font-bold">terraform plan</p>
                                    <p className="text-muted-foreground mt-1">Preview changes</p>
                                </div>
                                <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20">
                                    <Play className="h-6 w-6 mx-auto text-green-500 mb-2" />
                                    <p className="font-bold">terraform apply</p>
                                    <p className="text-muted-foreground mt-1">Apply changes</p>
                                </div>
                                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                                    <Trash2 className="h-6 w-6 mx-auto text-red-500 mb-2" />
                                    <p className="font-bold">terraform destroy</p>
                                    <p className="text-muted-foreground mt-1">Tear down</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <Separator />

                    {/* Chapter 2: Project Structure */}
                    <section id="project-structure" className="scroll-mt-28 space-y-8">
                        <div className="space-y-4">
                            <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 2</Badge>
                            <h2 className="text-4xl font-extrabold tracking-tight">Project Structure</h2>
                            <p className="text-lg text-muted-foreground">A well-organized Terraform project enables maintainability and team collaboration.</p>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-6">
                            <FileTree data={projectStructure} title="Recommended Project Layout" />

                            <div className="space-y-4">
                                <h4 className="font-bold">Standard Module Files</h4>
                                <div className="space-y-3">
                                    {[
                                        { file: "main.tf", desc: "Primary resource definitions" },
                                        { file: "variables.tf", desc: "Input variable declarations" },
                                        { file: "outputs.tf", desc: "Output value declarations" },
                                        { file: "providers.tf", desc: "Provider configuration" },
                                        { file: "versions.tf", desc: "Terraform & provider version constraints" },
                                        { file: "backend.tf", desc: "Remote state backend configuration" },
                                        { file: "terraform.tfvars", desc: "Variable values (environment-specific)" },
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                                            <FileCode className="h-4 w-4 text-primary shrink-0" />
                                            <code className="text-sm font-mono text-primary">{item.file}</code>
                                            <span className="text-xs text-muted-foreground">{item.desc}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <CodeSnippet
                            title="versions.tf"
                            language="hcl"
                            code={`terraform {
  required_version = ">= 1.5.0"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}`}
                        />
                    </section>

                    <Separator />

                    {/* Chapter 3: State Management */}
                    <section id="state-management" className="scroll-mt-28 space-y-8">
                        <div className="space-y-4">
                            <Badge variant="outline" className="text-amber-500 border-amber-500/20 bg-amber-500/5 px-3 py-1">Chapter 3</Badge>
                            <h2 className="text-4xl font-extrabold tracking-tight">State Management</h2>
                            <p className="text-lg text-muted-foreground">Terraform state is your source of truth. Manage it carefully.</p>
                        </div>

                        <div className="p-6 rounded-2xl bg-amber-500/5 border border-amber-500/20 flex gap-4">
                            <AlertTriangle className="h-6 w-6 text-amber-600 shrink-0" />
                            <div className="space-y-2">
                                <h4 className="font-bold text-amber-600">Critical: Never Commit State Files</h4>
                                <p className="text-sm text-muted-foreground">
                                    State files contain sensitive data (passwords, keys). Always use remote backends and add <code>*.tfstate</code> to <code>.gitignore</code>.
                                </p>
                            </div>
                        </div>

                        <CodeSnippet
                            title="backend.tf - S3 Remote Backend with DynamoDB Locking"
                            language="hcl"
                            code={`terraform {
  backend "s3" {
    bucket         = "axa-terraform-state"
    key            = "prod/infrastructure.tfstate"
    region         = "ap-southeast-1"
    encrypt        = true
    dynamodb_table = "terraform-locks"
    
    # Optional: Use IAM role for cross-account access
    # role_arn     = "arn:aws:iam::123456789012:role/TerraformRole"
  }
}`}
                        />

                        <div className="grid md:grid-cols-2 gap-6">
                            <Card className="border-green-500/20 bg-green-500/5">
                                <CardHeader>
                                    <CardTitle className="text-green-700 flex items-center gap-2">
                                        <CheckCircle2 className="h-5 w-5" />
                                        State Best Practices
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="text-sm space-y-2 text-muted-foreground">
                                    <li>• Use remote backends (S3, Azure Blob, GCS)</li>
                                    <li>• Enable state locking (DynamoDB for AWS)</li>
                                    <li>• Enable encryption at rest</li>
                                    <li>• Enable versioning for rollback</li>
                                    <li>• Separate state per environment</li>
                                </CardContent>
                            </Card>

                            <Card className="border-red-500/20 bg-red-500/5">
                                <CardHeader>
                                    <CardTitle className="text-red-700 flex items-center gap-2">
                                        <AlertTriangle className="h-5 w-5" />
                                        Avoid These Mistakes
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="text-sm space-y-2 text-muted-foreground">
                                    <li>• Never edit state files manually</li>
                                    <li>• Don't commit .tfstate to Git</li>
                                    <li>• Don't share state across unrelated projects</li>
                                    <li>• Don't skip state locking</li>
                                    <li>• Don't ignore state drift warnings</li>
                                </CardContent>
                            </Card>
                        </div>

                        <CodeSnippet
                            title="Creating S3 Backend Infrastructure"
                            language="hcl"
                            code={`# Run this first (with local state), then migrate
resource "aws_s3_bucket" "terraform_state" {
  bucket = "axa-terraform-state"

  lifecycle {
    prevent_destroy = true
  }
}

resource "aws_s3_bucket_versioning" "terraform_state" {
  bucket = aws_s3_bucket.terraform_state.id
  versioning_configuration {
    status = "Enabled"
  }
}

resource "aws_s3_bucket_server_side_encryption_configuration" "terraform_state" {
  bucket = aws_s3_bucket.terraform_state.id
  rule {
    apply_server_side_encryption_by_default {
      sse_algorithm = "AES256"
    }
  }
}

resource "aws_dynamodb_table" "terraform_locks" {
  name         = "terraform-locks"
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "LockID"

  attribute {
    name = "LockID"
    type = "S"
  }
}`}
                        />
                    </section>

                    <Separator />

                    {/* Chapter 4: Modules */}
                    <section id="modules" className="scroll-mt-28 space-y-8">
                        <div className="space-y-4">
                            <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 4</Badge>
                            <h2 className="text-4xl font-extrabold tracking-tight">Modules & Reusability</h2>
                            <p className="text-lg text-muted-foreground">Create reusable, composable infrastructure components.</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-4">
                            {[
                                { title: "Single Responsibility", desc: "One module = one logical resource group", icon: Package },
                                { title: "Semantic Versioning", desc: "Version modules for safe upgrades", icon: GitBranch },
                                { title: "Clear Interfaces", desc: "Well-defined inputs and outputs", icon: FileCode },
                            ].map((item, i) => (
                                <div key={i} className="p-5 rounded-2xl border border-border bg-background/50 space-y-3">
                                    <item.icon className="h-6 w-6 text-primary" />
                                    <h5 className="font-bold text-sm">{item.title}</h5>
                                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        <CodeSnippet
                            title="modules/vpc/main.tf - Reusable VPC Module"
                            language="hcl"
                            code={`resource "aws_vpc" "main" {
  cidr_block           = var.cidr_block
  enable_dns_hostnames = true
  enable_dns_support   = true

  tags = merge(var.tags, {
    Name = "\${var.environment}-vpc"
  })
}

resource "aws_subnet" "private" {
  count             = length(var.availability_zones)
  vpc_id            = aws_vpc.main.id
  cidr_block        = cidrsubnet(var.cidr_block, 4, count.index)
  availability_zone = var.availability_zones[count.index]

  tags = merge(var.tags, {
    Name = "\${var.environment}-private-\${count.index + 1}"
    Tier = "private"
  })
}

resource "aws_subnet" "public" {
  count                   = length(var.availability_zones)
  vpc_id                  = aws_vpc.main.id
  cidr_block              = cidrsubnet(var.cidr_block, 4, count.index + length(var.availability_zones))
  availability_zone       = var.availability_zones[count.index]
  map_public_ip_on_launch = true

  tags = merge(var.tags, {
    Name = "\${var.environment}-public-\${count.index + 1}"
    Tier = "public"
  })
}`}
                        />

                        <CodeSnippet
                            title="Using the VPC Module"
                            language="hcl"
                            code={`module "vpc" {
  source = "./modules/vpc"

  cidr_block         = "10.0.0.0/16"
  environment        = "production"
  availability_zones = ["ap-southeast-1a", "ap-southeast-1b"]

  tags = {
    Project     = "MyApp"
    CostCenter  = "IT-Platform"
    ManagedBy   = "Terraform"
  }
}

# Reference outputs from the module
output "vpc_id" {
  value = module.vpc.vpc_id
}

output "private_subnet_ids" {
  value = module.vpc.private_subnet_ids
}`}
                        />
                    </section>

                    <Separator />

                    {/* Chapter 5: Security */}
                    <section id="security" className="scroll-mt-28 space-y-8">
                        <div className="space-y-4">
                            <Badge variant="outline" className="text-red-500 border-red-500/20 bg-red-500/5 px-3 py-1">Chapter 5</Badge>
                            <h2 className="text-4xl font-extrabold tracking-tight">Security Best Practices</h2>
                            <p className="text-lg text-muted-foreground">Secure your Terraform workflows and infrastructure code.</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Lock className="h-5 w-5 text-primary" />
                                        Secrets Management
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="text-sm space-y-3 text-muted-foreground">
                                    <div className="flex items-start gap-2">
                                        <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                                        <span>Use AWS Secrets Manager or SSM Parameter Store</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                                        <span>Mark sensitive variables with <code>sensitive = true</code></span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                                        <span>Never hardcode credentials in .tf files</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                                        <span>Use IAM roles instead of access keys</span>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Shield className="h-5 w-5 text-primary" />
                                        IAM Least Privilege
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="text-sm space-y-3 text-muted-foreground">
                                    <div className="flex items-start gap-2">
                                        <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                                        <span>Grant minimum permissions for Terraform execution</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                                        <span>Use separate roles for plan vs apply</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                                        <span>Enable MFA for production changes</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                                        <span>Audit IAM policies regularly</span>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        <CodeSnippet
                            title="Sensitive Variables"
                            language="hcl"
                            code={`variable "database_password" {
  description = "RDS master password"
  type        = string
  sensitive   = true  # Prevents value from showing in logs
}

# Fetch secret from AWS Secrets Manager
data "aws_secretsmanager_secret_version" "db_password" {
  secret_id = "prod/myapp/db-password"
}

resource "aws_db_instance" "main" {
  # ...
  password = data.aws_secretsmanager_secret_version.db_password.secret_string
}`}
                        />

                        <div className="p-6 rounded-2xl bg-muted/30 border space-y-4">
                            <h4 className="font-bold">Security Scanning Tools</h4>
                            <div className="grid sm:grid-cols-3 gap-4">
                                {[
                                    { name: "tflint", desc: "Linter for Terraform code" },
                                    { name: "tfsec", desc: "Static security analysis" },
                                    { name: "checkov", desc: "Policy-as-code scanning" },
                                ].map((tool, i) => (
                                    <div key={i} className="p-4 rounded-xl bg-background/50 border">
                                        <code className="text-sm font-bold text-primary">{tool.name}</code>
                                        <p className="text-xs text-muted-foreground mt-1">{tool.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <Separator />

                    {/* Chapter 6: CI/CD */}
                    <section id="cicd" className="scroll-mt-28 space-y-8">
                        <div className="space-y-4">
                            <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 6</Badge>
                            <h2 className="text-4xl font-extrabold tracking-tight">CI/CD Integration</h2>
                            <p className="text-lg text-muted-foreground">Automate Terraform workflows with Jenkins pipelines.</p>
                        </div>

                        <div className="p-8 rounded-3xl bg-blue-500/5 border border-blue-500/20 space-y-6">
                            <div className="flex items-center gap-4">
                                <Workflow className="h-8 w-8 text-blue-500" />
                                <div>
                                    <h3 className="text-xl font-bold">GitOps Workflow</h3>
                                    <p className="text-muted-foreground text-sm">Git as the single source of truth for infrastructure</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-5 gap-2 text-center text-xs">
                                {[
                                    { step: "1", label: "Create Branch", color: "blue" },
                                    { step: "2", label: "Make Changes", color: "yellow" },
                                    { step: "3", label: "PR + Plan", color: "purple" },
                                    { step: "4", label: "Review + Approve", color: "orange" },
                                    { step: "5", label: "Merge + Apply", color: "green" },
                                ].map((item, i) => (
                                    <div key={i} className={`p-3 rounded-xl bg-${item.color}-500/10 border border-${item.color}-500/20`}>
                                        <div className={`text-${item.color}-600 font-bold mb-1`}>Step {item.step}</div>
                                        <div className="text-muted-foreground">{item.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <CodeSnippet
                            title="Jenkinsfile - Terraform Pipeline"
                            language="groovy"
                            code={`pipeline {
    agent any
    
    environment {
        AWS_DEFAULT_REGION = 'ap-southeast-1'
        TF_IN_AUTOMATION   = 'true'
    }
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Terraform Init') {
            steps {
                dir('environments/prod') {
                    sh 'terraform init -input=false'
                }
            }
        }
        
        stage('Terraform Validate') {
            steps {
                dir('environments/prod') {
                    sh 'terraform validate'
                    sh 'tflint --init && tflint'
                    sh 'tfsec .'
                }
            }
        }
        
        stage('Terraform Plan') {
            steps {
                dir('environments/prod') {
                    sh 'terraform plan -out=tfplan -input=false'
                }
            }
        }
        
        stage('Approval') {
            when {
                branch 'main'
            }
            steps {
                input message: 'Review the plan and approve to apply'
            }
        }
        
        stage('Terraform Apply') {
            when {
                branch 'main'
            }
            steps {
                dir('environments/prod') {
                    sh 'terraform apply -auto-approve tfplan'
                }
            }
        }
    }
    
    post {
        always {
            cleanWs()
        }
    }
}`}
                        />
                    </section>

                    <Separator />

                    {/* Chapter 7: AWS Patterns */}
                    <section id="aws-patterns" className="scroll-mt-28 space-y-8">
                        <div className="space-y-4">
                            <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 7</Badge>
                            <h2 className="text-4xl font-extrabold tracking-tight">AWS Provider Patterns</h2>
                            <p className="text-lg text-muted-foreground">Common infrastructure patterns for AWS resources.</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                { title: "VPC with Public/Private Subnets", resources: "VPC, Subnets, NAT Gateway, IGW" },
                                { title: "EC2 with Auto Scaling", resources: "Launch Template, ASG, Target Group" },
                                { title: "RDS Multi-AZ", resources: "DB Instance, Subnet Group, Security Group" },
                                { title: "S3 with CloudFront", resources: "Bucket, OAI, Distribution, ACM Cert" },
                            ].map((pattern, i) => (
                                <Card key={i} className="hover:border-primary/50 transition-colors">
                                    <CardHeader className="pb-2">
                                        <CardTitle className="text-lg flex items-center gap-2">
                                            <Cloud className="h-5 w-5 text-primary" />
                                            {pattern.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-xs text-muted-foreground font-mono">{pattern.resources}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        <CodeSnippet
                            title="EC2 Instance with Security Group"
                            language="hcl"
                            code={`resource "aws_security_group" "web" {
  name        = "\${var.environment}-web-sg"
  description = "Security group for web servers"
  vpc_id      = module.vpc.vpc_id

  ingress {
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = var.tags
}

resource "aws_instance" "web" {
  ami                    = data.aws_ami.amazon_linux_2.id
  instance_type          = var.instance_type
  subnet_id              = module.vpc.private_subnet_ids[0]
  vpc_security_group_ids = [aws_security_group.web.id]
  iam_instance_profile   = aws_iam_instance_profile.web.name

  root_block_device {
    volume_type = "gp3"
    volume_size = 20
    encrypted   = true
  }

  tags = merge(var.tags, {
    Name = "\${var.environment}-web-server"
  })
}`}
                        />
                    </section>

                    <Separator />

                    {/* Chapter 8: Tagging */}
                    <section id="tagging" className="scroll-mt-28 space-y-8">
                        <div className="space-y-4">
                            <Badge variant="outline" className="text-emerald-500 border-emerald-500/20 bg-emerald-500/5 px-3 py-1">Chapter 8</Badge>
                            <h2 className="text-4xl font-extrabold tracking-tight">Tagging & FinOps</h2>
                            <p className="text-lg text-muted-foreground">Consistent tagging enables cost allocation and governance.</p>
                        </div>

                        <CodeSnippet
                            title="Common Tags Variable"
                            language="hcl"
                            code={`locals {
  common_tags = {
    Environment  = var.environment
    Project      = var.project_name
    CostCenter   = var.cost_center
    Owner        = var.owner_email
    ManagedBy    = "Terraform"
    Repository   = "github.com/axa/infrastructure"
  }
}

# Apply to all resources
resource "aws_instance" "example" {
  # ...
  tags = merge(local.common_tags, {
    Name = "\${var.environment}-\${var.project_name}-instance"
  })
}`}
                        />

                        <div className="overflow-x-auto">
                            <table className="w-full text-sm border rounded-xl overflow-hidden">
                                <thead className="bg-muted font-bold uppercase text-xs">
                                    <tr>
                                        <th className="px-4 py-3 text-left">Tag Key</th>
                                        <th className="px-4 py-3 text-left">Purpose</th>
                                        <th className="px-4 py-3 text-left">Example</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y">
                                    <tr><td className="px-4 py-2 font-mono text-primary">Environment</td><td className="px-4 py-2">Identify deployment stage</td><td className="px-4 py-2"><Badge variant="outline">production</Badge></td></tr>
                                    <tr><td className="px-4 py-2 font-mono text-primary">Project</td><td className="px-4 py-2">Application or project name</td><td className="px-4 py-2"><Badge variant="outline">claims-api</Badge></td></tr>
                                    <tr><td className="px-4 py-2 font-mono text-primary">CostCenter</td><td className="px-4 py-2">Cost allocation</td><td className="px-4 py-2"><Badge variant="outline">IT-Platform</Badge></td></tr>
                                    <tr><td className="px-4 py-2 font-mono text-primary">Owner</td><td className="px-4 py-2">Team or person responsible</td><td className="px-4 py-2"><Badge variant="outline">platform-team</Badge></td></tr>
                                    <tr><td className="px-4 py-2 font-mono text-primary">ManagedBy</td><td className="px-4 py-2">How resource is managed</td><td className="px-4 py-2"><Badge variant="outline">Terraform</Badge></td></tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <Separator />

                    {/* Chapter 9: Workspaces */}
                    <section id="workspaces" className="scroll-mt-28 space-y-8">
                        <div className="space-y-4">
                            <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 9</Badge>
                            <h2 className="text-4xl font-extrabold tracking-tight">Workspaces</h2>
                            <p className="text-lg text-muted-foreground">Manage multiple environments with Terraform workspaces.</p>
                        </div>

                        <CodeSnippet
                            title="Using Workspaces"
                            language="bash"
                            code={`# Create and switch to a workspace
terraform workspace new dev
terraform workspace new staging
terraform workspace new prod

# List workspaces
terraform workspace list

# Switch workspace
terraform workspace select prod

# Use workspace name in configuration
# terraform.workspace returns current workspace name`}
                        />

                        <CodeSnippet
                            title="Environment-Specific Configuration"
                            language="hcl"
                            code={`locals {
  environment = terraform.workspace
  
  instance_types = {
    dev     = "t3.micro"
    staging = "t3.small"
    prod    = "t3.medium"
  }
  
  instance_counts = {
    dev     = 1
    staging = 2
    prod    = 3
  }
}

resource "aws_instance" "app" {
  count         = local.instance_counts[local.environment]
  instance_type = local.instance_types[local.environment]
  
  tags = {
    Environment = local.environment
  }
}`}
                        />
                    </section>

                    <Separator />

                    {/* Chapter 10: Case Studies */}
                    <section id="case-studies" className="scroll-mt-28 space-y-8">
                        <div className="space-y-4">
                            <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 10</Badge>
                            <h2 className="text-4xl font-extrabold tracking-tight">Case Studies</h2>
                            <p className="text-lg text-muted-foreground">Real-world Terraform implementations.</p>
                        </div>

                        <div className="grid gap-6">
                            <Card className="border-l-4 border-l-primary">
                                <CardHeader>
                                    <CardTitle>Three-Tier Web Application</CardTitle>
                                    <CardDescription>VPC + ALB + EC2 + RDS architecture</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <ArchitectureDiagram
                                        title="VPC Three-Tier Architecture"
                                        layers={[
                                            {
                                                id: 'public',
                                                title: 'Public Subnets',
                                                color: 'blue',
                                                items: [
                                                    { label: 'ALB', sublabel: 'Internet-facing' },
                                                ],
                                            },
                                            {
                                                id: 'private',
                                                title: 'Private Subnets',
                                                color: 'purple',
                                                items: [
                                                    { label: 'EC2 (ASG)', sublabel: 'App Servers' },
                                                    { label: 'RDS', sublabel: 'Multi-AZ DB' },
                                                ],
                                            },
                                        ]}
                                        footer="All resources inside VPC with proper security groups"
                                    />
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Serverless API</CardTitle>
                                    <CardDescription>API Gateway + Lambda + DynamoDB</CardDescription>
                                </CardHeader>
                                <CardContent className="text-sm text-muted-foreground">
                                    <p>Use Terraform to provision serverless resources with proper IAM roles, VPC connectivity for database access, and CloudWatch logging.</p>
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        <Badge variant="outline">API Gateway</Badge>
                                        <Badge variant="outline">Lambda</Badge>
                                        <Badge variant="outline">DynamoDB</Badge>
                                        <Badge variant="outline">CloudWatch</Badge>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                </main>

                <OnThisPage chapters={chapters} />
            </div>
        </Layout>
    );
};

export default TerraformGuidelinePage;
