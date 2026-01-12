import React, { useState, useEffect } from 'react';
import PageHero from '@/components/PageHero';
import Layout from '@/components/Layout';
import CodeSnippet from '@/components/CodeSnippet';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
    ScanSearch,
    Shield,
    Settings,
    CheckCircle2,
    BookOpen,
    Terminal,
    FileCode,
    AlertTriangle,
    Bug,
    Target,
    TrendingUp,
    GitBranch,
    Cog,
    Eye,
    Gauge,
    BarChart3,
    XCircle,
    Lightbulb
} from 'lucide-react';
import PageNavigation from '../components/PageNavigation';

const chapters = [
    { id: "introduction", title: "1. Introduction", icon: BookOpen },
    { id: "getting-started", title: "2. Getting Started", icon: Terminal },
    { id: "quality-gates", title: "3. Quality Gates", icon: Target },
    { id: "code-analysis", title: "4. Code Analysis", icon: ScanSearch },
    { id: "ide-integration", title: "5. IDE Integration", icon: Lightbulb },
    { id: "jenkins-integration", title: "6. Jenkins Integration", icon: GitBranch },
    { id: "best-practices", title: "7. Best Practices", icon: Shield },
];

const SonarQubeGuidelinePage: React.FC = () => {
    const [activeSection, setActiveSection] = useState("introduction");

    const breadcrumbs = [
        { label: 'Home', href: '/' },
        { label: 'DevOps & CI/CD' },
        { label: 'SonarQube' }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visibleEntries = entries.filter(entry => entry.isIntersecting);
                if (visibleEntries.length > 0) {
                    const mostVisible = visibleEntries.reduce((prev, current) => {
                        if (current.intersectionRatio > prev.intersectionRatio) {
                            return current;
                        }
                        if (current.intersectionRatio === prev.intersectionRatio) {
                            return current.boundingClientRect.top < prev.boundingClientRect.top ? current : prev;
                        }
                        return prev;
                    });
                    setActiveSection(mostVisible.target.id);
                }
            },
            { threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0], rootMargin: "-10% 0px -70% 0px" }
        );

        chapters.forEach((chapter) => {
            const el = document.getElementById(chapter.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <Layout>
            <PageHero
                title="SonarQube Code Quality Guide"
                subtitle="Maintain high code quality standards using SonarQube for static code analysis, security scanning, and technical debt management."
                breadcrumbs={breadcrumbs}
                readingTime={30}
            />

            <div className="container py-8 px-4 flex flex-col lg:flex-row gap-12">
                <main className="flex-1 min-w-0 space-y-16 pb-16 lg:max-w-4xl">

                    {/* Chapter 1: Introduction */}
                    <section id="introduction" className="scroll-mt-28 space-y-8">
                        <div className="space-y-4">
                            <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 1</Badge>
                            <h2 className="text-4xl font-extrabold tracking-tight">Introduction</h2>
                            <p className="text-xl text-muted-foreground leading-relaxed">
                                SonarQube is AXA's code quality and security analysis platform, hosted on OpenShift. It helps maintain clean, secure, and maintainable code across all projects.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {[
                                { text: "Static Code Analysis", icon: ScanSearch },
                                { text: "Security Vulnerabilities", icon: Shield },
                                { text: "Code Smells", icon: Bug },
                                { text: "Coverage Metrics", icon: BarChart3 },
                                { text: "Technical Debt", icon: TrendingUp },
                                { text: "Quality Gates", icon: Target },
                            ].map((tech, i) => (
                                <div key={i} className="glass flex items-center gap-3 p-4 rounded-xl border border-border/50">
                                    <tech.icon className="h-5 w-5 text-primary" />
                                    <span className="font-semibold text-sm">{tech.text}</span>
                                </div>
                            ))}
                        </div>

                        {/* Issue Types */}
                        <div className="p-6 rounded-2xl bg-muted/30 border space-y-4">
                            <h4 className="font-bold">SonarQube Issue Types</h4>
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm">
                                    <thead className="bg-muted text-xs font-bold uppercase text-muted-foreground">
                                        <tr>
                                            <th className="px-4 py-3 text-left">Type</th>
                                            <th className="px-4 py-3 text-left">Description</th>
                                            <th className="px-4 py-3 text-left">Priority</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y">
                                        <tr>
                                            <td className="px-4 py-2 font-medium flex items-center gap-2">
                                                <Bug className="h-4 w-4 text-red-500" /> Bug
                                            </td>
                                            <td className="px-4 py-2">Code that is demonstrably wrong or highly likely to behave unexpectedly</td>
                                            <td className="px-4 py-2"><Badge variant="destructive">Critical</Badge></td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2 font-medium flex items-center gap-2">
                                                <Shield className="h-4 w-4 text-orange-500" /> Vulnerability
                                            </td>
                                            <td className="px-4 py-2">Security issue that could be exploited by attackers</td>
                                            <td className="px-4 py-2"><Badge variant="destructive">Critical</Badge></td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2 font-medium flex items-center gap-2">
                                                <AlertTriangle className="h-4 w-4 text-amber-500" /> Security Hotspot
                                            </td>
                                            <td className="px-4 py-2">Security-sensitive code that requires manual review</td>
                                            <td className="px-4 py-2"><Badge variant="secondary">Review</Badge></td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2 font-medium flex items-center gap-2">
                                                <XCircle className="h-4 w-4 text-yellow-500" /> Code Smell
                                            </td>
                                            <td className="px-4 py-2">Maintainability issues that make code harder to understand</td>
                                            <td className="px-4 py-2"><Badge variant="outline">Medium</Badge></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Metrics Overview */}
                        <div className="grid md:grid-cols-2 gap-6">
                            <Card className="glass shadow-sm">
                                <CardHeader>
                                    <CardTitle className="text-lg flex items-center gap-2">
                                        <Gauge className="h-5 w-5 text-emerald-500" /> Key Metrics
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-3">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-muted-foreground">Reliability Rating</span>
                                        <span className="font-medium">A-E (bugs)</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-muted-foreground">Security Rating</span>
                                        <span className="font-medium">A-E (vulnerabilities)</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-muted-foreground">Maintainability Rating</span>
                                        <span className="font-medium">A-E (code smells)</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-muted-foreground">Coverage</span>
                                        <span className="font-medium">% lines tested</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-muted-foreground">Duplications</span>
                                        <span className="font-medium">% duplicated lines</span>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="glass shadow-sm">
                                <CardHeader>
                                    <CardTitle className="text-lg flex items-center gap-2">
                                        <TrendingUp className="h-5 w-5 text-blue-500" /> Rating Scale
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-3">
                                    <div className="flex justify-between text-sm">
                                        <span className="font-medium text-emerald-600">A</span>
                                        <span className="text-muted-foreground">No issues (best)</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="font-medium text-green-600">B</span>
                                        <span className="text-muted-foreground">Minor issues only</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="font-medium text-yellow-600">C</span>
                                        <span className="text-muted-foreground">At least 1 major issue</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="font-medium text-orange-600">D</span>
                                        <span className="text-muted-foreground">At least 1 critical issue</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="font-medium text-red-600">E</span>
                                        <span className="text-muted-foreground">At least 1 blocker issue</span>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    <Separator />

                    {/* Chapter 2: Getting Started */}
                    <section id="getting-started" className="scroll-mt-28 space-y-12">
                        <div className="space-y-4">
                            <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 2</Badge>
                            <h2 className="text-4xl font-extrabold tracking-tight">Getting Started</h2>
                            <p className="text-lg text-muted-foreground">Set up your project for SonarQube analysis.</p>
                        </div>

                        {/* Setup Checklist */}
                        <div className="p-8 rounded-3xl bg-cyan-500/5 border border-cyan-500/10 space-y-6">
                            <div className="flex items-center gap-3 text-cyan-600">
                                <div className="p-2 rounded-lg bg-cyan-500/10">
                                    <CheckCircle2 className="h-6 w-6" />
                                </div>
                                <h3 className="text-2xl font-bold">Setup Checklist</h3>
                            </div>
                            <div className="grid gap-4">
                                {[
                                    { step: "Access SonarQube", desc: "Login to https://sonarqube.apps.openshift.axa.com with SSO credentials." },
                                    { step: "Create Project", desc: "Create a new project or request access to existing project from admin." },
                                    { step: "Generate Token", desc: "Go to My Account → Security → Generate Token for CI/CD integration." },
                                    { step: "Configure Project", desc: "Create sonar-project.properties file in your repository root." },
                                    { step: "Add to Pipeline", desc: "Add SonarQube analysis stage to your Jenkinsfile." },
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

                        <div className="space-y-8">
                            <CodeSnippet
                                title="sonar-project.properties"
                                language="properties"
                                code={`# Required metadata
sonar.projectKey=my-application
sonar.projectName=My Application
sonar.projectVersion=1.0

# Source directories
sonar.sources=src/main/java
sonar.tests=src/test/java

# Exclusions (optional)
sonar.exclusions=**/generated/**,**/node_modules/**
sonar.test.exclusions=**/test/**

# Language-specific settings
sonar.java.source=17
sonar.java.binaries=target/classes
sonar.java.test.binaries=target/test-classes
sonar.java.libraries=target/dependency/*.jar

# Coverage report paths
sonar.coverage.jacoco.xmlReportPaths=target/site/jacoco/jacoco.xml

# Encoding
sonar.sourceEncoding=UTF-8`}
                            />

                            <CodeSnippet
                                title="Running Analysis Locally"
                                language="bash"
                                code={`# Install SonarScanner CLI
# macOS
brew install sonar-scanner

# Or download from https://docs.sonarqube.org/latest/analysis/scan/sonarscanner/

# Run analysis (with token)
sonar-scanner \\
  -Dsonar.host.url=https://sonarqube.apps.openshift.axa.com \\
  -Dsonar.token=your-analysis-token \\
  -Dsonar.projectKey=my-application

# For Maven projects
mvn sonar:sonar \\
  -Dsonar.host.url=https://sonarqube.apps.openshift.axa.com \\
  -Dsonar.token=your-analysis-token

# For Gradle projects
./gradlew sonarqube \\
  -Dsonar.host.url=https://sonarqube.apps.openshift.axa.com \\
  -Dsonar.token=your-analysis-token

# For Node.js projects
npx sonar-scanner \\
  -Dsonar.host.url=https://sonarqube.apps.openshift.axa.com \\
  -Dsonar.token=your-analysis-token \\
  -Dsonar.projectKey=my-application`}
                            />
                        </div>
                    </section>

                    <Separator />

                    {/* Chapter 3: Quality Gates */}
                    <section id="quality-gates" className="scroll-mt-28 space-y-12">
                        <div className="space-y-4">
                            <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 3</Badge>
                            <h2 className="text-4xl font-extrabold tracking-tight">Quality Gates</h2>
                            <p className="text-lg text-muted-foreground">Quality Gates define the conditions that code must meet before being deployed.</p>
                        </div>

                        <div className="p-6 rounded-2xl bg-amber-500/5 border border-amber-500/20 space-y-4">
                            <div className="flex items-center gap-2 text-amber-600">
                                <AlertTriangle className="h-5 w-5" />
                                <h4 className="font-bold">AXA Quality Gate Standard</h4>
                            </div>
                            <p className="text-sm text-muted-foreground">
                                All AXA projects must pass the default "AXA Standard" Quality Gate before deployment. This gate enforces security, reliability, and maintainability standards. Builds that fail the Quality Gate should not be deployed to production.
                            </p>
                        </div>

                        <div className="p-6 rounded-2xl bg-muted/30 border space-y-4">
                            <h4 className="font-bold">AXA Standard Quality Gate Conditions</h4>
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm">
                                    <thead className="bg-muted text-xs font-bold uppercase text-muted-foreground">
                                        <tr>
                                            <th className="px-4 py-3 text-left">Metric</th>
                                            <th className="px-4 py-3 text-left">Condition</th>
                                            <th className="px-4 py-3 text-left">Applies To</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y">
                                        <tr><td className="px-4 py-2 font-medium">New Bugs</td><td className="px-4 py-2"><Badge className="bg-emerald-500">= 0</Badge></td><td className="px-4 py-2">New code</td></tr>
                                        <tr><td className="px-4 py-2 font-medium">New Vulnerabilities</td><td className="px-4 py-2"><Badge className="bg-emerald-500">= 0</Badge></td><td className="px-4 py-2">New code</td></tr>
                                        <tr><td className="px-4 py-2 font-medium">New Security Hotspots Reviewed</td><td className="px-4 py-2"><Badge variant="secondary">= 100%</Badge></td><td className="px-4 py-2">New code</td></tr>
                                        <tr><td className="px-4 py-2 font-medium">New Coverage</td><td className="px-4 py-2"><Badge variant="outline">≥ 80%</Badge></td><td className="px-4 py-2">New code</td></tr>
                                        <tr><td className="px-4 py-2 font-medium">New Duplicated Lines</td><td className="px-4 py-2"><Badge variant="outline">≤ 3%</Badge></td><td className="px-4 py-2">New code</td></tr>
                                        <tr><td className="px-4 py-2 font-medium">Reliability Rating</td><td className="px-4 py-2"><Badge className="bg-emerald-500">A</Badge></td><td className="px-4 py-2">New code</td></tr>
                                        <tr><td className="px-4 py-2 font-medium">Security Rating</td><td className="px-4 py-2"><Badge className="bg-emerald-500">A</Badge></td><td className="px-4 py-2">New code</td></tr>
                                        <tr><td className="px-4 py-2 font-medium">Maintainability Rating</td><td className="px-4 py-2"><Badge className="bg-emerald-500">A</Badge></td><td className="px-4 py-2">New code</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <CodeSnippet
                            title="Waiting for Quality Gate in Jenkins"
                            language="groovy"
                            code={`stage('SonarQube Analysis') {
    steps {
        withSonarQubeEnv('SonarQube') {
            sh 'mvn sonar:sonar'
        }
    }
}

stage('Quality Gate') {
    steps {
        timeout(time: 5, unit: 'MINUTES') {
            // Wait for SonarQube to process results
            waitForQualityGate abortPipeline: true
        }
    }
}

// Alternative: Check quality gate manually
stage('Quality Gate Check') {
    steps {
        script {
            def qualitygate = waitForQualityGate()
            if (qualitygate.status != 'OK') {
                error "Quality Gate failed: \${qualitygate.status}"
            }
            echo "Quality Gate passed!"
        }
    }
}`}
                        />
                    </section>

                    <Separator />

                    {/* Chapter 4: Code Analysis */}
                    <section id="code-analysis" className="scroll-mt-28 space-y-12">
                        <div className="space-y-4">
                            <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 4</Badge>
                            <h2 className="text-4xl font-extrabold tracking-tight">Code Analysis</h2>
                            <p className="text-lg text-muted-foreground">Understanding analysis results and fixing issues.</p>
                        </div>

                        <div className="space-y-8">
                            <div className="grid md:grid-cols-2 gap-6">
                                <CodeSnippet
                                    title="Java Analysis Configuration"
                                    language="xml"
                                    code={`<!-- pom.xml -->
<properties>
    <sonar.projectKey>my-app</sonar.projectKey>
    <sonar.projectName>My Application</sonar.projectName>
    <sonar.java.coveragePlugin>jacoco</sonar.java.coveragePlugin>
    <sonar.coverage.jacoco.xmlReportPaths>
        \${project.build.directory}/site/jacoco/jacoco.xml
    </sonar.coverage.jacoco.xmlReportPaths>
</properties>

<build>
    <plugins>
        <!-- JaCoCo for coverage -->
        <plugin>
            <groupId>org.jacoco</groupId>
            <artifactId>jacoco-maven-plugin</artifactId>
            <version>0.8.11</version>
            <executions>
                <execution>
                    <goals>
                        <goal>prepare-agent</goal>
                    </goals>
                </execution>
                <execution>
                    <id>report</id>
                    <phase>test</phase>
                    <goals>
                        <goal>report</goal>
                    </goals>
                </execution>
            </executions>
        </plugin>
    </plugins>
</build>`}
                                />

                                <CodeSnippet
                                    title="JavaScript/TypeScript Configuration"
                                    language="json"
                                    code={`// sonar-project.properties
sonar.projectKey=my-react-app
sonar.projectName=My React App
sonar.sources=src
sonar.tests=src
sonar.test.inclusions=**/*.test.ts,**/*.test.tsx
sonar.exclusions=**/node_modules/**,**/*.test.*
sonar.typescript.lcov.reportPaths=coverage/lcov.info
sonar.javascript.lcov.reportPaths=coverage/lcov.info
sonar.testExecutionReportPaths=coverage/test-reporter.xml

// package.json - test script
{
  "scripts": {
    "test:ci": "jest --coverage --ci --reporters=default --reporters=jest-junit",
    "sonar": "sonar-scanner"
  },
  "devDependencies": {
    "jest-junit": "^16.0.0",
    "sonarqube-scanner": "^3.3.0"
  }
}`}
                                />
                            </div>

                            <CodeSnippet
                                title=".NET Analysis Configuration"
                                language="bash"
                                code={`# Install SonarScanner for .NET
dotnet tool install --global dotnet-sonarscanner

# Begin analysis
dotnet sonarscanner begin \\
    /k:"my-dotnet-app" \\
    /n:"My .NET Application" \\
    /d:sonar.host.url="https://sonarqube.apps.openshift.axa.com" \\
    /d:sonar.token="your-token" \\
    /d:sonar.cs.opencover.reportsPaths="**/coverage.opencover.xml"

# Build and test
dotnet build
dotnet test --collect:"XPlat Code Coverage"

# End analysis
dotnet sonarscanner end /d:sonar.token="your-token"`}
                            />

                            <div className="p-6 rounded-2xl bg-muted/30 border space-y-4">
                                <h4 className="font-bold">Common Issue Categories</h4>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {[
                                        { category: "SQL Injection", severity: "Critical", rule: "S3649", fix: "Use parameterized queries" },
                                        { category: "Hard-coded Credentials", severity: "Critical", rule: "S2068", fix: "Use environment variables" },
                                        { category: "Null Pointer", severity: "Major", rule: "S2259", fix: "Add null checks or use Optional" },
                                        { category: "Empty Catch Block", severity: "Major", rule: "S108", fix: "Log exception or rethrow" },
                                        { category: "Cognitive Complexity", severity: "Minor", rule: "S3776", fix: "Extract methods, simplify logic" },
                                        { category: "Unused Variables", severity: "Minor", rule: "S1481", fix: "Remove or use the variable" },
                                    ].map((issue, i) => (
                                        <div key={i} className="p-4 rounded-xl border border-border/50 bg-background/50">
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="font-bold text-sm">{issue.category}</span>
                                                <Badge variant={issue.severity === "Critical" ? "destructive" : issue.severity === "Major" ? "secondary" : "outline"}>
                                                    {issue.severity}
                                                </Badge>
                                            </div>
                                            <p className="text-xs text-muted-foreground">Rule: {issue.rule}</p>
                                            <p className="text-xs text-emerald-600 mt-1">Fix: {issue.fix}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    <Separator />

                    {/* Chapter 5: IDE Integration */}
                    <section id="ide-integration" className="scroll-mt-28 space-y-12">
                        <div className="space-y-4">
                            <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 5</Badge>
                            <h2 className="text-4xl font-extrabold tracking-tight">IDE Integration</h2>
                            <p className="text-lg text-muted-foreground">Use SonarLint to catch issues before committing code.</p>
                        </div>

                        <div className="space-y-8">
                            <div className="grid md:grid-cols-3 gap-4">
                                {[
                                    { name: "VS Code", plugin: "SonarLint extension", icon: FileCode },
                                    { name: "IntelliJ IDEA", plugin: "SonarLint plugin", icon: Cog },
                                    { name: "Visual Studio", plugin: "SonarLint extension", icon: Eye },
                                ].map((ide, i) => (
                                    <Card key={i} className="glass shadow-sm">
                                        <CardHeader>
                                            <CardTitle className="text-lg flex items-center gap-2">
                                                <ide.icon className="h-5 w-5 text-primary" />
                                                {ide.name}
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-sm text-muted-foreground">{ide.plugin}</p>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>

                            <CodeSnippet
                                title="SonarLint Connected Mode (VS Code settings.json)"
                                language="json"
                                code={`{
  "sonarlint.connectedMode.connections.sonarqube": [
    {
      "serverUrl": "https://sonarqube.apps.openshift.axa.com",
      "token": "\${env:SONAR_TOKEN}"
    }
  ],
  "sonarlint.connectedMode.project": {
    "connectionId": "axa-sonarqube",
    "projectKey": "my-application"
  },
  "sonarlint.pathToNodeExecutable": "/usr/local/bin/node",
  "sonarlint.rules": {
    "java:S1135": { "level": "on" },
    "typescript:S1135": { "level": "on" }
  }
}`}
                            />

                            <CodeSnippet
                                title="SonarLint Connected Mode (IntelliJ)"
                                language="text"
                                code={`1. Install SonarLint plugin from JetBrains Marketplace

2. Configure Connection:
   - Go to Settings → Tools → SonarLint
   - Click "+" to add connection
   - Select "SonarQube"
   - Enter URL: https://sonarqube.apps.openshift.axa.com
   - Generate token in SonarQube and paste it

3. Bind Project:
   - Right-click project in Project Explorer
   - SonarLint → Bind to SonarQube/SonarCloud
   - Select your connection
   - Select your project

4. Enable Connected Mode:
   - SonarLint will now sync rules from server
   - Issues will match exactly what CI/CD sees`}
                            />

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="p-5 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
                                    <p className="text-xs font-bold uppercase text-emerald-600 mb-2">✅ SonarLint Benefits</p>
                                    <ul className="text-sm text-muted-foreground space-y-1">
                                        <li>• Real-time feedback while coding</li>
                                        <li>• Quick fixes for common issues</li>
                                        <li>• Synced rules with SonarQube server</li>
                                        <li>• Reduced CI/CD failures</li>
                                        <li>• Educational issue descriptions</li>
                                    </ul>
                                </div>
                                <div className="p-5 rounded-xl bg-blue-500/5 border border-blue-500/20">
                                    <p className="text-xs font-bold uppercase text-blue-600 mb-2">💡 Tips</p>
                                    <ul className="text-sm text-muted-foreground space-y-1">
                                        <li>• Use Connected Mode to match CI rules</li>
                                        <li>• Configure token as env variable</li>
                                        <li>• Enable auto-analysis on save</li>
                                        <li>• Review issue descriptions to learn</li>
                                        <li>• Use keyboard shortcuts for quick fixes</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    <Separator />

                    {/* Chapter 6: Jenkins Integration */}
                    <section id="jenkins-integration" className="scroll-mt-28 space-y-12">
                        <div className="space-y-4">
                            <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 6</Badge>
                            <h2 className="text-4xl font-extrabold tracking-tight">Jenkins Integration</h2>
                            <p className="text-lg text-muted-foreground">Automate code quality checks in your CI/CD pipeline.</p>
                        </div>

                        <div className="space-y-8">
                            <CodeSnippet
                                title="Complete SonarQube Pipeline Integration"
                                language="groovy"
                                code={`pipeline {
    agent any
    
    environment {
        SONAR_PROJECT_KEY = 'my-application'
        SONAR_PROJECT_NAME = 'My Application'
    }
    
    stages {
        stage('Build') {
            steps {
                sh 'mvn clean compile -B'
            }
        }
        
        stage('Test with Coverage') {
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
        
        stage('SonarQube Analysis') {
            steps {
                withSonarQubeEnv('SonarQube') {
                    sh '''
                        mvn sonar:sonar \\
                            -Dsonar.projectKey=\${SONAR_PROJECT_KEY} \\
                            -Dsonar.projectName="\${SONAR_PROJECT_NAME}" \\
                            -Dsonar.projectVersion=\${BUILD_NUMBER} \\
                            -Dsonar.java.coveragePlugin=jacoco \\
                            -Dsonar.coverage.jacoco.xmlReportPaths=target/site/jacoco/jacoco.xml \\
                            -Dsonar.branch.name=\${BRANCH_NAME}
                    '''
                }
            }
        }
        
        stage('Quality Gate') {
            steps {
                timeout(time: 10, unit: 'MINUTES') {
                    script {
                        def qg = waitForQualityGate()
                        if (qg.status != 'OK') {
                            // Detailed failure message
                            def conditions = qg.getProjectStatus().getConditions()
                            def failedConditions = conditions.findAll { it.getStatus() != 'OK' }
                            
                            def message = "Quality Gate Failed!\\n"
                            failedConditions.each { cond ->
                                message += "- \${cond.getMetricKey()}: \${cond.getActualValue()} (required: \${cond.getErrorThreshold()})\\n"
                            }
                            
                            error(message)
                        }
                        echo "Quality Gate Passed! All conditions met."
                    }
                }
            }
        }
    }
    
    post {
        always {
            // Archive SonarQube results link
            script {
                def sonarUrl = "\${env.SONAR_HOST_URL}/dashboard?id=\${SONAR_PROJECT_KEY}"
                currentBuild.description = "<a href='\${sonarUrl}'>SonarQube Report</a>"
            }
        }
    }
}`}
                            />

                            <CodeSnippet
                                title="Pull Request Analysis (Branch Analysis)"
                                language="groovy"
                                code={`stage('SonarQube PR Analysis') {
    when {
        changeRequest()
    }
    steps {
        withSonarQubeEnv('SonarQube') {
            sh '''
                mvn sonar:sonar \\
                    -Dsonar.projectKey=\${SONAR_PROJECT_KEY} \\
                    -Dsonar.pullrequest.key=\${CHANGE_ID} \\
                    -Dsonar.pullrequest.branch=\${CHANGE_BRANCH} \\
                    -Dsonar.pullrequest.base=\${CHANGE_TARGET} \\
                    -Dsonar.pullrequest.github.repository=your-org/your-repo
            '''
        }
    }
}

// For branch analysis (non-PR)
stage('SonarQube Branch Analysis') {
    when {
        not { changeRequest() }
    }
    steps {
        withSonarQubeEnv('SonarQube') {
            sh '''
                mvn sonar:sonar \\
                    -Dsonar.projectKey=\${SONAR_PROJECT_KEY} \\
                    -Dsonar.branch.name=\${BRANCH_NAME}
            '''
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
                            <p className="text-lg text-muted-foreground">Maximize code quality with these guidelines.</p>
                        </div>

                        <div className="grid gap-6">
                            {[
                                {
                                    title: "Fix as You Code",
                                    icon: Bug,
                                    color: "text-red-500",
                                    items: [
                                        "Use SonarLint in your IDE for real-time feedback",
                                        "Fix issues immediately rather than accumulating debt",
                                        "Don't merge code that fails Quality Gate",
                                        "Prioritize security vulnerabilities and bugs",
                                        "Address code smells during refactoring"
                                    ]
                                },
                                {
                                    title: "Test Coverage",
                                    icon: BarChart3,
                                    color: "text-emerald-500",
                                    items: [
                                        "Maintain minimum 80% coverage on new code",
                                        "Focus on meaningful tests, not just coverage numbers",
                                        "Test edge cases and error conditions",
                                        "Include integration tests for critical paths",
                                        "Review coverage reports regularly"
                                    ]
                                },
                                {
                                    title: "Security First",
                                    icon: Shield,
                                    color: "text-amber-500",
                                    items: [
                                        "Review all security hotspots immediately",
                                        "Never ignore security vulnerabilities",
                                        "Use secure coding patterns consistently",
                                        "Keep dependencies updated",
                                        "Follow OWASP guidelines"
                                    ]
                                },
                                {
                                    title: "Technical Debt Management",
                                    icon: TrendingUp,
                                    color: "text-purple-500",
                                    items: [
                                        "Address new issues before merging",
                                        "Allocate 20% of sprint time to debt reduction",
                                        "Set debt reduction goals per release",
                                        "Focus on high-impact areas first",
                                        "Track debt trends over time"
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

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="p-5 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
                                <p className="text-xs font-bold uppercase text-emerald-600 mb-2">✅ DO</p>
                                <ul className="text-sm text-muted-foreground space-y-1">
                                    <li>• Run analysis on every PR</li>
                                    <li>• Block merges on Quality Gate failure</li>
                                    <li>• Use SonarLint connected mode</li>
                                    <li>• Review reports regularly</li>
                                    <li>• Set team quality goals</li>
                                </ul>
                            </div>
                            <div className="p-5 rounded-xl bg-destructive/5 border border-destructive/20">
                                <p className="text-xs font-bold uppercase text-destructive mb-2">❌ DON'T</p>
                                <ul className="text-sm text-muted-foreground space-y-1">
                                    <li>• Disable Quality Gate for deadlines</li>
                                    <li>• Ignore security vulnerabilities</li>
                                    <li>• Add exclusions to hide issues</li>
                                    <li>• Skip analysis for "small" changes</li>
                                    <li>• Blame developers for legacy issues</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Page Navigation */}
                    <PageNavigation
                        previous={{ title: "Jenkins CI/CD", href: "/jenkins-guideline" }}
                        next={{ title: "GitHub Workflow", href: "/github-axa-usage" }}
                    />
                </main>

                {/* Table of Contents */}
                <aside className="hidden lg:block w-64 flex-shrink-0">
                    <div className="sticky top-28 space-y-4">
                        <h4 className="font-bold text-sm text-muted-foreground uppercase tracking-wide">On This Page</h4>
                        <nav className="space-y-1">
                            {chapters.map((chapter) => (
                                <a
                                    key={chapter.id}
                                    href={`#${chapter.id}`}
                                    className={`flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition-colors ${activeSection === chapter.id
                                        ? "bg-primary/10 text-primary font-medium"
                                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                                        }`}
                                >
                                    <chapter.icon className="h-4 w-4" />
                                    {chapter.title}
                                </a>
                            ))}
                        </nav>
                    </div>
                </aside>
            </div>
        </Layout>
    );
};

export default SonarQubeGuidelinePage;
