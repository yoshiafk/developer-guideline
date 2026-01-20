# Component Integration Mapping

## Overview

This document maps your existing UI components to CMS content blocks, ensuring your current design system is preserved when integrating the CMS.

---

## Current Design System Analysis

### Design Tokens (CSS Variables)

Your application uses a well-structured CSS variable system that the CMS will inherit:

```css
/* Light Mode */
:root {
  --background: 0 0% 100%;
  --foreground: 240 10% 3.9%;
  --primary: 221 100% 31%;        /* AII Blue */
  --primary-rgb: 0, 51, 160;
  --muted: 240 4.8% 95.9%;
  --muted-foreground: 240 3.8% 46.1%;
  --border: 240 5.9% 90%;
  --radius: 0.5rem;
}

/* Dark Mode */
.dark {
  --background: 240 10% 3.9%;
  --foreground: 0 0% 98%;
  --primary: 0 0% 98%;
  --muted: 240 3.7% 15.9%;
  --border: 240 3.7% 15.9%;
}
```

### Component Library Stack

| Layer | Technology | CMS Compatibility |
|-------|------------|-------------------|
| Base Components | Radix UI | ✅ Payload uses Radix UI |
| Styled Components | shadcn/ui pattern | ✅ Same approach |
| Animations | Framer Motion | ✅ Full support |
| Icons | Lucide React | ✅ Same library |
| Styling | Tailwind CSS | ✅ Full support |

---

## Component to CMS Block Mapping

### Core Content Components

| Your Component | Location | CMS Block Type | Integration |
|----------------|----------|----------------|-------------|
| `CodeSnippet` | `src/components/CodeSnippet.tsx` | `code` | Direct reuse |
| `ContentSection` | `src/components/ContentSection.tsx` | `section` | Direct reuse |
| `CallToAction` | `src/components/CallToAction.tsx` | `cta` | Direct reuse |
| `FeatureCard` | `src/components/FeatureCard.tsx` | `feature` | Direct reuse |
| `StepCard` | `src/components/StepCard.tsx` | `step` | Direct reuse |
| `QuickReferenceCard` | `src/components/QuickReferenceCard.tsx` | `reference` | Direct reuse |
| `ComparisonCard` | `src/components/ComparisonCard.tsx` | `comparison` | Direct reuse |
| `FileTree` | `src/components/FileTree.tsx` | `filetree` | Direct reuse |

### Animation Components (animate-ui)

| Your Component | Location | CMS Usage |
|----------------|----------|-----------|
| `GradientText` | `src/components/animate-ui/GradientText.tsx` | Inline rich text styling |
| `HighlightText` | `src/components/animate-ui/HighlightText.tsx` | Inline emphasis |
| `ShimmerButton` | `src/components/animate-ui/ShimmerButton.tsx` | CTA blocks |
| `AnimatedAccordion` | `src/components/animate-ui/AnimatedAccordion.tsx` | Collapsible sections |
| `AnimatedTabs` | `src/components/animate-ui/AnimatedTabs.tsx` | Tabbed content blocks |
| `AnimatedCodeTabs` | `src/components/animate-ui/AnimatedCodeTabs.tsx` | Multi-language code |
| `BlurReveal` | `src/components/animate-ui/BlurReveal.tsx` | Section reveals |
| `CountingNumber` | `src/components/animate-ui/CountingNumber.tsx` | Statistics blocks |

### UI Components (shadcn/ui)

| Your Component | Location | CMS Usage |
|----------------|----------|-----------|
| `Button` | `src/components/ui/button.tsx` | Action buttons |
| `Card` | `src/components/ui/card.tsx` | Content cards |
| `Badge` | `src/components/ui/badge.tsx` | Labels and tags |
| `Tabs` | `src/components/ui/tabs.tsx` | Tab navigation |
| `Tooltip` | `src/components/ui/tooltip.tsx` | Help text |

---

## CMS Block Definitions

### Block Type: Code

Maps to your `CodeSnippet.tsx` component.

```typescript
// cms/src/blocks/CodeBlock.ts
import { Block } from 'payload/types';

export const CodeBlock: Block = {
  slug: 'code',
  labels: {
    singular: 'Code Block',
    plural: 'Code Blocks',
  },
  fields: [
    {
      name: 'language',
      type: 'select',
      required: true,
      options: [
        { label: 'TypeScript', value: 'typescript' },
        { label: 'JavaScript', value: 'javascript' },
        { label: 'Java', value: 'java' },
        { label: 'Python', value: 'python' },
        { label: 'C#', value: 'csharp' },
        { label: 'YAML', value: 'yaml' },
        { label: 'Bash', value: 'bash' },
        { label: 'SQL', value: 'sql' },
        { label: 'Dockerfile', value: 'dockerfile' },
        { label: 'JSON', value: 'json' },
      ],
      defaultValue: 'typescript',
    },
    {
      name: 'title',
      type: 'text',
      label: 'Filename or Title',
    },
    {
      name: 'code',
      type: 'code',
      required: true,
      admin: {
        language: 'typescript', // Default syntax highlighting
      },
    },
    {
      name: 'showLineNumbers',
      type: 'checkbox',
      defaultValue: false,
    },
  ],
};
```

**Frontend Renderer:**

```tsx
// src/components/cms/blocks/CodeBlockRenderer.tsx
import CodeSnippet from '@/components/CodeSnippet';

interface CodeBlockData {
  language: string;
  title?: string;
  code: string;
  showLineNumbers?: boolean;
}

export function CodeBlockRenderer({ data }: { data: CodeBlockData }) {
  return (
    <CodeSnippet
      language={data.language}
      title={data.title}
      code={data.code}
      showLineNumbers={data.showLineNumbers}
      showCopyButton
    />
  );
}
```

---

### Block Type: Callout

Maps to callout/alert patterns in your guideline pages.

```typescript
// cms/src/blocks/CalloutBlock.ts
import { Block } from 'payload/types';

export const CalloutBlock: Block = {
  slug: 'callout',
  labels: {
    singular: 'Callout',
    plural: 'Callouts',
  },
  fields: [
    {
      name: 'type',
      type: 'select',
      required: true,
      options: [
        { label: 'Note', value: 'note' },
        { label: 'Tip', value: 'tip' },
        { label: 'Important', value: 'important' },
        { label: 'Warning', value: 'warning' },
        { label: 'Caution', value: 'caution' },
      ],
      defaultValue: 'note',
    },
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
    },
  ],
};
```

**Frontend Renderer:**

```tsx
// src/components/cms/blocks/CalloutBlockRenderer.tsx
import { cn } from '@/lib/utils';
import { Info, Lightbulb, AlertTriangle, AlertCircle, ShieldAlert } from 'lucide-react';

const calloutConfig = {
  note: {
    icon: Info,
    className: 'border-blue-500/30 bg-blue-500/10 text-blue-700 dark:text-blue-300',
  },
  tip: {
    icon: Lightbulb,
    className: 'border-green-500/30 bg-green-500/10 text-green-700 dark:text-green-300',
  },
  important: {
    icon: AlertCircle,
    className: 'border-purple-500/30 bg-purple-500/10 text-purple-700 dark:text-purple-300',
  },
  warning: {
    icon: AlertTriangle,
    className: 'border-yellow-500/30 bg-yellow-500/10 text-yellow-700 dark:text-yellow-300',
  },
  caution: {
    icon: ShieldAlert,
    className: 'border-red-500/30 bg-red-500/10 text-red-700 dark:text-red-300',
  },
};

interface CalloutBlockData {
  type: keyof typeof calloutConfig;
  title?: string;
  content: any; // Rich text content
}

export function CalloutBlockRenderer({ data }: { data: CalloutBlockData }) {
  const config = calloutConfig[data.type];
  const Icon = config.icon;

  return (
    <div className={cn(
      'my-6 rounded-lg border-l-4 p-4',
      config.className
    )}>
      <div className="flex items-start gap-3">
        <Icon className="h-5 w-5 shrink-0 mt-0.5" />
        <div className="flex-1">
          {data.title && (
            <p className="font-semibold mb-1">{data.title}</p>
          )}
          <RichTextContent content={data.content} />
        </div>
      </div>
    </div>
  );
}
```

---

### Block Type: Accordion

Maps to your `AnimatedAccordion.tsx` component.

```typescript
// cms/src/blocks/AccordionBlock.ts
import { Block } from 'payload/types';

export const AccordionBlock: Block = {
  slug: 'accordion',
  labels: {
    singular: 'Accordion',
    plural: 'Accordions',
  },
  fields: [
    {
      name: 'items',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'content',
          type: 'richText',
          required: true,
        },
      ],
    },
    {
      name: 'defaultOpen',
      type: 'number',
      label: 'Default Open Index (0-based)',
      defaultValue: 0,
    },
  ],
};
```

**Frontend Renderer:**

```tsx
// src/components/cms/blocks/AccordionBlockRenderer.tsx
import { AnimatedAccordion } from '@/components/animate-ui/AnimatedAccordion';

interface AccordionBlockData {
  items: Array<{
    title: string;
    content: any;
  }>;
  defaultOpen?: number;
}

export function AccordionBlockRenderer({ data }: { data: AccordionBlockData }) {
  const formattedItems = data.items.map((item, index) => ({
    id: `item-${index}`,
    trigger: item.title,
    content: <RichTextContent content={item.content} />,
  }));

  return (
    <AnimatedAccordion 
      items={formattedItems}
      defaultValue={data.defaultOpen !== undefined ? `item-${data.defaultOpen}` : undefined}
    />
  );
}
```

---

### Block Type: Feature Grid

Maps to your `FeatureCard.tsx` component.

```typescript
// cms/src/blocks/FeatureGridBlock.ts
import { Block } from 'payload/types';

export const FeatureGridBlock: Block = {
  slug: 'featureGrid',
  labels: {
    singular: 'Feature Grid',
    plural: 'Feature Grids',
  },
  fields: [
    {
      name: 'columns',
      type: 'select',
      options: [
        { label: '2 Columns', value: '2' },
        { label: '3 Columns', value: '3' },
        { label: '4 Columns', value: '4' },
      ],
      defaultValue: '3',
    },
    {
      name: 'features',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'icon',
          type: 'select',
          options: [
            { label: 'Code', value: 'code' },
            { label: 'Shield', value: 'shield' },
            { label: 'Zap', value: 'zap' },
            { label: 'Lock', value: 'lock' },
            { label: 'Server', value: 'server' },
            { label: 'Database', value: 'database' },
            { label: 'Cloud', value: 'cloud' },
            { label: 'Terminal', value: 'terminal' },
          ],
        },
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
        },
      ],
    },
  ],
};
```

**Frontend Renderer:**

```tsx
// src/components/cms/blocks/FeatureGridBlockRenderer.tsx
import FeatureCard from '@/components/FeatureCard';
import { Code, Shield, Zap, Lock, Server, Database, Cloud, Terminal } from 'lucide-react';
import { cn } from '@/lib/utils';

const iconMap = {
  code: Code,
  shield: Shield,
  zap: Zap,
  lock: Lock,
  server: Server,
  database: Database,
  cloud: Cloud,
  terminal: Terminal,
};

interface FeatureGridBlockData {
  columns: '2' | '3' | '4';
  features: Array<{
    icon: keyof typeof iconMap;
    title: string;
    description: string;
  }>;
}

export function FeatureGridBlockRenderer({ data }: { data: FeatureGridBlockData }) {
  const gridCols = {
    '2': 'md:grid-cols-2',
    '3': 'md:grid-cols-2 lg:grid-cols-3',
    '4': 'md:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <div className={cn('grid gap-6 my-8', gridCols[data.columns])}>
      {data.features.map((feature, index) => (
        <FeatureCard
          key={index}
          icon={iconMap[feature.icon]}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  );
}
```

---

### Block Type: Call to Action

Maps to your `CallToAction.tsx` and `ShimmerButton.tsx` components.

```typescript
// cms/src/blocks/CTABlock.ts
import { Block } from 'payload/types';

export const CTABlock: Block = {
  slug: 'cta',
  labels: {
    singular: 'Call to Action',
    plural: 'Call to Actions',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'subtitle',
      type: 'text',
    },
    {
      name: 'primaryButton',
      type: 'group',
      fields: [
        { name: 'text', type: 'text', required: true },
        { name: 'href', type: 'text', required: true },
        { name: 'variant', type: 'select', options: [
          { label: 'Primary (Shimmer)', value: 'shimmer' },
          { label: 'Default', value: 'default' },
          { label: 'Outline', value: 'outline' },
        ], defaultValue: 'shimmer' },
      ],
    },
    {
      name: 'secondaryButton',
      type: 'group',
      fields: [
        { name: 'text', type: 'text' },
        { name: 'href', type: 'text' },
      ],
    },
    {
      name: 'style',
      type: 'select',
      options: [
        { label: 'Default (Card)', value: 'card' },
        { label: 'Full Width Banner', value: 'banner' },
        { label: 'Minimal', value: 'minimal' },
      ],
      defaultValue: 'card',
    },
  ],
};
```

**Frontend Renderer:**

```tsx
// src/components/cms/blocks/CTABlockRenderer.tsx
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ShimmerButton } from '@/components/animate-ui/ShimmerButton';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CTABlockData {
  title: string;
  subtitle?: string;
  primaryButton: {
    text: string;
    href: string;
    variant: 'shimmer' | 'default' | 'outline';
  };
  secondaryButton?: {
    text?: string;
    href?: string;
  };
  style: 'card' | 'banner' | 'minimal';
}

export function CTABlockRenderer({ data }: { data: CTABlockData }) {
  const styleClasses = {
    card: 'rounded-2xl border border-border bg-card p-8 my-12',
    banner: 'py-16 my-12 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5',
    minimal: 'py-8 my-8',
  };

  return (
    <div className={cn('text-center', styleClasses[data.style])}>
      <h3 className="text-2xl font-bold mb-2">{data.title}</h3>
      {data.subtitle && (
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">{data.subtitle}</p>
      )}
      <div className="flex items-center justify-center gap-4 flex-wrap">
        {data.primaryButton.variant === 'shimmer' ? (
          <ShimmerButton asChild>
            <Link to={data.primaryButton.href}>
              {data.primaryButton.text}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </ShimmerButton>
        ) : (
          <Button variant={data.primaryButton.variant} asChild>
            <Link to={data.primaryButton.href}>
              {data.primaryButton.text}
            </Link>
          </Button>
        )}
        
        {data.secondaryButton?.text && data.secondaryButton?.href && (
          <Button variant="outline" asChild>
            <Link to={data.secondaryButton.href}>
              {data.secondaryButton.text}
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
}
```

---

### Block Type: File Tree

Maps to your `FileTree.tsx` component.

```typescript
// cms/src/blocks/FileTreeBlock.ts
import { Block } from 'payload/types';

export const FileTreeBlock: Block = {
  slug: 'fileTree',
  labels: {
    singular: 'File Tree',
    plural: 'File Trees',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Optional Title',
    },
    {
      name: 'structure',
      type: 'code',
      required: true,
      admin: {
        language: 'plaintext',
        description: 'Enter file tree structure. Use spaces for indentation.',
      },
    },
  ],
};
```

**Frontend Renderer:**

```tsx
// src/components/cms/blocks/FileTreeBlockRenderer.tsx
import FileTree from '@/components/FileTree';

interface FileTreeBlockData {
  title?: string;
  structure: string;
}

function parseFileTreeString(structure: string) {
  // Parse the plain text structure into FileTree format
  const lines = structure.trim().split('\n');
  // ... parsing logic
  return parsedTree;
}

export function FileTreeBlockRenderer({ data }: { data: FileTreeBlockData }) {
  const tree = parseFileTreeString(data.structure);
  
  return (
    <div className="my-6">
      {data.title && (
        <h4 className="text-sm font-medium text-muted-foreground mb-2">{data.title}</h4>
      )}
      <FileTree items={tree} />
    </div>
  );
}
```

---

### Block Type: Tabs

Maps to your `AnimatedTabs.tsx` or `AnimatedCodeTabs.tsx` components.

```typescript
// cms/src/blocks/TabsBlock.ts
import { Block } from 'payload/types';

export const TabsBlock: Block = {
  slug: 'tabs',
  labels: {
    singular: 'Tabs',
    plural: 'Tabs',
  },
  fields: [
    {
      name: 'variant',
      type: 'select',
      options: [
        { label: 'Default', value: 'default' },
        { label: 'Code Tabs', value: 'code' },
      ],
      defaultValue: 'default',
    },
    {
      name: 'tabs',
      type: 'array',
      required: true,
      fields: [
        { name: 'label', type: 'text', required: true },
        { name: 'value', type: 'text', required: true },
        { name: 'content', type: 'richText', required: true },
      ],
    },
  ],
};
```

---

## Master Block Renderer

Create a unified renderer that maps all CMS blocks to your components:

```tsx
// src/components/cms/BlockRenderer.tsx
import React from 'react';
import { CodeBlockRenderer } from './blocks/CodeBlockRenderer';
import { CalloutBlockRenderer } from './blocks/CalloutBlockRenderer';
import { AccordionBlockRenderer } from './blocks/AccordionBlockRenderer';
import { FeatureGridBlockRenderer } from './blocks/FeatureGridBlockRenderer';
import { CTABlockRenderer } from './blocks/CTABlockRenderer';
import { FileTreeBlockRenderer } from './blocks/FileTreeBlockRenderer';
import { TabsBlockRenderer } from './blocks/TabsBlockRenderer';

// Block type to renderer mapping
const blockRenderers: Record<string, React.FC<{ data: any }>> = {
  code: CodeBlockRenderer,
  callout: CalloutBlockRenderer,
  accordion: AccordionBlockRenderer,
  featureGrid: FeatureGridBlockRenderer,
  cta: CTABlockRenderer,
  fileTree: FileTreeBlockRenderer,
  tabs: TabsBlockRenderer,
};

interface ContentBlock {
  id: string;
  blockType: string;
  [key: string]: any;
}

interface BlockRendererProps {
  blocks: ContentBlock[];
}

export function BlockRenderer({ blocks }: BlockRendererProps) {
  return (
    <div className="content-blocks">
      {blocks.map((block) => {
        const Renderer = blockRenderers[block.blockType];
        
        if (!Renderer) {
          console.warn(`Unknown block type: ${block.blockType}`);
          return null;
        }
        
        return (
          <Renderer 
            key={block.id} 
            data={block} 
          />
        );
      })}
    </div>
  );
}
```

---

## Rich Text Configuration

Configure Payload's Lexical rich text editor to support your inline components:

```typescript
// cms/src/richtext/config.ts
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import {
  BoldFeature,
  ItalicFeature,
  UnderlineFeature,
  StrikethroughFeature,
  LinkFeature,
  HeadingFeature,
  ParagraphFeature,
  UnorderedListFeature,
  OrderedListFeature,
  BlockquoteFeature,
  InlineCodeFeature,
} from '@payloadcms/richtext-lexical';

export const richTextEditor = lexicalEditor({
  features: [
    BoldFeature(),
    ItalicFeature(),
    UnderlineFeature(),
    StrikethroughFeature(),
    LinkFeature({
      fields: [
        {
          name: 'rel',
          type: 'select',
          options: ['noopener', 'noreferrer', 'nofollow'],
        },
      ],
    }),
    HeadingFeature({
      enabledHeadingSizes: ['h2', 'h3', 'h4'],
    }),
    ParagraphFeature(),
    UnorderedListFeature(),
    OrderedListFeature(),
    BlockquoteFeature(),
    InlineCodeFeature(),
  ],
});
```

---

## Theme Integration

### Payload Admin Theme

Create a custom theme for Payload admin that matches your design:

```typescript
// cms/src/admin/theme.ts
export const adminTheme = {
  colors: {
    // Match your CSS variables
    theme: {
      elevation: {
        150: 'hsl(240, 10%, 3.9%)', // --background dark
        200: 'hsl(240, 3.7%, 15.9%)', // --secondary dark
      },
    },
    text: 'hsl(0, 0%, 98%)', // --foreground dark
    textMuted: 'hsl(240, 5%, 64.9%)', // --muted-foreground dark
  },
  fontFamily: {
    body: 'Inter, system-ui, sans-serif',
    mono: 'JetBrains Mono, monospace',
  },
  radii: {
    base: '0.5rem', // --radius
  },
};
```

### Shared Tailwind Configuration

Export your Tailwind config for the CMS to use:

```typescript
// shared/tailwind.preset.ts
export const sharedPreset = {
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        // ... rest of your color config
      },
    },
  },
};
```

---

## Component Compatibility Checklist

### ✅ Fully Compatible (Direct Reuse)

- [x] `CodeSnippet.tsx` - Code blocks with syntax highlighting
- [x] `FeatureCard.tsx` - Feature grid items
- [x] `StepCard.tsx` - Step-by-step guides
- [x] `FileTree.tsx` - Directory structure display
- [x] `AnimatedAccordion.tsx` - Collapsible FAQ/sections
- [x] `AnimatedTabs.tsx` - Tabbed content
- [x] `ShimmerButton.tsx` - Premium CTAs
- [x] `GradientText.tsx` - Styled headings
- [x] `Button.tsx` - Standard buttons
- [x] `Card.tsx` - Content cards
- [x] `Badge.tsx` - Labels and tags

### ⚠️ Minor Adaptation Needed

- [ ] `DocsSidebar.tsx` - Fetch navigation from CMS instead of hardcoded array
- [ ] `OnThisPage.tsx` - Generate from CMS section anchors
- [ ] `Hero.tsx` - Make content editable via CMS globals
- [ ] `PageHero.tsx` - Accept CMS page metadata

### 🔄 CMS-Only (New Components)

- [ ] `BlockRenderer.tsx` - Master block dispatcher
- [ ] `RichTextContent.tsx` - Lexical content renderer
- [ ] `CMSImage.tsx` - Optimized image with CMS integration

---

## Migration Path

### Phase 1: Parallel Operation
- CMS runs alongside static pages
- Test with 1-2 pages first
- Components work with both static and CMS content

### Phase 2: Gradual Migration
- Migrate pages one category at a time
- Keep static fallbacks during transition
- Validate component rendering with CMS data

### Phase 3: Full CMS
- All content managed by CMS
- Static components remain as renderers
- Navigation fetched from CMS

---

## Summary

Your existing component library is **100% compatible** with Payload CMS integration:

| Aspect | Compatibility |
|--------|---------------|
| Design Tokens | ✅ Direct inheritance via CSS variables |
| Component Library | ✅ Same stack (Radix UI, Tailwind) |
| Animations | ✅ Framer Motion works in CMS blocks |
| Icons | ✅ Same Lucide React icons |
| Dark Mode | ✅ CSS variable system preserved |
| Accessibility | ✅ ARIA attributes and focus states maintained |

The CMS will **enhance** your workflow without **changing** your visual design.
