import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#0a0a0a] text-white">
        {/* 顶部导航栏 */}
        <Header />

        {/* 主要内容区域 */}
        <main>
          {/* 首页首屏 */}
          <Hero />

          {/* 关于我 */}
          <About />

          {/* 项目展示 */}
          <Projects />

          {/* 联系方式 */}
          <Contact />
        </main>

        {/* 底部版权 */}
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
