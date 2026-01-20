import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface ArchitectureItem {
    label: string;
    sublabel?: string;
    icon?: LucideIcon;
}

export interface ArchitectureLayer {
    id: string;
    title: string;
    color: 'emerald' | 'blue' | 'amber' | 'red' | 'purple' | 'slate';
    items: ArchitectureItem[];
    nested?: {
        title: string;
        items: ArchitectureItem[];
    };
}

export interface ArchitectureDiagramProps {
    title: string;
    subtitle?: string;
    layers: ArchitectureLayer[];
    footer?: string;
    className?: string;
}

const colorMap = {
    emerald: {
        layer: 'bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-800',
        title: 'text-emerald-700 dark:text-emerald-400',
        dot: 'bg-emerald-500',
        nested: 'bg-emerald-100/50 dark:bg-emerald-900/30 border-emerald-300 dark:border-emerald-700',
    },
    blue: {
        layer: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800',
        title: 'text-blue-700 dark:text-blue-400',
        dot: 'bg-blue-500',
        nested: 'bg-blue-100/50 dark:bg-blue-900/30 border-blue-300 dark:border-blue-700',
    },
    amber: {
        layer: 'bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800',
        title: 'text-amber-700 dark:text-amber-400',
        dot: 'bg-amber-500',
        nested: 'bg-amber-100/50 dark:bg-amber-900/30 border-amber-300 dark:border-amber-700',
    },
    red: {
        layer: 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800',
        title: 'text-red-700 dark:text-red-400',
        dot: 'bg-red-500',
        nested: 'bg-red-100/50 dark:bg-red-900/30 border-red-300 dark:border-red-700',
    },
    purple: {
        layer: 'bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800',
        title: 'text-purple-700 dark:text-purple-400',
        dot: 'bg-purple-500',
        nested: 'bg-purple-100/50 dark:bg-purple-900/30 border-purple-300 dark:border-purple-700',
    },
    slate: {
        layer: 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700',
        title: 'text-slate-700 dark:text-slate-300',
        dot: 'bg-slate-500',
        nested: 'bg-slate-100/50 dark:bg-slate-700/50 border-slate-300 dark:border-slate-600',
    },
};

const ItemCard: React.FC<{ item: ArchitectureItem }> = ({ item }) => {
    const Icon = item.icon;
    return (
        <div className="px-4 py-2 rounded-lg bg-white dark:bg-slate-800 border shadow-sm text-center">
            {Icon && <Icon className="h-4 w-4 mx-auto mb-1 text-muted-foreground" />}
            <div className="text-xs font-bold">{item.label}</div>
            {item.sublabel && (
                <div className="text-[10px] text-muted-foreground">{item.sublabel}</div>
            )}
        </div>
    );
};

const ArchitectureDiagram: React.FC<ArchitectureDiagramProps> = ({
    title,
    subtitle,
    layers,
    footer,
    className,
}) => {
    return (
        <div
            className={cn(
                'p-6 rounded-2xl bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 border space-y-4',
                className
            )}
        >
            <div className="mb-2">
                <h4 className="font-bold text-sm">{title}</h4>
                {subtitle && <p className="text-xs text-muted-foreground">{subtitle}</p>}
            </div>

            {layers.map((layer) => {
                const colors = colorMap[layer.color];
                return (
                    <div
                        key={layer.id}
                        className={cn('p-4 rounded-xl border-2', colors.layer)}
                    >
                        <div className={cn('text-xs font-bold mb-3 flex items-center gap-2', colors.title)}>
                            <div className={cn('w-2 h-2 rounded-full', colors.dot)} />
                            {layer.title}
                        </div>

                        {layer.nested ? (
                            <div className={cn('p-3 rounded-lg border', colors.nested)}>
                                <div className={cn('text-xs font-semibold mb-2', colors.title)}>
                                    {layer.nested.title}
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {layer.nested.items.map((item, i) => (
                                        <div
                                            key={i}
                                            className="px-3 py-1.5 rounded bg-white dark:bg-slate-800 border text-xs"
                                        >
                                            {item.label}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <div className="flex flex-wrap gap-3">
                                {layer.items.map((item, i) => (
                                    <ItemCard key={i} item={item} />
                                ))}
                            </div>
                        )}
                    </div>
                );
            })}

            {footer && (
                <div className="text-[10px] text-muted-foreground text-center pt-2 border-t border-dashed">
                    {footer}
                </div>
            )}
        </div>
    );
};

export default ArchitectureDiagram;
