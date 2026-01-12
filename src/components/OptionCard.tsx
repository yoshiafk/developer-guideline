import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from 'lucide-react';

interface OptionCardProps {
  optionNumber: number;
  title: string;
  code: string;
  codeLanguage?: string;
  useWhen: string[];
  compact?: boolean;
}

const OptionCard: React.FC<OptionCardProps> = ({
  optionNumber,
  title,
  code,
  codeLanguage = 'csharp',
  useWhen,
  compact = false
}) => {
  return (
    <Card className="h-full border border-muted transition-all hover:shadow-md hover:border-primary/20">
      <CardHeader className="space-y-4">
        <div className="flex items-center justify-between">
          <Badge variant="outline" className="text-muted-foreground font-mono">
            #{optionNumber}
          </Badge>
        </div>
        <CardTitle className={`${compact ? 'text-lg' : 'text-xl'} font-bold`}>
          {title}
        </CardTitle>
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
                <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-primary/70" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default OptionCard;
