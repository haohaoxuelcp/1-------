/**
 * Projects 组件 - 项目展示
 * 以卡片形式展示个人代表性工业机器视觉项目
 * 每张卡片包含截图、标题、描述、项目价值和技术栈标签
 * 集成 Framer Motion 实现滚动渐入动画
 */
import { motion } from 'framer-motion'
import { projects } from '../data/projects'

function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        {/* 区域标题 */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block mb-4 px-4 py-1.5 text-sm text-[#60a5fa] rounded-full bg-[#3b82f6]/10 border border-[#3b82f6]/20">
            实战项目
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white to-[#94a3b8] bg-clip-text text-transparent">
            项目展示
          </h2>
          <p className="mt-4 text-[#94a3b8] max-w-xl mx-auto">
            以下是我参与的核心工业机器视觉项目，涵盖缺陷检测、尺寸测量等主流场景
          </p>
        </motion.div>

        {/* 项目卡片网格 */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.name}
              className="group relative bg-[#111118] rounded-2xl border border-white/[0.06] overflow-hidden hover:border-[#3b82f6]/30 transition-all duration-500"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* 项目截图区域 */}
              <div className="relative h-48 md:h-52 overflow-hidden">
                {/* 渐变背景占位 */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}
                />
                {/* 网格装饰 */}
                <div className="absolute inset-0 opacity-10">
                  <div
                    className="w-full h-full"
                    style={{
                      backgroundImage:
                        'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
                      backgroundSize: '24px 24px',
                    }}
                  />
                </div>
                {/* 项目图标 */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl group-hover:scale-110 transition-transform duration-500">
                    {project.icon}
                  </span>
                </div>
                {/* 底部渐变遮罩 */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#111118] to-transparent" />
              </div>

              {/* 卡片内容 */}
              <div className="p-6 pt-4">
                {/* 项目名称 */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#60a5fa] transition-colors duration-300">
                  {project.name}
                </h3>

                {/* 项目简介 */}
                <p className="text-sm text-[#94a3b8] leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* 项目价值/成果 */}
                <div className="mb-5 px-4 py-2.5 rounded-lg bg-[#3b82f6]/[0.08] border border-[#3b82f6]/[0.12]">
                  <p className="text-xs text-[#60a5fa] font-medium">
                    🎯 {project.value}
                  </p>
                </div>

                {/* 技术栈标签 */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs text-[#94a3b8] bg-white/[0.04] rounded-full border border-white/[0.06] group-hover:border-[#3b82f6]/20 group-hover:text-[#60a5fa] transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* 卡片悬浮光效 */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-[#3b82f6]/[0.03] to-transparent" />
            </motion.article>
          ))}
        </div>

        {/* 底部提示 */}
        <motion.p
          className="text-center mt-12 text-sm text-[#94a3b8]/60"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          更多项目持续更新中...
        </motion.p>
      </div>
    </section>
  )
}

export default Projects
