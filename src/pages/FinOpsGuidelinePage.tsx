import React, { useState, useEffect } from 'react';
import PageHero from '@/components/PageHero';
import Layout from '@/components/Layout';
import OnThisPage from '@/components/OnThisPage';
import CodeSnippet from '@/components/CodeSnippet';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
    DollarSign,
    TrendingDown,
    PieChart,
    Target,
    Users,
    Box,
    CheckCircle2,
    AlertCircle,
    BarChart4,
    ArrowUpRight,
    ShieldCheck,
    Zap,
    BookOpen,
    RefreshCw,
    Gauge,
    Globe,
    FileCode,
    Rocket,
    ListChecks
} from 'lucide-react';

const chapters = [
    { id: "introduction", title: "1. FinOps Overview", icon: DollarSign },
    { id: "visibility", title: "2. Cost Visibility", icon: PieChart },
    { id: "optimization", title: "3. Cost Optimization", icon: TrendingDown },
    { id: "culture", title: "4. FinOps Culture", icon: Users },
    { id: "budgeting", title: "5. Budgeting & Forecasting", icon: Target },
    { id: "tools", title: "6. Tools & Automation", icon: Box },
    { id: "maturity", title: "7. Maturity Model", icon: Rocket },
    { id: "case-studies", title: "8. Case Studies", icon: BookOpen },
    { id: "checklist", title: "9. Quick Reference", icon: ListChecks },
];

const FinOpsGuidelinePage: React.FC = () => {
    const breadcrumbs = [
        { label: 'Home', href: '/' },
        { label: 'Cloud & Cost Management' },
        { label: 'FinOps Guide' }
    ];

    return (
        <Layout>
            <PageHero
                title="FinOps & Cloud Financials"
                subtitle="Strategic management of cloud costs to maximize business value through financial accountability."
                breadcrumbs={breadcrumbs}
                readingTime={30}
            />

            <div className="py-8 flex flex-col lg:flex-row gap-12">
                <main className="flex-1 min-w-0 space-y-16 pb-16">

                    {/* Chapter 1: Introduction */}
                    <section id="introduction" className="scroll-mt-28 space-y-8">
                        <div className="space-y-4">
                            <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 1</Badge>
                            <h2 className="text-4xl font-extrabold tracking-tight">FinOps Overview</h2>
                            <p className="text-xl text-muted-foreground leading-relaxed">
                                FinOps is an evolving cloud financial management discipline and cultural practice that enables organizations to get maximum business value by helping engineering, finance, technology and business teams to collaborate on data-driven spending decisions.
                            </p>
                        </div>

                        <div className="p-8 rounded-3xl bg-blue-500/5 border border-blue-500/10 space-y-6">
                            <h3 className="text-2xl font-bold text-blue-600">The Core Principles</h3>
                            <div className="grid gap-4 md:grid-cols-2">
                                {[
                                    { title: "Teams Need to Collaborate", desc: "Finance and engineering must speak the same language." },
                                    { title: "Decisions Driven by Business Value", desc: "Cloud spend should be an investment in growth." },
                                    { title: "Everyone Takes Ownership", desc: "Individual teams manage their own cloud usage." },
                                    { title: "Reports Should be Accessible", desc: "Cost visibility must be provided in near real-time." },
                                    { title: "Variable Cost Model", desc: "Take advantage of the pay-as-you-go nature of the cloud." },
                                    { title: "Centralized Team", desc: "A central team should manage discounts and commitment." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-3 items-start p-4 rounded-xl border border-border/50 bg-background/50">
                                        <CheckCircle2 className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                                        <div>
                                            <h4 className="font-bold text-sm">{item.title}</h4>
                                            <p className="text-xs text-muted-foreground">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <Separator />

                    {/* Chapter 2: Cost Visibility */}
                    <section id="visibility" className="scroll-mt-28 space-y-8">
                        <div className="space-y-4">
                            <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 2</Badge>
                            <h2 className="text-4xl font-extrabold tracking-tight">Cost Visibility</h2>
                            <p className="text-lg text-muted-foreground">You cannot manage what you do not measure. Proper allocation is the foundation of FinOps.</p>
                        </div>

                        <div className="grid gap-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <PieChart className="h-5 w-5 text-primary" />
                                        Tagging Strategy
                                    </CardTitle>
                                    <CardDescription>Mandatory tags for all cloud resources at AXA.</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-sm">
                                            <thead className="bg-muted text-xs font-bold uppercase">
                                                <tr>
                                                    <th className="px-4 py-3 text-left">Tag Key</th>
                                                    <th className="px-4 py-3 text-left">Description</th>
                                                    <th className="px-4 py-3 text-left">Example</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y">
                                                <tr><td className="px-4 py-2 font-mono">Environment</td><td className="px-4 py-2">Deployment tier</td><td className="px-4 py-2"><Badge variant="outline">prod, dev, staging</Badge></td></tr>
                                                <tr><td className="px-4 py-2 font-mono">ProjectCode</td><td className="px-4 py-2">Internal budget code</td><td className="px-4 py-2"><Badge variant="outline">AXA-2024-X</Badge></td></tr>
                                                <tr><td className="px-4 py-2 font-mono">Owner</td><td className="px-4 py-2">Team or individual email</td><td className="px-4 py-2"><Badge variant="outline">team-alpha@axa.com</Badge></td></tr>
                                                <tr><td className="px-4 py-2 font-mono">ServiceType</td><td className="px-4 py-2">Functional category</td><td className="px-4 py-2"><Badge variant="outline">api, database, frontend</Badge></td></tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </CardContent>
                            </Card>

                            <div className="p-6 rounded-2xl bg-amber-500/5 border border-amber-500/20 flex gap-4">
                                <AlertCircle className="h-6 w-6 text-amber-600 shrink-0" />
                                <div className="space-y-1">
                                    <h4 className="font-bold text-amber-600">Untagged Resource Policy</h4>
                                    <p className="text-sm text-muted-foreground">Resources without mandatory tags are subject to automatic termination in development environments and escalation in production.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <Separator />

                    {/* Chapter 3: Cost Optimization */}
                    <section id="optimization" className="scroll-mt-28 space-y-12">
                        <div className="space-y-4">
                            <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 3</Badge>
                            <h2 className="text-4xl font-extrabold tracking-tight">Cost Optimization</h2>
                            <p className="text-lg text-muted-foreground">Continuously optimizing your cloud footprint to eliminate waste.</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <h3 className="text-xl font-bold flex items-center gap-2 text-emerald-600">
                                    <TrendingDown className="h-5 w-5" />
                                    Efficiency Techniques
                                </h3>
                                <div className="space-y-4">
                                    {[
                                        { title: "Right-sizing", desc: "Select the most cost-effective instance type that meets performance requirements." },
                                        { title: "Orphaned Resources", desc: "Identify and delete unattached EBS volumes, Elastic IPs, and old AMIs." },
                                        { title: "Stop/Start Schedules", desc: "Automatically shut down non-production resources during off-hours." }
                                    ].map((item, i) => (
                                        <div key={i} className="p-4 rounded-xl border border-border bg-background/50">
                                            <h4 className="font-bold text-sm tracking-tight">{item.title}</h4>
                                            <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-xl font-bold flex items-center gap-2 text-blue-600">
                                    <ShieldCheck className="h-5 w-5" />
                                    Commitment Models
                                </h3>
                                <div className="grid gap-3">
                                    <div className="p-4 rounded-xl border border-blue-500/20 bg-blue-500/5">
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="font-bold text-sm">Savings Plans</span>
                                            <Badge className="bg-blue-500">Up to 72% Off</Badge>
                                        </div>
                                        <p className="text-xs text-muted-foreground">Commit to a specific amount per hour for 1 or 3 years.</p>
                                    </div>
                                    <div className="p-4 rounded-xl border border-indigo-500/20 bg-indigo-500/5">
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="font-bold text-sm">Reserved Instances</span>
                                            <Badge className="bg-indigo-500">Up to 60% Off</Badge>
                                        </div>
                                        <p className="text-xs text-muted-foreground">Reserved capacity for specific instance types or regions.</p>
                                    </div>
                                    <div className="p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5">
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="font-bold text-sm">Spot Instances</span>
                                            <Badge className="bg-emerald-500">Up to 90% Off</Badge>
                                        </div>
                                        <p className="text-xs text-muted-foreground">Use spare AWS capacity for fault-tolerant workloads.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <Separator />

                    {/* Chapter 4: FinOps Culture */}
                    <section id="culture" className="scroll-mt-28 space-y-8">
                        <div className="space-y-4">
                            <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 4</Badge>
                            <h2 className="text-4xl font-extrabold tracking-tight">FinOps Culture</h2>
                            <p className="text-lg text-muted-foreground">Moving from "Centralized Control" to "Distributed Ownership".</p>
                        </div>

                        <div className="grid sm:grid-cols-3 gap-6">
                            {[
                                { title: "Engineer", icon: FileCode, desc: "Responsible for cost-efficient architecture and resource selection." },
                                { title: "Finance", icon: BarChart4, desc: "Monitors budgets, forecasts, and performs variance analysis." },
                                { title: "Leadership", icon: Users, desc: "Sets cost-aware KPIs and fosters a culture of accountability." }
                            ].map((role, i) => (
                                <div key={i} className="text-center p-6 rounded-2xl border border-border bg-background/50 space-y-3">
                                    <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                        <role.icon className="h-6 w-6" />
                                    </div>
                                    <h4 className="font-bold">{role.title}</h4>
                                    <p className="text-xs text-muted-foreground leading-relaxed">{role.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="p-6 rounded-2xl bg-indigo-500/5 border border-indigo-500/20 space-y-4">
                            <h4 className="font-bold flex items-center gap-2"><ArrowUpRight className="h-5 w-5 text-indigo-600" /> Unit Metrics</h4>
                            <p className="text-sm text-muted-foreground underline decoration-indigo-500/30 underline-offset-4">Instead of asking "How much did we spend?", ask "How much did it cost to serve one customer?"</p>
                        </div>
                    </section>

                    <Separator />

                    {/* Chapter 5: Budgeting & Forecasting */}
                    <section id="budgeting" className="scroll-mt-28 space-y-8">
                        <div className="space-y-4">
                            <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 5</Badge>
                            <h2 className="text-4xl font-extrabold tracking-tight">Budgeting & Forecasting</h2>
                            <p className="text-lg text-muted-foreground">Proactive cost management through alerts and predictive modeling.</p>
                        </div>

                        <div className="space-y-6">
                            <div className="p-6 rounded-2xl border border-border bg-background/50">
                                <h4 className="font-bold mb-4">The Forecasting Process</h4>
                                <div className="grid gap-4 sm:grid-cols-4">
                                    {[
                                        { step: "Analyze", icon: PieChart },
                                        { step: "Predict", icon: TrendingDown },
                                        { step: "Collaborate", icon: Users },
                                        { step: "Iterate", icon: Zap }
                                    ].map((item, i) => (
                                        <div key={i} className="flex flex-col items-center gap-2 py-4">
                                            <div className="w-12 h-12 rounded-full border-2 border-primary/20 border-dashed flex items-center justify-center text-primary">
                                                <item.icon className="h-6 w-6" />
                                            </div>
                                            <span className="font-semibold text-sm">{item.step}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <CodeSnippet
                                title="Setting Budget Alerts (CloudFormation/Terraform)"
                                language="yaml"
                                code={`MyBudgetAlert:
  Type: AWS::Budgets::Budget
  Properties:
    Budget:
      BudgetLimit:
        Amount: 500
        Unit: USD
      TimeUnit: MONTHLY
      BudgetType: COST
    NotificationsWithSubscribers:
      - Notification:
          NotificationType: ACTUAL
          ComparisonOperator: GREATER_THAN
          Threshold: 80
        Subscribers:
          - SubscriptionType: EMAIL
            Address: team-lead@axa.com`}
                            />
                        </div>
                    </section>

                    <Separator />

                    {/* Chapter 6: Tools & Automation */}
                    <section id="tools" className="scroll-mt-28 space-y-12">
                        <div className="space-y-4">
                            <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 6</Badge>
                            <h2 className="text-4xl font-extrabold tracking-tight">Tools & Automation</h2>
                            <p className="text-lg text-muted-foreground">Leveraging the ecosystem to automate FinOps activities.</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <h4 className="font-bold text-sm uppercase tracking-widest text-muted-foreground">Native AWS Tools</h4>
                                <div className="space-y-3">
                                    {[
                                        { name: "AWS Cost Explorer", desc: "Visualize and analyze your cloud spend." },
                                        { name: "AWS Budgets", desc: "Set custom budgets and alerts." },
                                        { name: "AWS Trusted Advisor", desc: "Automated cost optimization recommendations." },
                                        { name: "Cost & Usage Report (CUR)", desc: "Deep-level granular cost data." }
                                    ].map((tool, i) => (
                                        <div key={i} className="flex gap-4 p-4 rounded-xl border border-border hover:border-primary/50 transition-colors">
                                            <div className="flex-shrink-0"><CheckCircle2 className="h-5 w-5 text-emerald-500" /></div>
                                            <div>
                                                <h5 className="font-bold text-sm">{tool.name}</h5>
                                                <p className="text-xs text-muted-foreground">{tool.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h4 className="font-bold text-sm uppercase tracking-widest text-muted-foreground">Third-Party & Open Source</h4>
                                <div className="space-y-3">
                                    {[
                                        { name: "CloudCustodian", desc: "Policy-as-code for resource compliance and cost control." },
                                        { name: "KubeCost", desc: "Real-time cost monitoring for Kubernetes." },
                                        { name: "Apptio / Cloudability", desc: "Enterprise cloud financial management platforms." },
                                        { name: "Terratag", desc: "CLI tool for automated resource tagging." }
                                    ].map((tool, i) => (
                                        <div key={i} className="flex gap-4 p-4 rounded-xl border border-border hover:border-indigo-500/50 transition-colors">
                                            <div className="flex-shrink-0"><Zap className="h-5 w-5 text-indigo-500" /></div>
                                            <div>
                                                <h5 className="font-bold text-sm">{tool.name}</h5>
                                                <p className="text-xs text-muted-foreground">{tool.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    <Separator />

                    {/* Chapter 7: Maturity Model */}
                    <section id="maturity" className="scroll-mt-28 space-y-8">
                        <div className="space-y-4">
                            <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 7</Badge>
                            <h2 className="text-4xl font-extrabold tracking-tight">FinOps Maturity Model</h2>
                            <p className="text-lg text-muted-foreground">Organizations evolve through three phases as they adopt FinOps practices.</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                { phase: "Crawl", color: "amber", items: ["Basic tagging strategy", "Monthly cost reviews", "Reactive optimization", "Siloed teams"] },
                                { phase: "Walk", color: "blue", items: ["Automated tagging", "Weekly cost reviews", "Proactive optimization", "Cross-functional collaboration"] },
                                { phase: "Run", color: "emerald", items: ["Policy-as-code enforcement", "Real-time dashboards", "Predictive optimization", "Cost-aware engineering culture"] }
                            ].map((stage, i) => (
                                <div key={i} className={`p-6 rounded-2xl border-2 border-${stage.color}-500/20 bg-${stage.color}-500/5 space-y-4`}>
                                    <div className="flex items-center gap-3">
                                        <div className={`w-10 h-10 rounded-full bg-${stage.color}-500 text-white flex items-center justify-center font-bold`}>{i + 1}</div>
                                        <h4 className="font-bold text-xl">{stage.phase}</h4>
                                    </div>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        {stage.items.map((item, j) => (
                                            <li key={j} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" />{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </section>

                    <Separator />

                    {/* Chapter 8: Case Studies */}
                    <section id="case-studies" className="scroll-mt-28 space-y-8">
                        <div className="space-y-4">
                            <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 8</Badge>
                            <h2 className="text-4xl font-extrabold tracking-tight">Case Studies</h2>
                            <p className="text-lg text-muted-foreground">Real-world examples of FinOps success.</p>
                        </div>

                        <div className="grid gap-6">
                            {[
                                { title: "Right-sizing EC2 Fleet", savings: "$120K/year", desc: "Analyzed CloudWatch metrics to identify over-provisioned instances. Downsized 40% of fleet with no performance impact." },
                                { title: "Spot Instance Migration", savings: "$85K/year", desc: "Moved batch processing workloads to Spot instances with proper interruption handling." },
                                { title: "Reserved Instance Coverage", savings: "$200K/year", desc: "Achieved 70% RI coverage for steady-state workloads through centralized purchasing." }
                            ].map((study, i) => (
                                <Card key={i} className="border-l-4 border-l-emerald-500">
                                    <CardHeader className="pb-2">
                                        <div className="flex justify-between items-center">
                                            <CardTitle className="text-lg">{study.title}</CardTitle>
                                            <Badge className="bg-emerald-500">{study.savings}</Badge>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm text-muted-foreground">{study.desc}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </section>

                    <Separator />

                    {/* Chapter 9: Quick Reference */}
                    <section id="checklist" className="scroll-mt-28 space-y-8">
                        <div className="space-y-4">
                            <Badge variant="outline" className="text-emerald-500 border-emerald-500/20 bg-emerald-500/5 px-3 py-1">Chapter 9</Badge>
                            <h2 className="text-4xl font-extrabold tracking-tight">Quick Reference Checklist</h2>
                            <p className="text-lg text-muted-foreground">Actionable items to implement FinOps in your organization.</p>
                        </div>

                        <div className="p-8 rounded-3xl border-2 border-primary/10 bg-primary/[0.02] space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                {[
                                    { category: "Visibility", items: ["Implement mandatory tagging", "Set up cost allocation reports", "Create team-level dashboards"] },
                                    { category: "Optimization", items: ["Enable Trusted Advisor checks", "Review right-sizing recommendations monthly", "Implement stop/start schedules"] },
                                    { category: "Governance", items: ["Define budget alerts at 50%, 80%, 100%", "Establish anomaly detection", "Create cost review cadence"] },
                                    { category: "Culture", items: ["Train engineers on cost awareness", "Include cost in architecture reviews", "Celebrate cost savings wins"] }
                                ].map((group, i) => (
                                    <div key={i} className="space-y-3">
                                        <h4 className="font-bold text-sm uppercase tracking-widest text-primary">{group.category}</h4>
                                        <ul className="space-y-2">
                                            {group.items.map((item, j) => (
                                                <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                                                    <CheckCircle2 className="h-4 w-4 text-emerald-500" />{item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                </main>

                <OnThisPage chapters={chapters} />
            </div>
        </Layout>
    );
};

export default FinOpsGuidelinePage;
