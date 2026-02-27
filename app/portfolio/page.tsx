"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, LineChart, Cpu, Target, Radar, ArrowRight, Github } from 'lucide-react';

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* 返回首页 */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 mb-12 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
        </motion.div>

        {/* Hero 区域 */}
        <header className="mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-slate-900"
          >
            Data & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Models</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-600 max-w-3xl leading-relaxed font-light"
          >
            Deep dives into quantitative finance, predictive modeling, and analytics. <strong className="text-slate-800 font-medium">Where logic meets execution.</strong>
          </motion.p>
        </header>

        {/* 深度项目列表 (Case Studies) */}
        <div className="space-y-20">

          {/* Project 01: Quant */}
          <motion.article 
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.7 }}
            className="group grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
          >
            <div className="md:col-span-5 aspect-[4/3] bg-slate-900 rounded-3xl overflow-hidden relative flex items-center justify-center border border-slate-200 shadow-lg">
              <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <LineChart className="w-24 h-24 text-blue-500/50 group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute top-6 left-6 font-mono text-slate-500 text-lg">01</div>
            </div>
            <div className="md:col-span-7 md:pl-8 flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-4">Quantitative Investment & Risk Modeling</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Engineered robust financial models focusing on non-Gaussian tail risk via GARCH volatility forecasting, Value-at-Risk (VaR), and Expected Shortfall (ES). Backtested Pairs Trading strategies utilizing Co-integration and Vector Autoregression (VAR) to exploit mean-reversion signals while optimizing the Information Ratio.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-3 py-1.5 bg-blue-50 text-blue-700 text-sm font-semibold rounded-full">Time Series</span>
                <span className="px-3 py-1.5 bg-blue-50 text-blue-700 text-sm font-semibold rounded-full">GARCH / VaR</span>
                <span className="px-3 py-1.5 bg-blue-50 text-blue-700 text-sm font-semibold rounded-full">Python (NumPy/Pandas)</span>
              </div>
            </div>
          </motion.article>

          {/* Project 02: Deep Surrogates */}
          <motion.article 
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.7 }}
            className="group grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
          >
            <div className="md:col-span-5 md:order-last aspect-[4/3] bg-slate-900 rounded-3xl overflow-hidden relative flex items-center justify-center border border-slate-200 shadow-lg">
              <div className="absolute inset-0 bg-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Cpu className="w-24 h-24 text-indigo-500/50 group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute top-6 right-6 font-mono text-slate-500 text-lg">02</div>
            </div>
            <div className="md:col-span-7 md:pr-8 flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-4">Derivatives Pricing via Deep Surrogates</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Developed a cutting-edge deep learning architecture to approximate complex derivatives pricing functions. By deploying Neural Networks as "Deep Surrogates," this approach drastically reduced computational latency compared to traditional Monte Carlo simulation baselines, ensuring high-frequency viability.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-3 py-1.5 bg-indigo-50 text-indigo-700 text-sm font-semibold rounded-full">Deep Learning</span>
                <span className="px-3 py-1.5 bg-indigo-50 text-indigo-700 text-sm font-semibold rounded-full">PyTorch</span>
                <span className="px-3 py-1.5 bg-indigo-50 text-indigo-700 text-sm font-semibold rounded-full">Monte Carlo</span>
              </div>
            </div>
          </motion.article>

          {/* Project 03: Meituan A/B Testing */}
          <motion.article 
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.7 }}
            className="group grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
          >
            <div className="md:col-span-5 aspect-[4/3] bg-slate-900 rounded-3xl overflow-hidden relative flex items-center justify-center border border-slate-200 shadow-lg">
              <div className="absolute inset-0 bg-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Target className="w-24 h-24 text-orange-500/50 group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute top-6 left-6 font-mono text-slate-500 text-lg">03</div>
            </div>
            <div className="md:col-span-7 md:pl-8 flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-4">CTR Prediction & Traffic Allocation (Meituan)</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Prototyped LLM-assisted, scene-aware multi-modal CTR features. Executed rigorous model sweeps across XGBoost and embedding architectures. Designed and analyzed online A/B experiments for ranking strategies with strict temporal alignment, successfully delivering a <strong className="text-slate-800">12% CVR lift</strong>.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-3 py-1.5 bg-orange-50 text-orange-700 text-sm font-semibold rounded-full">XGBoost</span>
                <span className="px-3 py-1.5 bg-orange-50 text-orange-700 text-sm font-semibold rounded-full">A/B Testing</span>
                <span className="px-3 py-1.5 bg-orange-50 text-orange-700 text-sm font-semibold rounded-full">BigQuery SQL</span>
              </div>
            </div>
          </motion.article>

          {/* Project 04: Applied Math (Zhejiang Uni) */}
          <motion.article 
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.7 }}
            className="group grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
          >
            <div className="md:col-span-5 md:order-last aspect-[4/3] bg-slate-900 rounded-3xl overflow-hidden relative flex items-center justify-center border border-slate-200 shadow-lg">
              <div className="absolute inset-0 bg-rose-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Radar className="w-24 h-24 text-rose-500/50 group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute top-6 right-6 font-mono text-slate-500 text-lg">04</div>
            </div>
            <div className="md:col-span-7 md:pr-8 flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-4">Sparse Sensor Localization (Inverse Inference)</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Formulated atmospheric pollution source identification as an ill-conditioned inverse problem. Applied linear algebra-based estimation methods and MATLAB simulations to localize emission sources, stress-testing the algorithmic stability under extreme measurement noise.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-3 py-1.5 bg-rose-50 text-rose-700 text-sm font-semibold rounded-full">Applied Math</span>
                <span className="px-3 py-1.5 bg-rose-50 text-rose-700 text-sm font-semibold rounded-full">MATLAB</span>
                <span className="px-3 py-1.5 bg-rose-50 text-rose-700 text-sm font-semibold rounded-full">Simulation</span>
              </div>
            </div>
          </motion.article>

        </div>
      </div>
    </main>
  );
}