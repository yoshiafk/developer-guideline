import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Code2,
  BookOpen,
  Zap,
  ArrowRight,
  Github,
  Layers,
  Shield,
  Terminal,
  ChevronRight,
  BookMarked,
  Users
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';

const HomePage: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <Layout showSidebar={false}>
      <Hero />

      {/* Features Section */}
      <section className="py-24 bg-muted/30">
        <div className="container px-4">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
              Everything you need for <span className="text-gradient">Clean Development</span>
            </h2>
            <p className="text-muted-foreground max-w-[700px] text-lg">
              Standards and practices rigorously refined by AII's architectural board.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-8 md:grid-cols-3"
          >
            {[
              {
                icon: Layers,
                title: "Clean Architecture",
                description: "DDD-inspired architecture standards ensuring scalability and maintainability."
              },
              {
                icon: Shield,
                title: "Security First",
                description: "Built-in security practices and validation standards for enterprise grade software."
              },
              {
                icon: Terminal,
                title: "Modern Defaults",
                description: "Leveraging the latest language features and modern design patterns."
              }
            ].map((feature, index) => (
              <motion.div key={index} variants={itemVariants} className="glass-card rounded-2xl p-8 hover:bg-card/80 transition-all border group">
                <div className="mb-4 inline-flex p-3 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-24">
        <div className="container px-4">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="outline" className="px-3 py-1 bg-primary/10 text-primary border-primary/20">How it works</Badge>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Standardized <span className="text-gradient">Success</span></h2>
                <p className="text-muted-foreground text-lg">Following our guidelines ensures consistency across all AII projects, reducing friction during handovers and reviews.</p>
              </div>

              <div className="space-y-6">
                {[
                  { step: "01", title: "Read the Guidelines", desc: "Explore standards tailored for your specific tech stack." },
                  { step: "02", title: "Apply Patterns", desc: "Implement Clean Architecture and naming conventions." },
                  { step: "03", title: "Submit PR", desc: "Ensure your code aligns with our GitHub workflow standards." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 group">
                    <span className="text-2xl font-black text-primary/20 group-hover:text-primary/100 transition-colors">{item.step}</span>
                    <div className="space-y-1">
                      <h4 className="text-xl font-bold tracking-tight">{item.title}</h4>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 rounded-[2rem] -rotate-3 -z-10" />
              <div className="glass-card rounded-[2rem] p-8 md:p-12 shadow-2xl">
                <div className="bg-black/80 rounded-xl p-4 font-mono text-sm text-emerald-400 overflow-hidden">
                  <div className="flex gap-2 mb-4 opacity-50 border-b border-white/10 pb-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <p className="mb-2"><span className="text-blue-400"># Apply AII Standards</span></p>
                  <p className="mb-1"><span className="text-purple-400">dotnet</span> new aii-api -n MyProject</p>
                  <p className="mb-1 text-white/40">{"> Creating project MyProject..."}</p>
                  <p className="mb-1 text-white/40">{"> Injecting Clean Architecture layers..."}</p>
                  <p className="mb-1 text-white/40">{"> Applying Naming Conventions..."}</p>
                  <p><span className="text-green-500">✓ Done.</span> Project ready for review.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Showcase */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-primary/5" />
        <div className="container px-4">
          <div className="flex flex-col items-center text-center mb-16">
            <Badge variant="outline" className="mb-4 px-3 py-1 bg-primary/10 text-primary border-primary/20">Documentation Hub</Badge>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">Explore Our Guidelines</h2>
            <p className="text-muted-foreground max-w-[600px] text-lg">Dive deep into specific topics with our comprehensive guides covering development standards and best practices for every stack.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* .NET Card */}
            <Card className="glass-card group hover:scale-[1.02] transition-all duration-300">
              <CardHeader className="p-8">
                <div className="mb-4 inline-flex p-3 rounded-2xl bg-blue-500/10 text-blue-500 group-hover:bg-blue-500/20 transition-colors">
                  <Code2 className="h-8 w-8" />
                </div>
                <CardTitle className="text-2xl">.NET Development</CardTitle>
                <CardDescription className="text-base">
                  Clean Architecture, DDD patterns, and enterprise C# standards for backend excellence.
                </CardDescription>
              </CardHeader>
              <CardFooter className="p-8 pt-0">
                <Button asChild variant="secondary" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  <Link to="/dotnet-developer-guideline">
                    View Guidelines <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* React Card */}
            <Card className="glass-card group hover:scale-[1.02] transition-all duration-300">
              <CardHeader className="p-8">
                <div className="mb-4 inline-flex p-3 rounded-2xl bg-cyan-500/10 text-cyan-500 group-hover:bg-cyan-500/20 transition-colors">
                  <Code2 className="h-8 w-8" />
                </div>
                <CardTitle className="text-2xl">React Frontend</CardTitle>
                <CardDescription className="text-base">
                  Component architecture, state management, and modern React hooks best practices.
                </CardDescription>
              </CardHeader>
              <CardFooter className="p-8 pt-0">
                <Button asChild variant="secondary" className="w-full group-hover:bg-cyan-500 group-hover:text-white transition-all">
                  <Link to="/react-developer-guideline">
                    View Guidelines <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Java Card */}
            <Card className="glass-card group hover:scale-[1.02] transition-all duration-300">
              <CardHeader className="p-8">
                <div className="mb-4 inline-flex p-3 rounded-2xl bg-red-500/10 text-red-500 group-hover:bg-red-500/20 transition-colors">
                  <Code2 className="h-8 w-8" />
                </div>
                <CardTitle className="text-2xl">Java Backend</CardTitle>
                <CardDescription className="text-base">
                  Spring Boot standards, microservices patterns, and robust Java coding practices.
                </CardDescription>
              </CardHeader>
              <CardFooter className="p-8 pt-0">
                <Button asChild variant="secondary" className="w-full group-hover:bg-red-500 group-hover:text-white transition-all">
                  <Link to="/java-developer-guideline">
                    View Guidelines <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Python Card */}
            <Card className="glass-card group hover:scale-[1.02] transition-all duration-300">
              <CardHeader className="p-8">
                <div className="mb-4 inline-flex p-3 rounded-2xl bg-yellow-500/10 text-yellow-500 group-hover:bg-yellow-500/20 transition-colors">
                  <Code2 className="h-8 w-8" />
                </div>
                <CardTitle className="text-2xl">Python & AI</CardTitle>
                <CardDescription className="text-base">
                  FastAPI standards, data processing workflows, and AI integration guidelines.
                </CardDescription>
              </CardHeader>
              <CardFooter className="p-8 pt-0">
                <Button asChild variant="secondary" className="w-full group-hover:bg-yellow-600 group-hover:text-white transition-all">
                  <Link to="/python-developer-guideline">
                    View Guidelines <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Flutter Card */}
            <Card className="glass-card group hover:scale-[1.02] transition-all duration-300">
              <CardHeader className="p-8">
                <div className="mb-4 inline-flex p-3 rounded-2xl bg-sky-400/10 text-sky-400 group-hover:bg-sky-400/20 transition-colors">
                  <Code2 className="h-8 w-8" />
                </div>
                <CardTitle className="text-2xl">Flutter Mobile</CardTitle>
                <CardDescription className="text-base">
                  Cross-platform excellence, BLoC/Provider patterns, and UI/UX standards.
                </CardDescription>
              </CardHeader>
              <CardFooter className="p-8 pt-0">
                <Button asChild variant="secondary" className="w-full group-hover:bg-sky-400 group-hover:text-white transition-all">
                  <Link to="/flutter-developer-guideline">
                    View Guidelines <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <div className="flex flex-col gap-6">
              <Card className="glass group hover:bg-primary/5 transition-all">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary">
                    <Zap className="h-6 w-6" />
                  </div>
                  <div>
                    <CardTitle>Architecture Hub</CardTitle>
                    <CardDescription>Naming and DDD patterns.</CardDescription>
                  </div>
                </CardHeader>
                <CardFooter className="pt-0">
                  <Button asChild variant="ghost" className="p-0 hover:bg-transparent text-primary font-bold">
                    <Link to="/clean-architecture">Explore Architecture <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="glass group hover:bg-primary/5 transition-all">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary">
                    <BookMarked className="h-6 w-6" />
                  </div>
                  <div>
                    <CardTitle>Global Workflow</CardTitle>
                    <CardDescription>GitHub & collaboration standards.</CardDescription>
                  </div>
                </CardHeader>
                <CardFooter className="pt-0">
                  <Button asChild variant="ghost" className="p-0 hover:bg-transparent text-primary font-bold">
                    <Link to="/github-axa-usage">View Workflow <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-24">
        <div className="container px-4">
          <div className="glass-card rounded-[2.5rem] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 text-center md:text-left overflow-hidden relative">
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl -z-10" />

            <div className="flex-1 space-y-6 relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Join the AII Development <span className="text-gradient">Community</span></h2>
              <p className="text-muted-foreground text-lg md:text-xl max-w-xl">
                Connect with fellow developers across tech stacks, share knowledge, and contribute to our growing collection of best practices.
              </p>
              <Button size="lg" className="h-12 px-8 font-bold rounded-xl shadow-xl hover:shadow-primary/25 transition-all">
                Join Community
              </Button>
            </div>
            <div className="flex-1 flex justify-center relative z-10">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full glass flex items-center justify-center animate-pulse">
                <Users className="w-24 h-24 md:w-32 md:h-32 text-primary/50" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;