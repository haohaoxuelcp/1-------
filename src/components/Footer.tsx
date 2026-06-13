/**
 * Footer 组件 - 底部版权信息
 */
function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm text-[#a0a0b0]">
          © {new Date().getFullYear()} 机器视觉工程师. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
