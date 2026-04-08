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
  const currentVerseIndex = currentChapter ? currentChapter.verses.findIndex(v => v.id === selectedVerseId) : -1;
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
      <aside className="w-72 bg-sidebar border-r border-sidebar-border flex flex-col hidden lg:flex overflow-hidden">
        <div className="p-6 border-b border-sidebar-border flex-shrink-0">
          <h1 className="text-2xl font-serif font-bold text-sidebar-foreground">
            Ashtavakra Gita
          </h1>
        </div>
        <div className="flex-1 overflow-y-auto">
          <ChapterList
            chapters={chapters}
            selectedChapterId={selectedChapterId}
            onSelectChapter={handleChapterSelect}
          />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Mobile/Tablet Header */}
        <div className="lg:hidden bg-card border-b border-border p-4 flex items-center justify-between">
          <h1 className="text-xl font-serif font-bold text-foreground">Ashtavakra Gita</h1>
          <button
            onClick={() => {
              const drawer = document.getElementById('mobile-drawer');
              if (drawer) drawer.classList.remove('hidden');
            }}
            className="lg:hidden bg-primary text-primary-foreground rounded p-2"
            aria-label="Open chapters"
          >
            ☰
          </button>
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
      <div
        id="mobile-drawer"
        className="fixed inset-0 bg-black/50 z-40 lg:hidden hidden"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            document.getElementById('mobile-drawer')?.classList.add('hidden');
          }
        }}
      >
        <div className="absolute right-0 top-0 h-full w-72 bg-sidebar border-l border-sidebar-border flex flex-col overflow-hidden">
          <div className="p-4 border-b border-sidebar-border flex items-center justify-between flex-shrink-0">
            <h2 className="font-semibold text-sidebar-foreground">Chapters</h2>
            <button
              onClick={() => {
                document.getElementById('mobile-drawer')?.classList.add('hidden');
              }}
              className="text-sidebar-foreground/60 hover:text-sidebar-foreground text-xl"
            >
              ✕
            </button>
          </div>
          <div className="flex-1 overflow-y-auto">
            <ChapterList
              chapters={chapters}
              selectedChapterId={selectedChapterId}
              onSelectChapter={(id) => {
                handleChapterSelect(id);
                document.getElementById('mobile-drawer')?.classList.add('hidden');
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
