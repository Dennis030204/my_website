import Link from 'next/link';
import { Sparkles } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#f8fafc] flex flex-col items-center justify-center text-slate-900 px-6">
      <Sparkles className="w-12 h-12 text-slate-300 mb-6 animate-pulse" />
      <h1 className="text-4xl font-extrabold tracking-tight mb-4">404 - Wandering off the map?</h1>
      <p className="text-slate-500 mb-8 text-center max-w-md">
        It seems this logic node doesn't exist yet in my digital universe. Let's get you back to familiar ground.
      </p>
      <Link href="/" className="px-6 py-3 bg-slate-900 text-white rounded-full font-medium hover:bg-slate-800 transition-colors shadow-lg">
        Return Home
      </Link>
    </main>
  );
}