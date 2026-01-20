import React, { useState, useEffect } from 'react';
import PageHero from '@/components/PageHero';
import Layout from '@/components/Layout';
import OnThisPage from '@/components/OnThisPage';
import CodeSnippet from '@/components/CodeSnippet';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
    Cog,
    GitBranch,
    Layers,
    Shield,
    Settings,
    CheckCircle2,
    BookOpen,
    Terminal,
    FileCode,
    AlertTriangle,
    Rocket,
    Package,
    TestTube,
    Share2,
    Clock,
    Lock,
    Workflow,
    FolderCode
} from 'lucide-react';
import PageNavigation from '../components/PageNavigation';
import AnimatedCodeTabs from '@/components/animate-ui/AnimatedCodeTabs';
import HighlightText from '@/components/animate-ui/HighlightText';
import FlowDiagram from '@/components/FlowDiagram';

const chapters = [
    { id: "introduction", title: "1. Introduction", icon: BookOpen },
    { id: "getting-access", title: "2. Getting Access", icon: Lock },
    { id: "jenkinsfile-basics", title: "3. Jenkinsfile Basics", icon: FileCode },
    { id: "build-test", title: "4. Build & Test", icon: TestTube },
    { id: "deployment", title: "5. Deployment Pipelines", icon: Rocket },
    { id: "shared-libraries", title: "6. Shared Libraries", icon: Share2 },
    { id: "best-practices", title: "7. Best Practices", icon: Shield },
    { id: "case-study", title: "8. Case Study: .NET", icon: Cog },
];

const JenkinsGuidelinePage: React.FC = () => {
    const breadcrumbs = [
        { label: 'Home', href: '/' },
        { label: 'DevOps & CI/CD' },
        { label: 'Jenkins' }
    ];

    return (
        <Layout>
            <PageHero
                title="Jenkins CI/CD Guide"
                subtitle="Build, test, and deploy applications using Jenkins pipelines on AXA's OpenShift platform."
                breadcrumbs={breadcrumbs}
                readingTime={35}
            />

            <div className="py-8 flex flex-col lg:flex-row gap-12">
                <main className="flex-1 min-w-0 space-y-16 pb-16">

                    {/* Chapter 1: Introduction */}
                    <section id="introduction" className="scroll-mt-28 space-y-8">
                        <div className="space-y-4">
                            <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 1</Badge>
                            <h2 className="text-4xl font-extrabold tracking-tight">Introduction</h2>
                            <p className="text-xl text-muted-foreground leading-relaxed">
                                Jenkins is AXA's primary CI/CD automation server, hosted on OpenShift. We use <strong>Jenkinsfile</strong> in each project repository to define build, test, and deployment pipelines.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {[
                                { text: "Pipeline as Code", icon: FileCode },
                                { text: "Jenkinsfile per Repo", icon: FolderCode },
                                { text: "OpenShift Integration", icon: Layers },
                                { text: "Automated Testing", icon: TestTube },
                                { text: "Multi-branch Pipelines", icon: GitBranch },
                                { text: "Declarative Syntax", icon: Terminal },
                            ].map((tech, i) => (
                                <div key={i} className="glass flex items-center gap-3 p-4 rounded-xl border border-border/50">
                                    <tech.icon className="h-5 w-5 text-primary" />
                                    <span className="font-semibold text-sm">{tech.text}</span>
                                </div>
                            ))}
                        </div>

                        {/* Pipeline Workflow */}
                        <FlowDiagram
                            title="AXA CI/CD Pipeline Flow"
                            subtitle="Complete build, test, and deployment workflow"
                            groups={[
                                {
                                    title: "Build & Test Phase",
                                    steps: [
                                        { id: 'commit', label: 'Commit', sublabel: 'Git', color: 'slate' },
                                        { id: 'build', label: 'Build', sublabel: 'Maven/npm', color: 'blue' },
                                        { id: 'test', label: 'Test', sublabel: 'Unit/Integ', color: 'green' },
                                        { id: 'analyze', label: 'Analyze', sublabel: 'SonarQube', color: 'purple' },
                                    ]
                                },
                                {
                                    title: "OpenShift Build & Deploy",
                                    steps: [
                                        { id: 'buildconfig', label: 'BuildConfig', sublabel: 'oc', color: 'amber' },
                                        { id: 'imagestream', label: 'ImageStream', sublabel: 'Registry', color: 'amber' },
                                        { id: 'deploy', label: 'Deploy', sublabel: 'Dev/Stage', color: 'green' },
                                    ]
                                }
                            ]}
                        />

                        <div className="p-6 rounded-2xl bg-amber-500/5 border border-amber-500/20 space-y-4">
                            <div className="flex items-center gap-2 text-amber-600">
                                <AlertTriangle className="h-5 w-5" />
                                <h4 className="font-bold">AXA Jenkins Standard</h4>
                            </div>
                            <p className="text-sm text-muted-foreground">
                                Every project at AXA must include a <code className="text-primary bg-muted px-1.5 py-0.5 rounded">Jenkinsfile</code> in the repository root. This file defines the complete CI/CD pipeline using declarative syntax. The pipeline triggers OpenShift Builds and manages deployments across environments.
                            </p>
                        </div>
                    </section>

                    <Separator />

                    {/* Chapter 2: Getting Access */}
                    <section id="getting-access" className="scroll-mt-28 space-y-12">
                        <div className="space-y-4">
                            <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 2</Badge>
                            <h2 className="text-4xl font-extrabold tracking-tight">Getting Access</h2>
                            <p className="text-lg text-muted-foreground">Set up your Jenkins access and configure credentials.</p>
                        </div>

                        {/* New Developer Checklist */}
                        <div className="p-8 rounded-3xl bg-cyan-500/5 border border-cyan-500/10 space-y-6">
                            <div className="flex items-center gap-3 text-cyan-600">
                                <div className="p-2 rounded-lg bg-cyan-500/10">
                                    <CheckCircle2 className="h-6 w-6" />
                                </div>
                                <h3 className="text-2xl font-bold">Access Checklist</h3>
                            </div>
                            <div className="grid gap-4">
                                {[
                                    { step: "Request Jenkins Access", desc: "Submit access request through AXA service portal for Jenkins." },
                                    { step: "Login to Jenkins", desc: "Access Jenkins via SSO at https://jenkins.apps.openshift.axa.com" },
                                    { step: "Find Your Project", desc: "Navigate to your team's folder/job in the Jenkins dashboard." },
                                    { step: "Configure Credentials", desc: "Add required credentials (Git tokens, registry secrets) in Jenkins Credentials." },
                                    { step: "Create Pipeline Job", desc: "Create a new Pipeline job pointing to your repository's Jenkinsfile." },
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 p-4 rounded-xl border border-border/50 bg-background/50">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500/10 text-cyan-600 flex items-center justify-center font-bold text-sm">
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

                        <CodeSnippet
                            title="Required Jenkins Credentials"
                            language="groovy"
                            code={`// Common credentials used in AXA Jenkins pipelines

// Git credentials for cloning repositories
credentials('github-axa-token')        // GitHub AXA personal access token

// OpenShift service account token
credentials('openshift-token')          // For oc login

// SonarQube token for code analysis
credentials('sonarqube-token')          // SonarQube authentication

// Container registry credentials (if external)
credentials('registry-credentials')     // Docker registry auth

// Notification credentials
credentials('teams-webhook')            // Microsoft Teams webhook URL`}
                        />
                    </section>

                    <Separator />

                    {/* Chapter 3: Jenkinsfile Basics */}
                    <section id="jenkinsfile-basics" className="scroll-mt-28 space-y-12">
                        <div className="space-y-4">
                            <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 3</Badge>
                            <h2 className="text-4xl font-extrabold tracking-tight">Jenkinsfile Basics</h2>
                            <p className="text-lg text-muted-foreground">Understanding the declarative pipeline syntax and structure.</p>
                        </div>

                        <div className="space-y-8">
                            <CodeSnippet
                                title="Basic Jenkinsfile Structure"
                                language="groovy"
                                code={`// Jenkinsfile - Declarative Pipeline Syntax
pipeline {
    // Define agent/executor
    agent {
        kubernetes {
            // Use OpenShift's built-in agent
            inheritFrom 'maven'  // or 'nodejs', 'gradle', etc.
        }
    }
    
    // Environment variables
    environment {
        APP_NAME = 'my-application'
        VERSION = "\${env.BUILD_NUMBER}"
        OPENSHIFT_PROJECT_DEV = 'my-app-dev'
        OPENSHIFT_PROJECT_STAGING = 'my-app-staging'
        SONAR_PROJECT_KEY = 'my-application'
    }
    
    // Pipeline options
    options {
        buildDiscarder(logRotator(numToKeepStr: '10'))
        timeout(time: 30, unit: 'MINUTES')
        timestamps()
        disableConcurrentBuilds()
    }
    
    // Build triggers
    triggers {
        // Poll SCM every 5 minutes
        pollSCM('H/5 * * * *')
        // Or use webhooks (preferred)
    }
    
    // Pipeline stages
    stages {
        stage('Checkout') {
            steps {
                checkout scm
                script {
                    env.GIT_COMMIT_SHORT = sh(
                        script: 'git rev-parse --short HEAD',
                        returnStdout: true
                    ).trim()
                }
            }
        }
        
        stage('Build') {
            steps {
                echo "Building \${APP_NAME} version \${VERSION}"
                // Build steps here
            }
        }
        
        stage('Test') {
            steps {
                echo "Running tests..."
                // Test steps here
            }
        }
        
        stage('Deploy') {
            when {
                branch 'main'
            }
            steps {
                echo "Deploying to OpenShift..."
                // Deployment steps here
            }
        }
    }
    
    // Post-build actions
    post {
        success {
            echo 'Pipeline succeeded!'
            // Send success notification
        }
        failure {
            echo 'Pipeline failed!'
            // Send failure notification
        }
        always {
            // Cleanup
            cleanWs()
        }
    }
}`}
                            />

                            <div className="p-6 rounded-2xl bg-muted/30 border space-y-4">
                                <h4 className="font-bold">Declarative vs Scripted Pipeline</h4>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-sm">
                                        <thead className="bg-muted text-xs font-bold uppercase text-muted-foreground">
                                            <tr>
                                                <th className="px-4 py-3 text-left">Aspect</th>
                                                <th className="px-4 py-3 text-left">Declarative (Preferred)</th>
                                                <th className="px-4 py-3 text-left">Scripted</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y">
                                            <tr><td className="px-4 py-2 font-medium">Syntax</td><td className="px-4 py-2">Structured, opinionated</td><td className="px-4 py-2">Flexible, Groovy-based</td></tr>
                                            <tr><td className="px-4 py-2 font-medium">Learning Curve</td><td className="px-4 py-2"><Badge className="bg-emerald-500">Easier</Badge></td><td className="px-4 py-2"><Badge variant="secondary">Steeper</Badge></td></tr>
                                            <tr><td className="px-4 py-2 font-medium">Error Checking</td><td className="px-4 py-2">Syntax validation built-in</td><td className="px-4 py-2">Runtime errors</td></tr>
                                            <tr><td className="px-4 py-2 font-medium">Restart</td><td className="px-4 py-2">Stage restart supported</td><td className="px-4 py-2">Not supported</td></tr>
                                            <tr><td className="px-4 py-2 font-medium">Use Case</td><td className="px-4 py-2">Most pipelines</td><td className="px-4 py-2">Complex logic</td></tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <CodeSnippet
                                title="Using script{} Block for Complex Logic"
                                language="groovy"
                                code={`stage('Dynamic Stage') {
    steps {
        script {
            // Groovy code block for complex logic
            def environments = ['dev', 'staging', 'prod']
            
            for (env in environments) {
                echo "Processing environment: \${env}"
            }
            
            // Conditional logic
            if (env.BRANCH_NAME == 'main') {
                currentBuild.displayName = "#\${BUILD_NUMBER} - Production"
            } else {
                currentBuild.displayName = "#\${BUILD_NUMBER} - \${BRANCH_NAME}"
            }
            
            // Capture command output
            def gitTag = sh(
                script: 'git describe --tags --always',
                returnStdout: true
            ).trim()
            
            echo "Git tag: \${gitTag}"
        }
    }
}`}
                            />
                        </div>
                    </section>

                    <Separator />

                    {/* Chapter 4: Build & Test */}
                    <section id="build-test" className="scroll-mt-28 space-y-12">
                        <div className="space-y-4">
                            <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 4</Badge>
                            <h2 className="text-4xl font-extrabold tracking-tight">Build & Test</h2>
                            <p className="text-lg text-muted-foreground">Configure <HighlightText>build and test stages</HighlightText> for different technology stacks.</p>
                        </div>

                        <div className="space-y-8">
                            <AnimatedCodeTabs
                                snippets={{
                                    maven: {
                                        title: "Maven/Java",
                                        language: "groovy",
                                        code: `pipeline {
    agent {
        kubernetes {
            inheritFrom 'maven'
        }
    }
    
    environment {
        MAVEN_OPTS = '-Xmx1024m -XX:MaxMetaspaceSize=512m'
    }
    
    stages {
        stage('Build') {
            steps {
                sh '''
                    mvn clean compile -B -DskipTests
                '''
            }
        }
        
        stage('Unit Tests') {
            steps {
                sh 'mvn test -B'
            }
            post {
                always {
                    junit '**/target/surefire-reports/*.xml'
                    jacoco(
                        execPattern: '**/target/jacoco.exec',
                        classPattern: '**/target/classes',
                        sourcePattern: '**/src/main/java'
                    )
                }
            }
        }
        
        stage('Integration Tests') {
            steps {
                sh 'mvn verify -B -DskipUnitTests'
            }
            post {
                always {
                    junit '**/target/failsafe-reports/*.xml'
                }
            }
        }
        
        stage('Package') {
            steps {
                sh 'mvn package -B -DskipTests'
                archiveArtifacts artifacts: 'target/*.jar', fingerprint: true
            }
        }
        
        stage('SonarQube Analysis') {
            steps {
                withSonarQubeEnv('SonarQube') {
                    sh '''
                        mvn sonar:sonar \\
                            -Dsonar.projectKey=\${SONAR_PROJECT_KEY} \\
                            -Dsonar.projectName="\${APP_NAME}" \\
                            -Dsonar.java.coveragePlugin=jacoco \\
                            -Dsonar.coverage.jacoco.xmlReportPaths=target/site/jacoco/jacoco.xml
                    '''
                }
            }
        }
        
        stage('Quality Gate') {
            steps {
                timeout(time: 5, unit: 'MINUTES') {
                    waitForQualityGate abortPipeline: true
                }
            }
        }
    }
}`
                                    },
                                    node: {
                                        title: "Node.js/React",
                                        language: "groovy",
                                        code: `pipeline {
    agent {
        kubernetes {
            inheritFrom 'nodejs'
        }
    }
    
    stages {
        stage('Install Dependencies') {
            steps {
                sh '''
                    npm ci --prefer-offline
                '''
            }
        }
        
        stage('Lint') {
            steps {
                sh 'npm run lint'
            }
        }
        
        stage('Unit Tests') {
            steps {
                sh 'npm run test:ci'
            }
            post {
                always {
                    junit 'coverage/junit.xml'
                    publishHTML(target: [
                        allowMissing: false,
                        alwaysLinkToLastBuild: true,
                        keepAll: true,
                        reportDir: 'coverage/lcov-report',
                        reportFiles: 'index.html',
                        reportName: 'Coverage Report'
                    ])
                }
            }
        }
        
        stage('Build') {
            steps {
                sh '''
                    npm run build
                '''
                archiveArtifacts artifacts: 'dist/**/*', fingerprint: true
            }
        }
        
        stage('SonarQube Analysis') {
            steps {
                withSonarQubeEnv('SonarQube') {
                    sh '''
                        npx sonar-scanner \\
                            -Dsonar.projectKey=\${SONAR_PROJECT_KEY} \\
                            -Dsonar.sources=src \\
                            -Dsonar.tests=src \\
                            -Dsonar.test.inclusions=**/*.test.ts,**/*.test.tsx \\
                            -Dsonar.javascript.lcov.reportPaths=coverage/lcov.info
                    '''
                }
            }
        }
    }
}`
                                    },
                                    dotnet: {
                                        title: ".NET Core",
                                        language: "groovy",
                                        code: `pipeline {
    agent {
        kubernetes {
            inheritFrom 'dotnet'
        }
    }
    
    environment {
        DOTNET_CLI_TELEMETRY_OPTOUT = '1'
    }
    
    stages {
        stage('Restore') {
            steps {
                sh 'dotnet restore'
            }
        }
        
        stage('Build') {
            steps {
                sh 'dotnet build --configuration Release --no-restore'
            }
        }
        
        stage('Test') {
            steps {
                sh '''
                    dotnet test --configuration Release --no-build \\
                        --logger "trx;LogFileName=test-results.trx" \\
                        --collect:"XPlat Code Coverage"
                '''
            }
            post {
                always {
                    mstest testResultsFile: '**/*.trx'
                    publishCoverage adapters: [
                        coberturaAdapter('**/coverage.cobertura.xml')
                    ]
                }
            }
        }
        
        stage('Publish') {
            steps {
                sh '''
                    dotnet publish --configuration Release --no-build \\
                        --output ./publish
                '''
                archiveArtifacts artifacts: 'publish/**/*', fingerprint: true
            }
        }
    }
}`
                                    }
                                }}
                            />
                        </div>
                    </section>

                    <Separator />

                    {/* Chapter 5: Deployment Pipelines */}
                    <section id="deployment" className="scroll-mt-28 space-y-12">
                        <div className="space-y-4">
                            <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 5</Badge>
                            <h2 className="text-4xl font-extrabold tracking-tight">Deployment Pipelines</h2>
                            <p className="text-lg text-muted-foreground">Trigger OpenShift Builds and manage deployments across environments.</p>
                        </div>

                        <div className="space-y-8">
                            <CodeSnippet
                                title="Complete CI/CD Pipeline with OpenShift"
                                language="groovy"
                                code={`pipeline {
    agent {
        kubernetes {
            inheritFrom 'maven'
        }
    }
    
    environment {
        APP_NAME = 'my-application'
        OPENSHIFT_DEV = 'my-app-dev'
        OPENSHIFT_STAGING = 'my-app-staging'
        OPENSHIFT_PROD = 'my-app-prod'
    }
    
    stages {
        stage('Build Application') {
            steps {
                sh 'mvn clean package -B -DskipTests'
            }
        }
        
        stage('Run Tests') {
            parallel {
                stage('Unit Tests') {
                    steps {
                        sh 'mvn test -B'
                    }
                }
                stage('Integration Tests') {
                    steps {
                        sh 'mvn verify -B -DskipUnitTests'
                    }
                }
            }
        }
        
        stage('Build Container Image') {
            steps {
                script {
                    openshift.withCluster() {
                        openshift.withProject("\${OPENSHIFT_DEV}") {
                            // Start OpenShift build
                            def build = openshift.startBuild("\${APP_NAME}",
                                '--from-dir=.',
                                '--follow',
                                '--wait'
                            )
                            
                            def buildResult = build.object()
                            if (buildResult.status.phase != 'Complete') {
                                error "Build failed: \${buildResult.status.phase}"
                            }
                            
                            echo "Build completed: \${buildResult.metadata.name}"
                        }
                    }
                }
            }
        }
        
        stage('Deploy to Dev') {
            steps {
                script {
                    openshift.withCluster() {
                        openshift.withProject("\${OPENSHIFT_DEV}") {
                            // Apply manifests
                            openshift.apply('-f', 'k8s/base')
                            openshift.apply('-f', 'k8s/overlays/dev')
                            
                            // Wait for deployment
                            def deployment = openshift.selector('deployment', "\${APP_NAME}")
                            deployment.rollout().status('--timeout=5m')
                            
                            echo "Deployed to Dev successfully!"
                        }
                    }
                }
            }
        }
        
        stage('Smoke Tests') {
            steps {
                script {
                    openshift.withCluster() {
                        openshift.withProject("\${OPENSHIFT_DEV}") {
                            def route = openshift.selector('route', "\${APP_NAME}").object()
                            def appUrl = "https://\${route.spec.host}"
                            
                            // Basic health check
                            sh """
                                curl -sSf \${appUrl}/actuator/health || exit 1
                                echo "Smoke tests passed!"
                            """
                        }
                    }
                }
            }
        }
        
        stage('Promote to Staging') {
            when {
                branch 'main'
            }
            steps {
                script {
                    openshift.withCluster() {
                        // Tag image for staging
                        openshift.withProject("\${OPENSHIFT_DEV}") {
                            openshift.tag(
                                "\${APP_NAME}:latest",
                                "\${OPENSHIFT_STAGING}/\${APP_NAME}:staging"
                            )
                        }
                        
                        // Deploy to staging
                        openshift.withProject("\${OPENSHIFT_STAGING}") {
                            openshift.apply('-f', 'k8s/base')
                            openshift.apply('-f', 'k8s/overlays/staging')
                            
                            def deployment = openshift.selector('deployment', "\${APP_NAME}")
                            deployment.rollout().status('--timeout=5m')
                            
                            echo "Deployed to Staging successfully!"
                        }
                    }
                }
            }
        }
        
        stage('Deploy to Production') {
            when {
                branch 'main'
            }
            input {
                message "Deploy to Production?"
                ok "Deploy"
                submitter "admin,release-managers"
            }
            steps {
                script {
                    openshift.withCluster() {
                        // Tag image for production
                        openshift.withProject("\${OPENSHIFT_STAGING}") {
                            openshift.tag(
                                "\${APP_NAME}:staging",
                                "\${OPENSHIFT_PROD}/\${APP_NAME}:prod-\${BUILD_NUMBER}"
                            )
                            openshift.tag(
                                "\${APP_NAME}:staging",
                                "\${OPENSHIFT_PROD}/\${APP_NAME}:latest"
                            )
                        }
                        
                        // Deploy to production
                        openshift.withProject("\${OPENSHIFT_PROD}") {
                            openshift.apply('-f', 'k8s/base')
                            openshift.apply('-f', 'k8s/overlays/production')
                            
                            def deployment = openshift.selector('deployment', "\${APP_NAME}")
                            deployment.rollout().status('--timeout=10m')
                            
                            echo "Deployed to Production successfully!"
                        }
                    }
                }
            }
        }
    }
    
    post {
        success {
            script {
                // Send success notification to Teams
                office365ConnectorSend(
                    webhookUrl: "\${TEAMS_WEBHOOK}",
                    color: "00FF00",
                    message: "✅ Pipeline succeeded: \${JOB_NAME} #\${BUILD_NUMBER}"
                )
            }
        }
        failure {
            script {
                office365ConnectorSend(
                    webhookUrl: "\${TEAMS_WEBHOOK}",
                    color: "FF0000",
                    message: "❌ Pipeline failed: \${JOB_NAME} #\${BUILD_NUMBER}"
                )
            }
        }
        always {
            cleanWs()
        }
    }
}`}
                            />

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="p-5 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
                                    <p className="text-xs font-bold uppercase text-emerald-600 mb-2">✅ Deployment Best Practices</p>
                                    <ul className="text-sm text-muted-foreground space-y-1">
                                        <li>• Use input{ } for production approvals</li>
                                        <li>• Tag images with build numbers</li>
                                        <li>• Run smoke tests after each deploy</li>
                                        <li>• Keep production deployments immutable</li>
                                        <li>• Use parallel stages for faster builds</li>
                                    </ul>
                                </div>
                                <div className="p-5 rounded-xl bg-destructive/5 border border-destructive/20">
                                    <p className="text-xs font-bold uppercase text-destructive mb-2">❌ Common Mistakes</p>
                                    <ul className="text-sm text-muted-foreground space-y-1">
                                        <li>• Deploying without running tests</li>
                                        <li>• Not waiting for rollout to complete</li>
                                        <li>• Hardcoding credentials in Jenkinsfile</li>
                                        <li>• Missing post{ } failure handlers</li>
                                        <li>• No manual approval for production</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    <Separator />

                    {/* Chapter 6: Shared Libraries */}
                    <section id="shared-libraries" className="scroll-mt-28 space-y-12">
                        <div className="space-y-4">
                            <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 6</Badge>
                            <h2 className="text-4xl font-extrabold tracking-tight">Shared Libraries</h2>
                            <p className="text-lg text-muted-foreground">Reuse pipeline code across projects with shared libraries.</p>
                        </div>

                        <div className="space-y-8">
                            <CodeSnippet
                                title="Shared Library Structure"
                                language="bash"
                                code={`# Repository: github.axa.com/devops/jenkins-shared-library
jenkins-shared-library/
├── vars/                           # Global pipeline steps
│   ├── buildMaven.groovy           # Maven build step
│   ├── buildNodejs.groovy          # Node.js build step
│   ├── deployToOpenshift.groovy    # OpenShift deployment
│   ├── notifyTeams.groovy          # Teams notification
│   └── sonarAnalysis.groovy        # SonarQube analysis
├── src/
│   └── com/
│       └── axa/
│           └── pipeline/
│               ├── BuildConfig.groovy
│               └── DeployConfig.groovy
└── resources/
    └── templates/
        └── deployment.yaml`}
                            />

                            <CodeSnippet
                                title="vars/deployToOpenshift.groovy"
                                language="groovy"
                                code={`// Shared library function for OpenShift deployment
def call(Map config = [:]) {
    def appName = config.appName ?: error("appName is required")
    def project = config.project ?: error("project is required")
    def imageTag = config.imageTag ?: 'latest'
    def timeout = config.timeout ?: 5
    
    echo "Deploying \${appName} to \${project}"
    
    openshift.withCluster() {
        openshift.withProject(project) {
            // Apply Kubernetes manifests
            if (fileExists('k8s/')) {
                openshift.apply('-f', 'k8s/')
            }
            
            // Tag the image if specified
            if (config.sourceTag) {
                openshift.tag(
                    "\${config.sourceProject}/\${appName}:\${config.sourceTag}",
                    "\${appName}:\${imageTag}"
                )
            }
            
            // Wait for rollout
            def deployment = openshift.selector('deployment', appName)
            if (deployment.exists()) {
                deployment.rollout().status("--timeout=\${timeout}m")
                echo "Deployment completed successfully!"
            } else {
                error "Deployment '\${appName}' not found"
            }
            
            // Return route URL
            def route = openshift.selector('route', appName)
            if (route.exists()) {
                def routeObj = route.object()
                return "https://\${routeObj.spec.host}"
            }
            return null
        }
    }
}`}
                            />

                            <CodeSnippet
                                title="Using Shared Library in Jenkinsfile"
                                language="groovy"
                                code={`// Import shared library at the top of Jenkinsfile
@Library('axa-jenkins-shared-library@main') _

pipeline {
    agent any
    
    environment {
        APP_NAME = 'my-application'
    }
    
    stages {
        stage('Build') {
            steps {
                // Use shared library step
                buildMaven(
                    skipTests: false,
                    javaVersion: '17'
                )
            }
        }
        
        stage('SonarQube') {
            steps {
                sonarAnalysis(
                    projectKey: "\${APP_NAME}",
                    qualityGate: true
                )
            }
        }
        
        stage('Deploy to Dev') {
            steps {
                script {
                    def appUrl = deployToOpenshift(
                        appName: "\${APP_NAME}",
                        project: 'my-app-dev',
                        imageTag: 'dev'
                    )
                    echo "Application deployed at: \${appUrl}"
                }
            }
        }
        
        stage('Promote to Staging') {
            when { branch 'main' }
            steps {
                deployToOpenshift(
                    appName: "\${APP_NAME}",
                    project: 'my-app-staging',
                    sourceProject: 'my-app-dev',
                    sourceTag: 'dev',
                    imageTag: 'staging'
                )
            }
        }
    }
    
    post {
        always {
            notifyTeams(
                status: currentBuild.result,
                jobName: "\${JOB_NAME}",
                buildNumber: "\${BUILD_NUMBER}"
            )
        }
    }
}`}
                            />
                        </div>
                    </section>

                    <Separator />

                    {/* Chapter 7: Best Practices */}
                    <section id="best-practices" className="scroll-mt-28 space-y-12">
                        <div className="space-y-4">
                            <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 7</Badge>
                            <h2 className="text-4xl font-extrabold tracking-tight">Best Practices</h2>
                            <p className="text-lg text-muted-foreground">Follow these guidelines for maintainable, secure, and efficient pipelines.</p>
                        </div>

                        <div className="grid gap-6">
                            {[
                                {
                                    title: "Pipeline Structure",
                                    icon: Workflow,
                                    color: "text-blue-500",
                                    items: [
                                        "Use declarative syntax over scripted",
                                        "Keep Jenkinsfile in repository root",
                                        "Use meaningful stage names",
                                        "Fail fast - run quick checks first",
                                        "Use parallel stages where possible"
                                    ]
                                },
                                {
                                    title: "Security",
                                    icon: Shield,
                                    color: "text-emerald-500",
                                    items: [
                                        "Never hardcode credentials in Jenkinsfile",
                                        "Use Jenkins Credentials Manager",
                                        "Mask sensitive values in logs",
                                        "Restrict access to production jobs",
                                        "Audit pipeline changes"
                                    ]
                                },
                                {
                                    title: "Performance",
                                    icon: Clock,
                                    color: "text-amber-500",
                                    items: [
                                        "Cache dependencies between builds",
                                        "Use lightweight agents when possible",
                                        "Parallelize independent stages",
                                        "Set appropriate timeouts",
                                        "Clean workspace after builds"
                                    ]
                                },
                                {
                                    title: "Maintainability",
                                    icon: Settings,
                                    color: "text-purple-500",
                                    items: [
                                        "Use shared libraries for common code",
                                        "Document complex pipeline logic",
                                        "Version control your Jenkinsfiles",
                                        "Use environment variables for config",
                                        "Test pipeline changes on feature branches"
                                    ]
                                }
                            ].map((section, i) => (
                                <Card key={i} className="glass shadow-sm">
                                    <CardHeader>
                                        <CardTitle className="text-lg flex items-center gap-2">
                                            <section.icon className={`h-5 w-5 ${section.color}`} />
                                            {section.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <ul className="grid md:grid-cols-2 gap-2">
                                            {section.items.map((item, j) => (
                                                <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                    <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        <CodeSnippet
                            title="Complete Jenkinsfile Template"
                            language="groovy"
                            code={`@Library('axa-jenkins-shared-library@main') _

pipeline {
    agent {
        kubernetes {
            inheritFrom 'maven'
        }
    }
    
    environment {
        APP_NAME = 'my-application'
        SONAR_PROJECT = 'my-application'
    }
    
    options {
        buildDiscarder(logRotator(numToKeepStr: '10'))
        timeout(time: 30, unit: 'MINUTES')
        timestamps()
        disableConcurrentBuilds()
    }
    
    stages {
        stage('Initialize') {
            steps {
                script {
                    currentBuild.displayName = "#\${BUILD_NUMBER} - \${GIT_BRANCH}"
                }
            }
        }
        
        stage('Build & Test') {
            parallel {
                stage('Compile') {
                    steps {
                        sh 'mvn clean compile -B'
                    }
                }
                stage('Static Analysis') {
                    steps {
                        sh 'mvn checkstyle:check -B'
                    }
                }
            }
        }
        
        stage('Unit Tests') {
            steps {
                sh 'mvn test -B'
            }
            post {
                always {
                    junit '**/target/surefire-reports/*.xml'
                }
            }
        }
        
        stage('SonarQube') {
            steps {
                sonarAnalysis(projectKey: "\${SONAR_PROJECT}")
            }
        }
        
        stage('Package') {
            steps {
                sh 'mvn package -B -DskipTests'
            }
        }
        
        stage('Build Image') {
            steps {
                script {
                    openshift.withCluster() {
                        openshift.withProject('my-app-dev') {
                            openshift.startBuild("\${APP_NAME}",
                                '--from-dir=.',
                                '--follow',
                                '--wait'
                            )
                        }
                    }
                }
            }
        }
        
        stage('Deploy Dev') {
            steps {
                deployToOpenshift(
                    appName: "\${APP_NAME}",
                    project: 'my-app-dev'
                )
            }
        }
        
        stage('Deploy Staging') {
            when { branch 'main' }
            steps {
                deployToOpenshift(
                    appName: "\${APP_NAME}",
                    project: 'my-app-staging',
                    sourceProject: 'my-app-dev',
                    sourceTag: 'latest',
                    imageTag: 'staging'
                )
            }
        }
        
        stage('Deploy Production') {
            when { branch 'main' }
            input {
                message "Deploy to Production?"
                ok "Deploy"
            }
            steps {
                deployToOpenshift(
                    appName: "\${APP_NAME}",
                    project: 'my-app-prod',
                    sourceProject: 'my-app-staging',
                    sourceTag: 'staging',
                    imageTag: "prod-\${BUILD_NUMBER}"
                )
            }
        }
    }
    
    post {
        success {
            notifyTeams(status: 'SUCCESS')
        }
        failure {
            notifyTeams(status: 'FAILURE')
        }
        always {
            cleanWs()
        }
    }
}`}
                        />
                    </section>

                    <Separator />

                    {/* Chapter 8: Case Study: .NET Production Pipeline */}
                    <section id="case-study" className="scroll-mt-28 space-y-12">
                        <div className="space-y-4">
                            <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 8</Badge>
                            <h2 className="text-4xl font-extrabold tracking-tight">Case Study: .NET Production Pipeline</h2>
                            <p className="text-lg text-muted-foreground">
                                A real-world example of a comprehensive .NET pipeline featuring SonarScanner integration, Artifactory authentication, and advanced test coverage processing.
                            </p>
                        </div>

                        <div className="space-y-8">
                            <div className="grid md:grid-cols-3 gap-4">
                                {[
                                    { title: "NuGet/Artifactory", desc: "Dynamic nuget.config generation with credentials." },
                                    { title: "SonarScanner", desc: "Full analysis with PR vs Branch conditional logic." },
                                    { title: "Coverage Processing", desc: "Automated path fixing for SonarQube compatibility." },
                                ].map((feature, i) => (
                                    <div key={i} className="p-4 rounded-xl preview-card border bg-background/50">
                                        <h4 className="font-bold text-sm mb-1">{feature.title}</h4>
                                        <p className="text-xs text-muted-foreground">{feature.desc}</p>
                                    </div>
                                ))}
                            </div>

                            <CodeSnippet
                                title="Production .NET Jenkinsfile (Surrounding Systems)"
                                language="groovy"
                                code={`pipeline {
  agent any

  options {
    skipDefaultCheckout(true) // avoid duplicate SCM checkout
  }

  environment {
    TARGET_NS                 = 'surrounding-systems-dev-axa-magi-id'
    APP_NAME                  = 'virtual-account-snap-mandiri'
    SOLUTION                  = 'JwtApp.sln'
    BC_NAME                   = "\${APP_NAME}"
    KUBE_CRED_ID              = 'jenkins-dev-axa-magi-id-kubeconfig'
    GITHUB_CRED               = 'github-ssh-prod'
    ARTIFACTORY_CRED_ID       = 'artifactory-credentials'
    SONAR_PROJECT_KEY         = 'aii_virtual-account-snap-mandiri_...'
  }

  stages {
    stage('📥 Checkout Code') {
      steps {
        checkout([$class: 'GitSCM', ...]) // Standard checkout
        sh 'git submodule update --init --recursive'
      }
    }

    stage('📦 Restore NuGet Packages') {
      steps {
        withCredentials([usernamePassword(credentialsId: env.ARTIFACTORY_CRED_ID, ...)]) {
          sh '''
            # Generate temporary nuget.config with Artifactory auth
            cat > nuget.config <<EOF
<configuration>
  <packageSources>
    <add key="AXA-Virtual" value="https://artifactory.asia.axa-cloud.com/..." />
  </packageSources>
</configuration>
EOF
            dotnet restore "\${SOLUTION}" --configfile nuget.config
          '''
        }
      }
    }

    stage('🔍 SonarQube Analysis (Begin)') {
      steps {
        withSonarQubeEnv('SonarQube') {
          script {
            def sonarArgs = env.CHANGE_ID ? "/d:sonar.pullrequest.key=\${CHANGE_ID} ..." : "/d:sonar.branch.name=\${BRANCH_NAME}"
            sh "dotnet sonarscanner begin /k:\\"\${SONAR_PROJECT_KEY}\\" \${sonarArgs} ..."
          }
        }
      }
    }

    stage('⚙️ Build Project') {
      steps {
        sh 'dotnet build "\${SOLUTION}" -c Release --no-restore'
      }
    }

    stage('📊 Parse Test Coverage') {
      steps {
        sh '''
          # Advanced logic to fix absolute paths in OpenCover files
          # This ensures SonarQube correctly maps coverage to source files
          sed -i 's|fullPath="[^"]*/virtual-account-snap-mandiri/|fullPath="|g' coverage.opencover.xml
        '''
      }
    }

    stage('✅ SonarQube Analysis (End)') {
      steps {
        withSonarQubeEnv('SonarQube') {
          sh 'dotnet sonarscanner end /d:sonar.token="\${SONAR_AUTH_TOKEN}"'
        }
      }
    }

    stage('🚀 Deploy to OpenShift') {
      when { branch 'dev' }
      steps {
        withCredentials([file(credentialsId: env.KUBE_CRED_ID, variable: 'KUBECONFIG')]) {
          sh 'oc start-build \${BC_NAME} --follow -n \${TARGET_NS}'
        }
      }
    }
  }
}`}
                            />

                            <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10 space-y-4">
                                <h4 className="font-bold flex items-center gap-2 text-primary">
                                    <Settings className="h-5 w-5" /> Key Takeaways
                                </h4>
                                <ul className="space-y-3 text-sm text-muted-foreground">
                                    <li className="flex gap-2">
                                        <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                                        <span><strong>Dynamic Config</strong>: Generating `nuget.config` on the fly prevents credential leakage and ensures clean builds.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                                        <span><strong>PR Analysis</strong>: Conditional use of `sonar.pullrequest` arguments allows Jenkins to report status directly back to GitHub PRs.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                                        <span><strong>Path Normalization</strong>: Using `sed` or `tr` to fix coverage reports is often necessary when tools generate absolute paths that don't match the SonarQube workspace.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Page Navigation */}
                    <PageNavigation
                        previous={{ title: "OpenShift Platform", href: "/openshift-guideline" }}
                        next={{ title: "SonarQube", href: "/sonarqube-guideline" }}
                    />
                </main>

                <OnThisPage chapters={chapters} />
            </div>
        </Layout>
    );
};

export default JenkinsGuidelinePage;
