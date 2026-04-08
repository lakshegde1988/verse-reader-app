'use client';

import { Chapter, Verse } from '@/lib/verses';

interface VerseDisplayProps {
  chapter: Chapter;
  verse: Verse;
  verseIndex: number;
}

export function VerseDisplay({
  chapter,
  verse,
  verseIndex,
}: VerseDisplayProps) {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-card rounded-xl shadow-lg p-8 md:p-12 border border-border">
        {/* Chapter Number and Title */}
        <div className="mb-8 pb-8 border-b border-border">
          <div className="flex items-center gap-3 mb-2">
            <div className="text-sm font-semibold text-primary uppercase tracking-wider">
              Chapter {chapter.id}
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground text-balance">
            {chapter.title}
          </h2>
        </div>

        {/* Verse Number */}
        <div className="mb-6 flex items-center justify-between">
          <span className="text-lg font-medium text-primary">
            Verse {verse.number}
          </span>
          <span className="text-sm text-muted-foreground">
            {verseIndex + 1} of {chapter.verses.length}
          </span>
        </div>

        {/* Speaker (if applicable) */}
        {verse.speaker && (
          <div className="mb-6 text-sm font-semibold text-accent italic">
            {verse.speaker}
          </div>
        )}

        {/* Sanskrit Text Section */}
        {verse.sanskrit && (
          <div className="sanskrit-section">
            <div className="sanskrit-label">Sanskrit</div>
            <p className="sanskrit-text">
              {verse.sanskrit}
            </p>
          </div>
        )}

        {/* English Meaning Section */}
        <div className="meaning-section">
          <div className="meaning-label">Meaning</div>
          <p className="meaning-text whitespace-pre-line">
            {verse.text}
          </p>
        </div>

        {/* Bottom Decoration */}
        <div className="mt-10 pt-8 border-t border-border flex justify-center">
          <div className="text-2xl text-primary/30">✦</div>
        </div>
      </div>
    </div>
  );
}
