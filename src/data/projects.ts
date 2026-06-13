/**
 * projects.ts - 项目数据
 * 存储所有机器视觉作品集项目数据
 * 新增项目仅需在此文件添加数组对象即可，无需修改页面组件代码
 */

export interface Project {
  name: string
  description: string
  value: string          // 项目核心价值/成果
  techStack: string[]
  image?: string         // 项目截图路径（预留）
  link?: string          // 项目链接（预留）
  icon: string           // 项目图标 emoji
  gradient: string       // 卡片渐变色
}

export const projects: Project[] = [
  {
    name: '工业零件缺陷检测系统',
    description: '基于深度学习的工业零件表面缺陷自动检测系统，支持划痕、气泡、裂纹等多种缺陷类型识别，检测精度达99.2%。',
    value: '检测精度 99.2%，替代人工质检效率提升 300%',
    techStack: ['Python', 'OpenCV', 'YOLO', 'PyTorch'],
    icon: '🔍',
    gradient: 'from-[#3b82f6] to-[#06b6d4]',
  },
  {
    name: '精密尺寸测量平台',
    description: '高精度工业零件尺寸在线测量系统，基于亚像素边缘提取算法，实现微米级测量精度，满足生产线实时检测需求。',
    value: '测量精度 ±2μm，支持产线 24h 在线运行',
    techStack: ['Halcon', 'C++', '相机标定', '亚像素算法'],
    icon: '📐',
    gradient: 'from-[#8b5cf6] to-[#ec4899]',
  },
  {
    name: 'PCB板质量检测方案',
    description: '印刷电路板外观质量自动检测方案，覆盖焊接缺陷、元器件缺失、线路断路等多种检测场景，已成功交付多个产线项目。',
    value: '漏检率 < 0.1%，已交付 3 条产线稳定运行',
    techStack: ['VisionPro', 'Python', '图像分割', '模板匹配'],
    icon: '💻',
    gradient: 'from-[#f59e0b] to-[#ef4444]',
  },
  {
    name: '表面纹理缺陷分类器',
    description: '针对金属、玻璃等材质表面纹理异常的智能分类系统，利用卷积神经网络实现多类别缺陷自动分类与统计。',
    value: '分类准确率 98.5%，支持 6 种缺陷类别',
    techStack: ['Python', 'TensorFlow', 'CNN', 'OpenCV'],
    icon: '🧬',
    gradient: 'from-[#10b981] to-[#3b82f6]',
  },
]
