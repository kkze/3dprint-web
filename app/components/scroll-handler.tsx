"use client";

import { useEffect, useCallback } from 'react';
import { scroller } from 'react-scroll';
import throttle from 'lodash/throttle';
import { useScrollStore } from '../store/useScrollStore';

export default function ScrollHandler() {
  const sections = ["Hero", "Materials", "Processing", "Modeling", "Printer", "Testimonials"];
  const currentSectionIndex = useScrollStore((state) => state.currentSectionIndex);
  const setCurrentSectionIndex = useScrollStore((state) => state.setCurrentSectionIndex);
  const isScrolling = useScrollStore((state) => state.isScrolling);
  const setIsScrolling = useScrollStore((state) => state.setIsScrolling);

  // 处理滚动逻辑
  const handleScroll = useCallback((direction: number) => {
    if (isScrolling) return;

    const nextSectionIndex = Math.min(
      Math.max(currentSectionIndex + direction, 0),
      sections.length - 1
    );

    if (nextSectionIndex !== currentSectionIndex) {
      setIsScrolling(true);
      setCurrentSectionIndex(nextSectionIndex);

      scroller.scrollTo(sections[nextSectionIndex], {
        duration: 300,
        smooth: true,
        offset: -64,
      });

      setTimeout(() => {
        setIsScrolling(false);
      }, 500);
    }
  }, [currentSectionIndex, sections, isScrolling, setCurrentSectionIndex, setIsScrolling]);

  // 1. 滷轮事件（节流处理）
  useEffect(() => {
    const handleWheel = throttle((event: WheelEvent) => {
      event.preventDefault(); // 阻止默认滚动
      const direction = event.deltaY > 0 ? 1 : -1;
      handleScroll(direction);
    }, 500);

    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [handleScroll]);

  // 2. 触摸事件（移动设备支持）
  useEffect(() => {
    let touchStartY = 0;

    const handleTouchStart = (event: TouchEvent) => {
      touchStartY = event.touches[0].clientY;
    };

    const handleTouchMove = throttle((event: TouchEvent) => {
      event.preventDefault(); // 阻止默认滚动
      const touchEndY = event.touches[0].clientY;
      const direction = touchStartY > touchEndY ? 1 : -1;
      handleScroll(direction);
    }, 500);

    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [handleScroll]);

  // 3. 键盘导航（上下箭头键）
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowDown') {
        event.preventDefault();
        handleScroll(1);
      } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        handleScroll(-1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleScroll]);

  // 不渲染任何 UI
  return null;
}