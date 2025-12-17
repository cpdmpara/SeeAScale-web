import { createBrowserRouter } from 'react-router-dom';
import Home from '@pages/Home';
import { LogIn } from '@components/Modal';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/login',
        element: <LogIn />
      }
    ]
  }
]);

export default router;
