import React from 'react'
import { Space } from 'antd'


interface TypeProps {
  icon: React.FC
  text: string | number
}
export default function IconText({ icon, text }: TypeProps) {
  return (
    <Space>
   {React.createElement(icon)}
    {text}
  </Space>
  )
}
