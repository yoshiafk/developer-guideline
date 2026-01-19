import React from 'react';
import { Folder, File, ChevronRight, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface FileTreeItem {
    name: string;
    type: 'file' | 'folder';
    comment?: string;
    children?: FileTreeItem[];
}

interface FileTreeProps {
    title?: string;
    data: FileTreeItem[];
    className?: string;
}

const TreeItem: React.FC<{ item: FileTreeItem; level: number }> = ({ item, level }) => {
    const isFolder = item.type === 'folder';

    return (
        <div className="group">
            <div className={cn(
                "flex items-center py-1 px-2 rounded-md transition-colors hover:bg-slate-800/50",
                level > 0 && "ml-4 border-l border-slate-700/50 pl-4"
            )}>
                <div className="flex items-center gap-2 flex-1 min-w-0">
                    {isFolder ? (
                        <Folder className="h-4 w-4 text-blue-400 shrink-0" />
                    ) : (
                        <File className="h-4 w-4 text-slate-400 shrink-0" />
                    )}
                    <span className={cn(
                        "text-sm font-mono truncate",
                        isFolder ? "text-slate-200 font-semibold" : "text-slate-400"
                    )}>
                        {item.name}
                        {isFolder && "/"}
                    </span>
                </div>

                {item.comment && (
                    <span className="ml-4 text-[11px] text-slate-500 font-mono italic shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                        # {item.comment}
                    </span>
                )}
            </div>

            {item.children && (
                <div className="mt-0.5">
                    {item.children.map((child, idx) => (
                        <TreeItem key={`${child.name}-${idx}`} item={child} level={level + 1} />
                    ))}
                </div>
            )}
        </div>
    );
};

export const FileTree: React.FC<FileTreeProps> = ({ title, data, className }) => {
    return (
        <div className={cn(
            "rounded-2xl bg-slate-900 border border-slate-700 overflow-hidden",
            className
        )}>
            {title && (
                <div className="px-5 py-3 border-b border-slate-700 bg-slate-800/50">
                    <h4 className="text-[10px] font-bold text-blue-400 tracking-widest uppercase flex items-center gap-2">
                        <Folder className="h-3 w-3" />
                        {title}
                    </h4>
                </div>
            )}
            <div className="p-4 overflow-x-auto">
                <div className="min-w-[300px]">
                    {data.map((item, idx) => (
                        <TreeItem key={`${item.name}-${idx}`} item={item} level={0} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FileTree;
