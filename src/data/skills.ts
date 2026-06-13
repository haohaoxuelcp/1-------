/**
 * skills.ts - 个人技能数据
 * 存储个人所有技术技能、职业能力标签
 */

export interface Skill {
  name: string
  category: 'tool' | 'language' | 'domain'
}

export const skills: Skill[] = [
  { name: 'OpenCV', category: 'tool' },
  { name: 'Halcon', category: 'tool' },
  { name: 'VisionPro', category: 'tool' },
  { name: 'Python', category: 'language' },
  { name: 'C++', category: 'language' },
  { name: '工业视觉缺陷检测', category: 'domain' },
  { name: '尺寸测量算法', category: 'domain' },
  { name: '图像预处理', category: 'domain' },
  { name: '相机标定', category: 'domain' },
  { name: '光源选型', category: 'domain' },
]
