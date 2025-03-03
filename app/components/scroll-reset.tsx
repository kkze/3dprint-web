"use client";

import { useEffect } from 'react';
import { useScrollStore } from '../store/useScrollStore';

export default function ScrollReset({ children }: { children: React.ReactNode }) {
  const setCurrentSectionIndex = useScrollStore((state) => state.setCurrentSectionIndex);
  const setIsScrolling = useScrollStore((state) => state.setIsScrolling);

  // 重置滚动状态
  const resetScrollState = () => {
    setCurrentSectionIndex(0);
    setIsScrolling(false);
  };

  useEffect(() => {
    resetScrollState();
  }, []);

  return <div onClick={resetScrollState}>{children}</div>;
}