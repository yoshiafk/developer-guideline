import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Rocket, BookOpen, ChevronRight, Search } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const navigate = useNavigate();

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const query = e.currentTarget.value;
      if (query.trim()) {
        navigate(`/search?q=${encodeURIComponent(query)}`);
      }
    }
  };

  const [isFocused, setIsFocused] = React.useState(false);

  return (
    <section className="relative overflow-hidden pt-16 pb-24 lg:pt-32 lg:pb-40">
      {/* Dynamic Background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_45%_at_50%_50%,rgba(0,51,160,0.08)_0%,transparent_100%)]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />

      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-6"
          >
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              AII Developer <span className="text-gradient">Guidelines</span>
            </h1>
            <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl lg:text-2xl">
              Enterprise-grade development standards across all tech stacks, powered by Clean Architecture and AII best practices.
            </p>
          </motion.div>

          {/* Prompt Search Bar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
              opacity: 1,
              scale: isFocused ? 1.02 : 1,
              y: isFocused ? -4 : 0
            }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-2xl px-4 md:px-0"
          >
            <div className="relative group">
              <motion.div
                animate={{
                  opacity: isFocused ? 0.6 : 0.25,
                  scale: isFocused ? 1.05 : 1
                }}
                className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-400 rounded-2xl blur group-hover:opacity-50 transition duration-500"
              />
              <div className={`relative glass rounded-2xl flex items-center p-2 shadow-2xl transition-all duration-300 ${isFocused ? 'bg-background/80' : ''}`}>
                <Search className={`ml-4 h-6 w-6 transition-colors duration-300 ${isFocused ? 'text-primary' : 'text-muted-foreground'}`} />
                <input
                  type="text"
                  placeholder="What are you looking for? (e.g. 'branching', 'Clean Architecture', 'async')"
                  className="w-full bg-transparent border-none outline-none focus:outline-none focus:ring-0 px-4 py-3 text-lg"
                  onKeyDown={handleSearch}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                />
                <div className={`hidden sm:flex items-center gap-1 px-3 py-1.5 rounded-xl border transition-colors duration-300 ${isFocused ? 'bg-primary/10 border-primary/20 text-primary' : 'bg-muted text-muted-foreground'}`}>
                  <span className="text-xs">⌘</span>
                  <span className="text-xs">K</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-6"
          >
            <Button asChild size="lg" className="h-12 px-8 rounded-xl shadow-lg hover:shadow-primary/20 transition-all font-bold">
              <Link to="/github-axa-usage">
                <Rocket className="mr-2 h-5 w-5" />
                Get Started
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 px-8 rounded-xl glass hover:bg-muted/50 transition-all font-bold">
              <Link to="/coding-standard">
                <BookOpen className="mr-2 h-5 w-5" />
                Explore Guidelines
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;