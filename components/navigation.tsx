'use client';

import { Button } from '@/components/ui/button';

interface NavigationProps {
  onPrevious: () => void;
  onNext: () => void;
  hasPrevious: boolean;
  hasNext: boolean;
  currentChapter: number;
  currentVerse: number;
  totalVerses: number;
}

export function Navigation({
  onPrevious,
  onNext,
  hasPrevious,
  hasNext,
  currentChapter,
  currentVerse,
  totalVerses,
}: NavigationProps) {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-6">
        <div className="flex items-center justify-between gap-4">
          {/* Previous Button */}
          <Button
            onClick={onPrevious}
            disabled={!hasPrevious}
            variant={hasPrevious ? 'default' : 'outline'}
            className="md:min-w-24"
          >
            ← Previous
          </Button>

          {/* Progress Indicator */}
          <div className="flex-1 text-center">
            <div className="text-sm text-muted-foreground">
              Chapter {currentChapter} • Verse {currentVerse} of {totalVerses}
            </div>
            <div className="mt-2 w-full bg-muted rounded-full h-1 overflow-hidden">
              <div
                className="bg-primary h-full transition-all duration-300"
                style={{
                  width: `${((currentChapter - 1) * 100) / 20 + (currentVerse / totalVerses) * (100 / 20)}%`,
                }}
              />
            </div>
          </div>

          {/* Next Button */}
          <Button
            onClick={onNext}
            disabled={!hasNext}
            variant={hasNext ? 'default' : 'outline'}
            className="md:min-w-24"
          >
            Next →
          </Button>
        </div>
      </div>
    </footer>
  );
}
