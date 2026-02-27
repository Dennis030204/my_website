"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowLeft, Brain, UtensilsCrossed, BookOpen, Construction, Quote } from 'lucide-react';

export default function LifeAndLogic() {
  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900 py-20 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        
        {/* 返回按钮 */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-orange-500 mb-12 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
        </motion.div>
        
        {/* 1. Hero 区域：你的专属照片与生活宣言 */}
        <header className="mb-24 flex flex-col-reverse md:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-1 space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Life as an <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-500">
                Open System.
              </span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed font-light">
              I treat daily life the same way I treat a machine learning model: define the objective function, understand the underlying variables, and iterate. 
            </p>
            <p className="text-slate-500 leading-relaxed">
              This space is my digital sandbox. It's where I deconstruct cooking into thermal dynamics, dissect social interactions through critical thinking, and build my visual storytelling infrastructure from the ground up.
            </p>
          </motion.div>

          {/* 你的专属照片位 (极具高级感的宝丽来边框设计) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }} 
            animate={{ opacity: 1, scale: 1, rotate: 2 }} 
            transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
            className="w-64 h-80 md:w-80 md:h-[26rem] flex-shrink-0 bg-white p-4 pb-12 shadow-2xl rounded-sm border border-slate-100 relative group hover:rotate-0 transition-all duration-500"
          >
            <div className="relative w-full h-full bg-slate-200 overflow-hidden">
              {/* === 请将你的照片命名为 me.jpg 并放进 public/images 文件夹 === */}
              <Image 
                src="/images/me.jpg" 
                alt="Portrait of Dennis" 
                fill 
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />

            </div>
            <div className="absolute bottom-4 left-0 w-full text-center">
              <span className="text-slate-400 font-mono text-sm tracking-widest">Grindelwald, Switzerland</span>
            </div>
          </motion.div>
        </header>

        <div className="space-y-24">
          
          {/* 2. 精神食粮 (The Information Diet) - 展现你对哲学的热爱 */}
          <motion.section 
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Brain className="w-6 h-6 text-indigo-500" />
              <h2 className="text-2xl font-bold">The Information Diet</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="col-span-1 md:col-span-2 bg-white border border-slate-200 p-8 rounded-3xl shadow-sm">
                <Quote className="w-8 h-8 text-slate-200 mb-4" />
                <h3 className="text-xl font-bold mb-4">Current Mental Models</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Before outputting content, I focus on the quality of my inputs. My current deep dives involve intersecting <strong className="text-slate-800">Stoic philosophy</strong> with modern <strong className="text-slate-800">Societal Structures</strong>. I am fascinated by how individual agency operates within deterministic macro-environments.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full font-medium">Critical Thinking</span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full font-medium">Human Nature</span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full font-medium">Systems Theory</span>
                </div>
              </div>
              
              <div className="bg-slate-900 text-white border border-slate-800 p-8 rounded-3xl shadow-lg flex flex-col justify-between">
                <div>
                  <BookOpen className="w-6 h-6 text-slate-400 mb-4" />
                  <h3 className="text-lg font-bold mb-2">On the Nightstand</h3>
                  <ul className="space-y-3 text-sm text-slate-300 mt-4">
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-400 mt-0.5">✦</span>
                      <span>The Courage to Be Disliked (Adlerian Psychology)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-400 mt-0.5">✦</span>
                      <span>Meditations by Marcus Aurelius</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-400 mt-0.5">✦</span>
                      <span>Begin Again</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.section>

          {/* 3. 做饭的底层逻辑 (Cooking from First Principles) - 文字与理论版 */}
          <motion.section 
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <UtensilsCrossed className="w-6 h-6 text-orange-500" />
              <h2 className="text-2xl font-bold">First Principles of Cooking</h2>
            </div>
            <div className="bg-white border border-slate-200 p-8 rounded-3xl shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-50 rounded-full blur-3xl -mr-20 -mt-20 z-0"></div>
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Deconstructing the Recipe</h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    I rarely follow recipes blindly. Cooking is essentially applied physics and chemistry. Once you understand the underlying variables, you can reverse-engineer any dish.
                  </p>
                  <ul className="space-y-4">
                    <li className="border-l-2 border-orange-500 pl-4">
                      <strong className="block text-slate-900">1. Thermal Dynamics</strong>
                      <span className="text-sm text-slate-500">The Maillard reaction vs. Caramelization. Heat transfer mediums (oil vs. water).</span>
                    </li>
                    <li className="border-l-2 border-rose-500 pl-4">
                      <strong className="block text-slate-900">2. Flavor Matrices</strong>
                      <span className="text-sm text-slate-500">Balancing Acid, Fat, Salt, and Heat. How capsaicin dissolves in lipids.</span>
                    </li>
                  </ul>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-full h-full min-h-[200px] border-2 border-dashed border-slate-200 rounded-2xl flex flex-col items-center justify-center text-slate-400 bg-slate-50/50">
                    <span className="font-mono text-sm tracking-wider">VISUAL DATA PENDING</span>
                    <span className="text-xs mt-2">Documenting the kitchen experiments...</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* 4. 即将到来 (The Sandbox / Coming Soon) */}
          <motion.section 
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.7 }}
            className="text-center py-16 border-t border-slate-200"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 text-slate-500 mb-6">
              <Construction className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Infrastructure Under Construction</h2>
            <p className="text-slate-500 max-w-lg mx-auto leading-relaxed">
              I am currently laying the groundwork for visual storytelling and content creation. Vlogs, aesthetic experiments, and lifestyle analytics are being formulated. 
            </p>
            <div className="mt-8">
              <span className="px-4 py-2 bg-slate-900 text-white text-sm font-semibold rounded-full shadow-lg">
                Phase 1: Strategizing
              </span>
            </div>
          </motion.section>

        </div>
      </div>
    </main>
  );
}