import { Upload } from "lucide-react"
import { Card } from "@/components/card"
import Link from "next/link"

export default function Home() {
  const services = ['FDM','SLA','DLP','LCD','SLS','SLM','EBM','PolyJet','CLIP']
  return (
    <>
      {/* Hero Section */}
      <section className="container py-12 md:py-24">
        <div className="mx-auto max-w-[800px] text-center">
          <div className="rounded-lg border-2 border-dashed pt-32 border-muted min-h-[400px] p-12 hover:bg-sky-100 transform transition-colors">
            <Upload className="mx-auto h-12 w-12 text-muted-foreground" />
            <h2 className="mt-4 text-xl font-semibold center">上传您的3D文件</h2>
          </div>
          <Link href={'/'} className="mt-2 text-sm text-muted-foreground">没有3D文件? 联系我们的设计师工作室</Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="container py-12">
        <h2 className="mb-8 text-2xl font-bold">我们的服务</h2>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
          {services
            .map((item, i) => (
              <Card key={i} className="p-6">
                <div className="aspect-square rounded-lg bg-muted" />
                <h3 className="mt-4 text-center text-sm font-medium">{item}</h3>
              </Card>
            ))}
        </div>
      </section>

      {/* Materials Section */}
      <section className="container grid gap-12 py-12 md:grid-cols-2 md:items-center">
        <div className="aspect-square rounded-lg bg-muted" />
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">打印材料</h2>
          <div className="space-y-2 text-muted-foreground">
            <p>我们支持130+材料的打印，满足您对打印件的每一种幻想</p>
            <p>通过我们强大的供应链和多达上千款打印机可以制造出令人惊叹的产品</p>
            <p>这涵概了从工业制造到手办模玩，无论是哪一种领域，我们总能为您找到最合适材料</p>
          </div>
        </div>
      </section>

      {/* Post-processing Section */}
      <section className="container grid gap-12 py-12 md:grid-cols-2 md:items-center">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">后处理</h2>
          <div className="space-y-2 text-muted-foreground">
            <p>我们提供专业的后处理服务</p>
            <p>通过我们工程师团队研发的表面处理工艺，您将得到更为精良美观的部件与产品</p>
            <p>精细的打磨与多姿多彩的上色，这都不在话下</p>
          </div>
        </div>
        <div className="aspect-square rounded-lg bg-muted" />
      </section>

      {/* 3D Model Section */}
      <section className="container grid gap-12 py-12 md:grid-cols-2 md:items-center">
        <div className="aspect-square rounded-lg bg-muted" />
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">3D建模</h2>
          <div className="space-y-2 text-muted-foreground">
            <p>没有模型没有关系</p>
            <p>我们有着专业高效的3D设计师团队</p>
            <p>快速高效的建模流程</p>
            <p>精确的模型输出</p>
            <p>联系我们从零开始您的3D打印之旅</p>
          </div>
        </div>
      </section>
      
      {/* 3D Model Section */}
      <section className="container grid gap-12 py-12 md:grid-cols-2 md:items-center">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">想要属于自己的打印机吗?</h2>
          <div className="space-y-2 text-muted-foreground">
            <p>我们同样提供3D打印机售卖服务</p>
            <p>无论是工业级还是桌面级</p>
            <p>我们都以更有竞争力的价格和性能而胜出</p>
            <p>随时告诉我们来帮助您选择合适的产品</p>
          </div>
        </div>
        <div className="aspect-square rounded-lg bg-muted" />
      </section>
      {/* Testimonials Section */}
      <section className="container py-12">
        <h2 className="mb-8 text-2xl font-bold">客户对我们的评价</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {Array(3)
            .fill(0)
            .map((_, i) => (
              <Card key={i} className="p-6">
                <div className="aspect-video rounded-lg bg-muted" />
                <p className="mt-4 text-sm text-muted-foreground">客户反馈内容 {i + 1}</p>
              </Card>
            ))}
        </div>
      </section>
    </>
  )
}

