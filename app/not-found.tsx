'use client';
import { useEffect } from 'react';

export default function NotFound() {
  useEffect(() => {
    // 确保重置滚动状态
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className="container">
      <h2>页面未找到</h2>
      <button onClick={() => window.location.href = '/'}>
        返回首页
      </button>
    </div>
  );
}