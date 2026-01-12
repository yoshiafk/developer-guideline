import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import PageHero from '../components/PageHero';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  GitBranch,
  GitPullRequest,
  GitMerge,
  GitCommit,
  CheckCircle2,
  CircleAlert as AlertCircle,
  ShieldCheck,
  Zap,
  ArrowRight,
  Workflow,
  BookOpen,
  Eye,
  ShieldCheck as Safety,
  Lock,
  Tag,
  ShieldAlert,
  ChevronRight,
  Terminal,
  Info,
  Layers,
  Activity,
  MessageSquare,
  Network,
  RotateCcw,
  Hash,
  Github,
  Mail,
  ExternalLink,
  ShieldCheck as SecurityIcon,
  FlaskConical,
  Wrench,
  History,
  Info as InfoIcon,
  Globe
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import CodeSnippet from '../components/CodeSnippet';

const chapters = [
  { id: "quick-ref", title: "1. Quick Reference", icon: Zap },
  { id: "workflow", title: "2. Git Workflow", icon: Network },
  { id: "branching", title: "3. Branching Strategy", icon: GitBranch },
  { id: "prs", title: "4. Pull Request Process", icon: GitPullRequest },
  { id: "reviews", title: "5. Review Standards", icon: Eye },
  { id: "commits", title: "6. Commit Guidelines", icon: GitCommit },
  { id: "testing", title: "7. Testing & Quality", icon: FlaskConical },
  { id: "security", title: "8. Security & Docs", icon: ShieldAlert },
  { id: "conflicts", title: "9. Conflict Resolution", icon: RotateCcw },
  { id: "cicd", title: "10. CI/CD Requirements", icon: Activity },
  { id: "versioning", title: "11. Versioning Standards", icon: Hash },
  { id: "changelog", title: "12. Changelog Rules", icon: History },
];

const GitHubAxaUsagePage: React.FC = () => {
  const [activeSection, setActiveSection] = useState("quick-ref");

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Global Workflow' },
    { label: 'GitHub Guidelines' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.2, rootMargin: "-10% 0px -70% 0px" }
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
        title="AII GitHub Guidelines"
        subtitle="Universal branching strategies, pull request workflows, and automated quality gates for all AII projects."
        breadcrumbs={breadcrumbs}
      />

      <div className="container py-12 px-4 flex flex-col lg:flex-row gap-12">
        {/* Content Area */}
        <main className="flex-1 min-w-0 space-y-32 pb-24 lg:max-w-4xl">

          {/* 1. Quick Reference */}
          <section id="quick-ref" className="scroll-mt-28 space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 1</Badge>
              <h2 className="text-4xl font-extrabold tracking-tight">Quick Reference Guide</h2>
            </div>

            <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
              {[
                {
                  title: "Branching Rules",
                  desc: "Mandatory prefix patterns for all feature work.",
                  icon: GitBranch,
                  tags: ["feature/*", "bugfix/*"],
                  color: "blue"
                },
                {
                  title: "Pull Requests",
                  desc: "Mandated for all protected branches.",
                  icon: GitPullRequest,
                  tags: ["Review Required", "CI Passing"],
                  color: "emerald"
                },
                {
                  title: "CI/CD Pipelines",
                  desc: "Automated testing and deployment for every change.",
                  icon: Activity,
                  tags: ["Build", "Test", "Deploy"],
                },
                {
                  title: "PR Quality",
                  desc: "All PRs require 2 approvals and passing CI builds.",
                  icon: ShieldCheck,
                  tags: ["Strict", "Automated"],
                },
                {
                  title: "Review Time",
                  desc: "Initial reviews expected within 24 business hours.",
                  icon: Activity,
                  tags: ["SLAs", "Communication"],
                },
                {
                  title: "Commit Style",
                  desc: "Conventional Commits mandatory for all projects.",
                  icon: GitCommit,
                  tags: ["feat:", "fix:", "chore:"],
                }
              ].map((ref, i) => (
                <Card key={i} className="glass hover:border-primary/50 transition-all group">
                  <CardContent className="pt-6">
                    <ref.icon className="h-8 w-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                    <h4 className="font-bold mb-2">{ref.title}</h4>
                    <p className="text-sm text-muted-foreground mb-4">{ref.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {ref.tags.map(tag => (
                        <Badge key={tag} variant="secondary" className="text-[10px] font-mono px-1.5 py-0">{tag}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Your First PR Guide */}
            <div className="mt-12 p-8 rounded-3xl bg-emerald-500/5 border border-emerald-500/10 space-y-6">
              <div className="flex items-center gap-3 text-emerald-500">
                <div className="p-2 rounded-lg bg-emerald-500/10">
                  <GitPullRequest className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold">Your First Pull Request</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">Follow this workflow to submit your first contribution at AII:</p>

              <div className="space-y-8">
                {[
                  {
                    title: "Sync & Branch",
                    cmd: "git checkout main && git pull\ngit checkout -b feature/JIRA-123-ui-fix",
                    desc: "Always start from the latest main branch and use the JIRA ID in your branch name."
                  },
                  {
                    title: "Commit Work",
                    cmd: "git add .\ngit commit -m \"feat(ui): implement new glassmorphism theme\"",
                    desc: "Follow Conventional Commits guidelines for your message."
                  },
                  {
                    title: "Push & Open",
                    cmd: "git push -u origin feature/JIRA-123-ui-fix",
                    desc: "Push and then click the GitHub link to open a PR against the main branch."
                  }
                ].map((item, i) => (
                  <div key={i} className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center text-xs font-bold">
                        {i + 1}
                      </div>
                      <h4 className="font-bold">{item.title}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground px-9">{item.desc}</p>
                    <div className="ml-9">
                      <CodeSnippet language="bash" code={item.cmd} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <Separator />

          {/* 2. Git Workflow */}
          <section id="workflow" className="scroll-mt-28 space-y-12">
            <div className="space-y-4">
              <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 2</Badge>
              <h2 className="text-4xl font-extrabold tracking-tight">Development Workflow</h2>
              <p className="text-lg text-muted-foreground italic">Step-by-step flow from feature inception to production deployment.</p>
            </div>

            <div className="relative space-y-8">
              <div className="absolute left-8 top-12 bottom-12 w-px bg-border hidden md:block" />
              {[
                {
                  step: 1,
                  title: "Feature Development",
                  desc: "Create feature branches from development, implement changes, and open PRs.",
                  icon: Terminal
                },
                {
                  step: 2,
                  title: "Preparing a Release",
                  desc: "Create release branches from development for final stabilization.",
                  icon: Layers
                },
                {
                  step: 3,
                  title: "Testing in Staging",
                  desc: "Deploy to testing environment. Fix discovered issues via additional PRs.",
                  icon: FlaskConical
                },
                {
                  step: 4,
                  title: "Going Live",
                  desc: "Merge release into master and development simultaneously.",
                  icon: Zap
                },
                {
                  step: 5,
                  title: "Production Deployment",
                  desc: "Master triggers automatic production deployment via CI/CD pipelines.",
                  icon: Activity
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 relative">
                  <div className="z-10 bg-background border-2 border-primary/20 text-primary h-16 w-16 rounded-3xl flex items-center justify-center shrink-0 shadow-sm">
                    <item.icon className="h-7 w-7" />
                  </div>
                  <div className="space-y-1 pt-1">
                    <h4 className="text-xl font-bold flex items-center gap-2">
                      <span className="text-xs text-muted-foreground font-mono">STEP 0{item.step}</span>
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed max-w-2xl">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10 flex gap-4">
              <InfoIcon className="h-6 w-6 text-primary shrink-0" />
              <p className="text-sm font-medium text-primary/80 italic">
                Key Principle: All changes flow through PRs with mandatory reviews and CI checks, ensuring quality at every step regardless of stack.
              </p>
            </div>
          </section>

          <Separator />

          {/* 3. Branching Strategy */}
          <section id="branching" className="scroll-mt-28 space-y-12">
            <div className="space-y-4">
              <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 3</Badge>
              <h2 className="text-4xl font-extrabold tracking-tight">Branching Strategy</h2>
            </div>

            <div className="space-y-10">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold flex items-center gap-2">Branch Naming Convention</h3>
                <p className="text-muted-foreground">Standardized patterns for all AII repositories.</p>
                <div className="bg-muted p-8 rounded-3xl border font-mono relative group overflow-hidden">
                  <div className="absolute top-4 right-4 text-[10px] uppercase font-bold text-muted-foreground border border-muted-foreground/30 px-2 rounded-full">Regex Requirement</div>
                  <code className="text-orange-600 dark:text-orange-400 text-sm break-all leading-relaxed block py-4">
                    ^ (master | development | refs/tags/.* | ((bugfix|hotfix|playground|defect|feature|release)&#123;1&#125;/.+)) $
                  </code>
                </div>

                <div className="flex flex-wrap gap-2">
                  {["feature/login-page", "bugfix/api-error", "release/v1.2.0", "hotfix/urgent-patch"].map(ex => (
                    <Badge key={ex} variant="outline" className="font-mono text-xs px-3 py-1 hover:bg-muted transition-colors">{ex}</Badge>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold flex items-center gap-2">Protected Branches</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { name: "master", type: "CRITICAL", desc: "Production branch. Contains only tested, production-ready code.", border: "border-orange-500/50", bg: "bg-orange-500/5" },
                    { name: "development", type: "PROTECTED", desc: "Main integration branch. Base for all feature work.", border: "border-blue-500/50", bg: "bg-blue-500/5" },
                    { name: "release/*", type: "LOCKED", desc: "Release candidates for staging testing and stabilization.", border: "border-emerald-500/50", bg: "bg-emerald-500/5" },
                  ].map(branch => (
                    <div key={branch.name} className={`glass p-6 rounded-2xl border ${branch.border} ${branch.bg} space-y-3`}>
                      <div className="flex items-center justify-between">
                        <span className="font-mono font-bold text-lg">{branch.name}</span>
                        <Lock className="h-4 w-4 opacity-50" />
                      </div>
                      <Badge variant="outline" className="text-[10px]">{branch.type}</Badge>
                      <p className="text-xs text-muted-foreground leading-relaxed">{branch.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 border border-destructive/20 bg-destructive/5 rounded-2xl space-y-3 flex gap-4">
                <ShieldAlert className="h-6 w-6 text-destructive shrink-0" />
                <div>
                  <h4 className="font-bold text-destructive">Crucial Restriction</h4>
                  <p className="text-sm text-muted-foreground italic"><strong>NEVER</strong> commit directly to master, development, or any locked branches. All changes must be submitted via Pull Requests.</p>
                </div>
              </div>
            </div>
          </section>

          <Separator />

          {/* 4. Pull Request Process */}
          <section id="prs" className="scroll-mt-28 space-y-12">
            <div className="space-y-4">
              <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 4</Badge>
              <h2 className="text-4xl font-extrabold tracking-tight">Pull Request Process</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-6">
                <h4 className="text-xl font-bold flex items-center gap-2 text-emerald-600">
                  <CheckCircle2 className="h-5 w-5" /> Creation Checklist
                </h4>
                <div className="grid gap-4">
                  {[
                    { label: "Clear Title & Description", desc: "Explain the WHAT and WHY clearly." },
                    { label: "Link Related Issues", desc: "Reference Jira tickets or internal issues." },
                    { label: "Up-to-Date Branch", desc: "Merge latest changes from target first." },
                    { label: "Focused Scope", desc: "One feature or bug fix per PR." }
                  ].map((item, i) => (
                    <div key={i} className="p-4 rounded-xl bg-card border flex gap-3 shadow-sm hover:shadow-md transition-shadow">
                      <div className="h-5 w-5 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center shrink-0 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-emerald-500" />
                      </div>
                      <div className="space-y-1">
                        <p className="font-bold text-sm tracking-tight">{item.label}</p>
                        <p className="text-xs text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="text-xl font-bold flex items-center gap-2 text-primary">
                  <Network className="h-5 w-5" /> Merging Requirements
                </h4>
                <Card className="glass border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <ShieldCheck className="h-5 w-5 text-primary" /> Code Owner Approval
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 text-sm leading-relaxed">
                    <p>Merging into any protected branch requires a review and approval from <strong>at least 1 designated code owner</strong>.</p>
                    <Separator className="bg-primary/10" />
                    <ul className="space-y-3 list-none p-0 italic text-muted-foreground">
                      <li className="flex gap-2"><ArrowRight className="h-3 w-3 mt-1 text-primary shrink-0" /> PRs should be small and focused.</li>
                      <li className="flex gap-2"><ArrowRight className="h-3 w-3 mt-1 text-primary shrink-0" /> Target for max 500 lines changed.</li>
                      <li className="flex gap-2"><ArrowRight className="h-3 w-3 mt-1 text-primary shrink-0" /> All discussions must be resolved.</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          <Separator />

          {/* 5. Review Standards */}
          <section id="reviews" className="scroll-mt-28 space-y-12">
            <div className="space-y-4">
              <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 5</Badge>
              <h2 className="text-4xl font-extrabold tracking-tight">Code Review Standards</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: "Quality & Standards", icon: Eye, desc: "Reviewers verify adherence to the relevant technology guidelines and naming conventions." },
                { title: "Security Focus", icon: SecurityIcon, desc: "Mandatory check for secret leakage, injection vulnerabilities, and authorization logic." },
                { title: "Automated Verification", icon: Activity, desc: "CI/CD pipelines, unit tests, and linters must show green status." },
                { title: "Constructive Feedback", icon: MessageSquare, desc: "Focus on the code, not the person. Use suggestions feature for improvements." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-6 rounded-2xl border bg-card/50 hover:bg-card transition-colors group">
                  <div className="p-3 rounded-xl bg-orange-500/10 text-orange-500 group-hover:scale-110 transition-transform h-fit">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div className="space-y-2">
                    <h5 className="font-bold text-lg">{item.title}</h5>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-8 border-2 border-dashed border-destructive/30 rounded-[2rem] bg-destructive/5 text-center space-y-4">
              <ShieldAlert className="h-10 w-10 text-destructive mx-auto" />
              <h3 className="text-2xl font-bold text-destructive">Strict Rule: No Self-Merging</h3>
              <p className="text-muted-foreground max-w-lg mx-auto italic">
                Do not merge your own PR unless explicitly allowed by the team lead. Collaborative review is the only way to maintain our quality bar.
              </p>
            </div>
          </section>

          <Separator />

          {/* 6. Commit Guidelines */}
          <section id="commits" className="scroll-mt-28 space-y-12">
            <div className="space-y-4">
              <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 6</Badge>
              <h2 className="text-4xl font-extrabold tracking-tight">Commit Message Standards</h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="p-8 rounded-3xl bg-emerald-500/5 border border-emerald-500/20 space-y-6">
                <h4 className="font-bold text-emerald-600 flex items-center gap-2"><CheckCircle2 className="h-5 w-5" /> Professional Examples</h4>
                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3 bg-white/50 dark:bg-emerald-950/30 rounded border border-emerald-500/10">"Add user authentication validation"</div>
                  <div className="p-3 bg-white/50 dark:bg-emerald-950/30 rounded border border-emerald-500/10">"Fix login form bug #123"</div>
                  <div className="p-3 bg-white/50 dark:bg-emerald-950/30 rounded border border-emerald-500/10">"Update documentation for v2.1"</div>
                </div>
                <p className="text-xs text-muted-foreground italic">Use imperative mood and clear, concise subjects.</p>
              </div>

              <div className="p-8 rounded-3xl bg-destructive/5 border border-destructive/20 space-y-6">
                <h4 className="font-bold text-destructive flex items-center gap-2"><AlertCircle className="h-5 w-5" /> Messages to Avoid</h4>
                <div className="space-y-3 font-mono text-xs opacity-60">
                  <div className="p-3 bg-white/50 dark:bg-destructive/10 rounded border border-destructive/10 line-through">"fixed stuff"</div>
                  <div className="p-3 bg-white/50 dark:bg-destructive/10 rounded border border-destructive/10 line-through">"changes"</div>
                  <div className="p-3 bg-white/50 dark:bg-destructive/10 rounded border border-destructive/10 line-through">"update"</div>
                </div>
                <p className="text-xs text-muted-foreground italic">Avoid vague, single-word messages that don't explain the intent.</p>
              </div>
            </div>
          </section>

          <Separator />

          {/* 7. Testing & Quality */}
          <section id="testing" className="scroll-mt-28 space-y-12">
            <div className="space-y-4">
              <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 7</Badge>
              <h2 className="text-4xl font-extrabold tracking-tight">Testing & Quality Assurance</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="glass shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <FlaskConical className="h-5 w-5 text-emerald-500" /> Comprehensive Coverage
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground leading-relaxed">
                  All new features and bug fixes <strong>must</strong> include relevant unit or integration tests. Code without tests will not be approved.
                </CardContent>
              </Card>

              <Card className="glass shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <RotateCcw className="h-5 w-5 text-emerald-500" /> Pre-Review Validation
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground leading-relaxed">
                  Ensure all tests pass locally before requesting code review. Respect your reviewers' time by submitting a working codebase.
                </CardContent>
              </Card>
            </div>
          </section>

          <Separator />

          {/* 8. Security & Docs */}
          <section id="security" className="scroll-mt-28 space-y-12">
            <div className="space-y-4">
              <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 8</Badge>
              <h2 className="text-4xl font-extrabold tracking-tight">Security & Documentation</h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="p-8 rounded-[2rem] bg-destructive/5 border border-destructive/10 space-y-4">
                <h4 className="font-bold flex items-center gap-2 text-destructive"><ShieldAlert className="h-5 w-5" /> Security First</h4>
                <div className="p-4 bg-white/50 dark:bg-black/20 rounded-xl border border-destructive/10 text-sm italic font-medium">
                  "Never commit secrets, credentials, API keys, or other sensitive data to the repository."
                </div>
                <p className="text-xs text-muted-foreground">Use environment variables, vault management, or secure configuration systems instead. Use <code>.gitignore</code> and <code>git-secrets</code> scans locally.</p>
              </div>

              <div className="p-8 rounded-[2rem] bg-primary/5 border border-primary/10 space-y-4">
                <h4 className="font-bold flex items-center gap-2"><BookOpen className="h-5 w-5 text-primary" /> Documentation Sync</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Keep documentation synchronized with code changes. Update README.md, technical docs, and internal wikis when implementing new capabilities.
                </p>
                <Separator className="bg-primary/10" />
                <p className="text-[10px] text-muted-foreground font-mono uppercase font-bold">Requirement: All public changes must have documentation updates.</p>
              </div>
            </div>
          </section>

          <Separator />

          {/* 9. Conflict Resolution */}
          <section id="conflicts" className="scroll-mt-28 space-y-12">
            <div className="space-y-4">
              <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 9</Badge>
              <h2 className="text-4xl font-extrabold tracking-tight">Conflict Resolution</h2>
            </div>

            <Card className="overflow-hidden border-orange-500/20 shadow-lg">
              <div className="bg-orange-500 text-white px-8 py-4 flex items-center gap-4">
                <RotateCcw className="h-6 w-6" />
                <h4 className="font-bold">Prevention is Better Than Cure</h4>
              </div>
              <CardContent className="p-8 space-y-6">
                <p className="text-muted-foreground leading-relaxed text-lg">
                  <strong>Always pull the latest changes</strong> from the target branch (e.g., master, development, or release/**) before starting work or creating a PR.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-4 rounded-xl bg-muted border font-mono text-xs">
                    <p className="text-muted-foreground mb-2 text-[10px] font-bold uppercase">Before Starting</p>
                    <code>git checkout development<br />git pull origin development<br />git checkout -b feature/new-logic</code>
                  </div>
                  <div className="p-4 rounded-xl bg-muted border font-mono text-xs">
                    <p className="text-muted-foreground mb-2 text-[10px] font-bold uppercase">Before PR</p>
                    <code>git checkout feature/new-logic<br /># Merge target branch<br />git merge development<br /># Resolve local conflicts</code>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <Separator />

          {/* 10. CI/CD Requirements */}
          <section id="cicd" className="scroll-mt-28 space-y-12">
            <div className="space-y-4">
              <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 10</Badge>
              <h2 className="text-4xl font-extrabold tracking-tight">CI/CD Status Requirements</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Automated Tests", icon: FlaskConical, desc: "Unit & Integration checks must pass." },
                { title: "Code Quality", icon: Wrench, desc: "Linting and static analysis checks." },
                { title: "Build Status", icon: Activity, desc: "Compilation and deployment staging checks." }
              ].map((gate, i) => (
                <div key={i} className="glass p-6 rounded-2xl border flex flex-col items-center text-center space-y-3">
                  <div className="p-3 rounded-full bg-blue-500/10 text-blue-500">
                    <gate.icon className="h-6 w-6" />
                  </div>
                  <h5 className="font-bold">{gate.title}</h5>
                  <p className="text-xs text-muted-foreground">{gate.desc}</p>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 text-center">
              <p className="text-emerald-600 font-bold flex items-center justify-center gap-2">
                <CheckCircle2 className="h-5 w-5" /> All automated checks must pass before merging is permitted.
              </p>
            </div>
          </section>

          <Separator />

          {/* 11. Versioning Standards */}
          <section id="versioning" className="scroll-mt-28 space-y-12">
            <div className="space-y-4">
              <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 11</Badge>
              <h2 className="text-4xl font-extrabold tracking-tight">Versioning Standards</h2>
            </div>

            <div className="space-y-10">
              <div className="bg-primary/5 p-12 rounded-[3rem] border border-primary/10 space-y-8 relative overflow-hidden">
                <div className="relative z-10 text-center space-y-4">
                  <h3 className="text-3xl font-extrabold tracking-tighter sm:text-4xl">Semantic Versioning 2.0.0</h3>
                  <p className="text-muted-foreground font-mono text-xl">X . Y . Z</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8 relative z-10">
                  {[
                    { major: "X", label: "MAJOR", desc: "Breaking changes or incompatible API updates.", color: "text-red-500" },
                    { major: "Y", label: "MINOR", desc: "New functionality in a backwards compatible manner.", color: "text-emerald-500" },
                    { major: "Z", label: "PATCH", desc: "Backwards compatible bug fixes only.", color: "text-orange-500" }
                  ].map((v, i) => (
                    <div key={i} className="p-6 rounded-2xl bg-white/80 dark:bg-black/30 border text-center space-y-2 backdrop-blur-sm">
                      <span className={`text-4xl font-bold ${v.color}`}>{v.major}</span>
                      <h5 className="font-bold text-sm">{v.label}</h5>
                      <p className="text-xs text-muted-foreground leading-relaxed">{v.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { title: "Bug Fix", from: "1.2.3", to: "1.2.4", bg: "bg-emerald-500/5" },
                  { title: "New Feature", from: "1.2.3", to: "1.3.0", bg: "bg-emerald-500/5" },
                  { title: "Breaking Change", from: "1.2.3", to: "2.0.0", bg: "bg-orange-500/5" },
                  { title: "Pre-release", from: "2.0.0", to: "2.0.0-beta.1", bg: "bg-blue-500/5" }
                ].map((ex, i) => (
                  <div key={i} className={`p-4 rounded-xl border ${ex.bg} text-center space-y-1 hover:scale-105 transition-transform cursor-default`}>
                    <p className="text-[10px] font-bold uppercase opacity-60 tracking-widest">{ex.title}</p>
                    <p className="font-mono text-sm">{ex.from} → {ex.to}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <Separator />

          {/* 12. Changelog Rules */}
          <section id="changelog" className="scroll-mt-28 space-y-12">
            <div className="space-y-4">
              <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 12</Badge>
              <h2 className="text-4xl font-extrabold tracking-tight">Changelog & Release Notes</h2>
            </div>

            <div className="p-10 rounded-[2.5rem] bg-slate-900 text-slate-100 border-none relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity">
                <History className="h-40 w-40" />
              </div>
              <div className="relative z-10 space-y-8">
                <div className="space-y-2">
                  <h3 className="text-3xl font-bold">Documenting Significance</h3>
                  <p className="text-slate-400">Update the changelog or release notes in your PR if your changes are significant.</p>
                </div>
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-emerald-400 font-bold">
                      <CheckCircle2 className="h-5 w-5" /> External Significance
                    </div>
                    <ul className="text-sm text-slate-400 space-y-2 list-none p-0 italic">
                      <li>• New features or UI modifications</li>
                      <li>• API changes or breaking updates</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-emerald-400 font-bold">
                      <CheckCircle2 className="h-5 w-5" /> Internal Significance
                    </div>
                    <ul className="text-sm text-slate-400 space-y-2 list-none p-0 italic">
                      <li>• Architecture shifts</li>
                      <li>• Performance & Security enhancements</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Separator />

          {/* Final Call to Action */}
          <section id="conclusion" className="scroll-mt-28 space-y-12">
            <div className="text-center space-y-6">
              <Github className="h-16 w-16 mx-auto text-primary animate-pulse" />
              <h2 className="text-4xl font-extrabold tracking-tight">Questions or Support?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto italic">
                Following these guidelines ensures high-quality, maintainable code and smooth collaboration across the AII development team regardless of technology stack.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <Card className="hover:border-primary transition-all group p-1 shrink-0">
                <a href="mailto:yosy.aliffakry@axa.co.id" className="flex items-center justify-between p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-bold">Contact Maintainer</p>
                      <p className="text-xs text-muted-foreground">yosy.aliffakry@axa.co.id</p>
                    </div>
                  </div>
                  <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </Card>

              <Card className="hover:border-primary transition-all group p-1 shrink-0">
                <a href="https://github.axa.com/aii" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-black/10 dark:bg-white/10 text-foreground group-hover:scale-110 transition-transform">
                      <Github className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-bold">AII Organization</p>
                      <p className="text-xs text-muted-foreground">github.axa.com/aii</p>
                    </div>
                  </div>
                  <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </Card>
            </div>
          </section>

        </main>

        {/* Right Side Sticky ToC */}
        <aside className="lg:w-72 shrink-0 h-[calc(100vh-8rem)] sticky top-24 hidden lg:block overflow-y-auto pl-4 border-l">
          <div className="space-y-1 pb-12">
            <h4 className="text-[10px] font-bold mb-6 px-3 text-muted-foreground/60 uppercase tracking-[0.2em]">On this page</h4>
            {chapters.map((chapter) => (
              <a
                key={chapter.id}
                href={`#${chapter.id}`}
                className={`flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-all ${activeSection === chapter.id
                  ? "text-primary font-bold"
                  : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                <chapter.icon className={`h-3.5 w-3.5 shrink-0 ${activeSection === chapter.id ? "text-primary" : "text-muted-foreground/40"}`} />
                {chapter.title}
              </a>
            ))}
          </div>
        </aside>
      </div>
    </Layout>
  );
};

export default GitHubAxaUsagePage;