import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  FileCode,
  Coffee,
  Code2,
  Atom,
  Smartphone,
  Layers,
  GitBranch,
  Terminal,
  CheckCircle2,
  DollarSign,
  Cloud,
  Sparkles,
  Server,
  Wrench,
  ScanSearch,
  Rocket,
  Zap
} from 'lucide-react';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import PreviewLinkCard from '@/components/animate-ui/PreviewLinkCard';
import AnimatedFeedbackIcon from '@/components/animate-ui/AnimatedFeedbackIcon';
import { BlurReveal } from '@/components/animate-ui/BlurReveal';

// Categorized documentation cards
const categories = [
  {
    title: 'Quickstart',
    description: 'Essential guides to get started with AII development standards.',
    icon: Rocket,
    color: 'emerald',
    cards: [
      { title: 'Global Standards', description: 'Coding conventions and naming standards.', href: '/coding-standard', icon: Terminal },
      { title: 'GitHub Workflow', description: 'Branch strategy and PR guidelines.', href: '/github-axa-usage', icon: GitBranch },
      { title: 'Clean Code', description: 'SOLID principles and craftsmanship.', href: '/clean-code-guideline', icon: Sparkles },
    ]
  },
  {
    title: 'Development',
    description: 'Technology-specific guidelines for backend and frontend development.',
    icon: Code2,
    color: 'blue',
    cards: [
      { title: '.NET Development', description: 'Clean Architecture and enterprise C#.', href: '/dotnet-developer-guideline', icon: FileCode },
      { title: 'Java Backend', description: 'Spring Boot and microservices.', href: '/java-developer-guideline', icon: Coffee },
      { title: 'Python & AI', description: 'FastAPI and AI integration.', href: '/python-developer-guideline', icon: Code2 },
      { title: 'React Frontend', description: 'Component architecture and hooks.', href: '/react-developer-guideline', icon: Atom },
      { title: 'Flutter Mobile', description: 'Cross-platform with BLoC patterns.', href: '/flutter-developer-guideline', icon: Smartphone },
    ]
  },
  {
    title: 'DevOps & Platform',
    description: 'CI/CD, container orchestration, and infrastructure automation.',
    icon: Server,
    color: 'orange',
    cards: [
      { title: 'OpenShift Platform', description: 'Container orchestration and deployment.', href: '/openshift-guideline', icon: Server },
      { title: 'Jenkins CI/CD', description: 'Pipeline automation and builds.', href: '/jenkins-guideline', icon: Wrench },
      { title: 'SonarQube', description: 'Code quality and static analysis.', href: '/sonarqube-guideline', icon: ScanSearch },
      { title: 'Terraform IaC', description: 'Infrastructure as Code patterns.', href: '/terraform-guideline', icon: Terminal },
    ]
  },
  {
    title: 'Cloud & Architecture',
    description: 'Cloud computing fundamentals, AWS patterns, and cost optimization.',
    icon: Cloud,
    color: 'purple',
    cards: [
      { title: 'Cloud Computing 101', description: 'SaaS, PaaS, IaaS fundamentals.', href: '/cloud-computing-guideline', icon: Layers },
      { title: 'AWS Architecture', description: 'Well-Architected Framework.', href: '/aws-architecture-guideline', icon: Cloud },
      { title: 'FinOps Guide', description: 'Cloud cost optimization.', href: '/finops-guideline', icon: DollarSign },
      { title: 'Clean Architecture', description: 'DDD and layered patterns.', href: '/clean-architecture', icon: Layers },
    ]
  }
];

const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  emerald: { bg: 'bg-emerald-500/10', text: 'text-emerald-600', border: 'border-emerald-500/20' },
  blue: { bg: 'bg-blue-500/10', text: 'text-blue-600', border: 'border-blue-500/20' },
  orange: { bg: 'bg-orange-500/10', text: 'text-orange-600', border: 'border-orange-500/20' },
  purple: { bg: 'bg-purple-500/10', text: 'text-purple-600', border: 'border-purple-500/20' },
};

const HomePage: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <Layout showSidebar={false}>
      <Hero />

      {/* Categorized Documentation Sections */}
      <section className="py-16 lg:py-24">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Explore the Documentation
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive standards and strategies for the entire AII IT ecosystem.
            </p>
          </div>

          <div className="space-y-16">
            {categories.map((category, categoryIndex) => {
              const colors = categoryColors[category.color] || { bg: 'bg-primary/10', text: 'text-primary', border: 'border-primary/20' };
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: categoryIndex * 0.1 }}
                  className="space-y-6"
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl ${colors.bg} ${colors.border} border`}>
                      <category.icon className={`h-6 w-6 ${colors.text}`} />
                    </div>
                    <div>
                      <h3 className={`text-2xl font-bold ${colors.text}`}>{category.title}</h3>
                      <p className="text-sm text-muted-foreground">{category.description}</p>
                    </div>
                  </div>

                  {/* Category Cards */}
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                  >
                    {category.cards.map((card) => (
                      <motion.div key={card.href} variants={itemVariants}>
                        <PreviewLinkCard
                          href={card.href}
                          title={card.title}
                          description={card.description}
                          icon={<card.icon className="h-5 w-5" />}
                          className="h-full"
                        />
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works - Condensed */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                How It Works
              </h2>
              <p className="text-muted-foreground">
                Three simple steps to align with AII development standards.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: '01',
                  title: 'Read the Guidelines',
                  description: 'Explore standards tailored for your tech stack.',
                  icon: <FileCode className="h-6 w-6" />
                },
                {
                  step: '02',
                  title: 'Apply Patterns',
                  description: 'Implement Clean Code, Architecture and cloud best practices.',
                  icon: <Terminal className="h-6 w-6" />
                },
                {
                  step: '03',
                  title: 'Submit PR',
                  description: 'Follow our GitHub workflow for code reviews.',
                  icon: <CheckCircle2 className="h-6 w-6" />
                }
              ].map((item, i) => (
                <BlurReveal key={i} delay={i * 0.15} direction="up">
                  <div className="text-center group">
                    <AnimatedFeedbackIcon
                      icon={item.icon}
                      className="mx-auto mb-4"
                    />
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </BlurReveal>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button asChild size="lg" className="rounded-xl">
                <Link to="/github-axa-usage">
                  <GitBranch className="mr-2 h-4 w-4" />
                  View GitHub Workflow
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 lg:py-20">
        <div className="container px-4">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-2xl font-bold">Ready to get started?</h2>
            <p className="text-muted-foreground">
              Begin with our global coding standards, then dive into your specific tech stack.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="rounded-xl">
                <Link to="/coding-standard">
                  <Terminal className="mr-2 h-4 w-4" />
                  Global Standards
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-xl">
                <Link to="/clean-architecture">
                  <Layers className="mr-2 h-4 w-4" />
                  Architecture Guide
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-xl">
                <Link to="/finops-guideline">
                  <DollarSign className="mr-2 h-4 w-4" />
                  Cloud & FinOps
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;