"use client"

import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">打开菜单</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-72">
        <SheetHeader>
          <SheetTitle>导航菜单</SheetTitle>
        </SheetHeader>
        <div className="mt-4 flex flex-col space-y-3">
          <Link href="/" className="text-base font-medium hover:text-primary">
            首页
          </Link>
          <Link href="#" className="text-base font-medium hover:text-primary">
            解决方案
          </Link>
          <Link href="#" className="text-base font-medium hover:text-primary">
            行业
          </Link>
          <Link href="/test" className="text-base font-medium hover:text-primary">
            测试页面
          </Link>
          <Link href="#" className="text-base font-medium hover:text-primary">
            资源
          </Link>
        </div>
        <div className="mt-6 flex flex-col space-y-3">
          <Button variant="outline" className="w-full justify-start">
            登录
          </Button>
          <Button className="w-full justify-start">注册</Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}

