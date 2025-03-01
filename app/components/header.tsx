'use client';
import { useEffect, useRef } from 'react';
import { MobileNav } from './mobile-nav';
import { Button } from "@/app/components/ui/button"
import Link from 'next/link';

export default function Header() {
    const headerRef = useRef<HTMLElement>(null);



    return (

        <header ref={headerRef} id="main-header" className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
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