import {create} from 'zustand';

interface ScrollState {
  currentSectionIndex: number;
  setCurrentSectionIndex: (index: number) => void;
  isScrolling: boolean;
  setIsScrolling: (scrolling: boolean) => void;
}

export const useScrollStore = create<ScrollState>((set) => ({
  currentSectionIndex: 0,
  setCurrentSectionIndex: (index) => set({ currentSectionIndex: index }),
  isScrolling: false,
  setIsScrolling: (scrolling) => set({ isScrolling: scrolling }),
}));