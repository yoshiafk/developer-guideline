import React, { useState, useEffect } from 'react';
import PageHero from '@/components/PageHero';
import Layout from '@/components/Layout';
import CodeSnippet from '@/components/CodeSnippet';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
    Cloud,
    Server,
    Box,
    Network,
    Shield,
    Settings,
    Activity,
    CheckCircle2,
    BookOpen,
    Layers,
    Container,
    Terminal,
    GitBranch,
    Cog,
    FileCode,
    AlertTriangle,
    Eye,
    Rocket,
    Database
} from 'lucide-react';
import PageNavigation from '../components/PageNavigation';

const chapters = [
    { id: "overview", title: "1. Platform Overview", icon: BookOpen },
    { id: "getting-started", title: "2. Getting Started", icon: Terminal },
    { id: "builds", title: "3. Build Configuration", icon: Cog },
    { id: "deployments", title: "4. Deployments", icon: Rocket },
    { id: "configuration", title: "5. Configuration Management", icon: Settings },
    { id: "networking", title: "6. Networking & Routes", icon: Network },
    { id: "monitoring", title: "7. Monitoring & Logging", icon: Activity },
    { id: "best-practices", title: "8. Best Practices", icon: Shield },
];

const OpenShiftGuidelinePage: React.FC = () => {
    const [activeSection, setActiveSection] = useState("overview");

    const breadcrumbs = [
        { label: 'Home', href: '/' },
        { label: 'DevOps & CI/CD' },
        { label: 'OpenShift' }
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
                title="OpenShift 4.x Platform Guide"
                subtitle="Comprehensive guide to deploying and managing applications on AXA's OpenShift Container Platform."
                breadcrumbs={breadcrumbs}
                readingTime={40}
            />

            <div className="container py-8 px-4 flex flex-col lg:flex-row gap-12">
                <main className="flex-1 min-w-0 space-y-16 pb-16 lg:max-w-4xl">

                    {/* Chapter 1: Platform Overview */}
                    <section id="overview" className="scroll-mt-28 space-y-8">
                        <div className="space-y-4">
                            <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 1</Badge>
                            <h2 className="text-4xl font-extrabold tracking-tight">Platform Overview</h2>
                            <p className="text-xl text-muted-foreground leading-relaxed">
                                OpenShift Container Platform is AXA's enterprise Kubernetes platform for building, deploying, and managing containerized applications at scale.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {[
                                { text: "OpenShift 4.x", icon: Cloud },
                                { text: "Kubernetes Native", icon: Container },
                                { text: "Enterprise Security", icon: Shield },
                                { text: "Built-in CI/CD", icon: GitBranch },
                                { text: "Auto-scaling", icon: Activity },
                                { text: "Self-service Portal", icon: Layers },
                            ].map((tech, i) => (
                                <div key={i} className="glass flex items-center gap-3 p-4 rounded-xl border border-border/50">
                                    <tech.icon className="h-5 w-5 text-primary" />
                                    <span className="font-semibold text-sm">{tech.text}</span>
                                </div>
                            ))}
                        </div>

                        <div className="p-6 rounded-2xl bg-muted/30 border space-y-4">
                            <h4 className="font-bold">Key OpenShift Concepts</h4>
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm">
                                    <thead className="bg-muted text-xs font-bold uppercase text-muted-foreground">
                                        <tr>
                                            <th className="px-4 py-3 text-left">Concept</th>
                                            <th className="px-4 py-3 text-left">Description</th>
                                            <th className="px-4 py-3 text-left">Kubernetes Equivalent</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y">
                                        <tr><td className="px-4 py-2 font-medium">Project</td><td className="px-4 py-2">Isolated environment for resources</td><td className="px-4 py-2"><Badge variant="outline">Namespace</Badge></td></tr>
                                        <tr><td className="px-4 py-2 font-medium">BuildConfig</td><td className="px-4 py-2">Defines how to build container images</td><td className="px-4 py-2"><Badge variant="secondary">OpenShift Only</Badge></td></tr>
                                        <tr><td className="px-4 py-2 font-medium">DeploymentConfig</td><td className="px-4 py-2">Manages application deployments</td><td className="px-4 py-2"><Badge variant="outline">Deployment</Badge></td></tr>
                                        <tr><td className="px-4 py-2 font-medium">Route</td><td className="px-4 py-2">Exposes services externally</td><td className="px-4 py-2"><Badge variant="outline">Ingress</Badge></td></tr>
                                        <tr><td className="px-4 py-2 font-medium">ImageStream</td><td className="px-4 py-2">Tracks container image versions</td><td className="px-4 py-2"><Badge variant="secondary">OpenShift Only</Badge></td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Architecture Diagram */}
                        <div className="p-8 rounded-3xl bg-slate-900 border border-slate-700 font-mono text-xs text-blue-400">
                            <div className="absolute top-4 right-4 text-[10px] uppercase font-bold text-slate-500 tracking-widest">AXA OpenShift Architecture</div>
                            <pre className="leading-relaxed">{`┌─────────────────────────────────────────────────────────────────┐
│                      AXA OpenShift 4.x Cluster                  │
├─────────────────────────────────────────────────────────────────┤
│  ┌─────────────┐    ┌─────────────┐    ┌─────────────┐          │
│  │   Jenkins   │───▶│ BuildConfig │───▶│ ImageStream │          │
│  │  (Trigger)  │    │  (S2I/Docker)    │ (Registry)  │          │
│  └─────────────┘    └─────────────┘    └──────┬──────┘          │
│                                               │                 │
│                                               ▼                 │
│  ┌─────────────────────────────────────────────────────┐        │
│  │              DeploymentConfig / Deployment           │        │
│  │  ┌─────────┐  ┌─────────┐  ┌─────────┐              │        │
│  │  │  Pod 1  │  │  Pod 2  │  │  Pod N  │  (Replicas)  │        │
│  │  └─────────┘  └─────────┘  └─────────┘              │        │
│  └────────────────────────┬────────────────────────────┘        │
│                           │                                     │
│                           ▼                                     │
│  ┌─────────────┐    ┌─────────────┐    ┌─────────────┐          │
│  │   Service   │───▶│    Route    │───▶│  External   │          │
│  │ (ClusterIP) │    │ (Ingress)   │    │   Traffic   │          │
│  └─────────────┘    └─────────────┘    └─────────────┘          │
└─────────────────────────────────────────────────────────────────┘`}</pre>
                        </div>
                    </section>

                    <Separator />

                    {/* Chapter 2: Getting Started */}
                    <section id="getting-started" className="scroll-mt-28 space-y-12">
                        <div className="space-y-4">
                            <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 2</Badge>
                            <h2 className="text-4xl font-extrabold tracking-tight">Getting Started</h2>
                            <p className="text-lg text-muted-foreground">Set up your development environment and access AXA's OpenShift cluster.</p>
                        </div>

                        {/* New Developer Checklist */}
                        <div className="p-8 rounded-3xl bg-cyan-500/5 border border-cyan-500/10 space-y-6">
                            <div className="flex items-center gap-3 text-cyan-600">
                                <div className="p-2 rounded-lg bg-cyan-500/10">
                                    <CheckCircle2 className="h-6 w-6" />
                                </div>
                                <h3 className="text-2xl font-bold">New Developer Checklist</h3>
                            </div>
                            <p className="text-muted-foreground">Follow these steps to get started with OpenShift at AXA:</p>
                            <div className="grid gap-4">
                                {[
                                    { step: "Request Access", desc: "Submit access request through AXA service portal for your project namespace." },
                                    { step: "Install oc CLI", desc: "Download OpenShift CLI (oc) from the cluster's command-line tools page." },
                                    { step: "Login to Cluster", desc: "Copy login command from OpenShift web console (top-right menu → Copy Login Command)." },
                                    { step: "Select Project", desc: "Switch to your project namespace: oc project your-project-name" },
                                    { step: "Verify Access", desc: "Run 'oc whoami' and 'oc get pods' to verify your access permissions." },
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
                                title="CLI Authentication"
                                language="bash"
                                code={`# Login using token from web console
oc login --token=sha256~YOUR_TOKEN --server=https://api.openshift.axa.com:6443

# Verify login
oc whoami
oc whoami --show-server

# List available projects
oc projects

# Switch to your project
oc project my-application-dev

# Get cluster info
oc cluster-info`}
                            />

                            <CodeSnippet
                                title="Essential oc Commands"
                                language="bash"
                                code={`# View resources in current project
oc get all                    # List all resources
oc get pods                   # List pods
oc get deployments            # List deployments
oc get services               # List services
oc get routes                 # List routes
oc get buildconfigs           # List build configurations
oc get imagestreams           # List image streams

# Describe resources (detailed info)
oc describe pod <pod-name>
oc describe deployment <deployment-name>

# View logs
oc logs <pod-name>                  # Current logs
oc logs <pod-name> -f               # Follow logs (streaming)
oc logs <pod-name> --previous       # Previous container logs

# Execute commands in pod
oc exec -it <pod-name> -- /bin/bash
oc exec <pod-name> -- env           # View environment variables

# Port forwarding for local testing
oc port-forward <pod-name> 8080:8080`}
                            />
                        </div>
                    </section>

                    <Separator />

                    {/* Chapter 3: Build Configuration */}
                    <section id="builds" className="scroll-mt-28 space-y-12">
                        <div className="space-y-4">
                            <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 3</Badge>
                            <h2 className="text-4xl font-extrabold tracking-tight">Build Configuration</h2>
                            <p className="text-lg text-muted-foreground">Configure OpenShift Builds triggered from Jenkins pipelines.</p>
                        </div>

                        <div className="p-6 rounded-2xl bg-amber-500/5 border border-amber-500/20 space-y-4">
                            <div className="flex items-center gap-2 text-amber-600">
                                <AlertTriangle className="h-5 w-5" />
                                <h4 className="font-bold">AXA Build Workflow</h4>
                            </div>
                            <p className="text-sm text-muted-foreground">
                                At AXA, we trigger OpenShift Builds from Jenkins pipelines. The BuildConfig defines how your application is containerized, and the resulting image is pushed to the internal ImageStream for deployment consumption.
                            </p>
                        </div>

                        <div className="space-y-8">
                            <CodeSnippet
                                title="BuildConfig Definition (buildconfig.yaml)"
                                language="yaml"
                                code={`apiVersion: build.openshift.io/v1
kind: BuildConfig
metadata:
  name: my-application
  labels:
    app: my-application
    version: v1
spec:
  # Build output configuration
  output:
    to:
      kind: ImageStreamTag
      name: my-application:latest
  
  # Source configuration
  source:
    type: Git
    git:
      uri: https://github.axa.com/your-org/my-application.git
      ref: main
    # Optional: use specific directory
    contextDir: /
  
  # Build strategy - Docker or Source-to-Image (S2I)
  strategy:
    type: Docker
    dockerStrategy:
      # Use multi-stage Dockerfile
      dockerfilePath: Dockerfile
      # Build arguments
      buildArgs:
        - name: APP_VERSION
          value: "1.0.0"
      # Force pull base image
      forcePull: true
  
  # Resource limits for builds
  resources:
    limits:
      memory: "2Gi"
      cpu: "1000m"
    requests:
      memory: "1Gi"
      cpu: "500m"
  
  # Triggers - disabled for Jenkins-triggered builds
  triggers: []`}
                            />

                            <CodeSnippet
                                title="ImageStream Definition (imagestream.yaml)"
                                language="yaml"
                                code={`apiVersion: image.openshift.io/v1
kind: ImageStream
metadata:
  name: my-application
  labels:
    app: my-application
spec:
  lookupPolicy:
    # Allow Kubernetes resources to use short names
    local: true
  tags:
    - name: latest
      annotations:
        description: Latest development build
        tags: dev
    - name: staging
      annotations:
        description: Staging release candidate
        tags: staging
    - name: production
      annotations:
        description: Production release
        tags: production`}
                            />

                            <CodeSnippet
                                title="Triggering Build from Jenkins"
                                language="groovy"
                                code={`// Jenkinsfile - Build Stage
stage('Build Image') {
    steps {
        script {
            openshift.withCluster() {
                openshift.withProject('my-application-dev') {
                    // Start a new build
                    def build = openshift.startBuild('my-application', 
                        '--follow',
                        '--wait'
                    )
                    
                    // Alternative: start build with source from workspace
                    // def build = openshift.startBuild('my-application',
                    //     '--from-dir=.',
                    //     '--follow',
                    //     '--wait'
                    // )
                    
                    echo "Build completed: \${build.object().status.phase}"
                }
            }
        }
    }
}

// With build arguments
stage('Build with Args') {
    steps {
        script {
            openshift.withCluster() {
                openshift.withProject('my-application-dev') {
                    def build = openshift.startBuild('my-application',
                        "--build-arg=APP_VERSION=\${env.BUILD_NUMBER}",
                        "--build-arg=GIT_COMMIT=\${env.GIT_COMMIT}",
                        '--follow',
                        '--wait'
                    )
                }
            }
        }
    }
}`}
                            />

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="p-5 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
                                    <p className="text-xs font-bold uppercase text-emerald-600 mb-2">✅ Build Best Practices</p>
                                    <ul className="text-sm text-muted-foreground space-y-1">
                                        <li>• Use multi-stage Dockerfiles for smaller images</li>
                                        <li>• Set resource limits on BuildConfigs</li>
                                        <li>• Tag images with version/commit info</li>
                                        <li>• Use .dockerignore to exclude files</li>
                                        <li>• Cache dependencies in separate layers</li>
                                    </ul>
                                </div>
                                <div className="p-5 rounded-xl bg-destructive/5 border border-destructive/20">
                                    <p className="text-xs font-bold uppercase text-destructive mb-2">❌ Common Mistakes</p>
                                    <ul className="text-sm text-muted-foreground space-y-1">
                                        <li>• Running as root in containers</li>
                                        <li>• Including secrets in images</li>
                                        <li>• Not setting CPU/memory limits</li>
                                        <li>• Using :latest tag in production</li>
                                        <li>• Large base images (use alpine/distroless)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    <Separator />

                    {/* Chapter 4: Deployments */}
                    <section id="deployments" className="scroll-mt-28 space-y-12">
                        <div className="space-y-4">
                            <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 4</Badge>
                            <h2 className="text-4xl font-extrabold tracking-tight">Deployments</h2>
                            <p className="text-lg text-muted-foreground">Configure Deployments that consume images from OpenShift Builds.</p>
                        </div>

                        <div className="space-y-8">
                            <CodeSnippet
                                title="Deployment Configuration (deployment.yaml)"
                                language="yaml"
                                code={`apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-application
  labels:
    app: my-application
    version: v1
spec:
  replicas: 2
  selector:
    matchLabels:
      app: my-application
  
  # Deployment strategy
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxSurge: 1
      maxUnavailable: 0
  
  template:
    metadata:
      labels:
        app: my-application
        version: v1
      annotations:
        # Force redeployment when ConfigMap changes
        checksum/config: "{{ include (print $.Template.BasePath '/configmap.yaml') . | sha256sum }}"
    spec:
      containers:
        - name: my-application
          # Reference ImageStream tag
          image: image-registry.openshift-image-registry.svc:5000/my-project/my-application:latest
          imagePullPolicy: Always
          
          ports:
            - containerPort: 8080
              protocol: TCP
          
          # Environment variables
          env:
            - name: SPRING_PROFILES_ACTIVE
              value: "production"
            - name: DATABASE_URL
              valueFrom:
                secretKeyRef:
                  name: my-application-secrets
                  key: database-url
          
          # Mount ConfigMaps and Secrets
          envFrom:
            - configMapRef:
                name: my-application-config
          
          # Resource limits (REQUIRED)
          resources:
            limits:
              memory: "512Mi"
              cpu: "500m"
            requests:
              memory: "256Mi"
              cpu: "100m"
          
          # Health checks
          livenessProbe:
            httpGet:
              path: /actuator/health/liveness
              port: 8080
            initialDelaySeconds: 30
            periodSeconds: 10
            timeoutSeconds: 5
            failureThreshold: 3
          
          readinessProbe:
            httpGet:
              path: /actuator/health/readiness
              port: 8080
            initialDelaySeconds: 10
            periodSeconds: 5
            timeoutSeconds: 3
            failureThreshold: 3
          
          # Security context
          securityContext:
            runAsNonRoot: true
            allowPrivilegeEscalation: false
            capabilities:
              drop:
                - ALL
      
      # Pod security
      securityContext:
        runAsNonRoot: true
        seccompProfile:
          type: RuntimeDefault`}
                            />

                            <CodeSnippet
                                title="Trigger Deployment from Jenkins"
                                language="groovy"
                                code={`// Jenkinsfile - Deploy Stage
stage('Deploy to Dev') {
    steps {
        script {
            openshift.withCluster() {
                openshift.withProject('my-application-dev') {
                    // Tag the new image for deployment
                    openshift.tag(
                        'my-application:latest',
                        'my-application:dev'
                    )
                    
                    // Apply deployment manifests
                    openshift.apply('-f', 'k8s/deployment.yaml')
                    openshift.apply('-f', 'k8s/service.yaml')
                    openshift.apply('-f', 'k8s/route.yaml')
                    
                    // Wait for deployment to complete
                    def deployment = openshift.selector('deployment', 'my-application')
                    deployment.rollout().status('--timeout=5m')
                    
                    echo "Deployment completed successfully!"
                }
            }
        }
    }
}

// Promote to Staging
stage('Promote to Staging') {
    when {
        branch 'main'
    }
    steps {
        script {
            openshift.withCluster() {
                // Tag image for staging
                openshift.withProject('my-application-dev') {
                    openshift.tag(
                        'my-application:dev',
                        'my-application-staging/my-application:staging'
                    )
                }
                
                // Deploy to staging
                openshift.withProject('my-application-staging') {
                    def deployment = openshift.selector('deployment', 'my-application')
                    deployment.rollout().latest()
                    deployment.rollout().status('--timeout=5m')
                }
            }
        }
    }
}`}
                            />
                        </div>
                    </section>

                    <Separator />

                    {/* Chapter 5: Configuration Management */}
                    <section id="configuration" className="scroll-mt-28 space-y-12">
                        <div className="space-y-4">
                            <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 5</Badge>
                            <h2 className="text-4xl font-extrabold tracking-tight">Configuration Management</h2>
                            <p className="text-lg text-muted-foreground">Manage application configuration using ConfigMaps and Secrets.</p>
                        </div>

                        <div className="space-y-8">
                            <div className="grid lg:grid-cols-2 gap-8">
                                <CodeSnippet
                                    title="ConfigMap (configmap.yaml)"
                                    language="yaml"
                                    code={`apiVersion: v1
kind: ConfigMap
metadata:
  name: my-application-config
  labels:
    app: my-application
data:
  # Simple key-value pairs
  LOG_LEVEL: "INFO"
  SERVER_PORT: "8080"
  FEATURE_FLAG_NEW_UI: "true"
  
  # Multi-line configuration files
  application.properties: |
    spring.application.name=my-application
    server.port=8080
    management.endpoints.web.exposure.include=health,info,metrics
    management.endpoint.health.probes.enabled=true
  
  # JSON configuration
  app-config.json: |
    {
      "apiEndpoint": "https://api.axa.com",
      "timeout": 30000,
      "retries": 3
    }`}
                                />

                                <CodeSnippet
                                    title="Secret (secret.yaml)"
                                    language="yaml"
                                    code={`apiVersion: v1
kind: Secret
metadata:
  name: my-application-secrets
  labels:
    app: my-application
type: Opaque
# Use stringData for plain text (auto encoded)
stringData:
  database-url: "postgresql://user:pass@db:5432/mydb"
  api-key: "your-api-key-here"

# Or use data with base64 encoded values
# data:
#   database-url: cG9zdGdyZXNxbDovL3VzZXI6cGFzc0BkYjo1NDMyL215ZGI=

---
# TLS Secret for routes
apiVersion: v1
kind: Secret
metadata:
  name: my-application-tls
type: kubernetes.io/tls
data:
  tls.crt: <base64-encoded-cert>
  tls.key: <base64-encoded-key>`}
                                />
                            </div>

                            <CodeSnippet
                                title="Using ConfigMaps and Secrets in Deployment"
                                language="yaml"
                                code={`# In deployment.yaml spec.template.spec.containers
containers:
  - name: my-application
    # Load individual values as env vars
    env:
      - name: DATABASE_URL
        valueFrom:
          secretKeyRef:
            name: my-application-secrets
            key: database-url
      - name: LOG_LEVEL
        valueFrom:
          configMapKeyRef:
            name: my-application-config
            key: LOG_LEVEL
    
    # Load all keys as env vars
    envFrom:
      - configMapRef:
          name: my-application-config
      - secretRef:
          name: my-application-secrets
    
    # Mount as files
    volumeMounts:
      - name: config-volume
        mountPath: /app/config
        readOnly: true
      - name: secret-volume
        mountPath: /app/secrets
        readOnly: true

volumes:
  - name: config-volume
    configMap:
      name: my-application-config
      items:
        - key: application.properties
          path: application.properties
  - name: secret-volume
    secret:
      secretName: my-application-secrets
      defaultMode: 0400  # Read-only for owner`}
                            />
                        </div>
                    </section>

                    <Separator />

                    {/* Chapter 6: Networking & Routes */}
                    <section id="networking" className="scroll-mt-28 space-y-12">
                        <div className="space-y-4">
                            <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 6</Badge>
                            <h2 className="text-4xl font-extrabold tracking-tight">Networking & Routes</h2>
                            <p className="text-lg text-muted-foreground">Expose your applications using Services and Routes.</p>
                        </div>

                        <div className="space-y-8">
                            <CodeSnippet
                                title="Service Definition (service.yaml)"
                                language="yaml"
                                code={`apiVersion: v1
kind: Service
metadata:
  name: my-application
  labels:
    app: my-application
spec:
  type: ClusterIP
  ports:
    - name: http
      port: 8080
      targetPort: 8080
      protocol: TCP
    - name: metrics
      port: 9090
      targetPort: 9090
      protocol: TCP
  selector:
    app: my-application`}
                            />

                            <CodeSnippet
                                title="Route Definition (route.yaml)"
                                language="yaml"
                                code={`apiVersion: route.openshift.io/v1
kind: Route
metadata:
  name: my-application
  labels:
    app: my-application
  annotations:
    # Rate limiting
    haproxy.router.openshift.io/rate-limit-connections: "true"
    haproxy.router.openshift.io/rate-limit-connections.rate-http: "100"
    # Timeouts
    haproxy.router.openshift.io/timeout: "60s"
    # IP Whitelisting (optional)
    # haproxy.router.openshift.io/ip_whitelist: "10.0.0.0/8 192.168.0.0/16"
spec:
  host: my-application.apps.openshift.axa.com
  port:
    targetPort: http
  to:
    kind: Service
    name: my-application
    weight: 100
  
  # TLS Configuration
  tls:
    termination: edge
    insecureEdgeTerminationPolicy: Redirect
    # For passthrough:
    # termination: passthrough
    
    # For re-encrypt (to backend with TLS):
    # termination: reencrypt
    # destinationCACertificate: |
    #   -----BEGIN CERTIFICATE-----
    #   ...
    #   -----END CERTIFICATE-----
  
  # Traffic weighting for canary deployments
  # alternateBackends:
  #   - kind: Service
  #     name: my-application-canary
  #     weight: 10`}
                            />

                            <div className="p-6 rounded-2xl bg-muted/30 border space-y-4">
                                <h4 className="font-bold">TLS Termination Options</h4>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-sm">
                                        <thead className="bg-muted text-xs font-bold uppercase text-muted-foreground">
                                            <tr>
                                                <th className="px-4 py-3 text-left">Type</th>
                                                <th className="px-4 py-3 text-left">Description</th>
                                                <th className="px-4 py-3 text-left">Use Case</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y">
                                            <tr><td className="px-4 py-2 font-medium">Edge</td><td className="px-4 py-2">TLS terminates at router</td><td className="px-4 py-2">Most common, backend uses HTTP</td></tr>
                                            <tr><td className="px-4 py-2 font-medium">Passthrough</td><td className="px-4 py-2">TLS passes through to pod</td><td className="px-4 py-2">End-to-end encryption, app handles TLS</td></tr>
                                            <tr><td className="px-4 py-2 font-medium">Re-encrypt</td><td className="px-4 py-2">Router re-encrypts to pod</td><td className="px-4 py-2">Full encryption with certificate validation</td></tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </section>

                    <Separator />

                    {/* Chapter 7: Monitoring & Logging */}
                    <section id="monitoring" className="scroll-mt-28 space-y-12">
                        <div className="space-y-4">
                            <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 7</Badge>
                            <h2 className="text-4xl font-extrabold tracking-tight">Monitoring & Logging</h2>
                            <p className="text-lg text-muted-foreground">Observe your applications using OpenShift's built-in monitoring stack.</p>
                        </div>

                        <div className="space-y-8">
                            <div className="grid md:grid-cols-2 gap-6">
                                <Card className="glass shadow-sm">
                                    <CardHeader>
                                        <CardTitle className="text-lg flex items-center gap-2">
                                            <Activity className="h-5 w-5 text-emerald-500" /> Metrics & Prometheus
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <p className="text-sm text-muted-foreground">OpenShift provides built-in Prometheus for metrics collection.</p>
                                        <ul className="text-sm text-muted-foreground space-y-1">
                                            <li>• Expose /metrics endpoint in your app</li>
                                            <li>• Use ServiceMonitor for automatic discovery</li>
                                            <li>• View in OpenShift Console → Monitoring</li>
                                            <li>• Create custom Grafana dashboards</li>
                                        </ul>
                                    </CardContent>
                                </Card>

                                <Card className="glass shadow-sm">
                                    <CardHeader>
                                        <CardTitle className="text-lg flex items-center gap-2">
                                            <Eye className="h-5 w-5 text-blue-500" /> Logging
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <p className="text-sm text-muted-foreground">Centralized logging with EFK (Elasticsearch, Fluentd, Kibana).</p>
                                        <ul className="text-sm text-muted-foreground space-y-1">
                                            <li>• Log to stdout/stderr (12-factor app)</li>
                                            <li>• Use structured JSON logging</li>
                                            <li>• Access logs in Kibana dashboard</li>
                                            <li>• Set appropriate log levels per env</li>
                                        </ul>
                                    </CardContent>
                                </Card>
                            </div>

                            <CodeSnippet
                                title="ServiceMonitor for Prometheus (servicemonitor.yaml)"
                                language="yaml"
                                code={`apiVersion: monitoring.coreos.com/v1
kind: ServiceMonitor
metadata:
  name: my-application
  labels:
    app: my-application
spec:
  endpoints:
    - interval: 30s
      path: /actuator/prometheus
      port: http
      scheme: http
  namespaceSelector:
    matchNames:
      - my-application-dev
  selector:
    matchLabels:
      app: my-application`}
                            />

                            <CodeSnippet
                                title="View Logs with oc CLI"
                                language="bash"
                                code={`# View pod logs
oc logs <pod-name>

# Follow logs in real-time
oc logs -f <pod-name>

# Logs from previous container (after crash)
oc logs <pod-name> --previous

# Logs from specific container in multi-container pod
oc logs <pod-name> -c <container-name>

# Logs from all pods with label
oc logs -l app=my-application --all-containers

# Logs with timestamps
oc logs <pod-name> --timestamps

# Last N lines
oc logs <pod-name> --tail=100`}
                            />
                        </div>
                    </section>

                    <Separator />

                    {/* Chapter 8: Best Practices */}
                    <section id="best-practices" className="scroll-mt-28 space-y-12">
                        <div className="space-y-4">
                            <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 8</Badge>
                            <h2 className="text-4xl font-extrabold tracking-tight">Best Practices</h2>
                            <p className="text-lg text-muted-foreground">Follow these guidelines for production-ready OpenShift deployments.</p>
                        </div>

                        <div className="grid gap-6">
                            {[
                                {
                                    title: "Resource Management",
                                    icon: Server,
                                    color: "text-blue-500",
                                    items: [
                                        "Always set CPU and Memory requests/limits",
                                        "Use Horizontal Pod Autoscaler (HPA) for auto-scaling",
                                        "Set Pod Disruption Budgets (PDB) for high availability",
                                        "Use resource quotas at namespace level"
                                    ]
                                },
                                {
                                    title: "Security",
                                    icon: Shield,
                                    color: "text-emerald-500",
                                    items: [
                                        "Never run containers as root",
                                        "Use SecurityContext with runAsNonRoot: true",
                                        "Store secrets in OpenShift Secrets, not in images",
                                        "Enable network policies to restrict pod communication",
                                        "Scan images for vulnerabilities before deployment"
                                    ]
                                },
                                {
                                    title: "Health & Resilience",
                                    icon: Activity,
                                    color: "text-amber-500",
                                    items: [
                                        "Implement liveness and readiness probes",
                                        "Use rolling update strategy with maxUnavailable: 0",
                                        "Configure appropriate initialDelaySeconds for probes",
                                        "Handle SIGTERM gracefully for zero-downtime deploys"
                                    ]
                                },
                                {
                                    title: "Configuration",
                                    icon: Settings,
                                    color: "text-purple-500",
                                    items: [
                                        "Externalize all configuration using ConfigMaps",
                                        "Use different ConfigMaps per environment (dev/staging/prod)",
                                        "Never hardcode environment-specific values in code",
                                        "Use Kustomize or Helm for managing environments"
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
                            title="Production-Ready Deployment Template"
                            language="yaml"
                            code={`apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-application
spec:
  replicas: 3
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxSurge: 1
      maxUnavailable: 0
  template:
    spec:
      # Anti-affinity for spreading across nodes
      affinity:
        podAntiAffinity:
          preferredDuringSchedulingIgnoredDuringExecution:
            - weight: 100
              podAffinityTerm:
                labelSelector:
                  matchLabels:
                    app: my-application
                topologyKey: kubernetes.io/hostname
      
      containers:
        - name: my-application
          resources:
            limits:
              memory: "512Mi"
              cpu: "500m"
            requests:
              memory: "256Mi"
              cpu: "100m"
          
          livenessProbe:
            httpGet:
              path: /health/liveness
              port: 8080
            initialDelaySeconds: 30
            periodSeconds: 10
          
          readinessProbe:
            httpGet:
              path: /health/readiness
              port: 8080
            initialDelaySeconds: 5
            periodSeconds: 5
          
          securityContext:
            runAsNonRoot: true
            allowPrivilegeEscalation: false
            readOnlyRootFilesystem: true
            capabilities:
              drop:
                - ALL
      
      securityContext:
        runAsNonRoot: true
        seccompProfile:
          type: RuntimeDefault
      
      # Graceful shutdown
      terminationGracePeriodSeconds: 30

---
apiVersion: policy/v1
kind: PodDisruptionBudget
metadata:
  name: my-application-pdb
spec:
  minAvailable: 2
  selector:
    matchLabels:
      app: my-application

---
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: my-application-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: my-application
  minReplicas: 2
  maxReplicas: 10
  metrics:
    - type: Resource
      resource:
        name: cpu
        target:
          type: Utilization
          averageUtilization: 70`}
                        />
                    </section>

                    {/* Page Navigation */}
                    <PageNavigation
                        previous={{ title: "GitHub Workflow", href: "/github-axa-usage" }}
                        next={{ title: "Jenkins CI/CD", href: "/jenkins-guideline" }}
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

export default OpenShiftGuidelinePage;
