/**
 * Hero 组件 - 首页首屏核心展示
 * 展示个人头像、核心职业标题、精简个人简介
 * 使用 Tailwind CSS 实现深色主题和渐变色效果
 * 集成 Framer Motion 实现渐入动画
 */
import { motion } from 'framer-motion'

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden"
    >
      {/* 背景渐变光晕装饰 */}
      <div className="absolute inset-0 pointer-events-none">
        {/* 主光晕：科技蓝 */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#3b82f6]/10 rounded-full blur-[120px]" />
        {/* 辅助光晕：紫色 */}
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#8b5cf6]/8 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 text-center max-w-3xl">
        {/* 头像：渐变边框 + 悬浮动画 */}
        <motion.div
          className="mx-auto mb-8 w-36 h-36 md:w-44 md:h-44 rounded-full p-[3px] bg-gradient-to-br from-[#3b82f6] via-[#8b5cf6] to-[#ec4899]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {/* 头像内部（占位） */}
          <div className="w-full h-full rounded-full bg-[#0a0a0a] flex items-center justify-center">
            <span className="text-5xl md:text-6xl">👤</span>
          </div>
        </motion.div>

        {/* 职业标签：小标签 + 渐变背景 */}
        <motion.div
          className="inline-block mb-6 px-5 py-1.5 rounded-full bg-gradient-to-r from-[#3b82f6]/20 to-[#8b5cf6]/20 border border-[#3b82f6]/30"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="text-sm text-[#60a5fa] font-medium tracking-wider">
            工业机器视觉 · 4年实战经验
          </span>
        </motion.div>

        {/* 大标题：渐变文字 */}
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-[#e0e7ff] to-[#94a3b8] bg-clip-text text-transparent leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          机器视觉工程师
        </motion.h1>

        {/* 个人简介：分层文字配色 */}
        <motion.p
          className="text-base md:text-lg lg:text-xl text-[#94a3b8] mb-10 leading-relaxed max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          深耕工业质检算法领域，具备
          <span className="text-[#60a5fa] font-medium">售前评估</span>、
          <span className="text-[#60a5fa] font-medium">方案设计</span>、
          <span className="text-[#60a5fa] font-medium">项目交付</span>、
          <span className="text-[#60a5fa] font-medium">售后运维</span>
          全流程能力，擅长工业视觉算法落地与现场问题解决。
        </motion.p>

        {/* CTA 按钮组 */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {/* 主按钮：查看项目 */}
          <a
            href="#projects"
            className="px-8 py-3 bg-gradient-to-r from-[#3b82f6] to-[#2563eb] hover:from-[#2563eb] hover:to-[#1d4ed8] rounded-lg text-white font-medium transition-all duration-300 shadow-lg shadow-[#3b82f6]/25 hover:shadow-[#3b82f6]/40 hover:-translate-y-0.5"
          >
            查看项目
          </a>

          {/* 次按钮：联系我 */}
          <a
            href="#contact"
            className="px-8 py-3 border border-white/20 hover:border-[#3b82f6]/50 rounded-lg text-[#94a3b8] hover:text-white font-medium transition-all duration-300 hover:-translate-y-0.5"
          >
            联系我
          </a>
        </motion.div>

        {/* 向下滚动指示器 */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.div
            className="w-6 h-10 mx-auto border-2 border-white/20 rounded-full flex items-start justify-center p-1.5"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="w-1.5 h-1.5 bg-[#3b82f6] rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
