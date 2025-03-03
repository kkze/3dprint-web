/*
 * @Author: kkzh 1527227806@qq.com
 * @Date: 2025-03-02 13:14:17
 * @LastEditors: kkzh 1527227806@qq.com
 * @LastEditTime: 2025-03-03 20:06:20
 * @FilePath: \3dprint-web\app\not-found.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
'use client';
import { useEffect } from 'react';

export default function NotFound() {



  return (
    <div className="container">
      <h2>页面未找到</h2>
      <button onClick={() => window.location.href = '/'}>
        返回首页
      </button>
    </div>
  );
}