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
  CheckCircle2
} from 'lucide-react';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import PreviewLinkCard from '@/components/animate-ui/PreviewLinkCard';
import AnimatedFeedbackIcon from '@/components/animate-ui/AnimatedFeedbackIcon';

// Documentation cards data
const docCards = [
  {
    title: '.NET Development',
    description: 'Clean Architecture, DDD, and enterprise C# standards.',
    href: '/dotnet-developer-guideline',
    icon: FileCode,
    color: 'blue'
  },
  {
    title: 'React Frontend',
    description: 'Component architecture and modern hooks patterns.',
    href: '/react-developer-guideline',
    icon: Atom,
    color: 'cyan'
  },
  {
    title: 'Java Backend',
    description: 'Spring Boot and microservices best practices.',
    href: '/java-developer-guideline',
    icon: Coffee,
    color: 'orange'
  },
  {
    title: 'Python & AI',
    description: 'FastAPI standards and AI integration guidelines.',
    href: '/python-developer-guideline',
    icon: Code2,
    color: 'yellow'
  },
  {
    title: 'Flutter Mobile',
    description: 'Cross-platform excellence with BLoC patterns.',
    href: '/flutter-developer-guideline',
    icon: Smartphone,
    color: 'sky'
  },
  {
    title: 'Clean Architecture',
    description: 'Naming conventions and DDD patterns.',
    href: '/clean-architecture',
    icon: Layers,
    color: 'purple'
  }
];

const colorVariants: Record<string, string> = {
  blue: 'bg-blue-500/10 text-blue-500 group-hover:bg-blue-500 group-hover:text-white',
  cyan: 'bg-cyan-500/10 text-cyan-500 group-hover:bg-cyan-500 group-hover:text-white',
  orange: 'bg-orange-500/10 text-orange-500 group-hover:bg-orange-500 group-hover:text-white',
  yellow: 'bg-yellow-500/10 text-yellow-600 group-hover:bg-yellow-500 group-hover:text-white',
  sky: 'bg-sky-500/10 text-sky-500 group-hover:bg-sky-500 group-hover:text-white',
  purple: 'bg-purple-500/10 text-purple-500 group-hover:bg-purple-500 group-hover:text-white'
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

      {/* Quick Links Grid */}
      <section className="py-16 lg:py-24">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Choose Your Stack
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive standards and strategies for the entire AII IT ecosystem.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {docCards.map((card) => (
              <motion.div key={card.href} variants={itemVariants}>
                <PreviewLinkCard
                  href={card.href}
                  title={card.title}
                  description={card.description}
                  className="h-full"
                />
              </motion.div>
            ))}
          </motion.div>
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
                  description: 'Implement Clean Architecture and naming conventions.',
                  icon: <Terminal className="h-6 w-6" />
                },
                {
                  step: '03',
                  title: 'Submit PR',
                  description: 'Follow our GitHub workflow for code reviews.',
                  icon: <CheckCircle2 className="h-6 w-6" />
                }
              ].map((item, i) => (
                <div key={i} className="text-center group">
                  <AnimatedFeedbackIcon
                    icon={item.icon}
                    className="mx-auto mb-4"
                  />
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
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
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;