import { ArrowRight, Sparkles, BookOpen, Code2, LineChart, Coffee } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    // 整体背景：柔和的浅灰白底色 + 深石板灰文字
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 selection:bg-blue-200 font-sans overflow-hidden">
      
      {/* 视觉核心：极其柔和的背景弥散氛围光 */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-blue-200/40 blur-[100px] mix-blend-multiply" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-purple-200/40 blur-[100px] mix-blend-multiply" />
      </div>

      <main className="relative z-10 max-w-5xl mx-auto px-6 py-20 md:py-32">
        
        {/* Hero 区域：视觉第一落点 */}
        <header className="mb-20 flex flex-col items-start animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm text-sm text-slate-600 mb-8 hover:shadow-md transition-shadow">
            <Sparkles className="w-4 h-4 text-blue-500" />
            <span>Welcome to my digital universe</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 text-slate-900">
            Rongzhi Chen
          </h1>
          <Link href="/about" className="inline-flex items-center gap-2 text-slate-900 font-semibold group-hover:gap-4 transition-all bg-slate-100 px-6 py-3 rounded-full hover:bg-slate-200 shadow-sm">
            More About Me & Resume <ArrowRight className="w-4 h-4" />
          </Link>
          
          <p className="text-xl md:text-2xl text-slate-600 max-w-2xl leading-relaxed font-light">
            Bridging the gap between data science precision and creative expression.
          </p>
        
        </header>

        {/* Bento Box (便当盒) 布局：质感白色卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* 大卡片：专业作品集 */}
          <div className="md:col-span-2 group relative overflow-hidden rounded-[2rem] bg-white border border-slate-200 p-8 md:p-10 transition-all hover:shadow-xl shadow-sm">
            <div className="absolute -top-10 -right-10 opacity-[0.03] group-hover:opacity-10 transition-opacity duration-500 transform group-hover:scale-110">
              <Code2 className="w-64 h-64 text-blue-600" />
            </div>
            <div className="relative z-10">
              <LineChart className="w-10 h-10 text-blue-600 mb-6" />
              <h2 className="text-3xl font-bold mb-4 tracking-tight text-slate-900">Data & Models</h2>
              <p className="text-slate-600 mb-12 max-w-md text-lg leading-relaxed">
                Deep dives into quantitative finance, predictive modeling, and analytics. Where logic meets execution.
              </p>
              <Link href="/portfolio" className="inline-flex items-center gap-2 text-slate-900 font-semibold group-hover:gap-4 transition-all bg-slate-100 px-6 py-3 rounded-full hover:bg-slate-200 w-fit">
                Explore Projects <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* 右侧小卡片 1：内容创作 */}
          <div className="group relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-50 to-purple-50 border border-slate-200 p-8 transition-all hover:shadow-xl shadow-sm">
            <BookOpen className="w-8 h-8 text-purple-600 mb-6" />
            <h2 className="text-2xl font-bold mb-3 tracking-tight text-slate-900">Thoughts</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Reflections on sociology, philosophy, and the algorithms of daily life.
            </p>
            <Link href="/blog" className="inline-flex items-center gap-2 text-purple-700 font-semibold group-hover:gap-3 transition-all w-fit">
              Read Articles <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* 底部全宽卡片：生活方式/Vlog */}
          <div className="md:col-span-3 group relative overflow-hidden rounded-[2rem] bg-white border border-slate-200 p-8 transition-all hover:shadow-xl shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Coffee className="w-6 h-6 text-orange-500" />
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">Life & Logic</h2>
              </div>
              <p className="text-slate-600">Content creation, bottom-up cooking logic, and visual storytelling.</p>
            </div>
            <button className="mt-6 md:mt-0 inline-flex items-center gap-2 text-white font-semibold group-hover:gap-4 transition-all bg-orange-500 px-6 py-3 rounded-full hover:bg-orange-600 shadow-sm">
              View Gallery <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </main>
    </div>
  );
}