import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function Blog() {
  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900 py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 mb-12 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        
        <h1 className="text-4xl font-extrabold mb-12 tracking-tight">Thoughts & Writings</h1>
        
        <div className="space-y-10">
          {/* 文章占位 1 */}
          <article className="group cursor-pointer">
            <h2 className="text-2xl font-bold mb-2 group-hover:text-purple-600 transition-colors">The Bottom-Up Logic of Cooking: Deconstructing Recipes</h2>
            <p className="text-slate-500 mb-3">Exploring the fundamental principles of culinary arts through a structural, logical lens.</p>
            <time className="text-sm text-slate-400 font-medium">Feb 26, 2026</time>
          </article>

          {/* 文章占位 2 */}
          <article className="group cursor-pointer">
            <h2 className="text-2xl font-bold mb-2 group-hover:text-purple-600 transition-colors">Reflections on Sociology and Critical Thinking</h2>
            <p className="text-slate-500 mb-3">Observations on the algorithms of daily life, societal structures, and philosophical inquiry.</p>
            <time className="text-sm text-slate-400 font-medium">Jan 15, 2026</time>
          </article>
        </div>
      </div>
    </main>
  );
}