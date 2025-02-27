import { Upload, PrinterIcon as Printer3d, Layers, PaintBucket, CuboidIcon as Cube } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import Materials from "@/app/img/materials.png"
import Processing from "@/app/img/processing.png"
import Modeling from "@/app/img/modeling.png"
import Printers from "@/app/img/printers.png"

export default function Home() {
  const services = [
    { name: "FDM", icon: Printer3d },
    { name: "SLA", icon: Layers },
    { name: "SLS", icon: Cube },
    { name: "PolyJet", icon: PaintBucket },
    { name: "CLIP", icon: Printer3d },
  ]


  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white">
        <div className="container pt-12 md:py-10">
          <div className="mx-auto max-w-[800px] text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">专业3D打印解决方案</h1>
            <p className="text-lg text-muted-foreground mb-8">从概念到实物，我们为您提供高质量、快速的在线3D打印服务</p>
            <div className="rounded-lg border-2 border-dashed pt-32 border-muted min-h-[360px] p-12 hover:bg-sky-100 transition-colors cursor-pointer">
              <Upload className="mx-auto h-12 w-12 text-muted-foreground" />
              <h2 className="mt-4 text-xl font-semibold">上传您的3D文件</h2>
            </div>
            <Link href={"/"} className="mt-4 inline-block text-sm text-muted-foreground hover:text-primary">
              没有3D文件? 联系我们的设计师工作室
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container md:pb-16">
        <h2 className="text-3xl font-bold text-center mb-12">我们的服务</h2>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
          {services.map((service, i) => (
            <Card key={i} className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="flex flex-col items-center text-center">
                <service.icon className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-lg font-medium">{service.name}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Materials Section */}
      <section className="bg-gray-50 py-12 md:py-24">
        <div className="container grid gap-12 md:grid-cols-2 md:items-center">
          <div className="aspect-square rounded-lg bg-muted overflow-hidden">
            <Image
              src={Materials}
              alt="3D打印材料"
              width={600}
              height={600}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">打印材料</h2>
            <div className="space-y-2 text-muted-foreground">
              <p>我们支持130+材料的打印，满足您对打印件的每一种幻想。</p>
              <p>通过我们强大的供应链和多达上千款打印机可以制造出令人惊叹的产品。</p>
              <p>这涵盖了从工业制造到手办模玩，无论是哪一种领域，我们总能为您找到最合适的材料。</p>
            </div>
            <Button size="lg">了解更多材料</Button>
          </div>
        </div>
      </section>

      {/* Post-processing Section */}
      <section className="container py-12 md:py-24">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="space-y-4 order-2 md:order-1">
            <h2 className="text-3xl font-bold">后处理</h2>
            <div className="space-y-2 text-muted-foreground">
              <p>我们提供专业的后处理服务，让您的3D打印作品更加完美。</p>
              <p>通过我们工程师团队研发的表面处理工艺，您将得到更为精良美观的部件与产品。</p>
              <p>精细的打磨与多姿多彩的上色，这都不在话下。</p>
            </div>
            <Button size="lg">探索后处理选项</Button>
          </div>
          <div className="aspect-square rounded-lg bg-muted overflow-hidden order-1 md:order-2">
            <Image
              src={Processing}
              alt="3D打印后处理"
              width={600}
              height={600}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* 3D Model Section */}
      <section className="bg-gray-50 py-12 md:py-24">
        <div className="container grid gap-12 md:grid-cols-2 md:items-center">
          <div className="aspect-square rounded-lg bg-muted overflow-hidden">
            <Image
              src={Modeling}
              alt="3D建模"
              width={600}
              height={600}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">3D建模</h2>
            <div className="space-y-2 text-muted-foreground">
              <p>没有模型没有关系，我们有着专业高效的3D设计师团队。</p>
              <p>快速高效的建模流程，精确的模型输出。</p>
              <p>联系我们，从零开始您的3D打印之旅。</p>
            </div>
            <Button size="lg">咨询设计服务</Button>
          </div>
        </div>
      </section>

      {/* 3D Printer Sales Section */}
      <section className="container py-12 md:py-24">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="space-y-4 order-2 md:order-1">
            <h2 className="text-3xl font-bold">想要属于自己的打印机吗?</h2>
            <div className="space-y-2 text-muted-foreground">
              <p>我们同样提供3D打印机售卖服务。</p>
              <p>无论是工业级还是桌面级，我们都以更有竞争力的价格和性能而胜出。</p>
              <p>随时告诉我们，我们将帮助您选择最合适的产品。</p>
            </div>
            <Button size="lg">浏览打印机</Button>
          </div>
          <div className="aspect-square rounded-lg bg-muted overflow-hidden order-1 md:order-2">
            <Image
              src={Printers}
              alt="3D打印机"
              width={600}
              height={600}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-12 md:py-24">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">客户对我们的评价</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                name: "张先生",
                company: "XYZ科技",
                content: "3DPrint-Web的服务质量超出了我的预期。他们的团队非常专业，交付速度快，产品质量一流。",
              },
              {
                name: "李女士",
                company: "ABC设计工作室",
                content: "作为一名产品设计师，我经常需要快速制作原型。3DPrint-Web成为了我最信赖的合作伙伴。",
              },
              {
                name: "王教授",
                company: "某大学工程学院",
                content: "3DPrint-Web为我们的研究项目提供了invaluable支持。他们的技术专长和创新精神令人印象深刻。",
              },
            ].map((testimonial, i) => (
              <Card key={i} className="p-6">
                <CardContent>
                  <p className="mb-4 text-muted-foreground">"{testimonial.content}"</p>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-12 md:py-24 text-center">
        <h2 className="text-3xl font-bold mb-4">准备开始您的3D打印项目了吗？</h2>
        <p className="text-xl text-muted-foreground mb-8">联系我们，让我们一起将您的创意变为现实。</p>
        <Button size="lg">立即咨询</Button>
      </section>
    </>
  )
}

