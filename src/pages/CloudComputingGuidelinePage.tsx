import React, { useState, useEffect } from 'react';
import PageHero from '@/components/PageHero';
import Layout from '@/components/Layout';
import OnThisPage from '@/components/OnThisPage';
import CodeSnippet from '@/components/CodeSnippet';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
    Cloud,
    Server,
    Layers,
    Code,
    Monitor,
    Shield,
    Settings,
    CheckCircle2,
    AlertTriangle,
    HelpCircle,
    Building2,
    Users,
    Lock,
    Database,
    Globe,
    BookOpen,
    Zap,
    TrendingUp,
    ArrowRight,
    LayoutGrid,
    Terminal
} from 'lucide-react';

const chapters = [
    { id: "overview", title: "1. Cloud Computing Overview", icon: Cloud },
    { id: "service-models", title: "2. Service Models Explained", icon: Layers },
    { id: "comparison", title: "3. Comparison Matrix", icon: LayoutGrid },
    { id: "shared-responsibility", title: "4. Shared Responsibility Model", icon: Shield },
    { id: "axa-mapping", title: "5. Real-World Mapping", icon: Building2 },
    { id: "decision-framework", title: "6. Decision Framework", icon: HelpCircle },
    { id: "case-studies", title: "7. Case Studies", icon: BookOpen },
];

const CloudComputingGuidelinePage: React.FC = () => {
    const breadcrumbs = [
        { label: 'Home', href: '/' },
        { label: 'Cloud & FinOps' },
        { label: 'Cloud Computing 101' }
    ];

    return (
        <Layout>
            <PageHero
                title="Cloud Computing Fundamentals"
                subtitle="Understanding SaaS, PaaS, and IaaS: The building blocks of modern cloud infrastructure."
                breadcrumbs={breadcrumbs}
                readingTime={25}
            />

            <div className="py-8 flex flex-col lg:flex-row gap-12">
                <main className="flex-1 min-w-0 space-y-16 pb-16">

                    {/* Chapter 1: Overview */}
                    <section id="overview" className="scroll-mt-28 space-y-8">
                        <div className="space-y-4">
                            <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 1</Badge>
                            <h2 className="text-4xl font-extrabold tracking-tight">Cloud Computing Overview</h2>
                            <p className="text-xl text-muted-foreground leading-relaxed">
                                Cloud computing delivers computing services—servers, storage, databases, networking, software—over the internet ("the cloud") to offer faster innovation, flexible resources, and economies of scale.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {[
                                { text: "On-Demand Self-Service", icon: Zap, desc: "Provision resources automatically without human intervention" },
                                { text: "Broad Network Access", icon: Globe, desc: "Access from any device over the network" },
                                { text: "Resource Pooling", icon: Database, desc: "Serve multiple customers from shared resources" },
                                { text: "Rapid Elasticity", icon: TrendingUp, desc: "Scale up or down quickly based on demand" },
                                { text: "Measured Service", icon: Monitor, desc: "Pay only for what you use" },
                                { text: "High Availability", icon: Shield, desc: "Built-in redundancy and disaster recovery" },
                            ].map((item, i) => (
                                <div key={i} className="glass flex flex-col gap-3 p-6 rounded-2xl border border-border/50 hover:border-primary/30 transition-colors">
                                    <item.icon className="h-8 w-8 text-primary" />
                                    <span className="font-bold text-sm tracking-tight">{item.text}</span>
                                    <span className="text-xs text-muted-foreground">{item.desc}</span>
                                </div>
                            ))}
                        </div>

                        <div className="p-6 rounded-2xl bg-blue-500/5 border border-blue-500/20 space-y-4">
                            <h4 className="font-bold text-lg flex items-center gap-2">
                                <Cloud className="h-5 w-5 text-blue-500" />
                                Deployment Models
                            </h4>
                            <div className="grid sm:grid-cols-3 gap-4">
                                {[
                                    { name: "Public Cloud", desc: "Resources owned and operated by third-party providers (AWS, Azure, GCP)", color: "blue" },
                                    { name: "Private Cloud", desc: "Exclusive infrastructure for a single organization, on-premises or hosted", color: "purple" },
                                    { name: "Hybrid Cloud", desc: "Combination of public and private clouds with orchestration between them", color: "emerald" },
                                ].map((model, i) => (
                                    <div key={i} className="p-4 rounded-xl bg-background/50 border space-y-2">
                                        <h5 className={`font-bold text-sm text-${model.color}-600`}>{model.name}</h5>
                                        <p className="text-xs text-muted-foreground">{model.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <Separator />

                    {/* Chapter 2: Service Models */}
                    <section id="service-models" className="scroll-mt-28 space-y-12">
                        <div className="space-y-4 text-center max-w-3xl mx-auto">
                            <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 2</Badge>
                            <h2 className="text-4xl font-extrabold tracking-tight">Service Models Explained</h2>
                            <p className="text-lg text-muted-foreground">
                                The three fundamental cloud service models define what the provider manages versus what you control.
                            </p>
                        </div>

                        {/* IaaS */}
                        <div className="p-8 rounded-3xl bg-orange-500/5 border border-orange-500/20 space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-xl bg-orange-500/10">
                                    <Server className="h-8 w-8 text-orange-500" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-orange-600">Infrastructure as a Service (IaaS)</h3>
                                    <p className="text-muted-foreground">Rent the raw building blocks of IT infrastructure</p>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-4">
                                    <h4 className="font-bold flex items-center gap-2">
                                        <CheckCircle2 className="h-4 w-4 text-orange-500" />
                                        What You Get
                                    </h4>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        <li>• Virtual machines (compute instances)</li>
                                        <li>• Storage (block, object, file)</li>
                                        <li>• Networking (VPC, load balancers, firewalls)</li>
                                        <li>• Physical data center infrastructure</li>
                                    </ul>
                                </div>
                                <div className="space-y-4">
                                    <h4 className="font-bold flex items-center gap-2">
                                        <Settings className="h-4 w-4 text-orange-500" />
                                        Your Responsibilities
                                    </h4>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        <li>• Operating system installation & patching</li>
                                        <li>• Middleware and runtime configuration</li>
                                        <li>• Application deployment and management</li>
                                        <li>• Data security and backup</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                <Badge variant="secondary">AWS EC2</Badge>
                                <Badge variant="secondary">Amazon S3</Badge>
                                <Badge variant="secondary">Amazon VPC</Badge>
                                <Badge variant="secondary">Azure VMs</Badge>
                                <Badge variant="secondary">Google Compute Engine</Badge>
                            </div>
                        </div>

                        {/* PaaS */}
                        <div className="p-8 rounded-3xl bg-blue-500/5 border border-blue-500/20 space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-xl bg-blue-500/10">
                                    <Layers className="h-8 w-8 text-blue-500" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-blue-600">Platform as a Service (PaaS)</h3>
                                    <p className="text-muted-foreground">Focus on your code, not the infrastructure</p>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-4">
                                    <h4 className="font-bold flex items-center gap-2">
                                        <CheckCircle2 className="h-4 w-4 text-blue-500" />
                                        What You Get
                                    </h4>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        <li>• Managed OS and runtime environment</li>
                                        <li>• Auto-scaling and load balancing</li>
                                        <li>• Built-in CI/CD capabilities</li>
                                        <li>• Managed databases and middleware</li>
                                    </ul>
                                </div>
                                <div className="space-y-4">
                                    <h4 className="font-bold flex items-center gap-2">
                                        <Settings className="h-4 w-4 text-blue-500" />
                                        Your Responsibilities
                                    </h4>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        <li>• Application code development</li>
                                        <li>• Data management and security</li>
                                        <li>• Application configuration</li>
                                        <li>• User access management</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                <Badge variant="secondary" className="bg-red-500/10 text-red-600">Red Hat OpenShift</Badge>
                                <Badge variant="secondary">AWS Elastic Beanstalk</Badge>
                                <Badge variant="secondary">Azure App Service</Badge>
                                <Badge variant="secondary">Google App Engine</Badge>
                                <Badge variant="secondary">Heroku</Badge>
                            </div>
                        </div>

                        {/* SaaS */}
                        <div className="p-8 rounded-3xl bg-emerald-500/5 border border-emerald-500/20 space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-xl bg-emerald-500/10">
                                    <Monitor className="h-8 w-8 text-emerald-500" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-emerald-600">Software as a Service (SaaS)</h3>
                                    <p className="text-muted-foreground">Ready-to-use applications delivered over the internet</p>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-4">
                                    <h4 className="font-bold flex items-center gap-2">
                                        <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                                        What You Get
                                    </h4>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        <li>• Fully functional applications</li>
                                        <li>• Automatic updates and maintenance</li>
                                        <li>• Built-in security and compliance</li>
                                        <li>• Accessible from any device</li>
                                    </ul>
                                </div>
                                <div className="space-y-4">
                                    <h4 className="font-bold flex items-center gap-2">
                                        <Settings className="h-4 w-4 text-emerald-500" />
                                        Your Responsibilities
                                    </h4>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        <li>• User account management</li>
                                        <li>• Data input and content</li>
                                        <li>• Application configuration (limited)</li>
                                        <li>• Integration with other systems</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                <Badge variant="secondary">Microsoft 365</Badge>
                                <Badge variant="secondary">Salesforce</Badge>
                                <Badge variant="secondary">Google Workspace</Badge>
                                <Badge variant="secondary">Slack</Badge>
                                <Badge variant="secondary">ServiceNow</Badge>
                            </div>
                        </div>
                    </section>

                    <Separator />

                    {/* Chapter 3: Comparison Matrix */}
                    <section id="comparison" className="scroll-mt-28 space-y-8">
                        <div className="space-y-4">
                            <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 3</Badge>
                            <h2 className="text-4xl font-extrabold tracking-tight">Comparison Matrix</h2>
                            <p className="text-lg text-muted-foreground">Side-by-side comparison of cloud service models.</p>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-sm border rounded-xl overflow-hidden">
                                <thead className="bg-muted font-bold uppercase text-xs">
                                    <tr>
                                        <th className="px-4 py-4 text-left">Aspect</th>
                                        <th className="px-4 py-4 text-center">
                                            <span className="text-orange-600">IaaS</span>
                                        </th>
                                        <th className="px-4 py-4 text-center">
                                            <span className="text-blue-600">PaaS</span>
                                        </th>
                                        <th className="px-4 py-4 text-center">
                                            <span className="text-emerald-600">SaaS</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y">
                                    <tr>
                                        <td className="px-4 py-3 font-medium">Control Level</td>
                                        <td className="px-4 py-3 text-center"><Badge className="bg-orange-500">Highest</Badge></td>
                                        <td className="px-4 py-3 text-center"><Badge className="bg-blue-500">Medium</Badge></td>
                                        <td className="px-4 py-3 text-center"><Badge className="bg-emerald-500">Lowest</Badge></td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-3 font-medium">Flexibility</td>
                                        <td className="px-4 py-3 text-center"><Badge className="bg-orange-500">Highest</Badge></td>
                                        <td className="px-4 py-3 text-center"><Badge className="bg-blue-500">Medium</Badge></td>
                                        <td className="px-4 py-3 text-center"><Badge className="bg-emerald-500">Limited</Badge></td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-3 font-medium">Management Effort</td>
                                        <td className="px-4 py-3 text-center">High (You manage OS+)</td>
                                        <td className="px-4 py-3 text-center">Medium (App only)</td>
                                        <td className="px-4 py-3 text-center">Minimal (User/Data)</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-3 font-medium">Time to Deploy</td>
                                        <td className="px-4 py-3 text-center">Hours to Days</td>
                                        <td className="px-4 py-3 text-center">Minutes to Hours</td>
                                        <td className="px-4 py-3 text-center">Instant</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-3 font-medium">Cost Model</td>
                                        <td className="px-4 py-3 text-center">Per resource usage</td>
                                        <td className="px-4 py-3 text-center">Per app/container</td>
                                        <td className="px-4 py-3 text-center">Per user/subscription</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-3 font-medium">Technical Skills Required</td>
                                        <td className="px-4 py-3 text-center">High</td>
                                        <td className="px-4 py-3 text-center">Medium</td>
                                        <td className="px-4 py-3 text-center">Low</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-3 font-medium">Best For</td>
                                        <td className="px-4 py-3 text-center text-xs">Custom infrastructure, legacy apps</td>
                                        <td className="px-4 py-3 text-center text-xs">App development, microservices</td>
                                        <td className="px-4 py-3 text-center text-xs">End-user productivity tools</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Visual Stack Diagram */}
                        <div className="p-6 rounded-2xl bg-muted/30 border">
                            <h4 className="font-bold text-sm mb-4">Cloud Stack Responsibility</h4>
                            <div className="grid grid-cols-4 gap-4 text-xs font-mono">
                                <div className="font-bold text-center">Layer</div>
                                <div className="font-bold text-center text-orange-600">IaaS</div>
                                <div className="font-bold text-center text-blue-600">PaaS</div>
                                <div className="font-bold text-center text-emerald-600">SaaS</div>

                                {[
                                    { layer: "Applications", iaas: "You", paas: "You", saas: "Provider" },
                                    { layer: "Data", iaas: "You", paas: "You", saas: "Shared" },
                                    { layer: "Runtime", iaas: "You", paas: "Provider", saas: "Provider" },
                                    { layer: "Middleware", iaas: "You", paas: "Provider", saas: "Provider" },
                                    { layer: "O/S", iaas: "You", paas: "Provider", saas: "Provider" },
                                    { layer: "Virtualization", iaas: "Provider", paas: "Provider", saas: "Provider" },
                                    { layer: "Servers", iaas: "Provider", paas: "Provider", saas: "Provider" },
                                    { layer: "Storage", iaas: "Provider", paas: "Provider", saas: "Provider" },
                                    { layer: "Networking", iaas: "Provider", paas: "Provider", saas: "Provider" },
                                ].map((row, i) => (
                                    <React.Fragment key={i}>
                                        <div className="py-2 font-medium text-muted-foreground">{row.layer}</div>
                                        <div className={`py-2 text-center rounded ${row.iaas === 'You' ? 'bg-orange-500/20 text-orange-600' : 'bg-green-500/20 text-green-600'}`}>
                                            {row.iaas}
                                        </div>
                                        <div className={`py-2 text-center rounded ${row.paas === 'You' ? 'bg-blue-500/20 text-blue-600' : 'bg-green-500/20 text-green-600'}`}>
                                            {row.paas}
                                        </div>
                                        <div className={`py-2 text-center rounded ${row.saas === 'You' ? 'bg-emerald-500/20 text-emerald-600' : row.saas === 'Shared' ? 'bg-yellow-500/20 text-yellow-600' : 'bg-green-500/20 text-green-600'}`}>
                                            {row.saas}
                                        </div>
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    </section>

                    <Separator />

                    {/* Chapter 4: Shared Responsibility Model */}
                    <section id="shared-responsibility" className="scroll-mt-28 space-y-8">
                        <div className="space-y-4">
                            <Badge variant="outline" className="text-red-500 border-red-500/20 bg-red-500/5 px-3 py-1">Chapter 4</Badge>
                            <h2 className="text-4xl font-extrabold tracking-tight">Shared Responsibility Model</h2>
                            <p className="text-lg text-muted-foreground">Security is a shared responsibility between you and the cloud provider.</p>
                        </div>

                        <div className="p-6 rounded-2xl bg-red-500/5 border border-red-500/20 flex gap-4">
                            <AlertTriangle className="h-6 w-6 text-red-600 shrink-0" />
                            <div className="space-y-2">
                                <h4 className="font-bold text-red-600">Critical Concept</h4>
                                <p className="text-sm text-muted-foreground">
                                    The provider secures the <strong>"security OF the cloud"</strong> (infrastructure), while you secure <strong>"security IN the cloud"</strong> (your data, applications, and access).
                                </p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <Card className="border-green-500/20 bg-green-500/5">
                                <CardHeader>
                                    <CardTitle className="text-green-700 flex items-center gap-2">
                                        <Shield className="h-5 w-5" />
                                        Cloud Provider Responsibility
                                    </CardTitle>
                                    <CardDescription>Security OF the Cloud</CardDescription>
                                </CardHeader>
                                <CardContent className="text-sm space-y-2 text-muted-foreground">
                                    <li>• Physical data center security</li>
                                    <li>• Network infrastructure</li>
                                    <li>• Hypervisor and host OS</li>
                                    <li>• Global infrastructure redundancy</li>
                                    <li>• Compliance certifications (SOC2, ISO27001)</li>
                                </CardContent>
                            </Card>

                            <Card className="border-blue-500/20 bg-blue-500/5">
                                <CardHeader>
                                    <CardTitle className="text-blue-700 flex items-center gap-2">
                                        <Lock className="h-5 w-5" />
                                        Customer Responsibility
                                    </CardTitle>
                                    <CardDescription>Security IN the Cloud</CardDescription>
                                </CardHeader>
                                <CardContent className="text-sm space-y-2 text-muted-foreground">
                                    <li>• Identity and access management (IAM)</li>
                                    <li>• Data encryption (at rest & in transit)</li>
                                    <li>• Network configuration (security groups)</li>
                                    <li>• Operating system patching (for IaaS)</li>
                                    <li>• Application security</li>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-sm border rounded-xl overflow-hidden">
                                <thead className="bg-muted font-bold uppercase text-xs">
                                    <tr>
                                        <th className="px-4 py-3 text-left">Security Domain</th>
                                        <th className="px-4 py-3 text-center">IaaS (EC2)</th>
                                        <th className="px-4 py-3 text-center">PaaS (OpenShift)</th>
                                        <th className="px-4 py-3 text-center">SaaS (M365)</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y text-xs">
                                    <tr>
                                        <td className="px-4 py-2 font-medium">Identity & Access</td>
                                        <td className="px-4 py-2 text-center text-blue-600">Customer</td>
                                        <td className="px-4 py-2 text-center text-blue-600">Customer</td>
                                        <td className="px-4 py-2 text-center text-blue-600">Customer</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-2 font-medium">Data Encryption</td>
                                        <td className="px-4 py-2 text-center text-blue-600">Customer</td>
                                        <td className="px-4 py-2 text-center text-blue-600">Customer</td>
                                        <td className="px-4 py-2 text-center text-yellow-600">Shared</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-2 font-medium">Application Security</td>
                                        <td className="px-4 py-2 text-center text-blue-600">Customer</td>
                                        <td className="px-4 py-2 text-center text-blue-600">Customer</td>
                                        <td className="px-4 py-2 text-center text-green-600">Provider</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-2 font-medium">OS Patching</td>
                                        <td className="px-4 py-2 text-center text-blue-600">Customer</td>
                                        <td className="px-4 py-2 text-center text-green-600">Provider</td>
                                        <td className="px-4 py-2 text-center text-green-600">Provider</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-2 font-medium">Network Config</td>
                                        <td className="px-4 py-2 text-center text-blue-600">Customer</td>
                                        <td className="px-4 py-2 text-center text-yellow-600">Shared</td>
                                        <td className="px-4 py-2 text-center text-green-600">Provider</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-2 font-medium">Physical Security</td>
                                        <td className="px-4 py-2 text-center text-green-600">Provider</td>
                                        <td className="px-4 py-2 text-center text-green-600">Provider</td>
                                        <td className="px-4 py-2 text-center text-green-600">Provider</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <Separator />

                    {/* Chapter 5: Real-World Mapping */}
                    <section id="axa-mapping" className="scroll-mt-28 space-y-8">
                        <div className="space-y-4">
                            <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 5</Badge>
                            <h2 className="text-4xl font-extrabold tracking-tight">Real-World Mapping</h2>
                            <p className="text-lg text-muted-foreground">How enterprise organizations use each service model in practice.</p>
                        </div>

                        <div className="grid gap-6">
                            {/* IaaS Example */}
                            <Card className="border-l-4 border-l-orange-500">
                                <CardHeader>
                                    <div className="flex items-center gap-3">
                                        <Server className="h-6 w-6 text-orange-500" />
                                        <div>
                                            <CardTitle>IaaS: Amazon Web Services (EC2, S3, VPC)</CardTitle>
                                            <CardDescription>Custom infrastructure for legacy and specialized workloads</CardDescription>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <p className="text-sm text-muted-foreground">
                                        AWS provides the foundational infrastructure layer. You provision virtual machines, configure networking, and manage storage. Use Terraform to automate this infrastructure as code.
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        <Badge variant="outline">EC2 Instances</Badge>
                                        <Badge variant="outline">S3 Storage</Badge>
                                        <Badge variant="outline">VPC Networking</Badge>
                                        <Badge variant="outline">RDS Databases</Badge>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* PaaS Example */}
                            <Card className="border-l-4 border-l-blue-500">
                                <CardHeader>
                                    <div className="flex items-center gap-3">
                                        <Layers className="h-6 w-6 text-blue-500" />
                                        <div>
                                            <CardTitle>PaaS: Red Hat OpenShift</CardTitle>
                                            <CardDescription>Container platform for modern application development</CardDescription>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <p className="text-sm text-muted-foreground">
                                        OpenShift abstracts infrastructure management, letting developers focus on containerized applications. It runs on top of IaaS (like AWS) and provides built-in CI/CD, auto-scaling, and service mesh.
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        <Badge variant="outline">Container Orchestration</Badge>
                                        <Badge variant="outline">Built-in CI/CD</Badge>
                                        <Badge variant="outline">Auto-scaling</Badge>
                                        <Badge variant="outline">Service Mesh</Badge>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* SaaS Example */}
                            <Card className="border-l-4 border-l-emerald-500">
                                <CardHeader>
                                    <div className="flex items-center gap-3">
                                        <Monitor className="h-6 w-6 text-emerald-500" />
                                        <div>
                                            <CardTitle>SaaS: Microsoft 365 & Salesforce</CardTitle>
                                            <CardDescription>Ready-to-use productivity and CRM applications</CardDescription>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <p className="text-sm text-muted-foreground">
                                        End-user applications delivered via browser. No infrastructure management—just configure users and policies. Focus on data governance and integration with other systems.
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        <Badge variant="outline">Email & Calendar</Badge>
                                        <Badge variant="outline">Document Collaboration</Badge>
                                        <Badge variant="outline">CRM</Badge>
                                        <Badge variant="outline">Analytics</Badge>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Enterprise Cloud Stack - Modern Layered Design */}
                        <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 border space-y-4">
                            <h4 className="font-bold text-sm mb-2">Enterprise Cloud Stack</h4>

                            {/* SaaS Layer */}
                            <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 border-2 border-emerald-200 dark:border-emerald-800">
                                <div className="text-xs font-bold text-emerald-700 dark:text-emerald-400 mb-3 flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                                    SaaS Layer
                                </div>
                                <div className="flex flex-wrap gap-3">
                                    <div className="px-4 py-2 rounded-lg bg-white dark:bg-slate-800 border shadow-sm text-xs font-medium">
                                        Microsoft 365
                                    </div>
                                    <div className="px-4 py-2 rounded-lg bg-white dark:bg-slate-800 border shadow-sm text-xs font-medium">
                                        Salesforce CRM
                                    </div>
                                    <div className="px-4 py-2 rounded-lg bg-white dark:bg-slate-800 border shadow-sm text-xs font-medium">
                                        ServiceNow ITSM
                                    </div>
                                </div>
                            </div>

                            {/* PaaS Layer */}
                            <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-200 dark:border-blue-800">
                                <div className="text-xs font-bold text-blue-700 dark:text-blue-400 mb-3 flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                    PaaS Layer
                                </div>
                                <div className="p-3 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
                                    <div className="text-xs font-semibold text-red-700 dark:text-red-400 mb-2">Red Hat OpenShift</div>
                                    <div className="flex flex-wrap gap-2">
                                        <div className="px-3 py-1.5 rounded bg-white dark:bg-slate-800 border text-xs">App 1</div>
                                        <div className="px-3 py-1.5 rounded bg-white dark:bg-slate-800 border text-xs">App 2</div>
                                        <div className="px-3 py-1.5 rounded bg-white dark:bg-slate-800 border text-xs">App 3</div>
                                        <div className="px-3 py-1.5 rounded bg-slate-100 dark:bg-slate-700 border text-xs text-muted-foreground">...</div>
                                    </div>
                                </div>
                            </div>

                            {/* IaaS Layer */}
                            <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-900/20 border-2 border-amber-200 dark:border-amber-800">
                                <div className="text-xs font-bold text-amber-700 dark:text-amber-400 mb-3 flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                                    IaaS Layer (AWS)
                                </div>
                                <div className="flex flex-wrap gap-3 mb-3">
                                    <div className="px-4 py-2 rounded-lg bg-white dark:bg-slate-800 border shadow-sm text-center">
                                        <div className="text-xs font-bold">EC2</div>
                                        <div className="text-[10px] text-muted-foreground">Compute</div>
                                    </div>
                                    <div className="px-4 py-2 rounded-lg bg-white dark:bg-slate-800 border shadow-sm text-center">
                                        <div className="text-xs font-bold">S3</div>
                                        <div className="text-[10px] text-muted-foreground">Storage</div>
                                    </div>
                                    <div className="px-4 py-2 rounded-lg bg-white dark:bg-slate-800 border shadow-sm text-center">
                                        <div className="text-xs font-bold">VPC</div>
                                        <div className="text-[10px] text-muted-foreground">Networking</div>
                                    </div>
                                </div>
                                <div className="text-[10px] text-amber-600 dark:text-amber-400 font-medium flex items-center gap-1">
                                    <Terminal className="h-3 w-3" /> Managed by Terraform IaC
                                </div>
                            </div>
                        </div>
                    </section>

                    <Separator />

                    {/* Chapter 6: Decision Framework */}
                    <section id="decision-framework" className="scroll-mt-28 space-y-8">
                        <div className="space-y-4">
                            <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 6</Badge>
                            <h2 className="text-4xl font-extrabold tracking-tight">Decision Framework</h2>
                            <p className="text-lg text-muted-foreground">How to choose the right service model for your workload.</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            <Card className="border-orange-500/30 hover:border-orange-500/50 transition-colors">
                                <CardHeader>
                                    <CardTitle className="text-orange-600 flex items-center gap-2">
                                        <Server className="h-5 w-5" />
                                        Choose IaaS When...
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-2 text-sm text-muted-foreground">
                                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-orange-500 shrink-0 mt-0.5" /> You need full control over infrastructure</li>
                                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-orange-500 shrink-0 mt-0.5" /> Running legacy or custom applications</li>
                                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-orange-500 shrink-0 mt-0.5" /> Specific compliance requirements</li>
                                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-orange-500 shrink-0 mt-0.5" /> High-performance computing needs</li>
                                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-orange-500 shrink-0 mt-0.5" /> Disaster recovery infrastructure</li>
                                </CardContent>
                            </Card>

                            <Card className="border-blue-500/30 hover:border-blue-500/50 transition-colors">
                                <CardHeader>
                                    <CardTitle className="text-blue-600 flex items-center gap-2">
                                        <Layers className="h-5 w-5" />
                                        Choose PaaS When...
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-2 text-sm text-muted-foreground">
                                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-blue-500 shrink-0 mt-0.5" /> Building new cloud-native applications</li>
                                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-blue-500 shrink-0 mt-0.5" /> Microservices architecture</li>
                                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-blue-500 shrink-0 mt-0.5" /> Need rapid development cycles</li>
                                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-blue-500 shrink-0 mt-0.5" /> Container-based deployments</li>
                                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-blue-500 shrink-0 mt-0.5" /> Want managed scaling & ops</li>
                                </CardContent>
                            </Card>

                            <Card className="border-emerald-500/30 hover:border-emerald-500/50 transition-colors">
                                <CardHeader>
                                    <CardTitle className="text-emerald-600 flex items-center gap-2">
                                        <Monitor className="h-5 w-5" />
                                        Choose SaaS When...
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-2 text-sm text-muted-foreground">
                                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" /> Standard business functionality</li>
                                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" /> Minimal IT management desired</li>
                                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" /> Predictable subscription costs</li>
                                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" /> Industry-standard solutions exist</li>
                                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" /> Quick deployment needed</li>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Cloud Decision Tree Diagram */}
                        <div className="space-y-4">
                            <h4 className="font-bold">Cloud Decision Tree</h4>
                            <p className="text-sm text-muted-foreground">
                                General Application Workload placement flow for new and existing applications.
                            </p>

                            {/* Simplified Two-Column Flow */}
                            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border">
                                <div className="grid md:grid-cols-2 gap-8">

                                    {/* Left Column: New Applications */}
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="px-4 py-2 rounded-full bg-emerald-500 text-white text-sm font-bold">
                                                New Application
                                            </div>
                                            <ArrowRight className="h-4 w-4 text-muted-foreground" />
                                        </div>

                                        <div className="space-y-3 pl-4 border-l-2 border-emerald-300 dark:border-emerald-700">
                                            <div className="flex items-center gap-3">
                                                <div className="flex-1 p-3 rounded-lg bg-white dark:bg-slate-800 border shadow-sm">
                                                    <div className="text-xs font-bold text-emerald-600 mb-1">Step 1</div>
                                                    <div className="text-sm">Evaluate for SaaS</div>
                                                    <div className="text-xs text-muted-foreground">Off-the-shelf solution available?</div>
                                                </div>
                                                <ArrowRight className="h-4 w-4 text-emerald-500 shrink-0" />
                                                <Badge className="bg-emerald-500 shrink-0">SaaS</Badge>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <div className="flex-1 p-3 rounded-lg bg-white dark:bg-slate-800 border shadow-sm">
                                                    <div className="text-xs font-bold text-blue-600 mb-1">Step 2</div>
                                                    <div className="text-sm">Evaluate for PaaS</div>
                                                    <div className="text-xs text-muted-foreground">Containers or microservices?</div>
                                                </div>
                                                <ArrowRight className="h-4 w-4 text-blue-500 shrink-0" />
                                                <Badge className="bg-blue-500 shrink-0">PaaS</Badge>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <div className="flex-1 p-3 rounded-lg bg-white dark:bg-slate-800 border shadow-sm">
                                                    <div className="text-xs font-bold text-amber-600 mb-1">Step 3</div>
                                                    <div className="text-sm">Consider IaaS</div>
                                                    <div className="text-xs text-muted-foreground">Full infrastructure control needed</div>
                                                </div>
                                                <ArrowRight className="h-4 w-4 text-amber-500 shrink-0" />
                                                <Badge className="bg-amber-500 shrink-0">IaaS</Badge>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right Column: Existing Applications */}
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="px-4 py-2 rounded-full bg-blue-600 text-white text-sm font-bold">
                                                Existing Application
                                            </div>
                                            <ArrowRight className="h-4 w-4 text-muted-foreground" />
                                        </div>

                                        <div className="space-y-3 pl-4 border-l-2 border-blue-300 dark:border-blue-700">
                                            {/* Decision: Retire? */}
                                            <div className="p-3 rounded-lg bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-300 dark:border-yellow-700">
                                                <div className="text-xs font-bold text-yellow-700 dark:text-yellow-400 mb-1">Decision</div>
                                                <div className="text-sm">Decommission within 1 year?</div>
                                                <div className="flex gap-3 mt-2 text-xs">
                                                    <span className="text-emerald-600 font-medium">Yes → Retain On-Premise</span>
                                                    <span className="text-muted-foreground">|</span>
                                                    <span className="text-red-600 font-medium">No → Migrate ↓</span>
                                                </div>
                                            </div>

                                            {/* Migration Strategies */}
                                            <div className="p-3 rounded-lg bg-white dark:bg-slate-800 border shadow-sm">
                                                <div className="text-xs font-bold text-purple-600 mb-2">Migration Strategies</div>
                                                <div className="space-y-2">
                                                    <div className="flex items-center gap-2">
                                                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                                        <span className="text-xs font-medium">Refactor</span>
                                                        <ArrowRight className="h-3 w-3 text-muted-foreground" />
                                                        <Badge variant="outline" className="text-blue-600 border-blue-300 text-xs">PaaS</Badge>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                                                        <span className="text-xs font-medium">Replatform</span>
                                                        <ArrowRight className="h-3 w-3 text-muted-foreground" />
                                                        <Badge variant="outline" className="text-purple-600 border-purple-300 text-xs">PaaS</Badge>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                                                        <span className="text-xs font-medium">Rehost</span>
                                                        <ArrowRight className="h-3 w-3 text-muted-foreground" />
                                                        <Badge variant="outline" className="text-amber-600 border-amber-300 text-xs">IaaS</Badge>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Migration Definitions */}
                        <div className="p-6 rounded-2xl bg-muted/30 border space-y-4">
                            <h4 className="font-bold">Migration Strategy Definitions</h4>
                            <div className="grid md:grid-cols-2 gap-4 text-sm">
                                <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
                                    <h5 className="font-bold text-blue-600 mb-2">Refactor</h5>
                                    <p className="text-muted-foreground text-xs">
                                        Application is fully re-architected to leverage cloud benefits. Best for PaaS adoption.
                                    </p>
                                </div>
                                <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/20">
                                    <h5 className="font-bold text-purple-600 mb-2">Replatform</h5>
                                    <p className="text-muted-foreground text-xs">
                                        Application is not re-architected but components could be updated to benefit from cloud services.
                                    </p>
                                </div>
                                <div className="p-4 rounded-xl bg-orange-500/10 border border-orange-500/20">
                                    <h5 className="font-bold text-orange-600 mb-2">Rehost</h5>
                                    <p className="text-muted-foreground text-xs">
                                        Application is moved with minimal changes in application (lift & shift approach).
                                    </p>
                                </div>
                                <div className="p-4 rounded-xl bg-slate-500/10 border border-slate-500/20">
                                    <h5 className="font-bold text-slate-600 mb-2">On-Premise</h5>
                                    <p className="text-muted-foreground text-xs">
                                        Changes are limited to technical modifications to support new infrastructure platform.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <Separator />

                    {/* Chapter 7: Case Studies */}
                    <section id="case-studies" className="scroll-mt-28 space-y-8">
                        <div className="space-y-4">
                            <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 7</Badge>
                            <h2 className="text-4xl font-extrabold tracking-tight">Case Studies</h2>
                            <p className="text-lg text-muted-foreground">Real-world scenarios and best practices.</p>
                        </div>

                        <div className="grid gap-6">
                            <Card className="border-l-4 border-l-primary">
                                <CardHeader>
                                    <CardTitle>Hybrid Approach: Modern Insurance Platform</CardTitle>
                                    <CardDescription>Combining IaaS + PaaS + SaaS for optimal results</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <p className="text-sm text-muted-foreground">
                                        A modern insurance platform might use all three service models:
                                    </p>
                                    <div className="grid sm:grid-cols-3 gap-4 text-sm">
                                        <div className="p-4 rounded-lg bg-orange-500/10 border border-orange-500/20">
                                            <h5 className="font-bold text-orange-600 mb-2">IaaS (AWS)</h5>
                                            <p className="text-muted-foreground text-xs">ML model training on GPU instances, data lake storage, VPN connectivity</p>
                                        </div>
                                        <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
                                            <h5 className="font-bold text-blue-600 mb-2">PaaS (OpenShift)</h5>
                                            <p className="text-muted-foreground text-xs">Core business APIs, customer portal, claims processing microservices</p>
                                        </div>
                                        <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                                            <h5 className="font-bold text-emerald-600 mb-2">SaaS</h5>
                                            <p className="text-muted-foreground text-xs">Email (M365), CRM (Salesforce), HR system (Workday)</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Migration Strategy: Legacy to Cloud</CardTitle>
                                    <CardDescription>Progressive cloud adoption pattern</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4 text-sm text-muted-foreground">
                                    <div className="flex items-start gap-4">
                                        <Badge variant="outline">Stage 1</Badge>
                                        <p><strong>Lift & Shift to IaaS:</strong> Move existing VMs to AWS EC2 with minimal changes. Use Terraform to codify infrastructure.</p>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <Badge variant="outline">Stage 2</Badge>
                                        <p><strong>Containerize to PaaS:</strong> Refactor applications as containers, deploy to OpenShift. Implement CI/CD pipelines.</p>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <Badge variant="outline">Stage 3</Badge>
                                        <p><strong>Adopt SaaS:</strong> Replace commodity workloads (email, CRM, ITSM) with SaaS solutions. Integrate via APIs.</p>
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

export default CloudComputingGuidelinePage;
