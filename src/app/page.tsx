"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { MessageCircle, Smartphone, Zap, Star } from "lucide-react";

export default function LandingPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#171717] font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#E5E5E5]">
        <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
          <div className="text-xl font-bold text-[#06C755] tracking-tight">とーくる</div>
          <Button className="bg-[#06C755] hover:bg-[#05A847] text-white rounded-[10px] font-semibold">
            無料相談する
          </Button>
        </div>
      </header>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-white py-20 lg:py-32">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="space-y-8"
              >
                <motion.div variants={fadeIn}>
                  <Badge className="bg-[#06C755]/10 text-[#06C755] hover:bg-[#06C755]/20 border-none px-4 py-1.5 text-sm mb-4">
                    LINEで完結するWeb制作
                  </Badge>
                  <h1 className="text-4xl lg:text-5xl font-bold leading-[1.3] tracking-tight text-[#171717]">
                    スマホひとつで、<br />
                    <span className="text-[#06C755]">本格的なHP・LP</span>が<br />
                    完成します。
                  </h1>
                </motion.div>
                
                <motion.div variants={fadeIn}>
                  <p className="text-lg text-[#737373] leading-[1.7] tracking-[0.04em]">
                    「とーくる」は、LINEのやり取りだけで高品質なWebサイトを作成できるサービスです。パソコンが苦手な方でも、専任の担当者が丁寧にサポートします。
                  </p>
                </motion.div>

                <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button className="w-full sm:w-auto bg-[#06C755] hover:bg-[#05A847] text-white px-8 py-6 rounded-[10px] text-lg font-semibold shadow-lg shadow-[#06C755]/20">
                      LINEで無料相談
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button variant="outline" className="w-full sm:w-auto border-[#06C755] text-[#06C755] hover:bg-[#06C755]/5 px-8 py-6 rounded-[10px] text-lg font-semibold">
                      サービス詳細を見る
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="relative w-full aspect-square max-w-[500px] mx-auto">
                  <Image
                    src="/images/hero.png"
                    alt="とーくる サービスイメージ"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-[#FAFAFA]">
          <div className="max-w-[1200px] mx-auto px-6">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold mb-4 tracking-tight">提供サービス</h2>
              <p className="text-[#737373]">お客様のニーズに合わせたWebサイト制作をLINEで完結</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "LINEで簡単ヒアリング",
                  desc: "面倒な打ち合わせは不要。LINEのチャットで質問に答えるだけで、サイトの構成が決まります。",
                  img: "/images/service-1.png"
                },
                {
                  title: "高品質なデザイン",
                  desc: "プロのデザイナーが監修したテンプレートをベースに、あなたのビジネスに最適なデザインをご提案。",
                  img: "/images/service-2.png"
                },
                {
                  title: "最短3日でスピード納品",
                  desc: "ヒアリング完了から最短3営業日で公開可能。スピーディーにビジネスをスタートできます。",
                  img: "/images/service-3.png"
                }
              ].map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="h-full border-[#E5E5E5] rounded-[12px] shadow-sm hover:shadow-md transition-shadow bg-white overflow-hidden">
                    <div className="relative w-full h-48 bg-[#FAFAFA]">
                      <Image src={service.img} alt={service.title} fill className="object-cover" />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-[#737373] leading-[1.7]">{service.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-8 tracking-tight">
                  なぜ「とーくる」が<br />選ばれるのか？
                </motion.h2>
                
                <div className="space-y-6">
                  {[
                    { icon: MessageCircle, title: "パソコン不要、スマホで完結", desc: "画像の準備からテキストの作成まで、すべてスマホのLINEアプリ上で完結します。" },
                    { icon: Zap, title: "AI活用で圧倒的な低価格", desc: "最新のAI技術を活用することで、制作コストを大幅に削減。高品質なサイトを低価格で提供します。" },
                    { icon: Smartphone, title: "スマホ最適化（レスポンシブ）", desc: "今の時代に必須のスマホ対応。どの端末から見ても美しいレイアウトを自動で実現します。" }
                  ].map((feature, i) => (
                    <motion.div key={i} variants={fadeIn} className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#06C755]/10 flex items-center justify-center text-[#06C755]">
                        <feature.icon size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                        <p className="text-[#737373] leading-[1.7]">{feature.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-[#FAFAFA] p-8 rounded-[24px] border border-[#E5E5E5]"
              >
                <div className="space-y-6">
                  <div className="bg-white p-4 rounded-[16px] shadow-sm flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-[#06C755] flex-shrink-0 flex items-center justify-center text-white font-bold">と</div>
                    <div className="bg-[#FAFAFA] p-3 rounded-2xl rounded-tl-none text-sm text-[#171717]">
                      お店の強みや特徴を教えていただけますか？
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-[16px] shadow-sm flex gap-4 items-start flex-row-reverse">
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0 flex items-center justify-center text-gray-600 font-bold">客</div>
                    <div className="bg-[#06C755] p-3 rounded-2xl rounded-tr-none text-sm text-white">
                      アットホームな雰囲気で、初心者でも通いやすいのが特徴です！
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-[16px] shadow-sm flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-[#06C755] flex-shrink-0 flex items-center justify-center text-white font-bold">と</div>
                    <div className="bg-[#FAFAFA] p-3 rounded-2xl rounded-tl-none text-sm text-[#171717]">
                      ありがとうございます！その内容を元にキャッチコピーを作成しました。こちらでいかがでしょうか？
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-[#FAFAFA]">
          <div className="max-w-[1200px] mx-auto px-6">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold mb-4 tracking-tight">お客様の声</h2>
              <p className="text-[#737373]">実際に「とーくる」をご利用いただいた方の声をご紹介します</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  name: "美容室オーナー 様",
                  comment: "パソコンが苦手でHP作成を諦めていましたが、LINEでやり取りするだけで本当に立派なサイトが完成して驚きました。集客にも繋がっています。",
                  img: "/images/avatar-1.png"
                },
                {
                  name: "パーソナルジム経営 様",
                  comment: "とにかく対応が早いです。修正の要望もLINEでサクッと伝えられるので、ストレスなく制作を進めることができました。",
                  img: "/images/avatar-2.png"
                }
              ].map((testimonial, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="border-[#E5E5E5] rounded-[12px] bg-white h-full">
                    <CardContent className="p-8">
                      <div className="flex gap-1 text-[#F59E0B] mb-4">
                        {[...Array(5)].map((_, j) => <Star key={j} size={20} fill="currentColor" />)}
                      </div>
                      <p className="text-[#171717] leading-[1.7] mb-6 font-medium">
                        「{testimonial.comment}」
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-100">
                          <Image src={testimonial.img} alt={testimonial.name} fill className="object-cover" />
                        </div>
                        <div>
                          <p className="font-semibold text-[#171717]">{testimonial.name}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-white">
          <div className="max-w-[800px] mx-auto px-6">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 tracking-tight">お問い合わせ</h2>
              <p className="text-[#737373]">まずはLINEでお気軽にご相談ください。<br />フォームからのお問い合わせも受け付けております。</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border-[#E5E5E5] rounded-[12px] shadow-lg shadow-black/5">
                <CardContent className="p-8">
                  <div className="mb-8 text-center">
                    <p className="text-lg font-semibold mb-2">お電話でのご相談</p>
                    <p className="text-3xl font-bold text-[#06C755]">090-1111-2222</p>
                    <p className="text-sm text-[#737373] mt-2">平日 10:00 - 18:00</p>
                  </div>

                  <Separator className="my-8" />

                  <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-[#171717]">お名前</label>
                        <Input placeholder="山田 太郎" className="rounded-[10px] border-[#E5E5E5] focus-visible:ring-[#06C755]" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-[#171717]">会社名・店舗名</label>
                        <Input placeholder="株式会社〇〇" className="rounded-[10px] border-[#E5E5E5] focus-visible:ring-[#06C755]" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-[#171717]">メールアドレス</label>
                      <Input type="email" placeholder="example@email.com" className="rounded-[10px] border-[#E5E5E5] focus-visible:ring-[#06C755]" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-[#171717]">お問い合わせ内容</label>
                      <textarea 
                        className="w-full min-h-[120px] p-3 rounded-[10px] border border-[#E5E5E5] focus:outline-none focus:ring-2 focus:ring-[#06C755] focus:border-transparent resize-y"
                        placeholder="ご相談内容をご記入ください"
                      ></textarea>
                    </div>
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button className="w-full bg-[#171717] hover:bg-[#404040] text-white py-6 rounded-[10px] text-lg font-semibold">
                        送信する
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#171717] text-white py-12">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="text-2xl font-bold text-[#06C755] mb-4 tracking-tight">とーくる</div>
              <p className="text-gray-400 text-sm leading-[1.7]">
                LINEで完結する、新しいWebサイト制作サービス。<br />
                スマホひとつで、あなたのビジネスを加速させます。
              </p>
            </div>
            <div className="md:text-right">
              <p className="text-gray-400 text-sm mb-2">お問い合わせ</p>
              <p className="text-xl font-semibold">090-1111-2222</p>
            </div>
          </div>
          <Separator className="my-8 bg-gray-800" />
          <div className="text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} とーくる. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
