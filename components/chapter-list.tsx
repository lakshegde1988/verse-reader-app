'use client';

import { ScrollArea } from '@/components/ui/scroll-area';
import { Chapter } from '@/lib/verses';

interface ChapterListProps {
  chapters: Chapter[];
  selectedChapterId: number;
  onSelectChapter: (chapterId: number) => void;
}

export function ChapterList({
  chapters,
  selectedChapterId,
  onSelectChapter,
}: ChapterListProps) {
  return (
    <ScrollArea className="flex-1">
      <div className="p-4 space-y-2">
        {chapters.map((chapter) => (
          <button
            key={chapter.id}
            onClick={() => onSelectChapter(chapter.id)}
            className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
              selectedChapterId === chapter.id
                ? 'bg-sidebar-primary text-sidebar-primary-foreground shadow-md'
                : 'text-sidebar-foreground hover:bg-sidebar-accent/50'
            }`}
          >
            <div className="text-sm font-medium">Chapter {chapter.id}</div>
            <div className={`text-xs mt-1 ${
              selectedChapterId === chapter.id
                ? 'text-sidebar-primary-foreground/80'
                : 'text-sidebar-foreground/60'
            }`}>
              {chapter.title}
            </div>
          </button>
        ))}
      </div>
    </ScrollArea>
  );
}
