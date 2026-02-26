import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 mb-12 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        
        <h1 className="text-4xl font-extrabold mb-12 tracking-tight">Selected Projects</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 项目 1 */}
          <div className="p-6 bg-white border border-slate-200 rounded-2xl hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-3">Quantitative Finance Predictive Model</h3>
            <p className="text-slate-600 text-sm">Developed algorithms for market trend analysis and risk assessment using advanced data modeling.</p>
          </div>

          {/* 项目 2 */}
          <div className="p-6 bg-white border border-slate-200 rounded-2xl hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-3">Sports Data Analytics Dashboard</h3>
            <p className="text-slate-600 text-sm">Interactive visualization of player performance metrics and team strategies.</p>
          </div>

          {/* 项目 3 */}
          <div className="p-6 bg-white border border-slate-200 rounded-2xl hover:shadow-lg transition-shadow md:col-span-2">
            <h3 className="text-xl font-bold mb-3">Content Strategy & Growth (10k+ Followers)</h3>
            <p className="text-slate-600 text-sm">Data-driven approach to content creation on Rednote, optimizing engagement and aesthetic presentation for a beauty-focused audience.</p>
          </div>
        </div>
      </div>
    </main>
  );
}