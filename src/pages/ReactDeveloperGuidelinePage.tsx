import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '@/components/PageHero';
import Layout from '@/components/Layout';
import OnThisPage from '@/components/OnThisPage';
import FileTree, { FileTreeItem } from '@/components/FileTree';
import CodeSnippet from '@/components/CodeSnippet';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import CallToAction from '@/components/CallToAction';
import {
  Atom,
  Layout as LayoutIcon,
  Zap,
  ShieldCheck,
  CheckCircle2,
  Layers,
  PenTool,
  FlaskConical,
  ArrowRight,
  BookOpen,
  CircleAlert as AlertCircle,
  FileCode,
  Settings,
  Bug,
  Palette,
  Database,
  Activity,
  Accessibility
} from 'lucide-react';
import PageNavigation from '../components/PageNavigation';

const chapters = [
  { id: "overview", title: "1. Project Overview", icon: BookOpen },
  { id: "components", title: "2. Component Architecture", icon: Layers },
  { id: "state", title: "3. State Management", icon: Zap },
  { id: "hooks", title: "4. Hooks Best Practices", icon: Settings },
  { id: "styling", title: "5. Styling Standards", icon: Palette },
  { id: "data-fetching", title: "6. Data Fetching", icon: Database },
  { id: "forms", title: "7. Forms & Validation", icon: ShieldCheck },
  { id: "testing", title: "8. Testing Standards", icon: FlaskConical },
  { id: "performance", title: "9. Performance", icon: Activity },
  { id: "accessibility", title: "10. Accessibility", icon: Accessibility },
];

const folderStructureData: FileTreeItem[] = [
  {
    name: "src",
    type: "folder",
    children: [
      {
        name: "components",
        type: "folder",
        children: [
          { name: "ui", type: "folder", comment: "Reusable UI primitives (Button, Card, etc.)" },
          { name: "forms", type: "folder", comment: "Form-specific components" },
          { name: "layout", type: "folder", comment: "Layout components (Header, Sidebar, etc.)" },
          { name: "features", type: "folder", comment: "Feature-specific components" }
        ]
      },
      { name: "hooks", type: "folder", comment: "Custom hooks" },
      { name: "lib", type: "folder", comment: "Utilities and helpers" },
      { name: "pages", type: "folder", comment: "Page components (route-level)" },
      { name: "services", type: "folder", comment: "API service functions" },
      { name: "stores", type: "folder", comment: "Global state (Zustand/Context)" },
      { name: "types", type: "folder", comment: "TypeScript type definitions" },
      { name: "styles", type: "folder", comment: "Global styles and themes" }
    ]
  }
];

const ReactDeveloperGuidelinePage: React.FC = () => {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Frontend & Mobile' },
    { label: 'React' }
  ];

  return (
    <Layout>
      <PageHero
        title="React Development Guideline"
        subtitle="Standardized practices for building modern, scalable, and maintainable frontend applications at AII."
        breadcrumbs={breadcrumbs}
        readingTime={35}
      />

      <div className="py-8 flex flex-col lg:flex-row gap-12">
        <main className="flex-1 min-w-0 space-y-16 pb-16">

          {/* Chapter 1: Project Overview */}
          <section id="overview" className="scroll-mt-28 space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 1</Badge>
              <h2 className="text-4xl font-extrabold tracking-tight">Project Overview</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                React is our primary choice for building dynamic user interfaces. These guidelines ensure <strong>consistency</strong>, <strong>performance</strong>, and <strong>accessibility</strong> across all AII web projects.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { text: "React 18+", icon: Atom },
                { text: "TypeScript (Strict)", icon: FileCode },
                { text: "Vite Build Tool", icon: Zap },
                { text: "TanStack Query", icon: Database },
                { text: "React Hook Form", icon: ShieldCheck },
                { text: "Vitest + Testing Library", icon: FlaskConical },
              ].map((tech, i) => (
                <div key={i} className="glass flex items-center gap-3 p-4 rounded-xl border border-border/50">
                  <tech.icon className="h-5 w-5 text-primary" />
                  <span className="font-semibold text-sm">{tech.text}</span>
                </div>
              ))}
            </div>

            {/* New Developer Checklist */}
            <div className="mt-12 p-8 rounded-3xl bg-cyan-500/5 border border-cyan-500/10 space-y-6">
              <div className="flex items-center gap-3 text-cyan-600">
                <div className="p-2 rounded-lg bg-cyan-500/10">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold">New Developer Checklist</h3>
              </div>
              <p className="text-muted-foreground">Follow these steps to get your first React project running at AII:</p>
              <div className="grid gap-4">
                {[
                  { step: "Install Node.js", desc: "Install Node.js 18+ LTS. Verify with: node --version" },
                  { step: "Clone Repository", desc: "Clone the project repository and navigate to the project folder." },
                  { step: "Install Dependencies", desc: "Run 'npm install' or 'pnpm install' to install all dependencies." },
                  { step: "Setup IDE", desc: "Install VS Code with ESLint, Prettier, and TypeScript extensions." },
                  { step: "Run Development Server", desc: "Execute 'npm run dev' to start the Vite development server." },
                  { step: "Run Tests", desc: "Execute 'npm run test' to verify the project is stable." },
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
          </section>

          <Separator />

          {/* Chapter 2: Component Architecture */}
          <section id="components" className="scroll-mt-28 space-y-12">
            <div className="space-y-4">
              <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 2</Badge>
              <h2 className="text-4xl font-extrabold tracking-tight">Component Architecture</h2>
              <p className="text-lg text-muted-foreground">We follow a functional component approach with strictly typed props and atomic design principles.</p>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <h4 className="text-xl font-bold flex items-center gap-2"><Atom className="h-5 w-5 text-cyan-500" /> Functional Components Only</h4>
                <p className="text-sm text-muted-foreground">Always prefer Functional Components with Hooks over Class Components. This leads to cleaner, more testable code.</p>
                <CodeSnippet
                  language="typescript"
                  code={`// ✅ CORRECT: Functional component with typed props
interface UserProfileProps {
  userId: string;
  name: string;
  role: 'admin' | 'user' | 'guest';
  onLogout?: () => void;
}

const UserProfile: React.FC<UserProfileProps> = ({ 
  userId, 
  name, 
  role, 
  onLogout 
}) => {
  return (
    <div className="flex items-center gap-4 p-4 border rounded-lg">
      <Avatar userId={userId} />
      <div>
        <h2 className="font-bold">{name}</h2>
        <Badge variant={role === 'admin' ? 'destructive' : 'secondary'}>
          {role}
        </Badge>
      </div>
      {onLogout && (
        <Button variant="ghost" onClick={onLogout}>
          Logout
        </Button>
      )}
    </div>
  );
};

export default UserProfile;`}
                />
              </div>

              <FileTree
                title="Project Structure"
                data={folderStructureData}
              />

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-5 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
                  <p className="text-xs font-bold uppercase text-emerald-600 mb-2">✅ DO</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Use functional components</li>
                    <li>• Define explicit prop types</li>
                    <li>• Keep components focused (SRP)</li>
                    <li>• Extract reusable logic to hooks</li>
                    <li>• Use composition over inheritance</li>
                  </ul>
                </div>
                <div className="p-5 rounded-xl bg-destructive/5 border border-destructive/20">
                  <p className="text-xs font-bold uppercase text-destructive mb-2">❌ DON'T</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Use class components</li>
                    <li>• Use 'any' type for props</li>
                    <li>• Create god components (500+ lines)</li>
                    <li>• Duplicate logic across components</li>
                    <li>• Nest components too deeply</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <Separator />

          {/* Chapter 3: State Management */}
          <section id="state" className="scroll-mt-28 space-y-12">
            <div className="space-y-4">
              <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 3</Badge>
              <h2 className="text-4xl font-extrabold tracking-tight">State Management</h2>
              <p className="text-lg text-muted-foreground">Choose the right tool for the right job based on state scope and complexity.</p>
            </div>

            <div className="space-y-8">
              <div className="p-6 rounded-2xl bg-muted/30 border space-y-4">
                <h4 className="font-bold">State Management Decision Tree</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-muted text-xs font-bold uppercase text-muted-foreground">
                      <tr>
                        <th className="px-4 py-3 text-left">State Type</th>
                        <th className="px-4 py-3 text-left">Solution</th>
                        <th className="px-4 py-3 text-left">When to Use</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      <tr><td className="px-4 py-2 font-medium">Local UI State</td><td className="px-4 py-2"><Badge>useState</Badge></td><td className="px-4 py-2">Toggle, form inputs, modals</td></tr>
                      <tr><td className="px-4 py-2 font-medium">Complex Local State</td><td className="px-4 py-2"><Badge>useReducer</Badge></td><td className="px-4 py-2">Multi-step forms, complex logic</td></tr>
                      <tr><td className="px-4 py-2 font-medium">Server State</td><td className="px-4 py-2"><Badge variant="secondary">TanStack Query</Badge></td><td className="px-4 py-2">API data fetching, caching</td></tr>
                      <tr><td className="px-4 py-2 font-medium">Global Client State</td><td className="px-4 py-2"><Badge variant="secondary">Zustand</Badge></td><td className="px-4 py-2">User preferences, app-wide settings</td></tr>
                      <tr><td className="px-4 py-2 font-medium">Shared Context</td><td className="px-4 py-2"><Badge variant="outline">Context API</Badge></td><td className="px-4 py-2">Theme, auth, localization</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-8">
                <CodeSnippet
                  title="Zustand Global Store"
                  language="typescript"
                  code={`// stores/useAuthStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  id: string;
  email: string;
  role: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (user: User) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      login: (user) => set({ user, isAuthenticated: true }),
      logout: () => set({ user: null, isAuthenticated: false }),
    }),
    { name: 'auth-storage' }
  )
);`}
                />
                <CodeSnippet
                  title="Context for Theme"
                  language="typescript"
                  code={`// contexts/ThemeContext.tsx
import { createContext, useContext, useState, ReactNode } from 'react';

type Theme = 'light' | 'dark' | 'system';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>('system');
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
};`}
                />
              </div>
            </div>
          </section>

          <Separator />

          {/* Chapter 4: Hooks Best Practices */}
          <section id="hooks" className="scroll-mt-28 space-y-12">
            <div className="space-y-4">
              <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 4</Badge>
              <h2 className="text-4xl font-extrabold tracking-tight">Hooks Best Practices</h2>
            </div>

            <div className="space-y-8">
              <CodeSnippet
                title="Custom Hook Pattern"
                language="typescript"
                code={`// hooks/useDebounce.ts
import { useState, useEffect } from 'react';

/**
 * Debounces a value by the specified delay.
 * Useful for search inputs to avoid excessive API calls.
 */
export function useDebounce<T>(value: T, delay: number = 500): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}

// Usage
const SearchComponent = () => {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 300);
  
  // Only triggers API call when user stops typing
  const { data } = useSearchQuery(debouncedQuery);
  
  return <input value={query} onChange={(e) => setQuery(e.target.value)} />;
};`}
              />

              <div className="grid grid-cols-1 gap-8">
                <div className="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 space-y-4">
                  <h5 className="font-bold text-emerald-600">✅ useEffect Best Practices</h5>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Always include dependencies</li>
                    <li>• Clean up subscriptions & timers</li>
                    <li>• Avoid async directly in useEffect</li>
                    <li>• Split unrelated effects</li>
                  </ul>
                  <CodeSnippet
                    language="typescript"
                    code={`// ✅ Correct: Async wrapper function
useEffect(() => {
  const fetchData = async () => {
    const result = await api.getUser(userId);
    setUser(result);
  };
  fetchData();
  
  return () => {
    // Cleanup if needed
  };
}, [userId]);`}
                  />
                </div>
                <div className="p-6 rounded-2xl bg-destructive/5 border border-destructive/20 space-y-4">
                  <h5 className="font-bold text-destructive">❌ Common Mistakes</h5>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Missing dependency array</li>
                    <li>• Objects/arrays in deps without memo</li>
                    <li>• Async function as effect callback</li>
                    <li>• Forgetting cleanup functions</li>
                  </ul>
                  <CodeSnippet
                    language="typescript"
                    code={`// ❌ WRONG: Async directly as callback
useEffect(async () => {
  const result = await api.getUser(userId);
  setUser(result);
}, [userId]); // This causes issues!`}
                  />
                </div>
              </div>
            </div>
          </section>

          <Separator />

          {/* Chapter 5: Styling Standards */}
          <section id="styling" className="scroll-mt-28 space-y-12">
            <div className="space-y-4">
              <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 5</Badge>
              <h2 className="text-4xl font-extrabold tracking-tight">Styling Standards</h2>
            </div>

            <div className="space-y-8">
              <div className="p-6 rounded-2xl bg-muted/30 border space-y-4">
                <h4 className="font-bold">Recommended Approaches</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    { name: "Tailwind CSS", desc: "Utility-first, rapid prototyping", badge: "Primary" },
                    { name: "CSS Modules", desc: "Scoped styles, traditional CSS", badge: "Alternative" },
                    { name: "shadcn/ui", desc: "Accessible component library", badge: "Components" },
                  ].map((item, i) => (
                    <div key={i} className="p-4 rounded-xl bg-background border">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-bold">{item.name}</span>
                        <Badge variant="outline" className="text-xs">{item.badge}</Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <CodeSnippet
                title="Component with Tailwind + cn() utility"
                language="typescript"
                code={`// components/ui/Button.tsx
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'border border-input hover:bg-accent hover:text-accent-foreground',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 px-3',
        lg: 'h-11 px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

interface ButtonProps 
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = ({ className, variant, size, ...props }: ButtonProps) => {
  return (
    <button 
      className={cn(buttonVariants({ variant, size, className }))} 
      {...props} 
    />
  );
};`}
              />
            </div>
          </section>

          <Separator />

          {/* Chapter 6: Data Fetching */}
          <section id="data-fetching" className="scroll-mt-28 space-y-12">
            <div className="space-y-4">
              <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 6</Badge>
              <h2 className="text-4xl font-extrabold tracking-tight">Data Fetching</h2>
              <p className="text-lg text-muted-foreground">TanStack Query for server state management and data synchronization.</p>
            </div>

            <CodeSnippet
              title="TanStack Query Usage"
              language="typescript"
              code={`// services/userService.ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '@/lib/api';

// Query keys factory
export const userKeys = {
  all: ['users'] as const,
  lists: () => [...userKeys.all, 'list'] as const,
  detail: (id: string) => [...userKeys.all, 'detail', id] as const,
};

// Fetch all users
export const useUsers = () => {
  return useQuery({
    queryKey: userKeys.lists(),
    queryFn: () => api.get<User[]>('/users'),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

// Fetch single user
export const useUser = (userId: string) => {
  return useQuery({
    queryKey: userKeys.detail(userId),
    queryFn: () => api.get<User>(\`/users/\${userId}\`),
    enabled: !!userId, // Only fetch when userId exists
  });
};

// Create user mutation with cache invalidation
export const useCreateUser = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (data: CreateUserInput) => api.post<User>('/users', data),
    onSuccess: () => {
      // Invalidate and refetch user list
      queryClient.invalidateQueries({ queryKey: userKeys.lists() });
    },
  });
};

// Usage in component
const UserList = () => {
  const { data: users, isLoading, error } = useUsers();
  const createUser = useCreateUser();
  
  if (isLoading) return <Skeleton />;
  if (error) return <ErrorMessage error={error} />;
  
  return (
    <div>
      {users?.map(user => <UserCard key={user.id} user={user} />)}
      <Button onClick={() => createUser.mutate({ name: 'New User' })}>
        Add User
      </Button>
    </div>
  );
};`}
            />
          </section>

          <Separator />

          {/* Chapter 7: Forms & Validation */}
          <section id="forms" className="scroll-mt-28 space-y-12">
            <div className="space-y-4">
              <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 7</Badge>
              <h2 className="text-4xl font-extrabold tracking-tight">Forms & Validation</h2>
            </div>

            <CodeSnippet
              title="React Hook Form + Zod Validation"
              language="typescript"
              code={`// schemas/userSchema.ts
import { z } from 'zod';

export const userSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Must contain uppercase letter')
    .regex(/[0-9]/, 'Must contain a number'),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword'],
});

export type UserFormData = z.infer<typeof userSchema>;

// components/UserForm.tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { userSchema, type UserFormData } from '@/schemas/userSchema';

const UserForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<UserFormData>({
    resolver: zodResolver(userSchema),
  });

  const onSubmit = async (data: UserFormData) => {
    await createUser(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" {...register('email')} />
        {errors.email && (
          <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" {...register('password')} />
        {errors.password && (
          <p className="text-sm text-destructive mt-1">{errors.password.message}</p>
        )}
      </div>

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Creating...' : 'Create Account'}
      </Button>
    </form>
  );
};`}
            />
          </section>

          <Separator />

          {/* Chapter 8: Testing Standards */}
          <section id="testing" className="scroll-mt-28 space-y-12">
            <div className="space-y-4">
              <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 8</Badge>
              <h2 className="text-4xl font-extrabold tracking-tight">Testing Standards</h2>
            </div>

            <div className="grid grid-cols-1 gap-8">
              <CodeSnippet
                title="Component Testing"
                language="typescript"
                code={`// components/Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Button } from './Button';

describe('Button', () => {
  it('renders with correct text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
  });

  it('calls onClick handler when clicked', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('is disabled when disabled prop is true', () => {
    render(<Button disabled>Disabled</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });
});`}
              />
              <CodeSnippet
                title="Hook Testing"
                language="typescript"
                code={`// hooks/useCounter.test.tsx
import { renderHook, act } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { useCounter } from './useCounter';

describe('useCounter', () => {
  it('initializes with default value', () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.count).toBe(0);
  });

  it('initializes with custom value', () => {
    const { result } = renderHook(() => useCounter(10));
    expect(result.current.count).toBe(10);
  });

  it('increments count', () => {
    const { result } = renderHook(() => useCounter());
    
    act(() => {
      result.current.increment();
    });
    
    expect(result.current.count).toBe(1);
  });
});`}
              />
            </div>
          </section>

          <Separator />

          {/* Chapter 9: Performance */}
          <section id="performance" className="scroll-mt-28 space-y-12">
            <div className="space-y-4">
              <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 9</Badge>
              <h2 className="text-4xl font-extrabold tracking-tight">Performance Optimization</h2>
            </div>

            <div className="grid grid-cols-1 gap-8">
              <Card className="glass shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Activity className="h-5 w-5 text-emerald-500" /> Code Splitting
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">Use React.lazy for route-level code splitting.</p>
                  <CodeSnippet
                    language="typescript"
                    code={`const Dashboard = lazy(() => import('./pages/Dashboard'));
const Settings = lazy(() => import('./pages/Settings'));

const App = () => (
  <Suspense fallback={<Loading />}>
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  </Suspense>
);`}
                  />
                </CardContent>
              </Card>

              <Card className="glass shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Zap className="h-5 w-5 text-yellow-500" /> Memoization
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">Use useMemo and useCallback strategically.</p>
                  <CodeSnippet
                    language="typescript"
                    code={`const ExpensiveList = ({ items, filter }) => {
  // Memoize expensive computation
  const filteredItems = useMemo(
    () => items.filter(item => item.name.includes(filter)),
    [items, filter]
  );

  // Memoize callback to prevent child re-renders
  const handleSelect = useCallback((id: string) => {
    setSelected(id);
  }, []);

  return <List items={filteredItems} onSelect={handleSelect} />;
};`}
                  />
                </CardContent>
              </Card>
            </div>
          </section>

          <Separator />

          {/* Chapter 10: Accessibility */}
          <section id="accessibility" className="scroll-mt-28 space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 10</Badge>
              <h2 className="text-4xl font-extrabold tracking-tight">Accessibility (a11y)</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
                <p className="text-xs font-bold uppercase text-emerald-600 mb-2">✅ CHECKLIST</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Use semantic HTML elements</li>
                  <li>• Add ARIA labels where needed</li>
                  <li>• Ensure keyboard navigation works</li>
                  <li>• Maintain focus management in modals</li>
                  <li>• Use sufficient color contrast</li>
                  <li>• Add alt text to all images</li>
                </ul>
              </div>
              <div className="space-y-4">
                <CodeSnippet
                  language="typescript"
                  code={`// Accessible button with icon
<Button aria-label="Close dialog" onClick={onClose}>
  <X className="h-4 w-4" />
</Button>

// Skip link for keyboard users
<a href="#main-content" className="sr-only focus:not-sr-only">
  Skip to main content
</a>

// Accessible form field
<div>
  <Label htmlFor="email">Email</Label>
  <Input 
    id="email" 
    type="email" 
    aria-describedby="email-error"
    aria-invalid={!!errors.email}
  />
  {errors.email && (
    <p id="email-error" role="alert" className="text-destructive">
      {errors.email.message}
    </p>
  )}
</div>`}
                />
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <CallToAction
            description="Following these React standards ensures your frontend applications are performant, accessible, and maintainable."
            primaryAction={{ label: "GitHub Workflow", href: "/github-axa-usage" }}
            secondaryAction={{ label: "Global Standards", href: "/coding-standard" }}
          />

        </main>

        <OnThisPage chapters={chapters} />
      </div>

      {/* Page Navigation */}
      <div className="px-4 pb-8">
        <PageNavigation
          previous={{ title: ".NET Development", href: "/dotnet-developer-guideline" }}
          next={{ title: "Flutter Development", href: "/flutter-developer-guideline" }}
        />
      </div>
    </Layout>
  );
};

export default ReactDeveloperGuidelinePage;
