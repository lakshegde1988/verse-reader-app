'use client';

import { useState } from 'react';
import { ChapterList } from '@/components/chapter-list';
import { VerseDisplay } from '@/components/verse-display';
import { Navigation } from '@/components/navigation';
import { chapters } from '@/lib/verses';

export default function Home() {
  const [selectedChapterId, setSelectedChapterId] = useState(1);
  const [selectedVerseId, setSelectedVerseId] = useState('1.1');

  const currentChapter = chapters.find(ch => ch.id === selectedChapterId);
  const currentVerseIndex = currentChapter?.verses.findIndex(v => v.id === selectedVerseId) ?? 0;
  const currentVerse = currentChapter?.verses[currentVerseIndex];

  const handlePrevious = () => {
    if (currentVerseIndex > 0) {
      const prevVerse = currentChapter!.verses[currentVerseIndex - 1];
      setSelectedVerseId(prevVerse.id);
    } else if (selectedChapterId > 1) {
      const prevChapter = chapters.find(ch => ch.id === selectedChapterId - 1);
      if (prevChapter) {
        setSelectedChapterId(selectedChapterId - 1);
        setSelectedVerseId(prevChapter.verses[prevChapter.verses.length - 1].id);
      }
    }
  };

  const handleNext = () => {
    if (currentVerseIndex < currentChapter!.verses.length - 1) {
      const nextVerse = currentChapter!.verses[currentVerseIndex + 1];
      setSelectedVerseId(nextVerse.id);
    } else if (selectedChapterId < chapters.length) {
      const nextChapter = chapters.find(ch => ch.id === selectedChapterId + 1);
      if (nextChapter) {
        setSelectedChapterId(selectedChapterId + 1);
        setSelectedVerseId(nextChapter.verses[0].id);
      }
    }
  };

  const handleChapterSelect = (chapterId: number) => {
    setSelectedChapterId(chapterId);
    const chapter = chapters.find(ch => ch.id === chapterId);
    if (chapter) {
      setSelectedVerseId(chapter.verses[0].id);
    }
  };

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <aside className="hidden md:flex md:w-72 bg-sidebar border-r border-sidebar-border flex-col">
        <div className="p-6 border-b border-sidebar-border">
          <h1 className="text-2xl font-serif font-bold text-sidebar-foreground">
            Ashtavakra Gita
          </h1>
          <p className="text-sm text-sidebar-foreground/60 mt-2">Verse Reader</p>
        </div>
        <ChapterList
          chapters={chapters}
          selectedChapterId={selectedChapterId}
          onSelectChapter={handleChapterSelect}
        />
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Mobile Header */}
        <div className="md:hidden bg-card border-b border-border p-4">
          <h1 className="text-xl font-serif font-bold text-foreground">Ashtavakra Gita</h1>
        </div>

        {/* Verse Display */}
        <div className="flex-1 overflow-y-auto flex items-center justify-center p-4 md:p-8">
          {currentChapter && currentVerse ? (
            <VerseDisplay
              chapter={currentChapter}
              verse={currentVerse}
              verseIndex={currentVerseIndex}
            />
          ) : null}
        </div>

        {/* Navigation Footer */}
        <Navigation
          onPrevious={handlePrevious}
          onNext={handleNext}
          hasPrevious={selectedChapterId > 1 || currentVerseIndex > 0}
          hasNext={selectedChapterId < chapters.length || currentVerseIndex < (currentChapter?.verses.length ?? 0) - 1}
          currentChapter={selectedChapterId}
          currentVerse={currentVerseIndex + 1}
          totalVerses={currentChapter?.verses.length ?? 0}
        />
      </main>

      {/* Mobile Chapter Drawer */}
      <MobileChapterDrawer
        chapters={chapters}
        selectedChapterId={selectedChapterId}
        onSelectChapter={handleChapterSelect}
      />
    </div>
  );
}

function MobileChapterDrawer({
  chapters,
  selectedChapterId,
  onSelectChapter,
}: {
  chapters: typeof chapters;
  selectedChapterId: number;
  onSelectChapter: (id: number) => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
      <div
        className={`fixed right-0 top-0 h-full w-64 bg-sidebar border-l border-sidebar-border transform transition-transform duration-300 z-50 md:hidden ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4 border-b border-sidebar-border flex items-center justify-between">
          <h2 className="font-semibold text-sidebar-foreground">Chapters</h2>
          <button
            onClick={() => setOpen(false)}
            className="text-sidebar-foreground/60 hover:text-sidebar-foreground"
          >
            ✕
          </button>
        </div>
        <ChapterList
          chapters={chapters}
          selectedChapterId={selectedChapterId}
          onSelectChapter={(id) => {
            onSelectChapter(id);
            setOpen(false);
          }}
        />
      </div>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-20 right-4 md:hidden bg-primary text-primary-foreground rounded-full p-3 shadow-lg z-40"
        aria-label="Open chapters"
      >
        ☰
      </button>
    </>
  );
}
