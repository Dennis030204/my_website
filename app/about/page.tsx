import Link from 'next/link';
import { ArrowLeft, FileText, BookOpen, Briefcase, GraduationCap, Github, Linkedin, Mail } from 'lucide-react';

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
            Hi, I'm Rongzhi (Dennis). I am currently pursuing my Master of Data Science at Harvard University. 
            My passion lies at the intersection of quantitative finance, sports data analytics, and strategic problem-solving. 
            Beyond algorithms and models, I am also a content creator exploring food and lifestyle through a critical-thinking lens.
          </p>
          {/* 社交链接 */}
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
            {/* 教育经历 */}
            <div className="relative">
              <div className="absolute -left-[21px] top-1.5 w-3 h-3 bg-blue-500 rounded-full border-2 border-white"></div>
              <h3 className="text-xl font-bold">Harvard University</h3>
              <p className="text-blue-600 font-medium text-sm mb-2">Master of Data Science • Expected Graduation</p>
              <p className="text-slate-500 text-sm">Focusing on advanced statistical modeling, machine learning, and quantitative analysis.</p>
            </div>
            <div className="relative">
              <div className="absolute -left-[21px] top-1.5 w-3 h-3 bg-blue-300 rounded-full border-2 border-white"></div>
              <h3 className="text-xl font-bold">University of Edinburgh</h3>
              <p className="text-blue-600 font-medium text-sm mb-2">Bachlor of Science, Mathematics and Statistics • 2021/Sep to 2025/Sep</p>
              <p className="text-slate-500 text-sm">Focusing on advanced statistical modeling, machine learning, and quantitative analysis.</p>
            </div>
            {/* 实习/工作经历 */}
            <div className="relative">
              <div className="absolute -left-[21px] top-1.5 w-3 h-3 bg-slate-300 rounded-full border-2 border-white"></div>
              <h3 className="text-xl font-bold">Content Creator (Rednote)</h3>
              <p className="text-blue-600 font-medium text-sm mb-2">Beauty & Lifestyle • 10k+ Followers</p>
              <p className="text-slate-500 text-sm">Applying data-driven strategies to content creation, audience growth, and engagement optimization.</p>
            </div>
          </div>
          {/* 下载完整简历按钮 */}
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
            
            {/* 论文卡片 */}
            <div className="p-6 bg-white border border-slate-200 rounded-2xl hover:shadow-lg transition-all group relative">
              <h3 className="text-lg font-bold mb-3 group-hover:text-blue-600 transition-colors leading-snug">
                Stylometric Detection of AI-Generated Texts: Evidence from Human and Machine-Written Essays
              </h3>
              
              {/* 作者列表，把你的名字加粗高亮 */}
              <p className="text-sm text-slate-500 mb-4">
                Jingqi He, <span className="font-semibold text-slate-800">Rongzhi Chen</span>, Shizhao Xiong, and Gordon J. Ross • 2022
              </p>
              
              {/* 摘要精简版 */}
              <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                This study adapts stylometric techniques to distinguish between human- and AI-generated texts across 110 subject areas. By evaluating classifiers like Burrows' Delta, Random Forest, and SVMs on a dataset of 4,346 essays, our findings reveal that AI-generated texts exhibit striking stylistic uniformity, while human writing is marked by variability and individuality.
              </p>
              
              {/* 链接到你的 PDF 文件 */}
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
            <Briefcase className="w-6 h-6 text-orange-500" />
            <h2 className="text-2xl font-bold">Selected Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-white border border-slate-200 rounded-2xl hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-3">Quantitative Finance Predictive Model</h3>
              <p className="text-slate-600 text-sm mb-4">Developed algorithms for market trend analysis and risk assessment using advanced data modeling.</p>
              <div className="flex gap-2">
                <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-md">Python</span>
                <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-md">Machine Learning</span>
              </div>
            </div>
            
            <div className="p-6 bg-white border border-slate-200 rounded-2xl hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-3">Sports Data Analytics Dashboard</h3>
              <p className="text-slate-600 text-sm mb-4">Interactive visualization of player performance metrics and team strategies.</p>
              <div className="flex gap-2">
                <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-md">Data Viz</span>
                <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-md">SQL</span>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}