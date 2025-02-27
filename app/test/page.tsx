import { Card } from "@/components/ui/card"

export default function TestPage() {
  return (
    <div className="container py-12">
      <h1 className="mb-8 text-3xl font-bold">测试页面</h1>

      <div className="grid gap-8">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">测试内容 1</h2>
          <p className="text-muted-foreground">
            这是一个测试页面，用于展示页首和页脚在所有页面的固定显示效果。这里是一些示例内容。
          </p>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">测试内容 2</h2>
          <p className="text-muted-foreground">
            您可以看到页首始终固定在页面顶部，而页脚则始终显示在页面底部。这种布局结构适用于网站的所有页面。
          </p>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">测试内容 3</h2>
          <p className="text-muted-foreground">
            通过使用 Next.js
            的布局系统，我们可以轻松地在所有页面之间共享页首和页脚组件，确保整个网站保持一致的外观和导航结构。
          </p>
        </Card>
      </div>
    </div>
  )
}

