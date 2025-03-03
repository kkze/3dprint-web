import type React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, MapPin, Linkedin } from "lucide-react";
import "./globals.css";
import { Wechat, Weibo } from "@/app/components/icons";
import Header from "./components/header";
import ScrollReset from "./components/scroll-reset";

export const metadata: Metadata = {
  title: "3DPrint-Web - 专业的3D打印服务平台",
  description: "提供高质量、快速的3D打印解决方案，满足各行业需求。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh" className="scroll-smooth">
      <body className="min-h-screen bg-background font-sans antialiased">
        <Header />
        <ScrollReset>{children}</ScrollReset>
        <footer className="border-t bg-muted/50">
          <div className="container grid gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="mb-4 text-sm font-semibold">快速链接</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/" className="text-muted-foreground transition-colors hover:text-primary">
                    首页
                  </Link>
                </li>
                <li>
                  <Link href="#solutions" className="text-muted-foreground transition-colors hover:text-primary">
                    解决方案
                  </Link>
                </li>
                <li>
                  <Link href="#industries" className="text-muted-foreground transition-colors hover:text-primary">
                    行业
                  </Link>
                </li>
                <li>
                  <Link href="/test" className="text-muted-foreground transition-colors hover:text-primary">
                    测试页面
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold">联系方式</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">400-123-4567</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">contact@example.com</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold">办事处</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start space-x-2">
                  <MapPin className="h-4 w-4 mt-0.5 text-muted-foreground" />
                  <span className="text-muted-foreground">
                    北京市朝阳区
                    <br />
                    科技园区123号
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <MapPin className="h-4 w-4 mt-0.5 text-muted-foreground" />
                  <span className="text-muted-foreground">
                    上海市浦东新区
                    <br />
                    创新路456号
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold">关注我们</h3>
              <div className="flex space-x-4">
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  <Wechat className="h-5 w-5" />
                  <span className="sr-only">微信</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  <Weibo className="h-5 w-5" />
                  <span className="sr-only">微博</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">领英</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t">
            <div className="container flex flex-col md:flex-row md:items-center md:justify-between py-4 md:h-16 space-y-2 md:space-y-0">
              <p className="text-sm text-muted-foreground text-center md:text-left">
                © 2024 3DPrint-Web. 保留所有权利.
              </p>
              <div className="flex items-center justify-center md:justify-end space-x-4">
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                  隐私政策
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                  服务条款
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

