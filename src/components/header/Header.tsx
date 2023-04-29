import { Layout } from 'antd'


const { Header } = Layout;
export default function HeaderComponent() {
  return (
    <Header style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%' }}>
    <div
      style={{
        float: 'left',
        width: 120,
        height: 31,
        margin: '16px 24px 16px 0',
        background: 'rgba(255, 255, 255, 0.2)',
      }}
    />
  </Header>
  )
}
