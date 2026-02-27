import Link from 'next/link';
import { ArrowLeft, ArrowRight, FileText, BookOpen, Briefcase, GraduationCap, Github, Linkedin, Mail,BrainCircuit } from 'lucide-react';

export default function About() {
  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* 返回首页按钮 */}
        <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 mb-12 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        
        {/* 1. 个人介绍区 (Intro) */}
        <section className="mb-20 animate-fade-in">
          <h1 className="text-4xl font-extrabold mb-6 tracking-tight">About Me</h1>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            Hi, I'm Jingqi (Kiki). I am currently pursuing my Master of Data Science at Harvard University. 
            My passion lies at the intersection of quantitative finance, predictive modeling, and strategic problem-solving. 
            Beyond algorithms and data, I am also a content creator exploring lifestyle aesthetics through a data-driven lens.
          </p>
          {/* 社交链接 (记得换成你的真实链接) */}
          <div className="flex gap-4">
            <a href="https://github.com/Dennis030204" className="p-2 bg-white border border-slate-200 rounded-full hover:shadow-md transition-all text-slate-600 hover:text-blue-600"><Github className="w-5 h-5" /></a>
            <a href="https://www.linkedin.com/in/rongzhidennischen2003/" className="p-2 bg-white border border-slate-200 rounded-full hover:shadow-md transition-all text-slate-600 hover:text-blue-600"><Linkedin className="w-5 h-5" /></a>
            <a href="mailto:contact@rongzhi-chen.com" className="p-2 bg-white border border-slate-200 rounded-full hover:shadow-md transition-all text-slate-600 hover:text-blue-600"><Mail className="w-5 h-5" /></a>
          </div>
        </section>

        {/* 2. 简历区 (Resume / Education & Experience) */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8 border-b border-slate-200 pb-4">
            <GraduationCap className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold">Education & Experience</h2>
          </div>
          <div className="space-y-8 pl-4 border-l-2 border-slate-100">
            
            {/* 教育：哈佛 */}
            <div className="relative">
              <div className="absolute -left-[21px] top-1.5 w-3 h-3 bg-blue-500 rounded-full border-2 border-white shadow-sm"></div>
              <h3 className="text-xl font-bold">Harvard University</h3>
              <p className="text-blue-600 font-medium text-sm mb-1">Master of Science in Data Science • Expected May 2027</p>
              <p className="text-slate-500 text-sm">Relevant Coursework: Machine Learning, Advanced Analytics of Finance.</p>
            </div>

            {/* 教育：爱丁堡 */}
            <div className="relative">
              <div className="absolute -left-[21px] top-1.5 w-3 h-3 bg-indigo-400 rounded-full border-2 border-white shadow-sm"></div>
              <h3 className="text-xl font-bold">University of Edinburgh</h3>
              <p className="text-slate-700 font-medium text-sm mb-1">BSc (Hons) Mathematics and Statistics • GPA: 3.98 (Rank: 4th/83)</p>
              <p className="text-slate-500 text-sm mb-2">Sep 2021 - May 2025</p>
              <p className="text-slate-500 text-sm">Focused on Stochastic Processes, Bayesian Data Analysis, and Statistical Inference.</p>
            </div>

            {/* 经历：爱丁堡 RA */}
            <div className="relative">
              <div className="absolute -left-[21px] top-1.5 w-3 h-3 bg-purple-500 rounded-full border-2 border-white shadow-sm"></div>
              <h3 className="text-xl font-bold">Research Assistant</h3>
              <p className="text-slate-700 font-medium text-sm mb-1">University of Edinburgh • Edinburgh, UK</p>
              <p className="text-slate-500 text-sm mb-2">Sep 2024 - Sep 2025</p>
              <p className="text-slate-500 text-sm">Processed 1M+ essays using PySpark and conducted stylometric research to detect AI-generated writing using ML classifiers (SVM, Random Forests).</p>
            </div>

            {/* 经历：美团 */}
            <div className="relative">
              <div className="absolute -left-[21px] top-1.5 w-3 h-3 bg-orange-400 rounded-full border-2 border-white shadow-sm"></div>
              <h3 className="text-xl font-bold">Algorithm Analyst Intern (Data Science)</h3>
              <p className="text-slate-700 font-medium text-sm mb-1">Meituan Data Center • Shanghai, China</p>
              <p className="text-slate-500 text-sm mb-2">Jun 2024 - Sep 2024</p>
              <p className="text-slate-500 text-sm">Designed online A/B experiments for ranking strategies (achieving 12% CVR lift) and prototyped LLM-assisted multi-modal CTR features.</p>
            </div>

          </div>
          
          {/* 下载完整简历按钮 (保留，以后你可以把两份简历合并或选一份放进 public 文件夹命名为 resume.pdf) */}
          <a href="/resume.pdf" target="_blank" className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-full text-slate-700 font-medium hover:bg-slate-50 transition-colors shadow-sm">
            <FileText className="w-4 h-4" /> View Full Resume (PDF)
          </a>
        </section>

        {/* 3. 发表文章 (Publications) */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8 border-b border-slate-200 pb-4">
            <BookOpen className="w-6 h-6 text-purple-600" />
            <h2 className="text-2xl font-bold">Publications</h2>
          </div>
          <div className="space-y-6">
            <div className="p-6 bg-white border border-slate-200 rounded-2xl hover:shadow-lg transition-all group relative">
              <h3 className="text-lg font-bold mb-3 group-hover:text-blue-600 transition-colors leading-snug">
                Stylometric Detection of AI-Generated Texts: Evidence from Human and Machine-Written Essays
              </h3>
              <p className="text-sm text-slate-500 mb-4">
                Jingqi He, <span className="font-semibold text-slate-800">Rongzhi Chen</span>, Shizhao Xiong, and Gordon J. Ross • 2022
              </p>
              <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                This study adapts stylometric techniques to distinguish between human- and AI-generated texts across 110 subject areas. By evaluating classifiers like Burrows' Delta, Random Forest, and SVMs on a dataset of 4,346 essays, our findings reveal that AI-generated texts exhibit striking stylistic uniformity, while human writing is marked by variability and individuality.
              </p>
              <a 
                href="/ai-text-detection.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 text-sm font-semibold hover:text-blue-700 hover:gap-3 transition-all"
              >
                Read Full Paper <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* 4. 重点项目 (Selected Projects) */}
        <section>
          <div className="flex items-center gap-3 mb-8 border-b border-slate-200 pb-4">
            <Briefcase className="w-6 h-6 text-teal-500" />
            <h2 className="text-2xl font-bold">Selected Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="p-6 bg-white border border-slate-200 rounded-2xl hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-3">Quantitative Investment & Risk Modeling</h3>
                <p className="text-slate-600 text-sm mb-4">Modeled non-Gaussian tail risk using GARCH volatility forecasting and Value-at-Risk (VaR). Backtested Pairs Trading strategies utilizing Co-integration and Vector Autoregression to exploit mean-reversion signals.</p>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-2 py-1 bg-slate-50 text-slate-600 text-xs rounded-md border border-slate-100 font-medium">Time Series</span>
                <span className="px-2 py-1 bg-slate-50 text-slate-600 text-xs rounded-md border border-slate-100 font-medium">GARCH / VaR</span>
                <span className="px-2 py-1 bg-slate-50 text-slate-600 text-xs rounded-md border border-slate-100 font-medium">Python</span>
              </div>
            </div>
            
            <div className="p-6 bg-white border border-slate-200 rounded-2xl hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-3">Derivatives Pricing via Deep Surrogates</h3>
                <p className="text-slate-600 text-sm mb-4">Engineered "Deep Surrogate" Neural Networks to approximate complex pricing functions, significantly accelerating computational efficiency compared to traditional Monte Carlo simulation baselines.</p>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-2 py-1 bg-slate-50 text-slate-600 text-xs rounded-md border border-slate-100 font-medium">Deep Learning</span>
                <span className="px-2 py-1 bg-slate-50 text-slate-600 text-xs rounded-md border border-slate-100 font-medium">Neural Networks</span>
                <span className="px-2 py-1 bg-slate-50 text-slate-600 text-xs rounded-md border border-slate-100 font-medium">PyTorch</span>
              </div>
            </div>

            <div className="p-6 bg-white border border-slate-200 rounded-2xl hover:shadow-md transition-shadow md:col-span-2 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-3">A/B Testing & Traffic Allocation Framework</h3>
                <p className="text-slate-600 text-sm mb-4">Evaluated traffic allocation policies via randomized controlled experiments. Executed systematic model sweeps across logistic regression and gradient-boosted models, improving online CTR uplift while preserving downstream conversion stability.</p>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-2 py-1 bg-slate-50 text-slate-600 text-xs rounded-md border border-slate-100 font-medium">A/B Testing</span>
                <span className="px-2 py-1 bg-slate-50 text-slate-600 text-xs rounded-md border border-slate-100 font-medium">XGBoost</span>
                <span className="px-2 py-1 bg-slate-50 text-slate-600 text-xs rounded-md border border-slate-100 font-medium">SQL / BigQuery</span>
              </div>
            </div>

          </div>
        </section>

        {/* 5. 核心理念与底层哲学 (Core Ethos & Mindset) */}
        <section className="mt-20">
          <div className="flex items-center gap-3 mb-8 border-b border-slate-200 pb-4">
            <BrainCircuit className="w-6 h-6 text-indigo-500" />
            <h2 className="text-2xl font-bold">Mindset & Philosophy</h2>
          </div>
          
          <div className="bg-slate-900 text-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
            {/* 极具深度的暗色背景光晕装饰 */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -mr-20 -mt-20 transition-transform duration-700 group-hover:scale-150"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-rose-500/10 rounded-full blur-3xl -ml-20 -mb-20 transition-transform duration-700 group-hover:scale-150"></div>
            
            <div className="relative z-10">
              {/* 核心人格标签 */}
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-xs font-bold tracking-widest uppercase text-slate-200">
                  Stoic Individualist
                </span>
                <span className="px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-xs font-bold tracking-widest uppercase text-slate-200">
                  The Strategist
                </span>
                {/* 这里的 MBTI 你可以替换成你真实的，比如 ENTJ 或 INTJ */}
                <span className="px-4 py-1.5 bg-indigo-500/30 border border-indigo-400/50 rounded-full text-xs font-bold tracking-widest uppercase text-indigo-200">
                  MBTI: [INFJ]
                </span>
              </div>
              
              <h3 className="text-3xl font-extrabold mb-6 leading-tight tracking-tight">
                Deconstructing Systems, <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-rose-400">
                  Understanding Human Nature.
                </span>
              </h3>
              
              <div className="space-y-5 text-slate-300 font-light leading-relaxed text-lg">
                <p>
                  Beyond quantitative models and data pipelines, my deepest intellectual curiosity lies in <strong className="text-white font-semibold">sociology, philosophy, and the mechanics of human nature</strong>. I approach the world not just as a data scientist, but as a strategist navigating complex systems.
                </p>
                <p>
                  I thrive on <strong className="text-white font-semibold">critical thinking and rigorous debate</strong>. True strategic advantage comes from understanding the underlying logic of society and the psychological drivers of human behavior. I build my sovereignty through an extreme internal locus of control—owning my efforts, decoding failures, and constantly evolving.
                </p>
                {/* 展现脆弱性与力量的宣言金句 */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="italic text-slate-400 pl-4 border-l-2 border-indigo-500 text-base">
                    "True sovereignty is not about building impenetrable armor, but having the courage to embrace vulnerability. It is about transforming the relentless drive of a 'lone wolf' into the empathetic vision of a leader who creates genuine value."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}