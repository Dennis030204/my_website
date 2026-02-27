"use client";

import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      // 新页面刚准备加载时的状态（透明、偏下一点）
      initial={{ opacity: 0, y: 20 }}
      // 新页面加载完成时的状态（完全不透明、回到原位）
      animate={{ opacity: 1, y: 0 }}
      // 动画的持续时间和节奏（easeInOut 让开头和结尾极其丝滑）
      transition={{ ease: "easeInOut", duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
}