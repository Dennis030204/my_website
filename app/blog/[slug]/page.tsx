import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  // 1. 获取网址后缀 (比如 cooking-logic)
  const { slug } = await params;
  
  // 2. 去 posts 文件夹里找对应的 .md 文件
  const filePath = path.join(process.cwd(), 'posts', `${slug}.md`);
  
  // 如果输入了不存在的文章网址，显示提示
  if (!fs.existsSync(filePath)) {
    return <div className="p-20 text-center text-xl text-slate-500">Article not found in the digital universe.</div>;
  }

  // 3. 读取文件并解析出标题、日期和正文内容
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContent);

  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900 py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <Link href="/blog" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 mb-12 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Articles
        </Link>
        
        {/* 这就是神奇的 prose 类名，它会自动把毫无样式的 Markdown 变成顶级杂志排版 */}
        <article className="prose prose-slate prose-lg max-w-none prose-headings:font-bold prose-a:text-blue-600 prose-blockquote:border-l-blue-500 prose-blockquote:bg-blue-50/50 prose-blockquote:py-1 prose-blockquote:px-4 prose-blockquote:rounded-r-lg">
          <h1 className="mb-4">{data.title}</h1>
          <p className="text-sm text-slate-400 font-medium mt-0 mb-12">{data.date}</p>
          
          <ReactMarkdown>{content}</ReactMarkdown>
        </article>
      </div>
    </main>
  );
}