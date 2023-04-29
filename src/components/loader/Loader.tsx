import { Spin } from 'antd'

export default function Loader() {
  return (
    <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Spin tip="Loading" size="large"/>
    </div>
  )
}
