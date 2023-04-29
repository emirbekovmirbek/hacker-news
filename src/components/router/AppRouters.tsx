import { Routes, Route} from 'react-router-dom'
import { routeConfig } from 'src/config/routeConfig'


export default function AppRouters() {
  return (
    <Routes>
    {Object.values(routeConfig)
      .map(({ path, element }) => (
        <Route
          key={path}
          path={path}
          element={<div className="page-wrapper">{element}</div>}
        />
      ))}
  </Routes>
  )
}
