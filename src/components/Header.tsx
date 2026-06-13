/**
 * Header 组件 - 顶部导航栏
 * 包含网站 Logo 和导航链接，响应式适配
 */
function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/10">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="text-xl font-bold text-white hover:text-[#3b82f6] transition-colors">
          Portfolio
        </a>

        {/* 导航链接 */}
        <ul className="hidden md:flex items-center gap-8">
          {['首页', '关于', '项目', '联系'].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className="text-sm text-[#a0a0b0] hover:text-white transition-colors"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
