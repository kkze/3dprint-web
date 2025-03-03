/*
 * @Author: kkzh 1527227806@qq.com
 * @Date: 2025-03-02 13:14:17
 * @LastEditors: kkzh 1527227806@qq.com
 * @LastEditTime: 2025-03-03 19:37:48
 * @FilePath: \3dprint-web\app\components\header.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
 * @Author: kkzh 1527227806@qq.com
 * @Date: 2025-03-02 13:14:17
 * @LastEditors: kkzh 1527227806@qq.com
 * @LastEditTime: 2025-03-03 18:50:04
 * @FilePath: \3dprint-web\app\components\header.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
'use client';
import { useRef } from 'react';  // 移除未使用的useEffect
import { MobileNav } from './mobile-nav';
import { Button } from "@/app/components/ui/button"
import Link from 'next/link';

export default function Header() {
    const headerRef = useRef<HTMLElement>(null);

    return (
        <header ref={headerRef} id="main-header" className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between">
                <div className="flex items-center gap-4">
                    <MobileNav />

                    {/* <RouteWatcher /> */}
                    <Link href="/" className="flex items-center space-x-2" >
                        {/* <Image src="/logo.svg" alt="3DPrint-Web Logo" width={40} height={40} /> */}
                        3DPrint-Studio
                    </Link>
                    <nav className="hidden space-x-6 md:flex">
                        <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
                            <p>首页</p>
                        </Link>
                        <Link href="#solutions" className="text-sm font-medium transition-colors hover:text-primary">
                            解决方案
                        </Link>
                        <Link href="#industries" className="text-sm font-medium transition-colors hover:text-primary">
                            行业
                        </Link>
                        <Link href="/test" className="text-sm font-medium transition-colors hover:text-primary">
                            测试页面
                        </Link>
                        <Link href="#resources" className="text-sm font-medium transition-colors hover:text-primary">
                            资源
                        </Link>
                    </nav>
                </div>
                <div className="hidden md:flex items-center space-x-4">
                    <Button variant="ghost" size="sm">
                        登录
                    </Button>
                    <Button size="sm">注册</Button>
                </div>
            </div>
        </header>
    );
}