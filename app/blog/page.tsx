import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function BlogIndex() {
  // 1. 找到存放文章的 posts 文件夹
  const postsDirectory = path.join(process.cwd(), 'posts');
  
  // 2. 读取里面所有的 .md 文件（如果你刚建了文件夹，这里会自动找到 cooking-logic.md）
  let fileNames: string[] = [];
  try {
    fileNames = fs.readdirSync(postsDirectory);
  } catch (error) {
    console.log("No posts directory found yet.");
  }
  
  // 3. 提取每一篇文章的标题、日期和网址后缀 (slug)
  const posts = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, ''); // 去掉 .md 作为网址
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      
      // 使用 gray-matter 解析文章最上面的标题和日期信息
      const { data } = matter(fileContents);
      
      return {
        slug,
        title: data.title || 'Untitled',
        date: data.date || 'No date',
      };
    });

  // 4. 按日期把文章从新到旧排序
  posts.sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900 py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 mb-12 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        
        <h1 className="text-4xl font-extrabold mb-12 tracking-tight">Thoughts & Writings</h1>
        
        {/* 这里会自动把 posts 里的文章渲染成列表 */}
        <div className="space-y-10">
          {posts.map((post) => (
            <article key={post.slug} className="group cursor-pointer border-b border-slate-200 pb-8 last:border-0 hover:border-slate-300 transition-colors">
              <Link href={`/blog/${post.slug}`} className="block">
                <h2 className="text-2xl font-bold mb-3 group-hover:text-purple-600 transition-colors">
                  {post.title}
                </h2>
                <div className="flex items-center gap-3 text-slate-500">
                  <time className="text-sm font-medium bg-slate-100 px-3 py-1 rounded-full">{post.date}</time>
                  <span className="text-sm">Read article →</span>
                </div>
              </Link>
            </article>
          ))}
          
          {posts.length === 0 && (
            <p className="text-slate-500">No articles found. Start writing some Markdown files in the /posts folder!</p>
          )}
        </div>
      </div>
    </main>
  );
}