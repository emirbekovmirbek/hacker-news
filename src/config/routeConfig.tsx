import { RouteProps } from 'react-router-dom'
import MainPage from 'src/pages/main-page/MainPage'
import NewsPage from 'src/pages/news-page/NewsPage'
import NotFoundPage from 'src/pages/not-found-page/NotFoundPage'


enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'news',
  NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/news/:id',
  [AppRoutes.NOT_FOUND]: '*',

};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.news,
    element: <NewsPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },

};
