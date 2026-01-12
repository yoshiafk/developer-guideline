import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, ChevronRight } from 'lucide-react';

interface ComparisonCardProps {
  optionNumber: number;
  title: string;
  code: string;
  codeLanguage: string;
  useWhen: string[];
  variant?: 'primary' | 'secondary';
}

const ComparisonCard: React.FC<ComparisonCardProps> = ({
  optionNumber,
  title,
  code,
  codeLanguage,
  useWhen,
  variant = 'primary'
}) => {
  return (
    <Card className={`h-full border-2 transition-all hover:shadow-md ${variant === 'primary' ? 'border-primary/20' : 'border-muted'
      }`}>
      <CardHeader className="space-y-4">
        <div className="flex items-center justify-between">
          <Badge variant={variant === 'primary' ? 'default' : 'secondary'} className="px-3 py-1">
            OPTION {optionNumber}
          </Badge>
        </div>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="rounded-lg bg-black/5 dark:bg-white/5 p-4 font-mono text-sm overflow-x-auto whitespace-pre">
          <code>{code}</code>
        </div>

        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Use when:</h4>
          <ul className="space-y-2">
            {useWhen.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm">
                <CheckCircle2 className={`h-4 w-4 mt-0.5 shrink-0 ${variant === 'primary' ? 'text-primary' : 'text-muted-foreground'
                  }`} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default ComparisonCard;
