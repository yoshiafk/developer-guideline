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
    Shield,
    Activity,
    Zap,
    TrendingDown,
    Leaf,
    Settings,
    Lock,
    RefreshCw,
    Gauge,
    DollarSign,
    Globe,
    BookOpen,
    CheckCircle2,
    PieChart,
    Layers,
    AlertTriangle,
    Server
} from 'lucide-react';

const chapters = [
    { id: "overview", title: "1. Framework Overview", icon: Cloud },
    { id: "operational-excellence", title: "2. Operational Excellence", icon: Settings },
    { id: "security", title: "3. Security Pillar", icon: Lock },
    { id: "reliability", title: "4. Reliability Pillar", icon: RefreshCw },
    { id: "performance", title: "5. Performance Efficiency", icon: Gauge },
    { id: "cost", title: "6. Cost Optimization", icon: DollarSign },
    { id: "sustainability", title: "7. Sustainability Pillar", icon: Leaf },
    { id: "patterns", title: "8. Design Patterns", icon: Layers },
    { id: "disaster-recovery", title: "9. Disaster Recovery", icon: AlertTriangle },
    { id: "case-studies", title: "10. Case Studies", icon: BookOpen },
];

const AWSArchitectureGuidelinePage: React.FC = () => {
    const breadcrumbs = [
        { label: 'Home', href: '/' },
        { label: 'Cloud & Cost Management' },
        { label: 'AWS Architecture' }
    ];

    return (
        <Layout>
            <PageHero
                title="AWS Cloud Architecture"
                subtitle="Mastering the AWS Well-Architected Framework for building secure, high-performing, and resilient infrastructures."
                breadcrumbs={breadcrumbs}
                readingTime={35}
            />

            <div className="py-8 flex flex-col lg:flex-row gap-12">
                <main className="flex-1 min-w-0 space-y-16 pb-16">

                    {/* Chapter 1: Overview */}
                    <section id="overview" className="scroll-mt-28 space-y-8">
                        <div className="space-y-4">
                            <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 1</Badge>
                            <h2 className="text-4xl font-extrabold tracking-tight">Framework Overview</h2>
                            <p className="text-xl text-muted-foreground leading-relaxed">
                                The AWS Well-Architected Framework provides a consistent approach for customers and partners to evaluate architectures and implement designs that can scale over time.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {[
                                { text: "Operational Excellence", icon: Settings, color: "blue" },
                                { text: "Security", icon: Shield, color: "red" },
                                { text: "Reliability", icon: RefreshCw, color: "orange" },
                                { text: "Performance Efficiency", icon: Gauge, color: "emerald" },
                                { text: "Cost Optimization", icon: DollarSign, color: "yellow" },
                                { text: "Sustainability", icon: Leaf, color: "green" },
                            ].map((pillar, i) => (
                                <div key={i} className="glass flex flex-col gap-3 p-6 rounded-2xl border border-border/50 hover:border-primary/30 transition-colors">
                                    <pillar.icon className={`h-8 w-8 text-${pillar.color}-500`} />
                                    <span className="font-bold text-sm tracking-tight">{pillar.text}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    <Separator />

                    {/* Chapter 2: Operational Excellence */}
                    <section id="operational-excellence" className="scroll-mt-28 space-y-12">
                        <div className="space-y-4 text-center max-w-3xl mx-auto">
                            <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 2</Badge>
                            <h2 className="text-4xl font-extrabold tracking-tight">Operational Excellence</h2>
                            <p className="text-lg text-muted-foreground">Focus on running and monitoring systems to deliver business value, and continuously improving processes.</p>
                        </div>

                        <div className="grid gap-6">
                            <div className="p-8 rounded-3xl bg-blue-500/5 border border-blue-500/10 space-y-6">
                                <h4 className="font-bold text-xl flex items-center gap-2">
                                    <Activity className="h-5 w-5 text-blue-500" />
                                    Key Design Principles
                                </h4>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {[
                                        "Perform operations as code",
                                        "Make frequent, small, reversible changes",
                                        "Refine operations procedures frequently",
                                        "Anticipate failure",
                                        "Learn from all operational failures"
                                    ].map((text, i) => (
                                        <div key={i} className="flex items-center gap-3 text-sm">
                                            <CheckCircle2 className="h-4 w-4 text-blue-500" />
                                            <span>{text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <CodeSnippet
                                title="Infrastructure as Code (Terraform)"
                                language="hcl"
                                code={`resource "aws_instance" "app_server" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t2.micro"

  tags = {
    Name = "OperationalExcellenceExample"
    ManagedBy = "Terraform"
  }
}`}
                            />
                        </div>
                    </section>

                    <Separator />

                    {/* Chapter 3: Security */}
                    <section id="security" className="scroll-mt-28 space-y-12">
                        <div className="space-y-4">
                            <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 3</Badge>
                            <h2 className="text-4xl font-extrabold tracking-tight">Security Pillar</h2>
                            <p className="text-lg text-muted-foreground">Protecting information, systems, and assets while delivering business value through risk assessments and mitigation strategies.</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <Card className="border-red-500/20 bg-red-500/5">
                                <CardHeader>
                                    <CardTitle className="text-red-700">Identity & Access Management</CardTitle>
                                </CardHeader>
                                <CardContent className="text-sm space-y-2 text-muted-foreground">
                                    <li>• Implement least-privilege permissions</li>
                                    <li>• Use MFA for all human access</li>
                                    <li>• Leverage IAM Roles for machine access</li>
                                    <li>• Rotate credentials regularly</li>
                                </CardContent>
                            </Card>

                            <Card className="border-emerald-500/20 bg-emerald-500/5">
                                <CardHeader>
                                    <CardTitle className="text-emerald-700">Data Protection</CardTitle>
                                </CardHeader>
                                <CardContent className="text-sm space-y-2 text-muted-foreground">
                                    <li>• Encrypt data at rest (KMS)</li>
                                    <li>• Encrypt data in transit (TLS)</li>
                                    <li>• Automate data classification</li>
                                    <li>• Maintain backups & DR plan</li>
                                </CardContent>
                            </Card>
                        </div>

                        <CodeSnippet
                            title="AWS IAM Policy (Least Privilege)"
                            language="json"
                            code={`{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": "s3:ListBucket",
      "Resource": "arn:aws:s3:::my-secure-bucket"
    },
    {
      "Effect": "Allow",
      "Action": ["s3:GetObject", "s3:PutObject"],
      "Resource": "arn:aws:s3:::my-secure-bucket/*"
    }
  ]
}`}
                        />
                    </section>

                    <Separator />

                    {/* Chapter 4: Reliability */}
                    <section id="reliability" className="scroll-mt-28 space-y-12">
                        <div className="space-y-4">
                            <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 4</Badge>
                            <h2 className="text-4xl font-extrabold tracking-tight">Reliability Pillar</h2>
                            <p className="text-lg text-muted-foreground">Ensuring a workload performs its intended function correctly and consistently when it's expected to.</p>
                        </div>

                        <div className="p-8 rounded-3xl bg-orange-500/5 border border-orange-500/20 space-y-8">
                            <div className="flex flex-col md:flex-row gap-8 items-center">
                                <div className="space-y-4 flex-1">
                                    <h4 className="font-bold text-xl">Self-Healing Infrastructure</h4>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        Automate recovery from failures by using services that can automatically replace unhealthy instances and scale based on demand.
                                    </p>
                                    <div className="flex gap-4">
                                        <Badge variant="secondary">Multi-AZ</Badge>
                                        <Badge variant="secondary">Auto Scaling</Badge>
                                        <Badge variant="secondary">Health Checks</Badge>
                                    </div>
                                </div>
                                <div className="w-full md:w-64 aspect-video bg-slate-900 rounded-xl border border-slate-700 p-4 font-mono text-[10px] text-orange-400">
                                    <pre>{`[Traffic] -> [ELB]
   |          |
   v          v
[AZ-1]      [AZ-2]
[Node]      [Node]`}</pre>
                                </div>
                            </div>
                        </div>
                    </section>

                    <Separator />

                    {/* Chapter 5: Performance Efficiency */}
                    <section id="performance" className="scroll-mt-28 space-y-12">
                        <div className="space-y-4">
                            <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 5</Badge>
                            <h2 className="text-4xl font-extrabold tracking-tight">Performance Efficiency</h2>
                            <p className="text-lg text-muted-foreground">Using computing resources efficiently to meet system requirements and maintaining that efficiency as demand changes.</p>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {[
                                { name: "Compute", service: "Lambda, Fargate, EC2", icon: Zap },
                                { name: "Storage", service: "S3, EBS, EFS", icon: Settings },
                                { name: "Database", service: "RDS, DynamoDB, Aurora", icon: Globe },
                                { name: "Network", service: "CloudFront, Global Accelerator", icon: Activity },
                            ].map((item, i) => (
                                <div key={i} className="p-5 rounded-2xl border border-border bg-background/50 space-y-2">
                                    <item.icon className="h-5 w-5 text-primary" />
                                    <h5 className="font-bold text-sm tracking-tight">{item.name}</h5>
                                    <p className="text-[10px] text-muted-foreground font-mono">{item.service}</p>
                                </div>
                            ))}
                        </div>

                        <div className="p-6 rounded-2xl bg-muted/30 border space-y-4">
                            <h4 className="font-bold text-sm">Optimization Checklist</h4>
                            <div className="grid sm:grid-cols-2 gap-2 text-xs">
                                <li className="list-none flex gap-2">✅ Review resource selection monthly</li>
                                <li className="list-none flex gap-2">✅ Implement caching at all layers</li>
                                <li className="list-none flex gap-2">✅ Use serverless wherever possible</li>
                                <li className="list-none flex gap-2">✅ Monitor latency and throughput</li>
                            </div>
                        </div>
                    </section>

                    <Separator />

                    {/* Chapter 6: Cost Optimization */}
                    <section id="cost" className="scroll-mt-28 space-y-12">
                        <div className="space-y-4">
                            <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 6</Badge>
                            <h2 className="text-4xl font-extrabold tracking-tight">Cost Optimization</h2>
                            <p className="text-lg text-muted-foreground">Avoiding unnecessary costs and ensuring every dollar spent translates into business value.</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <h4 className="font-bold text-indigo-600 flex items-center gap-2">
                                    <TrendingDown className="h-5 w-5" />
                                    Cost Effective Resources
                                </h4>
                                <p className="text-sm text-muted-foreground">Using the right instance sizes, purchasing options (Spot, RIs), and managed services to reduce heavy lifting.</p>
                            </div>
                            <div className="space-y-4">
                                <h4 className="font-bold text-indigo-600 flex items-center gap-2">
                                    <PieChart className="h-5 w-5" />
                                    Demand & Supply
                                </h4>
                                <p className="text-sm text-muted-foreground">Match supply with demand using Auto Scaling and Buffer-based systems to handle spikes efficiently.</p>
                            </div>
                        </div>
                    </section>

                    <Separator />

                    {/* Chapter 7: Sustainability */}
                    <section id="sustainability" className="scroll-mt-28 space-y-8">
                        <div className="space-y-4">
                            <Badge variant="outline" className="text-emerald-500 border-emerald-500/20 bg-emerald-500/5 px-3 py-1">Chapter 7</Badge>
                            <h2 className="text-4xl font-extrabold tracking-tight">Sustainability Pillar</h2>
                            <p className="text-lg text-muted-foreground">Minimize the environmental impact of running your cloud workloads.</p>
                        </div>

                        <div className="p-8 rounded-3xl border-2 border-emerald-500/10 bg-emerald-500/[0.02] space-y-6">
                            <div className="flex items-center gap-4 text-emerald-600">
                                <Leaf className="h-8 w-8" />
                                <h3 className="text-2xl font-bold">Green Computing Best Practices</h3>
                            </div>
                            <div className="grid gap-4 sm:grid-cols-3">
                                {[
                                    { title: "Optimize Utilization", desc: "Reduce idling resources to save power." },
                                    { title: "Data Patterns", desc: "Minimize data movement across the network." },
                                    { title: "Efficient Hardware", desc: "Use AWS Graviton processors for better performance/watt." }
                                ].map((item, i) => (
                                    <div key={i} className="space-y-2">
                                        <h4 className="font-bold text-sm tracking-tight">{item.title}</h4>
                                        <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <Separator />

                    {/* Chapter 8: Design Patterns */}
                    <section id="patterns" className="scroll-mt-28 space-y-8">
                        <div className="space-y-4">
                            <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 8</Badge>
                            <h2 className="text-4xl font-extrabold tracking-tight">Design Patterns</h2>
                            <p className="text-lg text-muted-foreground">Common architectural patterns for AWS workloads.</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                { title: "Multi-tier Architecture", desc: "Separate presentation, application, and data tiers for improved scalability and maintainability.", icon: Layers },
                                { title: "Serverless", desc: "Use Lambda, API Gateway, and DynamoDB for event-driven, pay-per-use workloads.", icon: Zap },
                                { title: "Event-driven", desc: "Decouple components with EventBridge, SNS, and SQS for asynchronous processing.", icon: Activity },
                                { title: "Microservices", desc: "Deploy independent services with ECS, EKS, or App Runner for team autonomy.", icon: Server }
                            ].map((pattern, i) => (
                                <Card key={i} className="hover:border-primary/50 transition-colors">
                                    <CardHeader>
                                        <div className="flex items-center gap-3">
                                            <pattern.icon className="h-5 w-5 text-primary" />
                                            <CardTitle className="text-lg">{pattern.title}</CardTitle>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm text-muted-foreground">{pattern.desc}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </section>

                    <Separator />

                    {/* Chapter 9: Disaster Recovery */}
                    <section id="disaster-recovery" className="scroll-mt-28 space-y-8">
                        <div className="space-y-4">
                            <Badge variant="outline" className="text-amber-500 border-amber-500/20 bg-amber-500/5 px-3 py-1">Chapter 9</Badge>
                            <h2 className="text-4xl font-extrabold tracking-tight">Disaster Recovery</h2>
                            <p className="text-lg text-muted-foreground">Strategies for business continuity and data protection.</p>
                        </div>

                        <div className="space-y-6">
                            <div className="p-6 rounded-2xl border border-border bg-background/50">
                                <h4 className="font-bold mb-4">RTO/RPO Strategies</h4>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-sm">
                                        <thead className="bg-muted text-xs font-bold uppercase">
                                            <tr>
                                                <th className="px-4 py-3 text-left">Strategy</th>
                                                <th className="px-4 py-3 text-left">RTO</th>
                                                <th className="px-4 py-3 text-left">RPO</th>
                                                <th className="px-4 py-3 text-left">Cost</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y">
                                            <tr><td className="px-4 py-2">Backup & Restore</td><td className="px-4 py-2">Hours</td><td className="px-4 py-2">Hours</td><td className="px-4 py-2"><Badge variant="outline">$</Badge></td></tr>
                                            <tr><td className="px-4 py-2">Pilot Light</td><td className="px-4 py-2">10s of min</td><td className="px-4 py-2">Minutes</td><td className="px-4 py-2"><Badge variant="outline">$$</Badge></td></tr>
                                            <tr><td className="px-4 py-2">Warm Standby</td><td className="px-4 py-2">Minutes</td><td className="px-4 py-2">Seconds</td><td className="px-4 py-2"><Badge variant="outline">$$$</Badge></td></tr>
                                            <tr><td className="px-4 py-2">Multi-site Active</td><td className="px-4 py-2">Real-time</td><td className="px-4 py-2">Zero</td><td className="px-4 py-2"><Badge variant="outline">$$$$</Badge></td></tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div className="p-6 rounded-2xl bg-amber-500/5 border border-amber-500/20 flex gap-4">
                                <AlertTriangle className="h-6 w-6 text-amber-600 shrink-0" />
                                <div className="space-y-1">
                                    <h4 className="font-bold text-amber-600">Test Your DR Plan</h4>
                                    <p className="text-sm text-muted-foreground">Regularly test failover procedures. AWS Fault Injection Simulator can help validate your resilience.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <Separator />

                    {/* Chapter 10: Case Studies */}
                    <section id="case-studies" className="scroll-mt-28 space-y-8">
                        <div className="space-y-4">
                            <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 10</Badge>
                            <h2 className="text-4xl font-extrabold tracking-tight">Reference Architectures</h2>
                            <p className="text-lg text-muted-foreground">Common patterns for real-world use cases.</p>
                        </div>

                        <div className="grid gap-6">
                            {[
                                { title: "Web Application", services: "CloudFront + ALB + ECS + RDS", desc: "Scalable, secure web apps with managed container orchestration." },
                                { title: "Data Lake", services: "S3 + Glue + Athena + QuickSight", desc: "Cost-effective analytics platform for structured and unstructured data." },
                                { title: "Real-time Streaming", services: "Kinesis + Lambda + OpenSearch", desc: "Ingest and analyze streaming data at scale." }
                            ].map((arch, i) => (
                                <Card key={i} className="border-l-4 border-l-primary">
                                    <CardHeader className="pb-2">
                                        <CardTitle className="text-lg">{arch.title}</CardTitle>
                                        <CardDescription className="font-mono text-xs">{arch.services}</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm text-muted-foreground">{arch.desc}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </section>

                </main>

                <OnThisPage chapters={chapters} />
            </div>
        </Layout>
    );
};

export default AWSArchitectureGuidelinePage;
