import Link from 'next/link';
import { ArrowLeft, Camera, Utensils, Activity, PlayCircle } from 'lucide-react';

export default function LifeAndLogic() {
  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* 返回首页按钮 */}
        <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-orange-500 mb-12 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        
        <header className="mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-slate-900">
            Life & <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-500">Logic</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl leading-relaxed font-light">
            Content creation, the bottom-up logic of cooking, and capturing the aesthetics of daily life. 
            Here is where algorithms meet creativity.
          </p>
        </header>

        <div className="space-y-24">
          
          {/* 板块 1: 内容创作与视觉叙事 (Content Creation / Rednote) */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <Camera className="w-6 h-6 text-rose-500" />
              <h2 className="text-2xl font-bold">Visual Storytelling & Aesthetics</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* 大图占位 */}
              <div className="aspect-square md:aspect-[4/3] bg-slate-200 rounded-3xl overflow-hidden relative group">
                {/* 以后在这里替换成真实的 <img> 标签 */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white font-medium">Beauty & Lifestyle Content (10k+ Community)</p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-6 md:pl-8">
                <h3 className="text-2xl font-bold leading-tight">Curating the Visual Experience</h3>
                <p className="text-slate-600 leading-relaxed">
                  Treating content creation not just as sharing, but as an exercise in visual logic and aesthetic presentation. Exploring how color, composition, and authentic storytelling build engagement and community.
                </p>
              </div>
            </div>
          </section>

          {/* 板块 2: 底层逻辑烹饪 (The Data-Driven Chef) */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <Utensils className="w-6 h-6 text-orange-500" />
              <h2 className="text-2xl font-bold">The Bottom-Up Logic of Cooking</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* 烹饪卡片 1 */}
              <div className="bg-white border border-slate-200 p-6 rounded-3xl hover:shadow-xl transition-shadow group">
                <div className="w-full h-48 bg-slate-100 rounded-2xl mb-6 flex items-center justify-center text-slate-400 group-hover:bg-orange-50 transition-colors">
                  <PlayCircle className="w-10 h-10 opacity-50" />
                </div>
                <h3 className="text-lg font-bold mb-2">Deconstructing Hot Pot</h3>
                <p className="text-sm text-slate-500">Understanding flavor profiles and thermal dynamics behind the perfect broth.</p>
              </div>
              {/* 烹饪卡片 2 */}
              <div className="bg-white border border-slate-200 p-6 rounded-3xl hover:shadow-xl transition-shadow group">
                <div className="w-full h-48 bg-slate-100 rounded-2xl mb-6 flex items-center justify-center text-slate-400 group-hover:bg-orange-50 transition-colors">
                  <PlayCircle className="w-10 h-10 opacity-50" />
                </div>
                <h3 className="text-lg font-bold mb-2">Protein & Heat</h3>
                <p className="text-sm text-slate-500">The science of searing and how temperature gradients affect texture.</p>
              </div>
              <div className="flex flex-col justify-center p-6">
                <h3 className="text-xl font-bold mb-4">Why Bottom-Up?</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Instead of blindly following recipes, I focus on the first principles of culinary arts. Once you understand the underlying variables—heat, acid, fat, and salt—you can model any dish.
                </p>
              </div>
            </div>
          </section>

          {/* 板块 3: 生活方式与律动 (Life in Motion) */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <Activity className="w-6 h-6 text-blue-500" />
              <h2 className="text-2xl font-bold">Life in Motion</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {/* 照片墙布局占位 */}
              <div className="aspect-square bg-slate-200 rounded-2xl hover:scale-[1.02] transition-transform"></div>
              <div className="aspect-square bg-slate-200 rounded-2xl hover:scale-[1.02] transition-transform flex items-center justify-center text-center p-4">
                <span className="text-slate-500 text-sm font-medium">Building Muscle & Fitness Routines</span>
              </div>
              <div className="aspect-square bg-slate-200 rounded-2xl hover:scale-[1.02] transition-transform"></div>
              <div className="aspect-square bg-slate-200 rounded-2xl hover:scale-[1.02] transition-transform flex items-center justify-center text-center p-4">
                <span className="text-slate-500 text-sm font-medium">Museums & Cultural Spaces</span>
              </div>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}