import React from 'react';
import { LucideIcon, ArrowRight, ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface FlowStep {
    id: string;
    label: string;
    sublabel?: string;
    icon?: LucideIcon;
    color?: 'blue' | 'green' | 'amber' | 'red' | 'purple' | 'slate';
}

export interface FlowGroup {
    title?: string;
    steps: FlowStep[];
}

export interface FlowDiagramProps {
    title?: string;
    subtitle?: string;
    groups?: FlowGroup[];
    steps?: FlowStep[];
    direction?: 'horizontal' | 'vertical';
    className?: string;
}

const colorMap = {
    blue: {
        bg: 'bg-blue-50 dark:bg-blue-900/20',
        border: 'border-blue-200 dark:border-blue-800',
        text: 'text-blue-700 dark:text-blue-400',
        icon: 'text-blue-500',
        arrow: 'text-blue-400',
    },
    green: {
        bg: 'bg-emerald-50 dark:bg-emerald-900/20',
        border: 'border-emerald-200 dark:border-emerald-800',
        text: 'text-emerald-700 dark:text-emerald-400',
        icon: 'text-emerald-500',
        arrow: 'text-emerald-400',
    },
    amber: {
        bg: 'bg-amber-50 dark:bg-amber-900/20',
        border: 'border-amber-200 dark:border-amber-800',
        text: 'text-amber-700 dark:text-amber-400',
        icon: 'text-amber-500',
        arrow: 'text-amber-400',
    },
    red: {
        bg: 'bg-red-50 dark:bg-red-900/20',
        border: 'border-red-200 dark:border-red-800',
        text: 'text-red-700 dark:text-red-400',
        icon: 'text-red-500',
        arrow: 'text-red-400',
    },
    purple: {
        bg: 'bg-purple-50 dark:bg-purple-900/20',
        border: 'border-purple-200 dark:border-purple-800',
        text: 'text-purple-700 dark:text-purple-400',
        icon: 'text-purple-500',
        arrow: 'text-purple-400',
    },
    slate: {
        bg: 'bg-slate-50 dark:bg-slate-800',
        border: 'border-slate-200 dark:border-slate-700',
        text: 'text-slate-700 dark:text-slate-300',
        icon: 'text-slate-500',
        arrow: 'text-slate-400',
    },
};

const FlowStepCard: React.FC<{ step: FlowStep; isLast: boolean; direction: 'horizontal' | 'vertical' }> = ({
    step,
    isLast,
    direction,
}) => {
    const colors = colorMap[step.color || 'slate'];
    const Icon = step.icon;
    const Arrow = direction === 'horizontal' ? ArrowRight : ArrowDown;

    return (
        <div className={cn('flex items-center gap-2', direction === 'vertical' && 'flex-col')}>
            <div
                className={cn(
                    'flex items-center gap-3 px-4 py-3 rounded-xl border-2 shadow-sm',
                    colors.bg,
                    colors.border
                )}
            >
                {Icon && <Icon className={cn('h-5 w-5 shrink-0', colors.icon)} />}
                <div>
                    <div className={cn('text-sm font-semibold', colors.text)}>{step.label}</div>
                    {step.sublabel && (
                        <div className="text-xs text-muted-foreground">{step.sublabel}</div>
                    )}
                </div>
            </div>
            {!isLast && <Arrow className={cn('h-4 w-4 shrink-0', colors.arrow)} />}
        </div>
    );
};

const FlowDiagram: React.FC<FlowDiagramProps> = ({
    title,
    subtitle,
    groups,
    steps,
    direction = 'horizontal',
    className,
}) => {
    const renderSteps = (stepsToRender: FlowStep[]) => (
        <div
            className={cn(
                'flex gap-2',
                direction === 'horizontal' ? 'flex-wrap items-center' : 'flex-col'
            )}
        >
            {stepsToRender.map((step, index) => (
                <FlowStepCard
                    key={step.id}
                    step={step}
                    isLast={index === stepsToRender.length - 1}
                    direction={direction}
                />
            ))}
        </div>
    );

    return (
        <div
            className={cn(
                'p-6 rounded-2xl bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 border',
                className
            )}
        >
            {(title || subtitle) && (
                <div className="mb-4">
                    {title && <h4 className="font-bold text-sm mb-1">{title}</h4>}
                    {subtitle && <p className="text-xs text-muted-foreground">{subtitle}</p>}
                </div>
            )}

            {groups ? (
                <div className="space-y-6">
                    {groups.map((group, groupIndex) => (
                        <div key={groupIndex}>
                            {group.title && (
                                <div className="text-xs font-bold uppercase text-muted-foreground mb-3 tracking-wider">
                                    {group.title}
                                </div>
                            )}
                            {renderSteps(group.steps)}
                        </div>
                    ))}
                </div>
            ) : steps ? (
                renderSteps(steps)
            ) : null}
        </div>
    );
};

export default FlowDiagram;
