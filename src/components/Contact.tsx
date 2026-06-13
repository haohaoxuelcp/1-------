/**
 * Contact 组件 - 联系方式
 * 展示邮箱、GitHub、行业社交账号等对外链接
 */
function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">联系我</h2>
        <p className="text-[#a0a0b0] mb-12">
          欢迎通过以下方式联系我，期待与您交流合作
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          {/* 邮箱 */}
          <a
            href="mailto:your-email@example.com"
            className="flex items-center gap-3 px-6 py-3 bg-[#1a1a2e] rounded-lg border border-white/10 hover:border-[#3b82f6] transition-colors"
          >
            <span>📧</span>
            <span className="text-sm">your-email@example.com</span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 bg-[#1a1a2e] rounded-lg border border-white/10 hover:border-[#3b82f6] transition-colors"
          >
            <span>🐙</span>
            <span className="text-sm">GitHub</span>
          </a>

          {/* 微信/其他社交 */}
          <a
            href="#"
            className="flex items-center gap-3 px-6 py-3 bg-[#1a1a2e] rounded-lg border border-white/10 hover:border-[#3b82f6] transition-colors"
          >
            <span>💬</span>
            <span className="text-sm">微信联系</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
