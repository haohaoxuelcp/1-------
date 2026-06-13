/**
 * About 组件 - 关于我
 * 整合个人职业经历、核心技能清单、个人成长理念
 */
import { skills } from '../data/skills'

function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">关于我</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* 左侧：个人介绍 */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#3b82f6]">职业经历</h3>
            <p className="text-[#a0a0b0] leading-relaxed mb-6">
              深耕工业质检机器视觉领域4年，熟悉各类工业零部件缺陷检测、尺寸测量等主流场景，
              熟练运用主流视觉工具与算法，可独立完成全流程视觉项目落地，工程实战能力扎实。
            </p>
            <h3 className="text-xl font-semibold mb-4 text-[#3b82f6]">成长理念</h3>
            <p className="text-[#a0a0b0] leading-relaxed">
              摒弃内耗、拒绝摆烂。坚持踏实生活、持续精进技术，以每日积累沉淀人生价值，
              建立自律、进取、有担当的个人生活与职业节奏。
            </p>
          </div>

          {/* 右侧：技能列表 */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-[#3b82f6]">核心技能</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill.name}
                  className="px-4 py-2 bg-[#1a1a2e] rounded-lg text-sm text-[#a0a0b0] border border-white/10 hover:border-[#3b82f6] hover:text-white transition-colors"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
